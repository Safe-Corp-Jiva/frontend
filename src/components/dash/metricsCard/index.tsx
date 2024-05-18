'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Circle from 'rc-progress/es/Circle';
import Line from 'rc-progress/es/Line';
import { useRouter } from 'next/navigation';

interface Props {
  maximize: () => void
  minimize: () => void
  isMaximized: boolean
}

interface ProgressBarProps {
  percent: number
  title: string
  _strokeColor: string
  _trailColor: string
  isMaximized: boolean
}

const ProgressBar = ({ percent, title, _strokeColor, _trailColor, isMaximized }: ProgressBarProps) => {
  const sizeClass = isMaximized ? 'w-36 h-36' : 'w-24 h-24';
  const titleClass = isMaximized ? 'text-xl' : 'text-sm';
  const textSizeClass = isMaximized ? 'text-2xl' : 'text-xl';

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className={`mb-2 text-center font-semibold${titleClass}`}>{title}</div>
      <div className={`relative ${sizeClass}`}>
        <Circle percent={percent} strokeWidth={10} trailWidth={8} strokeColor={_strokeColor} trailColor={_trailColor} />
        <div className={`absolute inset-0 flex items-center justify-center ${textSizeClass}`}>{percent}%</div>
      </div>
    </div>
  );
};

interface ChangeLineProps {
  percent: number
  title: string
  _strokeColor: string
  _trailColor: string
  isMaximized: boolean
}

const ChangeLine = ({ percent, title, _strokeColor, _trailColor, isMaximized }: ChangeLineProps) => {
  const titleClass = isMaximized ? 'text-lg' : 'text-sm';
  const percentClass = isMaximized ? 'text-lg' : 'text-sm';

  return (
    <div className="flex flex-col items-start justify-start w-full h-full">
      <div className={`mb-2 ${titleClass}`}>{title}</div>
      <div className="relative w-full">
        <Line percent={percent} strokeWidth={1.5} trailWidth={1.5} strokeColor={_strokeColor} trailColor={_trailColor} />
        <div className={`absolute right-0 -ml-4 flex items-center justify-center ${percentClass}`} style={{ top: '-27px' }}>{percent}</div>
      </div>
    </div>
  );
};

export default function MetricsCard({ maximize, minimize, isMaximized }: Props) {
  const router = useRouter()

  return (
    <div className={`w-full h-full bg-white rounded-xl flex flex-col p-4 ${isMaximized ? 'maximized' : ''}`}>
      <div className="flex justify-between mb-4">
        <h1 className={`text-gray-400 ${isMaximized ? 'text-2xl' : 'text-xl'}`}>Data</h1>
        {isMaximized ? (
          <button onClick={minimize}>
            <Image src="/icons/close.svg" alt="close" width={32} height={32} />
          </button>
        ) : (
          <button onClick={maximize}>
            <Image src="/icons/expand.svg" alt="expand" width={16} height={16} />
          </button>
        )}
      </div>
      <div className="bg-white rounded-xl p-5 max-w-full max-h-full">
        <div className={`flex justify-center font-semibold ${isMaximized ? 'gap-20' : 'gap-16'}`}>
          <ProgressBar percent={68} title="Satisfied Calls" _strokeColor="#34B53A" _trailColor="#E2FBD7" isMaximized={isMaximized} />
          <ProgressBar percent={42} title="Neutral Calls" _strokeColor="#FFEA2F" _trailColor="rgba(255, 234, 47, 0.3)" isMaximized={isMaximized} />
          <ProgressBar percent={13} title="Unsatisfied Calls" _strokeColor="#FF4646" _trailColor="rgba(255, 70, 70, 0.3)" isMaximized={isMaximized} />
        </div>
        <div className={`${isMaximized ? 'mt-10' : 'mt-5'}`}>
          <div className="w-full mb-4">
            <ChangeLine percent={5} title="Agents Available" _strokeColor="#869AE9" _trailColor="rgba(134, 154, 233, 0.5)" isMaximized={isMaximized} />
          </div>
          <div className="w-full">
            <ChangeLine percent={10} title="Ongoing Calls" _strokeColor="#27E2D3" _trailColor="rgba(39, 226, 211, 0.5)" isMaximized={isMaximized} />
          </div>
        </div>
      </div>
    </div>
  );
}

