'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ call_id: string; sender: string; message: string }[]>([])
  const [input, setInput] = useState('')
  const ws = useRef<WebSocket | null>(null)

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  // UseEffect to create websocket connection
  useEffect(() => {
    if (!isOpen) return
    if (messages.length === 0) {
      ws.current = new WebSocket('ws://localhost:3030?agentID=test&secondaryID=copilot')
      ws.current.onopen = () => {
        console.log('Connected to server')
      }
      ws.current.onmessage = (event) => {
        const message = JSON.parse(event.data)
        setMessages((prev) => [...prev, message])
      }
    }
    return () => {
      ws.current?.close()
    }
  }, [isOpen])

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { call_id: 'test-copilot', sender: 'agent', message: input }])
      let message = {
        call_id: 'test-test',
        sender: 'agent',
        message: input,
      }
      ws.current?.send(JSON.stringify(message))
      setInput('')
      setTimeout(() => {
        setMessages((prev) => [...prev, { call_id: 'test-copilot', sender: 'bot', message: 'This is a bot response.' }])
      }, 1000)
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

  return (
    <div className="fixed bottom-4 right-4">
      {isOpen && (
        <div className="mt-2 w-80 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
          <div className="p-4 bg-gray-500 text-white flex justify-between items-center relative">
            <h4 className="text-lg">Copilot</h4>
            <button onClick={toggleChat} className="absolute top-2 right-2 text-white focus:outline-none">
              &times;
            </button>
          </div>
          <div className="flex flex-col p-4 space-y-2 h-64 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === 'agent' ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-2 rounded ${msg.sender === 'agent' ? 'bg-gray-500 text-white' : 'bg-gray-200'}`}>
                  {msg.message}
                </div>
              </div>
            ))}
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
