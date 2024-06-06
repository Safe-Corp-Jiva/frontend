'use client'
import { useEffect } from 'react'

export default function LoaderFull() {
  useEffect(() => {
    async function getLoader() {
      const { grid } = await import('ldrs')
      grid.register()
    }
    getLoader()
  }, [])
  return <l-grid color="#434D75" size={200}></l-grid>
}
