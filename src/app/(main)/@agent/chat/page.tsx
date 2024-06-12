'use client'
import { TextBox } from '@/components/chat'
import { useAuthenticator } from '@aws-amplify/ui-react'
import { fetchUserAttributes } from 'aws-amplify/auth'
import React, { useEffect, useState } from 'react'

function Chat() {
  const { user } = useAuthenticator((context) => [context.user])
  const [agentID, setAgentID] = useState<any>('')
  useEffect(() => {
    const getUserAttributes = async () => {
      try {
        const attributes = await fetchUserAttributes()
        setAgentID(attributes['custom:profileId'])
      } catch (error) {
        console.log('Error fetching user attributes: ', error)
      }
    }

    getUserAttributes()
  }, [])

  return (
    <div className="flex w-full bg-SCJ-gray overflow-hidden p-6">
      <div className="border rounded-xl border-gray-300 flex-1 flex flex-col bg-white">
        {agentID && <TextBox agentID={agentID} isAgent={true} />}
      </div>
    </div>
  )
}

export default Chat
