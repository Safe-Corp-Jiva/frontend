import dynamic from 'next/dynamic'

const ConnectCCP = dynamic(() => import('./ConnectCCP'), { ssr: false })

export default function Page() {
  return (
      <ConnectCCP />
  )
}
