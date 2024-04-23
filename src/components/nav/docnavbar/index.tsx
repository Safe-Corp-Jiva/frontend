'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

const NavBarDoc = () => {
  const router = useRouter()

  const handleDash = () => {
    router.push('/dashboard')
  }
  const handleBack = () => {
    router.back()
  }

  const pathname = usePathname()
  const isActive = (path: string) => pathname === path

  return (
    <div className="w-20 bg-white h-full flex flex-col rounded-r-xl justify-between py-5 drop-shadow-[1px_0px_5px_rgba(0,0,0,0.25)]">
      <div className="flex flex-col content-center gap-8">
        <div className="flex items-center justify-center">
          <Image src="icons/logo.svg" alt="logo" width={56} height={56} />
        </div>
        <button onClick={handleDash} className="flex items-center justify-center">
          <Image src="icons/House.svg" alt="home" width={32} height={32} />
        </button>
        <div className={`flex-col content-center gap-8 ${isActive('/transcripts') ? 'hidden' : 'flex'}`}>
          <button className="flex items-center justify-center">
            <Image src="icons/BookDocNav.svg" alt="Documentation Icon 1" width={32} height={32} />
          </button>
          <button className="flex items-center justify-center">
            <Image src="icons/WarningNav.svg" alt="Documentation Icon 2" width={32} height={32} />
          </button>
          <button className="flex items-center justify-center">
            <Image src="icons/RoundTrip.svg" alt="user" width={32} height={32} />
          </button>
          <button className="flex items-center justify-center">
            <Image src="icons/FlightBook.svg" alt="user" width={32} height={32} />
          </button>
        </div>
      </div>
      <button onClick={handleBack} className="flex items-center justify-center">
        <Image src="/icons/ArrowBack.svg" alt="user" width={32} height={32} />
      </button>
    </div>
  )
}

export default NavBarDoc
