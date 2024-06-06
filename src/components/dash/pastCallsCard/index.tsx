import Image from 'next/image'
import { getPastCalls } from '@/api/calls'
import { useEffect, useState } from 'react'
import { formatDateFromString } from '@/utils/'

interface Props {
  maximize: () => void
  minimize: () => void
  isMaximized: boolean
}

type PastCall = {
  id: string
  createdAt: string
  updatedAt: string
  agent: {
    username: string
  }
  result: string
}

export default function PastCallsCard({ maximize, minimize, isMaximized }: Props) {
  const [pastCalls, setPastCalls] = useState([] as PastCall[])
  const res = getPastCalls()

  useEffect(() => {
    if (pastCalls.length > 0) return
    res.then((data) => {
      setPastCalls(data)
    })
  }, [])

  function getResultStatus(result: string) {
    switch (result) {
      case 'Satisfied':
        return 'bg-green-400/40 text-green-600 border border-green-600 border-2 font-light'
      case 'Unsatisfied':
        return 'bg-red-400/40 text-red-600 border border-red-600 border-2 font-light'
      case 'Neutral':
        return 'bg-yellow-400/40 text-yellow-600 border border-yellow-600 border-2 font-light'
      case 'Unknown':
        return 'bg-gray-400/40 text-gray-600 border border-gray-600 border-2 font-light'
    }
  }

  return (
    <div className="w-full h-full bg-white rounded-xl flex flex-col p-4">
      <div className="flex justify-between mb-4">
        <h1 className={`text-gray-400 ${isMaximized ? 'text-2xl' : 'text-xl'}`}>Past Calls</h1>
        {isMaximized ? (
          <button onClick={minimize}>
            <Image src="/icons/close.svg" alt="home" width={32} height={32} />
          </button>
        ) : (
          <button onClick={maximize}>
            <Image src="/icons/expand.svg" alt="home" width={16} height={16} />
          </button>
        )}
      </div>
      <div className="flex flex-row justify-between space-x-8 items-center text-center text-gray-400 ">
        <h1 className="flex-1">Agent</h1>
        <h1 className="flex-1">Started</h1>
        <h1 className="flex-1">Ended</h1>
        {/* <h1 className="flex-1">Id</h1> */}
        {/* <h1 className="flex-1">Time</h1> */}
        <h1 className="flex-1">Result</h1>
      </div>
      <div className="h-full overflow-y-auto">
        {pastCalls &&
          pastCalls.map((call, index) => (
            <div
              className={`flex flex-row justify-between space-x-8 items-center text-center border-b-2 border-gray-200   ${
                isMaximized ? 'h-[12.5%]' : 'h-1/4'
              }`}
              key={index}
            >
              <h1 className="flex-1 text-SCJ-primary">@{call.agent.username}</h1>
              <h1 className="flex-1">
                {formatDateFromString(call.createdAt)
                  .split(',')
                  ?.map((a, i) => {
                    return <div className={i == 1 ? 'text-xs' : ''}>{a}</div>
                  })}
              </h1>
              <h1 className="flex-1">
                {formatDateFromString(call.updatedAt)
                  .split(',')
                  ?.map((a, i) => {
                    return <div className={i == 1 ? 'text-xs' : ''}>{a}</div>
                  })}
              </h1>
              {/* <h1 className="flex-1 truncate">{pastCall.id}</h1> */}
              {/* <h1 className="flex-1 font-semibold">{calculateDuration(call.createdAt, call.updatedAt)}</h1> */}
              <div
                className={`flex-1 rounded-full h-8 w-8 flex justify-center items-center  ${getResultStatus(
                  call.result
                )}`}
              >
                <span>{call.result}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
