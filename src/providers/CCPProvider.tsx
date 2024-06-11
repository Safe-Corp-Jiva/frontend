import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import 'amazon-connect-streams'

interface CCPContextType {
  agent: connect.Agent | null
  currentState: string
  incomingCall: boolean
  callAccepted: boolean
  currentContact: connect.Contact | null
  isMuted: boolean
  askedForHelp: boolean
  error: string | null
  currentTimestamp: number | null
  startTimestamp: number | null 
  currentConnection: any
  handleAnswerCall: () => void
  handleEndCall: () => void
  handleMute: () => void
  handleUnmute: () => void
  handleChangeState: (state: 'Available' | 'Offline') => void
  setError: (error: string | null) => void
  setAskedForHelp: (asked: boolean) => void
}

const CCPContext = createContext<CCPContextType | undefined>(undefined)

export const CCPProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [agent, setAgent] = useState<connect.Agent | null>(null)
  const [currentState, setCurrentState] = useState<string>('')
  const [incomingCall, setIncomingCall] = useState<boolean>(false)
  const [callAccepted, setCallAccepted] = useState<boolean>(false)
  const [currentContact, setCurrentContact] = useState<connect.Contact | null>(null)
  const [isMuted, setIsMuted] = useState<boolean>(false)
  const [askedForHelp, setAskedForHelp] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [currentTimestamp, setCurrentTimestamp] = useState<number | null>(null)
  const [ccpInitialized, setCcpInitialized] = useState<boolean>(false)

  console.log(callAccepted)

  const currentConnection = useMemo(() => {
    return currentContact?.getAgentConnection()
  }, [currentContact])

  const startTimestamp = useMemo(() => {
    return Date.now()
  }, [currentContact])

  useEffect(() => {
    if (!ccpInitialized) {
      const initCCP = () => {
        const containerDiv = document?.getElementById('container-div') as HTMLDivElement
        connect.core.initCCP(containerDiv, {
          ccpUrl: 'https://adventure-architects-dev.my.connect.aws/ccp-v2/',
          loginPopup: false,
          softphone: {
            allowFramedSoftphone: true,
          },
        })

        connect.agent((agent) => {
          setAgent(agent)
          agent.onStateChange((agentStateChange) => {
            console.log('Agent state changed:', agentStateChange)
            setCurrentState(agentStateChange.newState)
          })
          setCurrentState(agent.getState().name)
        })

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
          })
          contact.onConnected(() => {
              console.log('Call is connected')
              setIncomingCall(false)
              setCallAccepted(true)
              setCurrentContact(contact)
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
          })
        })
      }
      initCCP()
      setCcpInitialized(true)
    }
  }, [ccpInitialized])

  useEffect(() => {
    if (startTimestamp) {
      const interval = setInterval(() => {
        setCurrentTimestamp(Date.now())
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [startTimestamp])

  const handleChangeState = (selectedState: 'Available' | 'Offline') => {
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

  return (
    <CCPContext.Provider
      value={{
        agent,
        currentState,
        incomingCall,
        callAccepted,
        currentContact,
        isMuted,
        askedForHelp,
        error,
        currentTimestamp,
        startTimestamp, 
        currentConnection, 
        handleAnswerCall,
        handleEndCall,
        handleMute,
        handleUnmute,
        handleChangeState,
        setError,
        setAskedForHelp
      }}
    >
      <div
        id="container-div"
        style={{
          display: 'none',
        }}
      ></div>
      {children}
    </CCPContext.Provider>
  )
}

export const useCCP = () => {
  const context = useContext(CCPContext)
  if (!context) {
    throw new Error('useCCP must be used within a CCPProvider')
  }
  return context
}
