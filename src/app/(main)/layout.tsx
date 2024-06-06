'use client'
import React, { Suspense, useState } from 'react'
import './keybindings.js'
import { fetchAuthSession } from 'aws-amplify/auth'
import { useRouter } from 'next/navigation'

import LoaderFull from '@/components/loading/loading-full'

const CheckUserRole = async (router: any) => {
  try {
    const groups = (await fetchAuthSession()).tokens?.accessToken?.payload?.['cognito:groups'] as Array<string>
    return groups.includes('Supervisor') ? 'supervisor' : 'agent'
  } catch (err) {
    console.log(err)
    router.push('/')
  }
  return null
}


export default function Layout({ agent, supervisor }: { agent: React.ReactNode; supervisor: React.ReactNode }) {
  const [role, setRole] = React.useState<string | null>(null)
  const [loading, setLoading] = React.useState<boolean>(true)
  const router = useRouter()

  React.useEffect(() => {
    CheckUserRole(router).then((role) => {
      setRole(role)
      setLoading(false)
    })
  }, [router])

  if (loading) {
    return (
      <div className="w-screen h-screen bg-SCJ-gray flex justify-center items-center flex-col">
        <LoaderFull />
        <div className="mt-10 text-4xl text-SCJ-dark-primary"> Loading... </div>
      </div>
    )
  }

  return (
      <div className="h-screen w-screen bg-SCJ-gray">{role === 'supervisor' ? supervisor : agent}</div>
  )
}
