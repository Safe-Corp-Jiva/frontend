'use client'
import React from 'react'
import Image from 'next/image'

import IconWithTool from '../iconwithtool'

const NavBar = () => {
  return (
    <div className="w-20 bg-white h-full flex flex-col rounded-r-xl justify-between py-5 drop-shadow-[1px_0px_5px_rgba(0,0,0,0.25)]">
      <div className="flex flex-col content-center gap-8">
        <div className="flex items-center justify-center">
          <Image src="/icons/logo.svg" alt="logo" width={56} height={56} />
        </div>
        <button className="flex items-center justify-center">
          <IconWithTool icon="Home" path="/dashboard" text="Dashboard" />
        </button>
        <button className="flex items-center justify-center">
          <IconWithTool icon="Bell" path="/" text="Notifications" />
        </button>
        <button className="flex items-center justify-center">
          <IconWithTool icon="Chat" path="/chat" text="Chat" />
        </button>
        <button className="flex items-center justify-center">
          <IconWithTool icon="Book" path="/documents" text="Documents" />
        </button>
        <button className="flex items-center justify-center">
          <IconWithTool icon="Users" path="/mockdndagents" text="Queue Agents" />
        </button>
      </div>
      <button className="flex items-center justify-center">
        <IconWithTool icon="UserRound" path="/profile" text="Profile" />
      </button>
    </div>
  )
}

export default NavBar
