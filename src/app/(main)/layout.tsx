import React from 'react'

const CheckUserRole = () => {
  return 'agent'
}
export default function Layout({ agent, supervisor }: { agent: React.ReactNode; supervisor: React.ReactNode }) {
  const role = CheckUserRole()

  return <div className="h-screen w-screen bg-SCJ-gray">{role === 'supervisor' ? supervisor : agent}</div>
}
