'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

interface Props {
  maximize: () => void
  minimize: () => void
  isMaximized: boolean
}

export default function PastCallsCard({ maximize, minimize, isMaximized }: Props) {
  const router = useRouter()
  
  const pastCalls = [
    {
      id: '001',
      time: '10 min',
      agent: 'A7',
      result: 'Satisfied',
    },
    {
      id: '002',
      time: '50 min',
      agent: 'A10',
      result: 'Unsatisfied',
    },
    {
      id: '003',
      time: '5 min',
      agent: 'A5',
      result: 'Neutral',
    },
    {
      id: '004',
      time: '1 min',
      agent: 'A2',
      result: 'Unknown',
    },
    {
      id: '005',
      time: '8 min',
      agent: 'A55',
      result: 'Unknown',
    },
    {
        id: '006',
        time: '15 min',
        agent: 'A8',
        result: 'Satisfied', 
    },
    {
        id: '007',
        time: '20 min',
        agent: 'A9',
        result: 'Unsatisfied', 
    },
    {
        id: '008',
        time: '25 min',
        agent: 'A6',
        result: 'Neutral', 
    },
    {
        id: '009',
        time: '30 min',
        agent: 'A3',
        result: 'Unknown', 
    },
    {
        id: '010',
        time: '35 min',
        agent: 'A4',
        result: 'Unknown', 
    },
    {
        id: '011',
        time: '40 min',
        agent: 'A17',
        result: 'Satisfied', 
    },
    {
        id: '012',
        time: '45 min',
        agent: 'A12',
        result: 'Unsatisfied', 
    },
    {
        id: '013',
        time: '50 min',
        agent: 'A31',
        result: 'Neutral', 
    },
    {
        id: '014',
        time: '55 min',
        agent: 'A40',
        result: 'Unknown', 
    },
    {
        id: '015',
        time: '60 min',
        agent: 'A25',
        result: 'Satisfied', 
    },
  ]

  function getResultColor(result: string) {
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
    <div className="w-full h-full bg-white rounded-xl flex flex-col p-4" >
      <div className = "flex justify-between mb-4">
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
      <div className="flex flex-row justify-between space-x-8 items-center text-center text-gray-400 "  >
        <h1 className="flex-1">Id</h1>
        <h1 className="flex-1">Time</h1>
        <h1 className="flex-1">Agent</h1>
        <h1 className="flex-1">Result</h1>
      </div>
      <div className="h-full overflow-y-auto">
        {pastCalls.map((pastCall, index) => (
          <div className={`flex flex-row justify-between space-x-8 items-center text-center border-b-2 border-gray-200   ${
            isMaximized ? 'h-[12.5%]' : 'h-1/4'
          }`} 
            key={index}  
            >
            <h1 className="flex-1">{pastCall.id}</h1>
            <h1 className="flex-1 font-semibold">{pastCall.time}</h1>
            <h1 className="flex-1">{pastCall.agent}</h1>
            <div
              className={`flex-1 rounded-full h-8 w-8 flex justify-center items-center  ${getResultColor(
                pastCall.result
              )}`}
            >
              <span>{pastCall.result}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
