'use client'
import React, { useEffect } from 'react'
import { Users } from '@/components/chat'
import { TextBox } from '@/components/chat'
import { useAuthenticator } from '@aws-amplify/ui-react'

function Chat() {
  const { user } = useAuthenticator((context) => [context.user])
  console.log('user', user)

  return (
    <div
      className="flex w-full mx-4 bg-gray-100 rounded-2xl overflow-hidden pt-[1%] pr-[1%]"
      style={{ height: 'calc(100% - 2rem)' }}
    >
      <div className="border rounded-xl border-gray-300 flex-1 flex flex-col bg-white">
        <TextBox user={user} agent />
      </div>
    </div>
  )
}

export default Chat
