'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Circle from 'rc-progress/es/Circle';
import Line from 'rc-progress/es/Line';
import { useRouter } from 'next/navigation';
import './style.css';


const ProgressBar = ({ percent, title, _strokeColor, _trailColor }: {percent: number, title: string, _strokeColor: string, _trailColor: string  }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="mb-2 text-center font-semibold" style={{fontSize: '0.9rem'}}>{title}</div>
      <div style={{ width: '100px', height: '100px' }}> 
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <Circle percent={percent} strokeWidth={10} trailWidth={8} strokeColor={_strokeColor} trailColor={_trailColor} />
          <div className="absolute inset-0 flex items-center justify-center text-xl" style={{fontSize: '1.2rem'}}>{percent}%</div>
        </div>
      </div>
    </div>
  );
};

const ChangeLine = ({ percent, title, _strokeColor, _trailColor  }: {percent: number, title: string, _strokeColor: string, _trailColor: string  }) => {
  return (
    <div className="flex flex-col items-start justify-start w-full h-full">
      <div className="mb-2" style={{fontSize: '0.8rem'}}>{title}</div>
      <div style={{ width: '100%', position: 'relative' }}>
        <Line percent={percent} strokeWidth={1.5} trailWidth={1.5} strokeColor={_strokeColor} trailColor={_trailColor} />
        <div className="absolute right-0 -ml-4 flex items-center justify-center text-xl" style={{ top: '-27px', fontSize: '1rem'}}>{percent}</div>
      </div>
    </div>
  );
};
interface Props {
  onExpand: (section: string) => void
  isMaximized: boolean;
}



export default function MetricsCard({ onExpand }: Props) {
  const router = useRouter()
  const [isMaximized, setIsMaximized] = useState(false);

  const handleExpand = () => {
    onExpand('metricsCard')
    setIsMaximized(true);
  }

  return (
    
    <div className={`w-full h-full bg-white rounded-xl flex flex-col p-4 ${isMaximized ? 'maximized' : ''}`}>
      <div className = "flex justify-between mb-4">
        <h1 className={`text-gray-400 text-xl ${isMaximized ? 'maximized h1' : ''}`} style={{ fontSize: isMaximized ? '1.563rem' : '' }}>Data</h1>
        <button onClick={handleExpand}>
          <Image src = "/icons/expand.svg" alt="home" width={16} height={16}/>
        </button>
      </div>
      <div className="bg-white rounded-xl p-5 max-w-full bg max-h-full size-full">
        <div className="flex justify-center" style={{ gap: '80px' }}> 
          <ProgressBar percent={68} title="Satisfied Calls" _strokeColor= "#34B53A" _trailColor= "#E2FBD7" />
          <ProgressBar percent={42} title="Neutral Calls" _strokeColor= "#FFEA2F" _trailColor= "rgba(255, 234, 47, 0.3)" />
          <ProgressBar percent={13} title="Unsatisfied Calls" _strokeColor= "#FF4646" _trailColor= "rgba(255, 70, 70, 0.3)" />
        </div>
        <div className="mt-5">
        <div className="w-full mb-4">
          <ChangeLine percent={5} title="Agents Available" _strokeColor="#869AE9" _trailColor="rgba(134, 154, 233, 0.5)" />
        </div>
        <div className="w-full">
          <ChangeLine percent={10} title="Ongoing Calls" _strokeColor="#27E2D3" _trailColor="rgba(39, 226, 211, 0.5)" />
        </div>
      </div>
      </div>
    </div>
  );
}
