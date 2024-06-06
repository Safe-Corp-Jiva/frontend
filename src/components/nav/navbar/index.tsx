'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { Notifications, NotificationModal } from '@/components/alerts/notifications'

import IconWithTool from '../iconwithtool'

const NavBar = () => {
  const [modalOpen, setModalOpen] = React.useState(false)

  const handleModal = () => {
    setModalOpen(!modalOpen)
  }

  return (
    <div className="flex flex-row">
      <div className="w-20 bg-white h-full flex flex-col rounded-r-xl z-20 justify-between py-5 drop-shadow-[1px_0px_5px_rgba(0,0,0,0.25)]">
        <div className="flex flex-col content-center gap-8">
          <div className="flex items-center justify-center">
            <Image src="/icons/logo.svg" alt="logo" width={56} height={56} />
          </div>
          <button className="flex items-center justify-center">
            <IconWithTool icon="Home" path="/dashboard" text="Dashboard" />
          </button>
          <button className="flex items-center justify-center">
            <Notifications isOpen={modalOpen} setModal={handleModal} />
          </button>
          <button className="flex items-center justify-center">
            <IconWithTool icon="Chat" path="/chat" text="Chat" />
          </button>
          <button className="flex items-center justify-center">
            <IconWithTool icon="Book" path="/documents" text="Documents" />
          </button>
          <button className="flex items-center justify-center">
            <IconWithTool icon="Users" path="/queues" text="Queue Agents" />
          </button>
        </div>
        <button className="flex items-center justify-center">
          <IconWithTool icon="UserRound" path="/profile" text="Profile" />
        </button>
      </div>
      <div className="flex items-center justify-center">
        {modalOpen && <NotificationModal isOpen={modalOpen} setModal={handleModal} />}
      </div>
    </div>
  )
}

export default NavBar
