'use client'
import { MetricsCard, OnGoingCallsCard, PastCallsCard, TrendingCard } from '@/components/dash'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import React, { useState } from 'react'

interface Props {
  onExpand: (cardName: string) => void
  isMaximized: boolean //
}

export default function DashboardMax({ isMaximized }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const slug = pathname?.split('/').pop()

  const handleExpand = (cardName: string): void => {
    router.push(`/dashboard/${cardName}`)
  }

  const handleMinimize = () => {
    router.push(`/dashboard`)
  }

  const renderCard = (cardName: string) => {
    switch (cardName) {
      case 'PastCallsCard':
        return <PastCallsCard maximize={() => handleExpand('PastCallsCard')} minimize={handleMinimize} isMaximized={true} />
      case 'OnGoingCallsCard':
        return <OnGoingCallsCard maximize={() => handleExpand('OnGoingCallsCard')} minimize={handleMinimize} isMaximized={true} />
      case 'TrendingCard':
        return <TrendingCard maximize={() => handleExpand('TrendingCard')} minimize={handleMinimize} isMaximized={true} />
      case 'MetricsCard':
        return <MetricsCard maximize={() => handleExpand('MetricsCard')} minimize={handleMinimize} isMaximized={true}  />
      default:
        return null
    }
  }
  return (
    <div className="h-full w-full grid grid-cols-2 gap-5 p-5">
      <div className="col-span-2 flex items-center justify-center">
        <div className="w-3/4 h-3/4">{slug && renderCard(slug)}</div>
        <div className="flex flex-col space-y-6 ml-5">
          <button
            className={`flex items-center justify-center p-2 rounded-xl aspect-square ${
              slug == 'OnGoingCallsCard' ? 'bg-SCJ-primary' : 'bg-white'
            }`}
            onClick={() => handleExpand('OnGoingCallsCard')}
          >
            <Image src="/icons/OngoingCall.svg" alt="ongoing calls" width={64} height={64} />
          </button>
          <button
            className={`flex items-center justify-center p-2 rounded-xl aspect-square ${
              slug == 'PastCallsCard' ? 'bg-SCJ-primary' : 'bg-white'
            }`}
            onClick={() => handleExpand('PastCallsCard')}
          >
            <Image src="/icons/PastCalls.svg" alt="ongoing calls" width={64} height={64} />
          </button>
          <button
            className={`flex items-center justify-center p-2 rounded-xl aspect-square ${
              slug == 'TrendingCard' ? 'bg-SCJ-primary' : 'bg-white'
            }`}
            onClick={() => handleExpand('TrendingCard')}
          >
            <Image src="/icons/Topics.svg" alt="trending topics" width={64} height={64} />
          </button>
          <button
            className={`flex items-center justify-center p-2 rounded-xl aspect-square ${
              slug == 'MetricsCard' ? 'bg-SCJ-primary' : 'bg-white'
            }`}
            onClick={() => handleExpand('MetricsCard')}
          >
            <Image src="/icons/PieChart.svg" alt="trending topics" width={64} height={64} />
          </button>
        </div>
      </div>
    </div>
  )
}
