'use client'
import { NavBar } from '@/components/nav'
import React, { Suspense } from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full flex">
      <NavBar />
      <Suspense>{children}</Suspense>
    </div>
  )
}

export default layout
