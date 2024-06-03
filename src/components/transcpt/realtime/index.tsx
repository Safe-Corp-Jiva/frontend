'use client'

import { useEffect, useState } from 'react'
import { Chunk } from '@/API'
import { chunkSubFactory } from '@/utils/gql'
import { TranscriptRole } from '@/API'
import { KEYWORDS } from '@/constants'

interface RealTimeTranscriptProps {
  callId: string
}

export default function RealTimeTranscript({ callId }: RealTimeTranscriptProps) {
  const [chunks, setChunks] = useState<Chunk[]>([])

  // TODO: If this is ugly you can move stuff to `./hooks.tsx` I guess?
  const callback = (chunker: Chunk[]) => {
    setChunks((prev) =>
      [...prev, ...chunker].sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
    )
  }

  const fallback = (error: Error) => {
    console.error(error)
  }

  useEffect(() => {
    const { getter, sub } = chunkSubFactory(callId)

    const fetchChunks = async () => {
      const chunks = await getter()
      callback(chunks)
    }

    fetchChunks()

    const formatter = (data?: Chunk) => (data ? [data] : [])

    const subscriber = sub.subscribe({
      next: (value) => callback(formatter(value?.data?.onChunkByCallId)),
      error: (error) => fallback(error),
    })

    return () => {
      subscriber.unsubscribe()
    }
  }, [])

  const formatTime = (isoString: string) => {
    const date = new Date(isoString)
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <div className="w-full h-full p-6">
      {chunks.map((chunk) => {
        return (
          <div
            key={chunk.id}
            className={`text-black ${chunk.content?.role === TranscriptRole.CUSTOMER ? 'text-right' : ''}`}
          >
            {chunk.content && (
              <div
                className={`flex flex-col ${
                  chunk.content.role === TranscriptRole.CUSTOMER ? 'items-end' : 'items-start'
                }`}
              >
                <span
                  className={`font-bold text-xs ${
                    chunk.content.role === TranscriptRole.CUSTOMER
                      ? 'text-blue-400'
                      : chunk.content.role === TranscriptRole.AGENT
                      ? 'text-red-400'
                      : ''
                  }`}
                >
                  {chunk.content.role === TranscriptRole.CUSTOMER && `Caller ${formatTime(chunk.createdAt)}`}
                  {chunk.content.role === TranscriptRole.AGENT && `Agent ${formatTime(chunk.createdAt)}`}
                </span>
                <MessageBody text={chunk?.content?.text} />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

const MessageBody = ({ text }: { text: string | null | undefined }) => {
  const words = text?.split(' ')

  return (
    <p>
      {words?.map((word) => {
        if (KEYWORDS.has(word.toLowerCase())) {
          return (
            <span>
              <span className="bg-yellow-300 rounded-sm px-1">{word}</span>&nbsp;
            </span>
          )
        }
        return <span>{word}&nbsp;</span>
      })}
    </p>
  )
}
