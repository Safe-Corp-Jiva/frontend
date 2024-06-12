'use client'

import React from 'react'
import { CircleUserRound, PhoneOff, MicOff, TriangleAlert } from 'lucide-react'
import RealTimeTranscript from '@/components/transcpt/realtime'
import { ChatBot } from '@/components/dash'
import { useOngoingCalls } from '@/components/dash/onGoingCallsCard/hooks'

export default function Page({ params }: { params: { slug: string } }) {
  const OnGoingCalls = useOngoingCalls()
  const call = OnGoingCalls.find((call) => call.id === params.slug)
  return (
    <div className="w-full h-full flex p-5 justify-evenly">
      <div className="w-4/12 bg-white rounded-lg flex flex-col justify-evenly items-center">
        <div className="flex justify-center items-center">
          <CircleUserRound size={150} color="#434D75" strokeWidth={1} />
        </div>
        <div className="flex flex-col p-5 text-center">
          <p className="text-3xl font-bold text-gray-500">
            {call?.agent?.firstName} {call?.agent?.lastName}
          </p>
          <p className="text-2xl text-gray-400">{call?.callCallerId}</p>
        </div>
        {/* <div className="flex justify-between items-center w-64">
          <div className="size-16 bg-SCJ-primary rounded-full flex justify-center items-center hover:bg-SCJ-primary/80 cursor-pointer">
            <PhoneOff size={32} color="white" />
          </div>
          <div className="size-16 bg-SCJ-primary rounded-full flex justify-center items-center hover:bg-SCJ-primary/80 cursor-pointer">
            <MicOff size={32} color="white" />
          </div>
          <div className="size-16 bg-SCJ-primary rounded-full flex justify-center items-center hover:bg-SCJ-primary/80 cursor-pointer">
            <TriangleAlert size={32} color="white" />
          </div>
        </div> */}
      </div>
      <div className="w-6/12 bg-white rounded-lg h-full block">
        <div className="flex flex-col justify-start items-center h-full w-full">
          <div className="w-full p-6 text-2xl font-bold border-b-2">Live Transcript:</div>
          <div className="overflow-hidden overflow-y-scroll h-[80vh] w-full">
            <RealTimeTranscript callId={params.slug} />
          </div>
        </div>
      </div>
      <ChatBot />
    </div>
  )
}

//localhost:3000/call/140d00fd-4b68-48e6-b315-bd8f770230a7
