'use client'
import React, { useEffect, useState } from 'react'
import { TextBox } from '@/components/chat'
import { generateClient } from 'aws-amplify/api'
import { listAgents, listNotifications } from '@/graphql/queries'
import Image from 'next/image'
import { updateNotification } from '@/graphql/mutations'
import { notificationSubFactory } from '@/utils/gql'
import { fetchUserAttributes } from 'aws-amplify/auth'
import { NotificationType } from '@/API'

function Chat() {
  const [agent, setAgent] = useState<any>(null)
  const [agents, setAgents] = useState<any>([])
  const [selectedChatId, setSelectedChatId] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const client = generateClient()

      const agentsRes = await client.graphql({ query: listAgents })
      const user = await fetchUserAttributes()
      const agents = agentsRes.data.listAgents.items.filter((agent: any) => agent.id !== user['custom:profileId'])

      let notifications

      const notificationsRes = await client.graphql({
        query: listNotifications,
        variables: {
          filter: {
            notification_type: { eq: NotificationType.AGENT },
            read: { eq: false },
          },
        },
      })
      notifications = notificationsRes.data.listNotifications.items
      console.log('notifications', notifications)

      const processedAgents = agents.map((agent) => ({
        ...agent,
        unreadNotifications: notifications.filter(
          (notification: any) => notification.primaryID === agent.id.split('-')[0]
        ),
      }))

      setAgents(processedAgents)
    }

    const { sub } = notificationSubFactory()
    const formatter = (data?: any) => (data ? [data] : [])

    const subscriber = sub.subscribe({
      next: (value) => {
        const newNotification = formatter(value?.data?.onNotification)[0]
        if (newNotification && newNotification.notification_type === 'AGENT') {
          setAgents((prevAgents: any) =>
            prevAgents.map((agent: any) => {
              const agentId = agent.id.split('-')[0]
              if (agentId === newNotification.primaryID) {
                const isExisting = agent.unreadNotifications.find((n: any) => n.id === newNotification.id)
                const updatedNotifications = isExisting
                  ? agent.unreadNotifications.map((n: any) =>
                      n.id === newNotification.id ? { ...n, ...newNotification } : n
                    )
                  : [...agent.unreadNotifications, newNotification]
                return { ...agent, unreadNotifications: updatedNotifications }
              }
              return agent
            })
          )
        }
      },
      error: (error) => console.log('Subscription error:', error),
    })

    fetchData()
    return () => {
      subscriber.unsubscribe()
    }
  }, [])

  const handleClick = (e: any) => {
    e.preventDefault()
    const agentId = e.currentTarget.getAttribute('data-agent-id')
    const agentToChat = agents.find((agent: any) => agent.id === agentId)
    setSelectedChatId(agentId)

    if (agentToChat) {
      setAgent(agentToChat)

      agentToChat.unreadNotifications.forEach((notification: any) => {
        markNotificationAsRead(notification.id, agentId)
      })
    }
  }

  const markNotificationAsRead = async (notificationId: any, agentId: any) => {
    const client = generateClient()
    try {
      const res = await client.graphql({
        query: updateNotification,
        variables: {
          input: {
            id: notificationId,
            read: true,
          },
        },
      })
      if (res.data.updateNotification) {
        setAgents((prevAgents: any) =>
          prevAgents.map((agent: any) => {
            if (agent.id === agentId) {
              const filteredNotifications = agent.unreadNotifications.filter(
                (notification: any) => notification.id !== notificationId
              )
              return { ...agent, unreadNotifications: filteredNotifications }
            }
            return agent
          })
        )
      }
    } catch (error) {
      console.error('Failed to mark notification as read:', error)
    }
  }
  return (
    <div className="flex p-7 w-full -full bg-gray-100 overflow-hidden">
      <div className="border rounded-xl border-gray-300 w-80 bg-white overflow-y-auto mr-[1%]">
        <div className="overflow-auto">
          {agents &&
            agents.map((agent: any) => (
              <div
                key={agent.id}
                data-agent-id={agent.id}
                onClick={handleClick}
                className={`flex items-center p-4 hover:bg-gray-200 cursor-pointer ${agent.unreadNotifications.length > 0 ? 'bg-red-200' : ''} ${selectedChatId === agent.id ? 'bg-blue-200' : ''}`}
              >
                <Image src="/icons/User.svg" alt="User" width={32} height={32} />
                <p className="ml-3">{agent.username}</p>
                <p className="ml-3 text-xs">{agent.unreadNotifications.length > 0 ? 'Unread' : ''}</p>
              </div>
            ))}
        </div>
      </div>
      <div className="border rounded-xl border-gray-300 flex-1 flex flex-col bg-white">
        {agent?.id && <TextBox key={agent.id} agent={agent} />}
      </div>
    </div>
  )
}

export default Chat
