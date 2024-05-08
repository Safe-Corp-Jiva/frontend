'use client'
import { NavBar } from '@/components/nav'
import { NavBarDoc } from '@/components/nav'
import { usePathname } from 'next/navigation'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  const navBarHandler = () => {
    if (pathname === '/documents') {
      return <NavBarDoc />
    } else {
      return <NavBar />
    }
  }
  return (
    <div className="w-full h-full flex">
      {navBarHandler()}
      {children}
    </div>
  )
}

export default layout
