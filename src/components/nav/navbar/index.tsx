'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { Notifications, NotificationModal } from '@/components/alerts/notifications'

import IconWithTool from '../iconwithtool'
import { notificationSubFactory } from '@/utils/gql'

const NavBar = () => {
  const [modalOpen, setModalOpen] = React.useState(false)
  const [hasNotifications, setHasNotifications] = React.useState(false)

  useEffect(() => {
    const { sub } = notificationSubFactory()
    const formatter = (data?: any) => (data ? [data] : [])

    const subscriber = sub.subscribe({
      next: (value: { data: { onNotification: any } }) => {
        const notification = formatter(value?.data?.onNotification)[0]
        if (notification?.notification_type === 'HUMAN') {
          if (notification) {
            notification.primaryID = notification.id
            notification.secondaryID = notification.primaryID
            notification.notification_type = notification.notification_type
          }
          setHasNotifications(true)
        }
      },
      error: (error: any) => console.log('Subscription error:', error),
    })
    return () => {
      subscriber.unsubscribe()
    }
  }, [])

  const handleNotifications = () => {
    setHasNotifications(!hasNotifications)
  }

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
            <IconWithTool
              hasNotifications={hasNotifications}
              handleNotifications={handleNotifications}
              icon="Chat"
              path="/chat"
              text="Chat"
            />
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
