'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

interface Props {
  onExpand: (section: string) => void
  isMaximized?: boolean;
}

export default function PastCallsCard({ onExpand, isMaximized }: Props) {
  const router = useRouter()
  

  const handleExpand = () => {
    onExpand('pastCallsCards')
    
  }
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
        <h1 className="text-gray-400 text-xl" style={{ fontSize: isMaximized ? '1.5rem' : '1rem' }}>Past Calls</h1>
        <button onClick={handleExpand}>
          <Image src = "/icons/expand.svg" alt="home" width={16} height={16}/>
        </button>
      </div>
      <div className="flex flex-row justify-between items-center font-style text-gray-400" style={{ fontSize: isMaximized ? '1.2rem' : '1rem' }} >
        <h1 className="flex-1">Id</h1>
        <h1 className="flex-1">Time</h1>
        <h1 className="flex-1">Agent</h1>
        <h1 className="flex-1">Result</h1>
      </div>
      {pastCalls.map((pastCall, index) => (
        <div className="flex flex-row justify-between items-center h-full" key={index} style={{ fontSize: isMaximized ? '1.2rem' : '1rem' }} >
          <h1 className="flex-1">{pastCall.id}</h1>
          <h1 className="flex-1 font-bold">{pastCall.time}</h1>
          <h1 className="flex-1">{pastCall.agent}</h1>
          <div
            className={`flex-1 rounded-full h-8 w-8 flex justify-center items-center ${getResultColor(
              pastCall.result
            )}`}
          >
            <span>{pastCall.result}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
