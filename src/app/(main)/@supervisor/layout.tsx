'use client'
import { NavBar } from '@/components/nav'
import React, { Suspense, useEffect } from 'react'
import { ChatBot } from '@/components/dash'
import { getQueues } from '@/api/queues'

const Layout = ({ children }: { children: React.ReactNode }) => {
  // fetch queues on load to make faster
  useEffect(() => {
    getQueues()
      .then((res) => {
        localStorage.setItem('queues', JSON.stringify(res))
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])
  return (
    <div className="w-full h-full flex">
      <NavBar />
      <Suspense>{children}</Suspense>
      <ChatBot />
    </div>
  )
}

export default Layout
