'use client'

import { useEffect, useState } from 'react'
import { ContactLensEvent } from '@/API'
import { contactLensEventSubFactory } from '@/utils/gql'

const Snackbar = ({ message, onClose }: { message: string; onClose: () => void }) => {
  return (
    <div className="fixed bottom-4 right-20 bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg">
      {message}
      <button className="ml-4" onClick={onClose}>
        Close
      </button>
    </div>
  )
}

export default function RealTimeContactLensEvent() {
  const [events, setEvents] = useState<ContactLensEvent[]>([])
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')

  const eventCallback = (event: ContactLensEvent) => {
    console.log('New ContactLensEvent received:', event)
    setEvents((prev) => [...prev, event])
  }

  const fallback = (error: Error) => {
    console.error('Subscription error:', error)
  }

  useEffect(() => {
    const { sub } = contactLensEventSubFactory()

    const formatter = (data?: ContactLensEvent) => (data ? [data] : [])

    const subscriber = sub.subscribe({
      next: (value: { data: { onContactLensEvent: ContactLensEvent } }) => {
        console.log('Subscription value received:', value)
        const event = formatter(value?.data?.onContactLensEvent)[0]
        if (event) {
          eventCallback(event)
        } else {
          console.error('Received undefined event:', value)
        }
      },
      error: (error: Error) => fallback(error),
    })

    return () => {
      subscriber.unsubscribe()
    }
  }, [])

  useEffect(() => {
    if (events.length > 0) {
      const latestEvent = events[events.length - 1]
      if (latestEvent) {
        setSnackbarMessage(`New Event: ${latestEvent.ruleName} - ${latestEvent.actionName}`)
        setSnackbarOpen(true)
      }
    }
  }, [events])

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false)
  }

  return (
    <div className="fixed bottom-0 z-20">
      {snackbarOpen && <Snackbar message={snackbarMessage} onClose={handleCloseSnackbar} />}
    </div>
  )
}
