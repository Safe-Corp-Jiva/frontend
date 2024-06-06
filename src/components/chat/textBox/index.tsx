'use client'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import { Message } from '@/components/chat/chatBot'

type Timestamp = {
  secs_since_epoch: number
  nanos_since_epoch: number
}

type TextBoxProps = {
  isAgent?: boolean
  agent?: any
  agentID?: any
}

const TextBox: React.FC<TextBoxProps> = ({ isAgent = false, agent = {}, agentID }) => {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const ws = useRef<WebSocket | null>(null)
  const [selectedAgent, setSelectedAgent] = useState<any>(agent)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const initializeWebSocket = async () => {
      const WEBSOCKET_ENDPOINT = process.env.NEXT_PUBLIC_WEBSOCKET_ENDPOINT
      if (!WEBSOCKET_ENDPOINT) {
        console.log('WEBSOCKET_ENDPOINT not found')
        return
      }
      if (isAgent) {
        ws.current = new WebSocket(`ws://${WEBSOCKET_ENDPOINT}?agentID=${agentID}&secondaryID=supervisor`)
      } else {
        ws.current = new WebSocket(`ws://${WEBSOCKET_ENDPOINT}?agentID=${selectedAgent.id}&secondaryID=supervisor`)
      }
      if (ws.current === null) {
        return
      }

      ws.current.onopen = () => {
        console.log('Connected to server')
      }

      ws.current.onmessage = (event) => {
        const message = JSON.parse(event.data)
        setMessages((prev) => [...prev, message])
      }
    }

    initializeWebSocket()
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
    return () => {
      ws.current?.close()
    }
  }, [])

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const parseTimestamp = (timestamp: Timestamp) => {
    const date = new Date(timestamp.secs_since_epoch * 1000)
    return date.toLocaleTimeString()
  }

  const sendMessage = () => {
    let message = {
      chat_id: `${selectedAgent.id}-supervisor`,
      sender: isAgent ? 'agent' : 'supervisor',
      message: input,
    }
    ws.current?.send(JSON.stringify(message))
    setInput('')
  }
  return (
    <div className="flex flex-col justify-between h-full">
      {isLoading ? (
        <>
          <ChatSkeleton isAgent={isAgent} />
        </>
      ) : (
        <>
          {/* Encabezado del Chat */}
          <div className="p-4 border border-12 rounded-l-xl bg-white flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold">{isAgent ? 'Supervisor' : agent.username}</h2>
            </div>
            {isAgent ? (
              <></>
            ) : (
              <>
                <Image src="/icons/User.svg" alt="User" width={32} height={32} />
              </>
            )}
          </div>
          {/* Mensajes */}
          <div className="flex flex-col flex-1 p-4 bg-gray-100 overflow-y-auto space-y-2 align-end h-[400px]">
            {isAgent
              ? messages
                  .sort(
                    (a, b) =>
                      a.timestamp.secs_since_epoch - b.timestamp.secs_since_epoch ||
                      a.timestamp.nanos_since_epoch - b.timestamp.nanos_since_epoch
                  )
                  .map((msg, index) => (
                    <div
                      key={index}
                      className={`flex flex-col max-w-50 max-h-24 ${msg.sender === 'agent' ? 'self-end' : 'self-start'}`}
                    >
                      <div
                        className={`p-2 rounded ${msg.sender === 'agent' ? 'bg-blue-200 text-black' : 'bg-gray-200'}`}
                      >
                        {msg.message}
                      </div>
                      <span className="self-end mt-1 text-xs text-gray-500">{parseTimestamp(msg.timestamp)}</span>
                    </div>
                  ))
              : messages
                  .sort(
                    (a, b) =>
                      a.timestamp.secs_since_epoch - b.timestamp.secs_since_epoch ||
                      a.timestamp.nanos_since_epoch - b.timestamp.nanos_since_epoch
                  )
                  .map((msg, index) => (
                    <div
                      key={index}
                      className={`flex flex-col max-w-50 max-h-24 ${msg.sender === 'agent' ? 'self-start' : 'self-end'}`}
                    >
                      <div
                        className={`p-2 rounded ${msg.sender !== 'agent' ? 'bg-blue-200 text-black' : 'bg-gray-200'}`}
                      >
                        {msg.message}
                      </div>
                      <span className="self-end mt-1 text-xs text-gray-500">{parseTimestamp(msg.timestamp)}</span>
                    </div>
                  ))}
          </div>
          {/* TextBox*/}
          <div className="mt-auto p-4 border-t border-gray-300 flex justify-between items-center">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                sendMessage()
              }}
              className="flex w-full"
            >
              <input
                type="text"
                name="message"
                placeholder="Type your message..."
                onChange={handleInput}
                value={input}
                className="flex-grow p-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="ml-3 flex justify-center items-center text-white bg-blue-200 rounded-full p-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <Image src="/icons/Send.svg" alt="Send" width={24} height={24} />
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  )
}
const ChatSkeleton = ({ isAgent }: { isAgent: any }) => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="p-4 border border-12 rounded-l-xl bg-white flex justify-between items-center">
        <div className="h-6 bg-gray-300 rounded w-1/4"></div>
        {!isAgent && <div className="w-8 h-8 bg-gray-300 rounded-full"></div>}
      </div>

      <div className="flex flex-col flex-1 p-4 bg-gray-100 overflow-y-auto space-y-2 align-end h-[400px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="flex flex-col max-w-50 max-h-24 self-end">
            <div className="p-2 bg-gray-300 rounded w-full h-full"></div>
            <div className="w-24 h-4 bg-gray-200 rounded self-end mt-1"></div>
          </div>
        ))}
      </div>

      <div className="mt-auto p-4 border-t border-gray-300 flex justify-between items-center">
        <div className="flex w-full">
          <div className="flex-grow p-2 border rounded-l-full bg-gray-200"></div>
          <div className="ml-3 flex justify-center items-center bg-gray-300 rounded-full p-2 w-12 h-12"></div>
        </div>
      </div>
    </div>
  )
}

export default TextBox
