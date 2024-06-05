'use client'

import React, { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import { fetchUserAttributes } from 'aws-amplify/auth'

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

  const [profileID, setProfileID] = useState<any>('')

  useEffect(() => {
    const getAttributes = async () => {
      const attributes = await fetchUserAttributes()
      setProfileID(attributes['custom:profileId'])
    }

    getAttributes()
  }, [])

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  useMemo(() => {
    if (!isOpen) return
    if (!profileID) return
    ws.current = new WebSocket(`ws://localhost:3030?agentID=${profileID}&secondaryID=copilot`)
    ws.current.onopen = () => {
      console.log('Connected to server')
    }
    ws.current.onmessage = (event) => {
      // console.log('Received message')
      const chunk = JSON.parse(event.data) as Message
      if (chunk.message_id) {
        setMessages((prev) => [...prev, chunk])
      } else {
        handleCopilotMessage(chunk)
      }
    }
    return () => {
      ws.current?.close()
    }
  }, [isOpen, profileID])

  const handleCopilotMessage = (chunk: Message) => {
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
      setMessages([...messages, message])
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
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className="fixed bottom-4 right-4">
      {isOpen && (
        <div className="mt-2 w-96 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
          <div className="p-4 bg-gray-500 text-white flex justify-between items-center relative">
            <h4 className="text-lg">Copilot</h4>
            <button onClick={toggleChat} className="absolute top-2 right-2 text-white focus:outline-none">
              &times;
            </button>
          </div>
          <div className="flex flex-col p-4 space-y-2 h-64 overflow-y-auto">
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
                  <div className={`p-2 rounded ${msg.sender === 'agent' ? 'bg-gray-500 text-white' : 'bg-gray-200'}`}>
                    {msg.output ? msg.output : msg.message}
                  </div>
                  <span className="self-end mt-1 text-xs text-gray-500">{parseTimestamp(msg.timestamp)}</span>
                </div>
              ))}
            {copilotMessage.length > 0 && (
              <div className="flex flex-col max-w-52 justify-between self-start">
                <div className="p-2 rounded bg-gray-200 text-black">{copilotMessage}</div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-4 bg-gray-100 flex">
            <input
              type="text"
              value={input}
              onChange={handleInput}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-grow p-2 border rounded-l-full focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button
              onClick={sendMessage}
              className="ml-3 flex justify-center items-center text-white bg-gray-300 rounded-full p-2 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              <Image src="/icons/Send.svg" alt="Send" width={24} height={24} />
            </button>
          </div>
        </div>
      )}
      {!isOpen && (
        <button onClick={toggleChat} className="bg-gray-500 text-white p-3 rounded-full focus:outline-none">
          Chat
        </button>
      )}
    </div>
  )
}

export default ChatBot
