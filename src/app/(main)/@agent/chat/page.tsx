'use client'
import React, { useEffect, useState } from 'react'
import { TextBox } from '@/components/chat'
import { useAuthenticator } from '@aws-amplify/ui-react'
import { fetchUserAttributes } from 'aws-amplify/auth'

function Chat() {
  const { user } = useAuthenticator((context) => [context.user])
  const [agentID, setAgentID] = useState<any>('')
  useEffect(() => {
    const getUserAttributes = async () => {
      try {
        const attributes = await fetchUserAttributes()
        console.log('User attributes: ', attributes)
        setAgentID(attributes['custom:profileId'])
      } catch (error) {
        console.log('Error fetching user attributes: ', error)
      }
    }

    getUserAttributes()
  }, [])

  console.log(agentID)

  return (
    <div
      className="flex w-full mx-4 bg-gray-100 rounded-2xl overflow-hidden pt-[1%] pr-[1%]"
      style={{ height: 'calc(100% - 2rem)' }}
    >
      <div className="border rounded-xl border-gray-300 flex-1 flex flex-col bg-white">
        {agentID && <TextBox agentID={agentID} isAgent={true} />}
      </div>
    </div>
  )
}

export default Chat
