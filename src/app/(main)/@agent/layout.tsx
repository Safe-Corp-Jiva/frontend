'use client'
import { NavBarAgent } from '@/components/nav'
import React, { Suspense } from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full flex">
      <NavBarAgent />
      <Suspense>{children}</Suspense>
    </div>
  )
}

export default layout
