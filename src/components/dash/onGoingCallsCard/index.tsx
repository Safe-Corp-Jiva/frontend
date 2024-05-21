"use client";
import Image from 'next/image'
import { useOngoingCalls } from './hooks';
import { getResultHelp, getResultStatus } from './utils';

import { useRouter } from 'next/navigation';

interface Props {
  maximize: () => void
  minimize: () => void
  isMaximized: boolean
}

export default function OnGoingCallsCard({ maximize, minimize, isMaximized }: Props) {
  const OnGoingCalls = useOngoingCalls();
  const router = useRouter();

  const handleCallClick = (id: string) => () => {
    router.push(`/mockcall/${id}`);
  }

  return (
    <div className='w-full h-full bg-white rounded-xl flex flex-col p-4'>
      <div className = "flex justify-between mb-4">
        <h1 className={`text-gray-400 ${isMaximized ? 'text-2xl' : 'text-xl'}`}>Ongoing Calls</h1>
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
      <div className='flex flex-row justify-between space-x-8 items-center text-center font-style text-gray-400'>
        <h1 className='flex-1'>Agent</h1>
        <h1 className='flex-1'>Topic</h1>
        <h1 className='flex-1'>Status</h1>
        <h1 className='flex-1'>Help</h1>
      </div>
      <div className="h-full overflow-y-auto flex flex-col">
        {OnGoingCalls.map((call, index) => (

          <button onClick={handleCallClick(call.id)} className={`flex flex-row justify-between space-x-8 text-center items-center border-b-2 border-gray-200 ${call.help === 1 ? 'bg-red-200 rounded-3xl'  : ''} ${isMaximized ? 'h-[12.5%]' : 'h-1/4'}`} key={index}>
            <h1 className='flex-1'>{call?.agent?.username ?? "John Doe"}</h1>
            <h1 className='flex-1 font-semibold'>{call?.queue?.name ?? "Bookings"}</h1>
            <div className={`flex-1 rounded-full h-8 w-8 flex justify-center items-center ${getResultStatus(call.status)}`}>
              <span>{call.status}</span>
            </div>
            <div className={`flex-1 rounded-full h-8 w-8 flex justify-center items-center ${getResultHelp(call?.help ?? 0)}`}>
              <span>{call.help === 1 ? 'HELP' : 'No help'}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
