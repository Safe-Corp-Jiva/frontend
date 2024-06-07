'use client'
import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import Wait from '../wait/page'
import ChatBot from '@/components/chat/chatBot'
import 'amazon-connect-streams'
import { HelpButton } from './HelpButton'
import RealTimeTranscript from '@/components/transcpt/realtime'

const ConnectCCP = () => {
  const [agent, setAgent] = useState<connect.Agent | null>(null)
  const [currentState, setCurrentState] = useState<string>('')
  const [incomingCall, setIncomingCall] = useState<boolean>(false)
  const [callAccepted, setCallAccepted] = useState<boolean>(false)
  const [currentContact, setCurrentContact] = useState<connect.Contact | null>(null)
  const [isMuted, setIsMuted] = useState<boolean>(false)
  const [askedForHelp, setAskedForHelp] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [currentTimestamp, setCurrentTimestamp] = useState<number | null>(null)

  const currentConnection = useMemo(() => {
    return currentContact?.getAgentConnection()
  }, [currentContact])

  const startTimestamp = useMemo(() => {
    return Date.now()
  }, [currentContact])

  useEffect(() => {
    const initCCP = () => {
      const containerDiv = document?.getElementById('container-div') as HTMLDivElement
      // Inicializar el CCP de Amazon Connect
      connect.core.initCCP(containerDiv, {
        ccpUrl: 'https://adventure-architects-dev.my.connect.aws/ccp-v2/',
        loginPopup: false,
        softphone: {
          allowFramedSoftphone: true,
        },
      })

      // Suscribirse a eventos del agente
      connect.agent((agent) => {
        setAgent(agent)
        agent.onStateChange((agentStateChange) => {
          console.log('Agent state changed:', agentStateChange)
          setCurrentState(agentStateChange.newState)
        })
        setCurrentState(agent.getState().name)
      })

      // Suscribirse a eventos de contacto
      connect.contact((contact) => {
        console.log('New contact detected')
        contact.onIncoming(() => {
          console.log('Incoming call detected')
          setIncomingCall(true)
          setCurrentContact(contact)
        })
        contact.onConnecting(() => {
          console.log('Call is connecting')
          setIncomingCall(true)
          setCurrentContact(contact)
          const attributes = contact.getAttributes()
          const callerNumber = attributes['contactId']?.value || 'Unknown'
        })
        contact.onAccepted(() => {
          console.log('Call accepted')
          setIncomingCall(false)
          setCallAccepted(true)
          setCurrentContact(contact)
        })
        contact.onEnded(() => {
          console.log('Call ended')
          setIncomingCall(false)
          setCallAccepted(false)
          setCurrentContact(null)
          setAskedForHelp(false)
          setError(null)

          contact.clear({
            success: () => {
              console.log('Contact destroyed successfully')
            },
            failure: (error) => {
              console.error('Error destroying contact', error)
            },
          })
        })
      })
    }
    initCCP()
  }, [])

  // Get timestamp each second (to compute the call duration)
  useEffect(() => {
    if (startTimestamp) {
      const interval = setInterval(() => {
        setCurrentTimestamp(Date.now())
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [startTimestamp])

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedState = event.target.value as 'Available' | 'Offline'
    if (agent) {
      const states = {
        Available: {
          agentStateARN:
            'arn:aws:connect:us-east-1:767398119914:instance/589e43e8-dd86-4785-8571-af7c2853adb3/agent-state/8ddcef93-1096-42de-834b-2f93ff5f6eda',
          name: 'Available',
          type: 'routable',
        },
        Offline: {
          agentStateARN:
            'arn:aws:connect:us-east-1:767398119914:instance/589e43e8-dd86-4785-8571-af7c2853adb3/agent-state/d36245db-366a-44e6-a73c-1b7da8f75bce',
          name: 'Offline',
          type: 'offline',
        },
      }

      const state = states[selectedState]

      if (state) {
        agent.setState(state, {
          success: () => {
            console.log(`Agent state changed to ${state.name}`)
          },
          failure: (error) => {
            console.error('Error changing agent state', error)
          },
        })
      }
    }
  }

  const handleAnswerCall = () => {
    if (currentContact) {
      currentContact.accept({
        success: () => {
          console.log('Call answered successfully')
        },
        failure: (error) => {
          console.error('Error answering call', error)
        },
      })
    }
  }

  const handleEndCall = () => {
    if (currentContact) {
      const agentConnection = currentContact.getAgentConnection()
      if (agentConnection) {
        agentConnection.destroy({
          success: () => {
            console.log('Call ended successfully')
            setCallAccepted(false)
            setCurrentContact(null)
          },
          failure: (error: any) => {
            console.error('Error ending call', error)
          },
        })
      }
    }
  }

  const handleMute = () => {
    setIsMuted(true)
    if (agent) {
      agent.mute({
        success: () => {
          console.log('Agent muted successfully')
        },
        failure: (error) => {
          console.error('Error muting agent', error)
        },
      })
    }
  }

  const handleUnmute = () => {
    setIsMuted(false)
    if (agent) {
      agent.unmute({
        success: () => {
          console.log('Agent unmuted successfully')
        },
        failure: (error) => {
          console.error('Error unmuting agent', error)
        },
      })
    }
  }

  // Function to format the call duration in HH:MM:SS or MM:SS format
  const formatTimestampDifference = (start: number, end: number) => {
    // Function to transform single digit numbers into two digit strings
    const twoDigits = (num: number) => (num > 9 ? num : `0${num}`)
    const difference = end - start
    const seconds = Math.floor(difference / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const remainingSeconds = seconds % 60
    const remainingMinutes = minutes % 60
    if (hours > 0) return `${hours}:${twoDigits(remainingMinutes)}:${twoDigits(remainingSeconds)}`
    else return `${twoDigits(minutes)}:${twoDigits(remainingSeconds)}`
  }

  return (
    <>
      <div
        id="container-div"
        style={{
          display: 'none',
        }}
      ></div>
      {!incomingCall && !callAccepted && <Wait />}
      {incomingCall && !callAccepted && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white w-80 flex flex-col justify-center items-center rounded-xl p-6">
            <h1 className="text-2xl font-semibold text-center mb-4">Incoming call</h1>
            <button
              className="bg-green-500 text-white rounded-full w-20 h-20 flex justify-center items-center"
              onClick={handleAnswerCall}
            >
              <span className="sr-only">Answer call</span>
              <Image src="/icons/incomingCall.svg" alt="Answer call" width={32} height={32} />
            </button>
          </div>
        </div>
      )}
      {callAccepted && (
        <div className="flex items-center justify-center bg-SCJ-gray w-full h-full">
          <div className="bg-white flex flex-col justify-center rounded-xl w-1/3 h-5/6 mx-4">
            <div className="p-3 flex flex-col justify-evenly items-center flex-1">
              <div className="flex flex-col items-center justify-center">
                <Image src="/icons/User_d.svg" alt="user" width={110} height={110} />
                <h1 className="mt-4 font-bold text-xl">Contact</h1>
                {currentConnection?.contactId && (
                  <p className="mt-4 text-SCJ-primary/80 text-md"> {currentConnection.contactId?.slice(0, 8)}... </p>
                )}

                <h4 className="font-bold text-sm">
                  {startTimestamp && currentTimestamp
                    ? formatTimestampDifference(startTimestamp, currentTimestamp)
                    : '00:00'}
                </h4>
              </div>
              <div className="flex flex-row justify-center items-center p-1">
                {askedForHelp ? (
                  <p className="text-SCJ-primary">Supervisor notified</p>
                ) : error ? (
                  <p className="text-red-500">{error}</p>
                ) : null}
              </div>
              <div className="flex flex-row p-3 space-x-5">
                <button
                  className="bg-red-500 hover:bg-red-400 rounded-full w-10 h-10 flex justify-center items-center"
                  onClick={handleEndCall}
                >
                  <Image src="/icons/telephone.svg" alt="telephone" width={20} height={20} />
                </button>
                {!isMuted && (
                  <button
                    className="bg-blue-400 hover:bg-blue-300 rounded-full w-10 h-10 flex justify-center items-center mic-icon"
                    onClick={handleMute}
                  >
                    <Image src="/icons/microphone.svg" alt="microphone" width={20} height={20} />
                  </button>
                )}
                {isMuted && (
                  <button
                    className="bg-blue-400 hover:bg-blue-300 rounded-full w-10 h-10 flex justify-center items-center mic-icon muted"
                    onClick={handleUnmute}
                  >
                    <Image src="/icons/micMute.svg" alt="microphone" width={20} height={20} />
                  </button>
                )}
                {!askedForHelp && (
                  <HelpButton
                    callId={currentConnection?.contactId ?? null}
                    callback={() => {
                      setError(null)
                      setAskedForHelp(true)

                      setTimeout(() => {
                        setAskedForHelp(false)
                      }, 5000)
                    }}
                    fallback={() => {
                      setError('Please try again later')

                      setTimeout(() => {
                        setError(null)
                      }, 5000)
                    }}
                    disabled={askedForHelp}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="bg-white flex flex-col justify-center items-center rounded-xl font-sans w-2/3 h-5/6 mx-4">
            <h1 className="font-bold text-xl p-4">Live Transcript</h1>
            <div className="overflow-hidden overflow-y-scroll h-[75%] w-full m-4">
              {currentConnection?.contactId && <RealTimeTranscript callId={currentConnection.contactId} />}
            </div>
          </div>
        </div>
      )}
      <ChatBot />
    </>
  )
}

export default ConnectCCP
