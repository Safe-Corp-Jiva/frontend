'use client'
import React, { useEffect } from 'react'
import { CCPProvider, useCCP } from '@/providers/CCPProvider'
import Image from 'next/image'
import Wait from '../wait/page'
import ChatBot from '@/components/chat/chatBot'
import { HelpButton } from './HelpButton'
import RealTimeTranscript from '@/components/transcpt/realtime'


const ConnectCCP = () => {
  const {
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
  } = useCCP()

  const formatTimestampDifference = (start: number, end: number) => {
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

  console.log(callAccepted)

  return (
    <>
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
                  className="bg-red-500 hover:bg-red-400 rounded-full w-10 h-10 flex justify-center items-center mic-icon"
                  onClick={handleEndCall}
                >
                  <Image src="/icons/telephone.svg" alt="telephone" width={30} height={30} />
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