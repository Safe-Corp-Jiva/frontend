'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { MainPageFileOverride } from './Overrides'

// // Temp
// import RealTimeTranscript from '@/components/transcpt/realtime'
// import { Amplify } from 'aws-amplify'
// import awsconfig from '../aws-exports'
// Amplify.configure(awsconfig)

export default function Login() {
  const mainPage = MainPageFileOverride.useValue()
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = () => {
    if (username === 'johndoe' && password === 'johndoe') {
      router.push('/dashboard')
    } else {
      setError('Invalid username or password')
      alert('Invalid username or password')
    }
  }

  return (
    <div className="h-screen flex items-center justify-center bg-SCJ-gray">
      {/* <RealTimeTranscript callId="140d00fd-4b68-48e6-b315-bd8f770230a7" /> */}

      <div className="bg-white border-2 border-teal-300 flex flex-row justify-center items-center w-3/4 h-3/4 rounded-xl font-sans">
        <div className="w-full h-[90%] border-r-teal-300 border-r-2 flex justify-center items-center flex-1">
          <Image src="/logoAA.png" alt="logo" width={300} height={300} />
        </div>
        <div className="w-full h-auto p-3 flex flex-col justify-center items-center flex-1">
          <p className="text-indigo-500 font-extrabold text-2xl mt-10">Welcome Back!</p>
          <p className="text-gray-500 p-3">Please login to your account</p>
          <form>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="block border border-gray-400 rounded-lg p-2 m-2"
              placeholder="Username"
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block border border-gray-400 rounded-lg p-2 m-2"
              placeholder="Password"
            />
          </form>
          <div className="flex flex-row p-3 space-x-4">
            <button className="text-black text-sm">Remember Me</button>
            <button className="text-teal-700 text-sm">Don't have an account</button>
          </div>
          <button
            onClick={handleLogin}
            className="bg-gradient-to-r from-blue-900 to-teal-400 px-3 py-2 h-250 w-60 rounded-md text-white"
          >
            Login
          </button>
          <button className="text-gray-500 text-sm p-2 mb-10"> Forgot password? </button>
        </div>
      </div>
    </div>
  )
}
