'use client'
import Image from 'next/image'
import Circle from 'rc-progress/es/Circle'
import Line from 'rc-progress/es/Line'
import { getMetrics } from '@/api/connect'
import { useEffect, useState } from 'react'
import { useOngoingCalls } from '../onGoingCallsCard/hooks'
import { Tooltip, TooltipTrigger, TooltipContent } from './tooltip'

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
  const sizeClass = isMaximized ? 'w-36 h-36' : 'w-24 h-24'
  const titleClass = isMaximized ? 'text-xl' : 'text-sm'
  const textSizeClass = isMaximized ? 'text-2xl' : 'text-xl'

  return (
    <Tooltip>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <TooltipTrigger asChild={true}>
          <div className={`mb-2 text-center font-semibold${titleClass}`}>{title}</div>
        </TooltipTrigger>
        <div className={`relative ${sizeClass}`}>
          <Circle
            percent={percent}
            strokeWidth={10}
            trailWidth={8}
            strokeColor={_strokeColor}
            trailColor={_trailColor}
          />
          <div className={`absolute inset-0 flex items-center justify-center ${textSizeClass}`}>{percent}%</div>
        </div>
      </div>
      <TooltipContent>
        {/* if Title Agent Ocupancy, then Percentage of time that agents were active on contacts. If title Abandoment Rate: The percent of queued contacts that were disconnected without being connected to an agent. Contacts queued for callback are not counted as abandoned.*/}
        {title === 'Agent occupancy' ? (
          <p>The percentage of time that agents were active on contacts.</p>
        ) : (
          <p>The percent of queued contacts that were disconnected without being connected to an agent.</p>
        )}
      </TooltipContent>
    </Tooltip>
  )
}

interface ChangeLineProps {
  percent: number | string
  title: string
  _strokeColor: string
  _trailColor: string
  isMaximized: boolean
}

// const ChangeLine = ({ percent, title, _strokeColor, _trailColor, isMaximized }: ChangeLineProps) => {
//   const titleClass = isMaximized ? 'text-lg' : 'text-sm'
//   const percentClass = isMaximized ? 'text-lg' : 'text-sm'
//   return (
//     <div className="flex flex-col items-start justify-start w-full h-full">
//       <div className={`mb-2 ${titleClass}`}>{title}</div>
//       <div className="relative w-full">
//         <Line
//           percent={Number(percent)}
//           strokeWidth={1.5}
//           trailWidth={1.5}
//           strokeColor={_strokeColor}
//           trailColor={_trailColor}
//         />
//         <div
//           className={`absolute right-0 -ml-4 flex items-center justify-center ${percentClass}`}
//           style={{ top: '-27px' }}
//         >
//           {percent}
//         </div>
//       </div>
//     </div>
//   )
// }

export default function MetricsCard({ maximize, minimize, isMaximized }: Props) {
  const [metrics, setMetrics] = useState([] as any[])
  const res = getMetrics()
  const OnGoingCalls = useOngoingCalls()

  useEffect(() => {
    // change request every 30 seconds for it not to be that expensive
    setInterval(() => {
      res.then((data: any) => {
        setMetrics(data)
      })
    }, 30000)

    res.then((data: any) => {
      setMetrics(data)
    })
  }, [])

  // Turn occupancy into a percentage with 2 decimal places
  const occupancy = (metrics?.find((metric) => metric?.Metric?.Name === 'AGENT_OCCUPANCY')?.Value * 100).toFixed(
    2
  ) as any
  const avgContactDuration = metrics
    ?.find((metric) => metric?.Metric?.Name === 'AVG_CONTACT_DURATION')
    ?.Value.toFixed(0)
  const avgQueueAnswerTime = metrics
    ?.find((metric) => metric?.Metric?.Name === 'AVG_QUEUE_ANSWER_TIME')
    ?.Value.toFixed(0)
  const abandonmentRate = (metrics?.find((metric) => metric?.Metric?.Name === 'ABANDONMENT_RATE')?.Value * 100).toFixed(
    2
  )
  const avgNonTalkTime = metrics?.find((metric) => metric?.Metric?.Name === 'AVG_NON_TALK_TIME')?.Value.toFixed(0)
  const ongoingCalls = OnGoingCalls?.length

  const textMetrics = [
    {
      value: ongoingCalls,
      name: 'Ongoing Calls',
      desc: 'The number of calls currently in progress',
    },
    {
      value: avgContactDuration,
      name: 'Average Contact Duration',
      unit: 's',
      desc: 'The average time that agents spend on a contact',
    },
    {
      value: avgQueueAnswerTime,
      name: 'Average Queue Answer Time',
      unit: 's',
      desc: 'The average time that contacts spend in the queue before being answered',
    },
    {
      value: avgNonTalkTime,
      name: 'Average Non-Talk Time',
      unit: 's',
      desc: 'The average time that agents spend on a contact without talking',
    },
  ]

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
          {occupancy && (
            <ProgressBar
              percent={Number(occupancy) || 0}
              title="Agent occupancy"
              _strokeColor="#34B53A"
              _trailColor="#E2FBD7"
              isMaximized={isMaximized}
            />
          )}
          {abandonmentRate && (
            <ProgressBar
              percent={Number(abandonmentRate) || 0}
              title="Abandonment Rate"
              _strokeColor="#FFEA2F"
              _trailColor="rgba(255, 234, 47, 0.3)"
              isMaximized={isMaximized}
            />
          )}
        </div>
        <div className={`${isMaximized ? 'mt-10' : 'mt-5'} grid grid-cols-2 gap-4`}>
          {textMetrics.map((metric, index) => (
            <Tooltip>
              <TooltipTrigger asChild={true}>
              <p key={index} className="text-gray-500">
                {metric.name}:{' '}
                <span className="font-bold text-black text-lg">
                  {metric.value || '...'}
                  {metric.unit}
                </span>
              </p>
              </TooltipTrigger>
              <TooltipContent>
                <p>{metric.desc}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  )
}
