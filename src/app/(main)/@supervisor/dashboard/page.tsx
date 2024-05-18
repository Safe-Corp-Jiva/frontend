import React from 'react'
import { MetricsCard, PastCallsCard, OnGoingCallsCard, TrendingCard } from '@/components/dash'
export default function Dashboard() {
  return (
    <div className="h-full w-full grid grid-cols-2 grid-rows-2 gap-5 p-5">
      <PastCallsCard />
      <OnGoingCallsCard />
      <TrendingCard />
      <MetricsCard />
    </div>
  )
}
