import dynamic from 'next/dynamic'

const ConnectCCP = dynamic(() => import('./ConnectCCP'), { ssr: false })

export default function Page() {
  return (
    <div>
      <h1>Amazon Connect Integration</h1>
      <ConnectCCP />
    </div>
  )
}
