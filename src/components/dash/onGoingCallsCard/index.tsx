"use client";
import { useOngoingCalls } from './hooks';
import { getResultHelp, getResultStatus } from './utils';

import { useRouter } from 'next/navigation';

export default function OnGoingCallsCard() {
  const OnGoingCalls = useOngoingCalls();
  const router = useRouter();

  const handleCallClick = (id: string) => () => {
    router.push(`/mockcall/${id}`);
  }

  return (
    <div className='w-full h-full bg-white rounded-xl flex flex-col p-4 overflow-hidden overflow-y-scroll'>
      <h1 className='text-gray-500 font-bold mb-4 text-xl'>Ongoing Calls</h1>
      <div className='flex flex-row justify-between text-center font-style text-gray-400'>
        <h1 className='flex-1'>Agent</h1>
        <h1 className='flex-1'>Topic</h1>
        <h1 className='flex-1'>Status</h1>
        <h1 className='flex-1'>Help</h1>
      </div>
      {OnGoingCalls.map((call, index) => (
        <button onClick={handleCallClick(call.id)} className={`flex flex-row justify-between space-x-8 p-2 text-center items-center h-full border-b-2 border-gray-200 ${call.help === 1 ? 'bg-red-200 rounded-3xl'  : ''}`} key={index}>
          <h1 className='flex-1'>{call?.agent?.username ?? "John Doe"}</h1>
          <h1 className='flex-1 font-bold'>{call?.queue?.name ?? "Bookings"}</h1>
          <div className={`flex-1 rounded-full h-8 w-8 flex justify-center items-center ${getResultStatus(call.status)}`}>
            <span>{call.status}</span>
          </div>
          <div className={`flex-1 rounded-full h-8 w-8 flex justify-center items-center ${getResultHelp(call?.help ?? 0)}`}>
            <span>{call.help === 1 ? 'HELP' : 'No help'}</span>
          </div>
        </button>
      ))}
    </div>
  )
}
