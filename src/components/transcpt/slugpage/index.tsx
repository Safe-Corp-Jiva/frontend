'use client'
import React from 'react'
import FlagIcon from '../iconscomponents/flagicon'
import AudioPlayer from 'react-h5-audio-player'
import './audio.css'

export default function SlugPage({ transcript }: { transcript: any }) {
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
  return (
    <div className="w-full h-full bg-white rounded-xl flex flex-col p-5">
      <div className="w-full flex justify-between border-b-2 border-black/20 pb-2">
        <div className="flex flex-col">
          <span className="text-2xl font-bold">
            {transcript.name} {transcript.lastname}
          </span>
          <span className="text-black/50">{transcript.date}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-2xl">Agent</span>
          <span className="text-black/50 text-sm">{transcript.agent}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-2xl">Duration</span>
          <span className="text-black/50">{transcript.duration}</span>
        </div>
        <div className="flex flex-col text-end">
          <span className="text-2xl font-bold">{transcript.id}</span>
          {sentimentColorText(transcript.sentiment)}
        </div>
      </div>
      <div className="flex w-full justify-between items-center h-full">
        <div className="w-1/2 h-full px-4 py-2 border-r-2 border-black/20 flex items-center">
          <p className="text-sm">{transcript.transcript}</p>
        </div>
        <div className="w-1/2 h-full px-4 py-2 text-sm flex items-center">{transcript.transcript}</div>
      </div>
      <div className="w-full border-t-2 border-black/20 flex items-center justify-center relative">
        <FlagIcon className={`w-10 h-10 absolute left-2 top-7 ${flagColor(transcript.flagged)}`} />
        <AudioPlayer
          style={{ width: '50%' }}
          src="/audio/PandaEyesTest.mp3"
          customAdditionalControls={[]} // Remove the loop controls
        />
      </div>
    </div>
  )
}
