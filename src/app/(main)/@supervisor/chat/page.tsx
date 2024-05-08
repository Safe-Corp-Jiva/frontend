import React from 'react'
import { Users } from '@/components/chat'
import { TextBox } from '@/components/chat'

function Chat() {
  return (
    <div
      className="flex w-11/12 bg-gray-100 rounded-2xl overflow-hidden pt-[1%] pr-[1%]"
      style={{ height: 'calc(100% - 2rem)' }}
    >
      <div className="border rounded-xl border-gray-300 w-80 bg-white overflow-y-auto mr-[1%]">
        <Users />
      </div>
      <div className="border rounded-xl border-gray-300 flex-1 flex flex-col bg-white">
        <TextBox />
      </div>
    </div>
  )
}

export default Chat
