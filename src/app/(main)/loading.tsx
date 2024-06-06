'use client'
import React from 'react'
import dynamic from 'next/dynamic'

const LoaderFull = dynamic(() => import('@/components/loading/loading-full'))

const LoadingLayout = () => (
  <div className="w-screen h-screen bg-SCJ-gray flex justify-center items-center flex-col">
    <LoaderFull />
    <div className="mt-10 text-4xl"> Loading... </div>
  </div>
)

export default function Loading() {
  return <LoadingLayout />
}
