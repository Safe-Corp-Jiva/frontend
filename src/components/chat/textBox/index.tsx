'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const TextBox = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([])
  const [input, setInput] = useState('')
  const ws = useRef<WebSocket | null>(null)

  // Create websocket connection
  useEffect(() => {
    ws.current = new WebSocket('ws://localhost:3030?agentID=test&secondaryID=test')
    ws.current.onopen = () => {
      console.log('Connected to server')
    }
    ws.current.onmessage = (event) => {
      const message = JSON.parse(event.data)
      setMessages((prev) => [...prev, message])
    }
    return () => {
      ws.current?.close()
    }
  }, [])

  useEffect(() => {
    const message = { sender: 'supervisor', text: 'This is a supervisor message.' }
    setMessages([...messages, message])
  }, [])

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const sendMessage = () => {
    setMessages([...messages, { sender: 'user', text: input }])
    let message = {
      call_id: 'test-test',
      sender: 'agent',
      message: input,
    }
    ws.current?.send(JSON.stringify(message))
    setInput('')
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: 'supervisor', text: 'This is a supervisor message.' }])
    }, 1000)
  }
  return (
    <div className="flex flex-col justify-between h-full">
      {/* Encabezado del Chat */}
      <div className="p-4 border rounded-l-xl bg-white flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">Fer Cantú</h2>
          <p className="text-sm text-gray-500">Online</p>
        </div>
        <Image src="/icons/User.svg" alt="User" width={32} height={32} />
      </div>
      {/* Mensajes */}
      <div className="flex flex-col flex-1 p-4 bg-gray-100 overflow-y-auto align-end h-[400px]">
        {messages.map((msg, index) => (
          <div key={index} className={`flex max-h-24 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`p-2 rounded ${msg.sender === 'user' ? 'bg-blue-200 text-black' : 'bg-gray-200'}`}>
              {msg.text}
            </div>
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
            className="flex-grow p-2 border rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="ml-3 flex justify-center items-center text-white bg-blue-200 rounded-full p-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <Image src="/icons/Send.svg" alt="Send" width={24} height={24} />
          </button>
        </form>
      </div>
    </div>
  )
}

export default TextBox
