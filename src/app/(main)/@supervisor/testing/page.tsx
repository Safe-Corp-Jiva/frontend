'use client'
import { useEffect } from 'react'
import 'amazon-connect-streams'

export default function Page() {
  useEffect(() => {
    const container = document.getElementById('container')
    if (!container) {
      return
    }
    const instance = connect.core.initCCP(container, {
      ccpUrl: 'https://adventure-architects-dev.my.connect.aws/ccp-v2/',
      //   loginPopup: true,
      //   loginPopupAutoClose: true,
      //   region: 'us-east-1',
      //   softphone: {
      //     allowFramedSoftphone: true,
      //   },
    })
    console.log(instance)
  }, [])
  return (
    <main>
      <h1>Testing</h1>
      <p>Testing the Amazon Connect Streams API</p>
      <section id="container"></section>
    </main>
  )
}
