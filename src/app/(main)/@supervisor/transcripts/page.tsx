import React from 'react'
import { BottomNav } from '@/components/docs'
import { SearchPlusTabs } from '@/components/transcpt'

function Transcripts() {
  return (
    <div className="w-full h-screen flex flex-col justify-evenly items-center py-4 space-y-2 px-24">
      <SearchPlusTabs />
      <BottomNav />
    </div>
  )
}

export default Transcripts