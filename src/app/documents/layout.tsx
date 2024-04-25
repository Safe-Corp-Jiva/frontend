import { NavBarDoc } from '@/components/nav'
import React from 'react'

const CheckUserRole = () => {
  return 'admin'
}
export default function Layout({ user, admin }: { user: React.ReactNode; admin: React.ReactNode }) {
  const role = CheckUserRole()

  return (
    <div className='h-screen w-screen flex bg-SCJ-gray'>
      <NavBarDoc />
      {role === 'admin' ? admin : user}
    </div>
  )
}