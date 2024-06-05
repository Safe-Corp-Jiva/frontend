'use client'
import React from 'react'
import Image from 'next/image'

import { MainPageFileOverride } from './Overrides'
import { LoginModal } from '@/components/login'


export default function Login() {
  const mainPage = MainPageFileOverride.useValue()

  return (
      <div className="h-screen flex items-center justify-center bg-SCJ-gray">
        <div className="bg-white border-2 border-teal-300 flex flex-row justify-center items-center w-3/4 h-3/4 rounded-xl font-sans">
          <div className="w-full h-[90%] border-r-teal-300 border-r-2 flex justify-center items-center flex-1">
            <Image src="/logoAA.png" alt="logo" width={300} height={300} />
          </div>
          <LoginModal />
        </div>
      </div>
  )
}
