'use client'
import { MetricsCard, OnGoingCallsCard, PastCallsCard, TrendingCard } from '@/components/dash'
import { useRouter } from 'next/navigation'
import RealTimeTranscript from '@/components/alerts'

export default function Dashboard() {
  const router = useRouter()

  const handleExpand = (cardName: string) => {
    router.push(`/dashboard/${cardName}`)
  }

  const handleMinimize = () => {
    router.push(`/dashboard`)
  }

  return (
    <div className="h-full w-full grid grid-cols-2 grid-rows-2 gap-5 p-5">
      <PastCallsCard
        maximize={() => handleExpand('PastCallsCard')}
        minimize={() => handleMinimize()}
        isMaximized={false}
      />
      <OnGoingCallsCard
        maximize={() => handleExpand('OnGoingCallsCard')}
        minimize={() => handleMinimize()}
        isMaximized={false}
      />
      <TrendingCard
        maximize={() => handleExpand('TrendingCard')}
        minimize={() => handleMinimize()}
        isMaximized={false}
      />
      <MetricsCard maximize={() => handleExpand('MetricsCard')} minimize={() => handleMinimize()} isMaximized={false} />
      <RealTimeTranscript />
    </div>
  )
}
