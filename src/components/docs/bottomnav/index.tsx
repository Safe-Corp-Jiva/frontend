import React from 'react'
import Image from 'next/image'
import { BookIcon, TranscrtpIcon } from '@components/docs'

export default function BottomNav() {
  return (
    <div className="w-max bg-white rounded-xl flex justify-center p-3 gap-3">
      <div className="w-full h-max flex flex-col justify-center items-center text-center text-SCJ-primary stroke-SCJ-primary hover:bg-SCJ-gray p-1 rounded-lg cursor-pointer">
        <BookIcon className="w-8 h-8" />
        <div className="text-xl">Documents</div>
      </div>
      <div className="w-full h-max flex flex-col justify-center items-center text-center text-SCJ-primary stroke-SCJ-primary hover:bg-SCJ-gray p-1 rounded-lg cursor-pointer">
        <TranscrtpIcon className="w-8 h-8" />
        <div className="text-xl">Transcripts</div>
      </div>
    </div>
  )
}
