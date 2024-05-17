'use client'
import { MetricsCard, OnGoingCallsCard, PastCallsCard, TrendingCard } from '@/components/dash'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

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
      <PastCallsCard onExpand={() => handleExpand('PastCallsCard')} />
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
      <MetricsCard onExpand={() => handleExpand('MetricsCard')} isMaximized={false} />
    </div>
  )
}
