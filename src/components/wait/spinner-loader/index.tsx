'use client'
import { useEffect } from 'react'

export default function LoaderTailspin() {
  useEffect(() => {
    async function getLoader() {
      const { tailspin } = await import('ldrs')
      tailspin.register()
    }
    getLoader()
  }, [])
  return <l-tailspin color="white" size='24'></l-tailspin>
}