// Interfaz "See More"

'use client'
import React from 'react'
import FlagIcon from '../iconscomponents/flagicon'
import AudioPlayer from 'react-h5-audio-player'
import './audio.css'

import type { Transcript } from '@/api/transcripts'

export default function SlugPage({ id }: { id: string }) {
  const sentimentColorText = (sentiment: number) => {
    switch (sentiment) {
      case 1:
        return (
          <div className="bg-green-300 text-green-800 py-2 px-8 flex content-center rounded-2xl text-xs">Satisfied</div>
        )
      case 2:
        return (
          <div className="bg-yellow-300 text-yellow-800 py-2 px-9 flex content-center rounded-2xl text-xs">Neutral</div>
        )
      case 3:
        return (
          <div className="bg-red-400 text-red-800 py-2 px-6 flex content-center rounded-2xl text-xs">Unsatisfied</div>
        )
      default:
        return 'bg-gray-300 text-black'
    }
  }
  const flagColor = (flagged: boolean) => {
    return flagged ? 'text-red-400 stroke-red-200 ' : 'stroke-black/25 text-transparent'
  }

  const transcript = localStorage.getItem('transcripts')
    ? ((JSON.parse(localStorage.getItem('transcripts') || '{}') as Transcript[]).find(
        (item) => item.id === id
      ) as Transcript)
    : null

  return (
    <div className="w-full h-full bg-white rounded-xl flex flex-col p-5">
      <div className="w-full flex justify-start gap-20 border-b-2 border-black/20 pb-2">
        <div className="flex flex-col">
          <span className="text-2xl font-bold">{transcript?.agent}</span>
          <span className="text-black/50">{transcript?.date}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-2xl">Agent</span>
          <span className="text-black/50 text-sm">{transcript?.agent}</span>
        </div>
        {/* <div className="flex flex-col">
          <span className="text-2xl">Duration</span>
          <span className="text-black/50">{transcript.duration}</span>
        </div> */}
        {/* <div className="flex flex-col text-end">
          <span className="text-2xl font-bold">{transcript.id}</span> */}
        {/* {sentimentColorText(transcript.sentiment)} */}
        {/* </div> */}
      </div>
      {/* Render de los chunks */}
      <div className="rounded-b-xl size-full px-10 py-5 overflow-auto">
        {transcript ? (
          transcript.chunks?.map((chunk) => (
            <div key={chunk.Id} className="flex flex-col gap-1 m-4">
              <div className="flex justify-between items-center">
                {chunk.ParticipantId && <span className="text-black/60">{chunk.ParticipantId}</span>}
              </div>
              {/* // Bloques de chunk */}
              <div className="rounded-xl bg-white border border-black/20 p-3">
                <span>{chunk.Content}</span>
              </div>
            </div>
          ))
        ) : (
          <p>
            No call recording or transcript found for call with id {id}. Please try again later or contact support if
            the issue persists.
          </p>
        )}
      </div>
      <div className="w-full border-t-2 border-black/20 flex items-center justify-center relative">
        {/* <FlagIcon className={`w-10 h-10 absolute left-2 top-7 ${flagColor(transcript.flagged)}`} /> */}
        {transcript?.recordingURL ? (
          <AudioPlayer
            style={{ width: '50%' }}
            // src="/audio/PandaEyesTest.mp3"
            src={transcript?.recordingURL}
            customAdditionalControls={[]} // Remove the loop controls
          />
        ) : (
          <p>No audio available</p>
        )}
      </div>
    </div>
  )
}
