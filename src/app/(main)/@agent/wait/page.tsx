import React from 'react'
import Image from 'next/image'
import LoaderTailspin from '@/components/wait/spinner-loader'

function Wait() {
  return (
    <div className="flex h-full w-full bg-transparent">
      <div className="flex-grow flex flex-col items-center justify-center h-full">
        <div className="bg-white w-[90%] h-[90%] rounded-xl flex flex-col items-center justify-center">
          <Image src="icons/waiting.svg" alt="notifications" width={230} height={230} />
          <span style={{ fontSize: '20px', marginTop: '20px' }}>Relax and prepare</span>
          <div className='flex justify-center rounded-lg bg-SCJ-primary p-2 gap-2 items-center mt-2'>
            <LoaderTailspin />
            <div className='text-sm text-white font-semibold'>Waiting for call...</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wait
