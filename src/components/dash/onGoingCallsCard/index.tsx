'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

interface Props {
  onExpand: (section: string) => void
}

export default function OnGoingCallsCard({ onExpand }: Props) {
  const router = useRouter()

  const handleExpand = () => {
    onExpand('onGoingCallsCards')
  }
  const OnGoingCalls = [
    {
      agent: "001",
      topic: "Booking",
      status: "Satisfied",
      help: 1
    },
    {
      agent: "002",
      topic: "Compliance",
      status: "Unsatisfied",
      help: 0
    },
    {
      agent: "003",
      topic: "Trip Org.",
      status: "Neutral",
      help: 0
    },
    {
      agent: "004",
      topic: "Booking",
      status: "Unknown",
      help: 0
    }
  ];

  function getResultStatus(result: string) {
    switch (result) {
      case 'Satisfied':
        return 'bg-green-400/70 text-green-600 border border-green-600 border-2 font-light';
      case 'Unsatisfied':
        return 'bg-red-400/70 text-red-600 border border-red-600 border-2 font-light';
      case 'Neutral':
        return 'bg-yellow-200 text-yellow-600 border border-yellow-500 border-2 font-light';
      case 'Unknown':
        return 'bg-gray-400/70 text-gray-600 border border-gray-600 border-2 font-light';
      default:
        return '';
    }
  }

  function getResultHelp(result: number) {
    switch (result) {
      case 1:
        return 'bg-red-500 text-white border border-red-500 border-2 font-bold';
      case 0:
        return 'bg-gray-600/70 text-gray-800 border border-gray-800 border-2 font-light';
      default:
        return '';
    }
  }


  return (
    <div className='w-full h-full bg-white rounded-xl flex flex-col p-4'>
      <div className = "flex justify-between mb-4">
        <h1 className="text-gray-400 text-xl">Ongoing Call</h1>
        <button onClick={handleExpand}>
          <Image src = "/icons/expand.svg" alt="home" width={16} height={16}/>
        </button>
      </div>
      <div className='flex flex-row justify-between text-center font-style text-gray-400'>
        <h1 className='flex-1'>Agent</h1>
        <h1 className='flex-1'>Topic</h1>
        <h1 className='flex-1'>Status</h1>
        <h1 className='flex-1'>Help</h1>
      </div>
      {OnGoingCalls.map((call, index) => (
        <div className={`flex flex-row justify-between space-x-8 p-2 text-center items-center h-full border-b-2 border-gray-200 ${call.help === 1 ? 'bg-red-200 rounded-3xl'  : ''}`} key={index}> 
          <h1 className='flex-1'>{call.agent}</h1>
          <h1 className='flex-1 font-bold'>{call.topic}</h1>
          <div className={`flex-1 rounded-full h-8 w-8 flex justify-center items-center ${getResultStatus(call.status)}`}>
            <span>{call.status}</span>
          </div>
          <div className={`flex-1 rounded-full h-8 w-8 flex justify-center items-center ${getResultHelp(call.help)}`}>
            <span>{call.help === 1 ? 'HELP' : 'No help'}</span>
          </div>
        </div>
      ))}
    </div>
  );
}