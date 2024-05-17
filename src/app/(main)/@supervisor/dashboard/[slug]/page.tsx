'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter, usePathname } from 'next/navigation';
import { MetricsCard, PastCallsCard, OnGoingCallsCard, TrendingCard } from '@/components/dash'

interface Props {
    onExpand: (cardName: string) => void;
    isMaximized: boolean; //
  }
  
export default function DashboardMax({ isMaximized }: Props) {
    const router = useRouter();
    const pathname = usePathname();
    const slug = pathname?.split('/').pop();
    const [selectedButton, setSelectedButton] = useState<string | null>(null);
    

    const handleExpand = (cardName: string): void => {
        router.push(`/dashboard/${cardName}`);
    };


    const renderCard = (cardName: string) => {
        switch (cardName) {
        case 'PastCallsCard':
            return <PastCallsCard onExpand={handleExpand} isMaximized={true} />;
        case 'OnGoingCallsCard':
            return <OnGoingCallsCard onExpand={handleExpand}/>;
        case 'TrendingCard':
            return <TrendingCard onExpand={handleExpand} />;
        case 'MetricsCard':
            return <MetricsCard onExpand={handleExpand} isMaximized={isMaximized}/>;
        default:
            return null;
        }
    };
  return (
    <div className="h-full w-full grid grid-cols-2 gap-5 p-5">
        <div className="col-span-2 flex items-center justify-center">
            <div className="w-3/4 h-3/4">
                {slug && renderCard(slug)}
            </div>
            <div className="flex flex-col space-y-6 ml-5">
                <button className="flex items-center justify-center p-2" onClick={() => handleExpand('OnGoingCallsCard')}>
                    <Image src="/icons/OngoingCall.svg" alt="oc" width={64} height={64} />
                </button>
                <button className="flex items-center justify-center p-2" onClick={() => handleExpand('PastCallsCard')}>
                    <Image src="/icons/PastCalls.svg" alt="pc" width={64} height={64} />
                </button>
                <button className="flex items-center justify-center p-2" onClick={() => handleExpand('TrendingCard')}>
                    <Image src="/icons/Topics.svg" alt="tt" width={64} height={64} />
                </button>
                <button className="flex items-center justify-center p-2" onClick={() => handleExpand('MetricsCard')}>
                    <Image src="/icons/PieChart.svg" alt="m" width={64} height={64} />
                </button>
            </div>
        </div>
    </div>
  )
}