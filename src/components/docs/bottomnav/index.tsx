'use client'
import React from 'react'
import Link from 'next/link'
import { BookIcon, TranscrtpIcon } from '@components/docs'
import { usePathname } from 'next/navigation'

export default function BottomNav() {
  const pathname = usePathname()
  const isActive = (path: string) => pathname === path
  return (
    <div className="w-max bg-white rounded-xl flex justify-center p-3 gap-3">
      <Link href="/documents" passHref>
        <div
          className={`w-full h-max flex flex-col justify-center items-center text-center text-SCJ-primary stroke-SCJ-primary ${
            isActive('/documents') ? 'bg-SCJ-gray' : 'hover:bg-SCJ-gray'
          }  p-1 rounded-lg cursor-pointer`}
        >
          <BookIcon className="w-8 h-8" />
          <div className="text-xl">Documents</div>
        </div>
      </Link>
      <Link href="/transcripts" passHref>
        <div
          className={`w-full h-max flex flex-col justify-center items-center text-center text-SCJ-primary stroke-SCJ-primary ${
            isActive('/transcripts') ? 'bg-SCJ-gray' : 'hover:bg-SCJ-gray'
          } p-1 rounded-lg cursor-pointer`}
        >
          <TranscrtpIcon className="w-8 h-8" />
          <div className="text-xl">Transcripts</div>
        </div>
      </Link>
    </div>
  )
}
