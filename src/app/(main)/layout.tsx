'use client'
import React from 'react'
import './keybindings.js'
import { Amplify } from 'aws-amplify'
import awsconfig from '@/aws-exports'
Amplify.configure(awsconfig)

const CheckUserRole = () => {
  return 'supervisor'
}

export default function Layout({ agent, supervisor }: { agent: React.ReactNode; supervisor: React.ReactNode }) {
  const role = CheckUserRole()

  return <div className="h-screen w-screen bg-SCJ-gray">{role === 'supervisor' ? supervisor : agent}</div>
}
