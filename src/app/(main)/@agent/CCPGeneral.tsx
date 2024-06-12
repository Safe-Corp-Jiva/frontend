'use client'
import ChatBot from '@/components/chat/chatBot'
import RealTimeTranscript from '@/components/transcpt/realtime'
import { useCCP } from '@/providers/CCPProvider'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { HelpButton } from './dashboard/HelpButton'
import Wait from './wait/page'

const ConnectCCP = () => {
  const {
    incomingCall,
    callAccepted,
    currentContact,
    currentConnection,
    startTimestamp,
    currentTimestamp,
    isMuted,
    askedForHelp,
    error,
    handleAnswerCall,
    handleEndCall,
    handleMute,
    handleUnmute,
    setError,
    setAskedForHelp,
  } = useCCP()

  const formatTimestampDifference = (start: number, end: number) => {
    const twoDigits = (num: number) => (num > 9 ? num : `0${num}`)
    const diff = (end - start) / 1000
    const minutes = Math.floor(diff / 60)
    const seconds = Math.floor(diff % 60)
    return `${twoDigits(minutes)}:${twoDigits(seconds)}`
  }

  const pathname = usePathname()

  return incomingCall && !callAccepted ? (
    <div
      className={`absolute top-4 right-1/2 translate-x-1/2 flex flex-row gap-4 items-center justify-center bg-white rounded-full p-2 px-4 shadow-lg ${
        pathname == '/dashboard' && 'hidden'
      }`}
    >
      <p>Incoming call...</p>
      <button
        onClick={handleAnswerCall}
        className="bg-green-500 text-white rounded-full w-10 h-10 flex justify-center items-center"
      >
        <Image src="/icons/incomingCall.svg" alt="Answer call" width={20} height={20} />
      </button>
    </div>
  ) : (
    callAccepted && (
      <div className="sticky right-0 top-0 h-full flex items-center justify-center bg-SCJ-gray">
        <div
          className={`flex flex-col items-center justify-center bg-white rounded-full mr-4 p-2 py-4 gap-4 shadow-lg ${
            pathname == '/dashboard' && 'hidden'
          }`}
        >
          <p className="text-sm">
            {startTimestamp && currentTimestamp && formatTimestampDifference(startTimestamp, currentTimestamp)}
          </p>
          <div>
            <button
              className="bg-red-500 hover:bg-red-400 rounded-full w-10 h-10 flex justify-center items-center"
              onClick={handleEndCall}
            >
              <Image src="/icons/telephone.svg" alt="telephone" width={20} height={20} />
            </button>
          </div>
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
          {error && <p>Error: {error}</p>}
        </div>
      </div>
    )
  )
}

export default ConnectCCP
