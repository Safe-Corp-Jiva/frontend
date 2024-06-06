'use client'
import { NavBar } from '@/components/nav'
import { usePathname } from 'next/navigation'
import React, { Suspense } from 'react'
import { ChatBot } from '@/components/dash'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full flex">
      <NavBar />
      <Suspense>
        {children}
      </Suspense>
      <ChatBot />
    </div>
  )
}

export default Layout
