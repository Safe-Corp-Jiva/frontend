'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Props {
  maximize: () => void
  minimize: () => void
  isMaximized: boolean
}

export default function TrendingCard({ maximize, minimize, isMaximized }: Props) {
  const router = useRouter()

  const trendingTopics = [
    {
      topic: "Lost Flight",
      quantity: "1282858",
    },
    {
      topic: "Booking",
      quantity: "346768",
    },
    {
      topic: "Reservations",
      quantity: "97451",
    },
    {
      topic: "Compliance",
      quantity: "8723",
    },
    {
      topic: "Trip Organization",
      quantity: "549",
    },
    {
      topic: "Change Flight",
      quantity: "12",
    },
  ]
  trendingTopics.sort((a, b) => parseInt(b.quantity) - parseInt(a.quantity));

  return (
    <div className = "w-full h-full bg-white rounded-xl flex flex-col p-4">
      <div className = "flex justify-between mb-4">
        <h1 className="text-gray-400 text-xl md:text-2xl">Most Requested Topics</h1>
        {isMaximized ? (
          <button onClick={minimize}>
            <Image src="/icons/expand.svg" alt="home" width={16} height={16} />
          </button>
        ) : (
          <button onClick={maximize}>
            <Image src="/icons/expand.svg" alt="home" width={16} height={16} />
          </button>
        )}
      </div>
      <div className = "h-full overflow-y-auto">
        {trendingTopics.map((topic, index) => (
          <div className = "flex flex-row justify-between items-center h-1/5 border-b-2 border-gray-200 mx-4 px-4 gap-4" key={index}>
            <h1 className = "flex-none text-gray-400">{index + 1}.-</h1>
            <h1 className = "flex-1">{topic.topic}</h1>
            <h1 className = "text-right text-gray-400">{topic.quantity}</h1>
            <Image src = "/icons/barChart.svg" alt="home" width={24} height={24} />
          </div>
        ))}
      </div>
    </div>
  )
}
