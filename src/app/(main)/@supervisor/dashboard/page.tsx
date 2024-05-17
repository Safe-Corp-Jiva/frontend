'use client'
import React, {useEffect} from 'react'
import { useRouter } from 'next/navigation';
import { MetricsCard, PastCallsCard, OnGoingCallsCard, TrendingCard } from '@/components/dash'

export default function Dashboard() {
  const router = useRouter();
  
  const handleExpand = (cardName: string) => {
    router.push(`/dashboard/${cardName}`);
  };

  return (
    <div className="h-full w-full grid grid-cols-2 grid-rows-2 gap-5 p-5">
      <PastCallsCard onExpand={() => handleExpand('PastCallsCard')}/>
      <OnGoingCallsCard onExpand={() => handleExpand('OnGoingCallsCard')}/>
      <TrendingCard onExpand={() => handleExpand('TrendingCard')}/>
      <MetricsCard onExpand={() => handleExpand('MetricsCard')} isMaximized={false} />
    </div>
  )
}