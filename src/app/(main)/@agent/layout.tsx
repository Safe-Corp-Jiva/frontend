'use client'
import { NavBarAgent } from '@/components/nav'
import React, { Suspense } from 'react'
import { CCPProvider } from '@/providers/CCPProvider'
import dynamic from 'next/dynamic'

const ConnectCCP = dynamic(() => import('./CCPGeneral'), { ssr: false })

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full h-full">
      <CCPProvider>
        <div className="w-full h-full flex">
          <NavBarAgent />
          <Suspense>{children}</Suspense>
          <ConnectCCP />
        </div>
      </CCPProvider>
    </div>
  )
}

export default layout
