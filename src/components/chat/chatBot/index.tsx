'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import { fetchUserAttributes } from 'aws-amplify/auth'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import { notificationSubFactory } from '@/utils/gql'

// Define the Message type
type Timestamp = {
  secs_since_epoch: number
  nanos_since_epoch: number
}

export type Message = {
  message_id?: string
  chat_id?: string
  action?: string
  sender: string
  message?: string
  output?: string
  timestamp: Timestamp
}

type SendMessage = {
  sender: string
  message: string
  chat_id: string
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const ws = useRef<WebSocket | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [copilotMessage, setCopilotMessage] = useState<any>([])
  const [tempMessage, setTempMessage] = useState<Message | null>(null)
  const [hasNotifications, setHasNotifications] = useState(false)

  const [profileID, setProfileID] = useState<any>('')

  useEffect(() => {
    const getAttributes = async () => {
      const attributes = await fetchUserAttributes()
      setProfileID(attributes['custom:profileId'])
    }

    getAttributes()
  }, [])

  useEffect(() => {
    const { sub } = notificationSubFactory()
    const formatter = (data?: any) => (data ? [data] : [])

    const subscriber = sub.subscribe({
      next: (value: { data: { onNotification: any } }) => {
        const notification = formatter(value?.data?.onNotification)[0]
        if (notification?.notification_type === 'COPILOT') {
          if (notification) {
            setHasNotifications(true)
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

  const toggleChat = () => {
    setHasNotifications(false)
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (!isOpen) return
    if (!profileID) return
    const WEBSOCKET_ENDPOINT = process.env.NEXT_PUBLIC_WEBSOCKET_ENDPOINT
    ws.current = new WebSocket(`wss://${WEBSOCKET_ENDPOINT}?agentID=${profileID}&secondaryID=copilot`)
    ws.current.onopen = () => {
      console.log('Connected to server')
    }
    ws.current.onmessage = (event) => {
      const chunk = JSON.parse(event.data) as Message
      if (chunk.message_id) {
        setTempMessage(null)
        setMessages((prev) => {
          if (!prev.some((msg) => msg.message_id === chunk.message_id)) {
            return [...prev, chunk]
          }
          return prev
        })
      } else {
        handleCopilotMessage(chunk)
      }
    }
    return () => {
      ws.current?.close()
    }
  }, [isOpen, profileID])


  const handleCopilotMessage = (chunk: Message) => {
    if (chunk.output === 'Processing Results\n') return
    setCopilotMessage((prev: Message[]) => {
      return [...prev, chunk.output]
    })

    messagesEndRef?.current?.scrollIntoView({ behavior: 'smooth' })

    if (chunk.action === 'end') {
      setCopilotMessage([])
    }
  }

  const sendMessage = () => {
    if (input.trim()) {
      const newMessage: SendMessage = {
        chat_id: 'test-copilot',
        sender: 'agent',
        message: input,
      }

      const message: Message = {
        timestamp: {
          secs_since_epoch: Date.now() / 1000,
          nanos_since_epoch: 0,
        },
        ...newMessage,
      }
      setTempMessage(message)

      setCopilotMessage([])
      ws.current?.send(JSON.stringify(newMessage))
      setInput('')
    }
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      sendMessage()
    }
  }

  const parseTimestamp = (timestamp: Timestamp) => {
    const date = new Date(timestamp.secs_since_epoch * 1000)
    return date.toLocaleTimeString()
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'auto' })
  }, [messages, isOpen])

  return (
    <div className="fixed bottom-4 right-4">
      {isOpen && (
        <div className="w-96 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
          <div className="p-2 bg-SCJ-dark-primary items-center justify-between text-SCJ-gray flex ">
            <div className="flex m-2 flex-row items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="#000"
                version="1.1"
                viewBox="0 0 296 296"
                xmlSpace="preserve"
                className="fill-SCJ-gray mr-4"
              >
                <path d="M100.71 264L112.924 296 183.744 296 195.958 264z"></path>
                <path d="M201.992 248l21.22-56.265c-4.88-2.984-10.061-5.532-15.496-7.69-16.385 13.109-37.148 20.962-59.716 20.962-22.566 0-43.331-7.853-59.716-20.961-5.234 2.078-10.229 4.521-14.951 7.364L94.676 248h107.316zM270.213 296c0-45-12.8-75.827-33.654-94.698L200.845 296h69.368zM25.787 296h70.036l-35.881-95.141C38.794 219.701 25.787 250 25.787 296zM54 83.83c0-.275.018-.545.02-.819-.002-.275-.02-.544-.02-.82v1.639zM242 82.191c0 .275-.017.545-.019.819.002.275.019.544.019.819v-1.638z"></path>
                <path d="M73.067 136.612c11.163 30.57 40.499 52.395 74.933 52.395 33.727 0 62.544-20.948 74.203-50.535 10.938-13.183 18.019-30.194 19.491-48.976.168-2.141.268-4.302.287-6.485C241.58 37.091 207.705 0 164.954 0H132.8C90.051 0 54.441 37.091 54.02 83.011c.021 2.165.124 4.31.298 6.433 1.465 17.936 8.303 34.248 18.749 47.168zm137.6-23.489c0 15.926-12.99 28.837-28.919 28.837-12.887 0-23.945-8.391-27.452-20.111-3.01-10.058.268-21.694-6.171-21.977-6.44.282-3.182 11.919-6.192 21.977-3.507 11.721-14.971 20.111-27.858 20.111-15.929 0-29.408-12.911-29.408-28.837V82h126v31.123zm-62.668-55.236c-23.777-18.018-15.457-33.773-15.457-33.773l15.457 15.148 15.459-15.148c0-.001 8.32 15.755-15.459 33.773z"></path>
              </svg>
              <p className="justify-self-end m-0 text-lg">Archie</p>
            </div>
            <button onClick={toggleChat} className="mr-4 hover:bg-red-400 w-6 h-6 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col p-4 space-y-2 h-64 overflow-y-auto">
            {messages.length === 0 && <div className="text-center text-gray-500">Welcome to the Archie Copilot!</div>}
            {messages
              .sort(
                (a, b) =>
                  a.timestamp.secs_since_epoch - b.timestamp.secs_since_epoch ||
                  a.timestamp.nanos_since_epoch - b.timestamp.nanos_since_epoch
              )
              .map((msg, index) => (
                <div
                  key={index}
                  className={`flex flex-col max-w-52 justify-between ${
                    msg.sender === 'agent' ? 'self-end' : 'self-start'
                  }`}
                >
                  <div
                    className={`p-2 rounded ${
                      msg.sender === 'agent' ? 'bg-SCJ-dark-primary/90 text-white' : 'bg-gray-200'
                    }`}
                  >
                    {msg.output ? msg.output : msg.message}
                  </div>
                  <span className="self-end mt-1 text-xs text-gray-500">{parseTimestamp(msg.timestamp)}</span>
                </div>
              ))}
            {tempMessage && (
              <div
                className={`flex flex-col max-w-52 justify-between ${
                  tempMessage.sender === 'agent' ? 'self-end' : 'self-start'
                }`}
              >
                <div
                  className={`p-2 rounded ${
                    tempMessage.sender === 'agent' ? 'bg-SCJ-dark-primary text-white' : 'bg-gray-200'
                  }`}
                >
                  {tempMessage.message}
                </div>
                <span className="self-end mt-1 text-xs text-gray-500">{parseTimestamp(tempMessage.timestamp)}</span>
              </div>
            )}
            {copilotMessage.length > 0 && (
              <div className="flex flex-col max-w-52 justify-between self-start">
                <div className="p-2 rounded bg-gray-200 text-black">{copilotMessage}</div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="flex-row p-4 space-x-4 content-between bg-gray-100 flex">
            <input
              type="text"
              value={input}
              onChange={handleInput}
              onKeyUp={handleKeyPress}
              placeholder="Type your message..."
              className="flex-grow p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button
              onClick={sendMessage}
              className="flex w-12 h-12 justify-center items-center text-SCJ-dark-primary hover:text-SCJ-gray bg-SCJ-dark-primary/30 rounded-full p-2 hover:bg-SCJ-dark-primary focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              <PaperAirplaneIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="bg-SCJ-dark-primary hover:scale-105 hover:bg-SCJ-dark-primary/80 text-white p-3 rounded-full focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>
          {hasNotifications && <div className="absolute top-0 left-10 h-3 w-3 bg-red-500 rounded-full z-10"></div>}
        </button>
      )}
    </div>
  )
}

export default ChatBot
