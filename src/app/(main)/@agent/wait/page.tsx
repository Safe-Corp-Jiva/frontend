import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Image from 'next/image'

function wait() {
  return (
    <div className="flex h-full w-full bg-transparent">
      <div className="flex-grow flex flex-col items-center justify-center h-full">
        <div className="bg-white w-[80%] h-[80%] rounded-xl flex flex-col items-center justify-center">
          <Image src="icons/waiting.svg" alt="notifications" width={230} height={230} />
          <span style={{ fontSize: '20px', marginTop: '20px' }}>Relax and prepare</span>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Button variant="primary" disabled style={{ borderRadius: '20px', borderColor: "#818cf8",  backgroundColor: '#818cf8', color: 'white'}}>
              <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
              Waiting for call...
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default wait

