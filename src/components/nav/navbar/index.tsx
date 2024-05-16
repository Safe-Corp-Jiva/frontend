'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Headset } from 'lucide-react'
import { UsersRound } from 'lucide-react'

const NavBar = () => {
  const router = useRouter()

  const handleProfile = () => {
    router.push('/profile')
  }
  const handleDash = () => {
    router.push('/dashboard')
  }
  const handleChat = () => {
    router.push('/chat')
  }
  const handleDocuments = () => {
    router.push('/documents')
  }
  const handleMockCall = () => {
    router.push('/mockcall')
  }
  const handleDndAgents= () => {
    router.push('/mockdndagents')
  }

  return (
    <div className="w-20 bg-white h-full flex flex-col rounded-r-xl justify-between py-5 drop-shadow-[1px_0px_5px_rgba(0,0,0,0.25)]">
      <div className="flex flex-col content-center gap-8">
        <div className="flex items-center justify-center">
          <Image src="icons/logo.svg" alt="logo" width={56} height={56} />
        </div>
        <button onClick={handleDash} className="flex items-center justify-center">
          <Image src="icons/House.svg" alt="home" width={32} height={32} />
        </button>
        <button className="flex items-center justify-center">
          <Image src="icons/Notif.svg" alt="notifications" width={32} height={32} />
        </button>
        <button onClick={handleChat} className="flex items-center justify-center">
          <Image src="icons/Chat.svg" alt="chat" width={32} height={32} />
        </button>
        <button onClick={handleProfile} className="flex items-center justify-center">
          <Image src="icons/User.svg" alt="user" width={32} height={32} />
        </button>
        <button onClick={handleMockCall} className="flex items-center justify-center">
          <Headset size={28} color="#434D75" />
        </button>
        <button onClick={handleDndAgents} className="flex items-center justify-center">
          <UsersRound size={28} color="#434D75" />
        </button>
      </div>
      <button onClick={handleDocuments} className="flex items-center justify-center">
        <Image src="icons/Manual.svg" alt="user" width={32} height={32} />
      </button>
    </div>
  )
}

export default NavBar
