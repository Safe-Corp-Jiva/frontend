'use client'
import React from 'react'
import { fetchAuthSession } from 'aws-amplify/auth'
import { useRouter } from 'next/navigation'

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
  const router = useRouter()

  React.useEffect(() => {
    CheckUserRole(router).then((role) => {
      setRole(role)
    })
  }, [])

  return <div className="h-screen w-screen bg-SCJ-gray">{role === 'agent' ? agent : supervisor}</div>
}
