import { useEffect, useState } from 'react'
import { Call, CallStatus } from '@/API'
import { callSubFactory } from '@/utils/gql'

export function useOngoingCalls() {
  const [OnGoingCalls, setOnGoingCalls] = useState<any[]>([])

  const createCallback = (calls: any[]) => {
    setOnGoingCalls((prev) => [...prev, ...calls])
  }

  const updateCallback = (call?: any) => {
    if (!call) return

    if (call.status === CallStatus.FINALIZED) {
      setOnGoingCalls((prev) => prev.filter((prevCall) => prevCall.id !== call.id))
    } else {
      setOnGoingCalls((prev) => prev.map((prevCall) => (prevCall.id === call.id ? call : prevCall)))
    }
  }

  const deleteCallback = (call: any) => {
    setOnGoingCalls((prev) => prev.filter((prevCall) => prevCall.id !== call.id))
  }

  const fallback = (error: Error) => {
    console.error(error)
  }

  useEffect(() => {
    const { getter, createSub, updateSub, deleteSub } = callSubFactory()

    const fetchCalls = async () => {
      const calls = await getter()
      createCallback(calls)
    }

    fetchCalls()

    const formatter = (data?: any) => (data ? [data] : [])

    const createSubscriber = createSub.subscribe({
      next: (value) => {
        console.log(value?.data?.onCreateCall)
        createCallback(formatter(value?.data?.onCreateCall))
      },
      error: (error) => fallback(error),
    })

    const updateSubscriber = updateSub.subscribe({
      next: (value) => {
        console.log(value?.data?.onUpdateCall)
        updateCallback(value?.data?.onUpdateCall)
      },
      error: (error) => fallback(error),
    })

    const deleteSubscriber = deleteSub.subscribe({
      next: (value) => {
        console.log(value?.data?.onDeleteCall)
        deleteCallback(value?.data?.onDeleteCall)
      },
      error: (error) => fallback(error),
    })

    return () => {
      createSubscriber.unsubscribe()
      updateSubscriber.unsubscribe()
      deleteSubscriber.unsubscribe()
    }
  }, [])

  return OnGoingCalls
}
