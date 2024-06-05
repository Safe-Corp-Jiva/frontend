'use client'
import { NavBar } from '@/components/nav'
import { NavBarDoc } from '@/components/nav'
import { usePathname } from 'next/navigation'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  return (
    <div className="w-full h-full flex">
      <NavBar />
      {children}
    </div>
  )
}

export default layout
