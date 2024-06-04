'use client'
import React, { useEffect, useState } from 'react'
import { TextBox } from '@/components/chat'
import { generateClient } from 'aws-amplify/api'
import { listAgents } from '@/graphql/queries'
import Image from 'next/image'

function Chat() {
  const [agent, setAgent] = useState<any>(null)
  const [agents, setAgents] = useState<any>([])
  useEffect(() => {
    const getAgents = async () => {
      try {
        const client = generateClient()
        const res = await client.graphql({ query: listAgents })
        const users = res.data.listAgents.items
        setAgents(users)
      } catch (error) {
        console.log('Error fetching agents: ', error)
      }
    }
    getAgents()
  }, [])

  const handleClick = (e: any) => {
    e.preventDefault()
    const text = e.target.innerText
    const agent_to_chat = agents.find((user: any) => user.username === text)
    if (agent_to_chat) {
      setAgent(agent_to_chat)
    }
  }

  return (
    <div
      className="flex w-11/12 bg-gray-100 rounded-2xl overflow-hidden pt-[1%] pr-[1%]"
      style={{ height: 'calc(100% - 2rem)' }}
    >
      <div className="border rounded-xl border-gray-300 w-80 bg-white overflow-y-auto mr-[1%]">
        <div className="overflow-auto">
          {agents &&
            agents?.map((user: any, index: any) => (
              <div onClick={handleClick} key={index} className="flex items-center p-4 hover:bg-gray-200 cursor-pointer">
                <Image src="/icons/User.svg" alt="User" width={32} height={32} />
                <p className="ml-3">{user.username}</p>
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
