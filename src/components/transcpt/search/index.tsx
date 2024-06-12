'use client'
import { SetStateAction, useState, useEffect } from 'react'
import { Tab } from '@headlessui/react'
// import { dataSearch } from '../mockdata'
import SearchButtons from '../searchbuttons'
import FlagIcon from '../iconscomponents/flagicon'
import { useRouter } from 'next/navigation'
import { Transcript } from '@/api/transcripts'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

const getTrascripts = async () => {
  const res = await fetch('/transcripts/api')
  return await res.json()
}

export default async function SearchPlusTabs() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')
  const [activeFilter, setActiveFilter] = useState('name')
  const [isFlagFilterActive, setIsFlagFilterActive] = useState(false)
  const transcripts = await getTrascripts()
  localStorage.setItem('transcripts', JSON.stringify(transcripts))

  const handleSearchChange = (event: { target: { value: SetStateAction<string> } }) => {
    setSearchTerm(event.target.value)
  }

  const filteredTranscripts: Transcript[] = transcripts.filter((transcript: Transcript) => {
    const term = searchTerm.toLowerCase()
    if (transcript === undefined) return false
    if (isFlagFilterActive) {
      return transcript.flagged && transcript?.name.toLowerCase().includes(term)
    }
    switch (activeFilter) {
      case 'name':
        return transcript?.name.toLowerCase().includes(term)
      case 'date':
        return transcript.date.includes(term)
      case 'id':
        return transcript.id.toString().includes(term)
      default:
        return true
    }
  })

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
    setIsFlagFilterActive(filter === 'flag')
  }

  const getPlaceholderText = () => {
    if (isFlagFilterActive) return 'Showing flagged transcripts'
    return `Search by ${activeFilter}`
  }

  const activeButtonClass = (filter: string) => {
    return `rounded-2xl border cursor-pointer px-2 py-1 ${
      activeFilter === filter
        ? 'bg-SCJ-primary text-white border-SCJ-primary stroke-white'
        : 'bg-white text-black border-black/20 stroke-black/25'
    }`
  }
  const activeButtonClassIcon = (filter: string) => {
    return ` ${activeFilter === filter ? 'stroke-white' : 'stroke-black/75 text-trasparent'}`
  }

  const sentimentColor = (sentiment: number) => {
    switch (sentiment) {
      case 1:
        return 'bg-green-300'
      case 2:
        return 'bg-yellow-300'
      case 3:
        return 'bg-red-400'
      default:
        return 'bg-gray-300' // Default color
    }
  }
  const sentimentColorText = (sentiment: number) => {
    switch (sentiment) {
      case 1:
        return (
          <div className="bg-green-300 text-green-800 py-2 px-9 flex content-center rounded-2xl text-xs">Satisfied</div>
        )
      case 2:
        return (
          <div className="bg-yellow-300 text-yellow-800 py-2 px-10 flex content-center rounded-2xl text-xs">
            Neutral
          </div>
        )
      case 3:
        return (
          <div className="bg-red-400 text-red-800 py-2 px-7 flex content-center rounded-2xl text-xs">Unsatisfied</div>
        )
      default:
        return 'bg-gray-300 text-black' // Default color
    }
  }

  const flagColor = (flagged: boolean) => {
    return flagged ? 'text-red-400 stroke-red-200 ' : 'stroke-black/25 text-transparent'
  }

  const ClickToTranscript = (transcript: Transcript) => {
    router.push(`/transcripts/${transcript.id}`)
  }

  return (
    <div className="w-full h-5/6 bg-white rounded-xl p-5 flex justify-evenly items-start gap-4">
      <Tab.Group vertical>
        <div className="w-1/3 h-full rounded-xl border border-black/20 flex flex-col gap-2">
          <div className="h-[15%] border-b-2 border-black/20 flex">
            <input
              type="text"
              placeholder={getPlaceholderText()}
              value={searchTerm}
              onChange={handleSearchChange}
              className="rounded-xl border-0 w-full ring-0 focus:ring-0 focus:border-0 focus:outline-none h-full px-2"
              disabled={isFlagFilterActive}
            />
          </div>
          <div className="flex w-full space-x-3 px-2">
            <SearchButtons
              text="Name"
              fn={() => handleFilterChange('name')}
              className={activeButtonClass('name')}
              classNameIcon={activeButtonClassIcon('name')}
            />
            <SearchButtons
              text="Date"
              fn={() => handleFilterChange('date')}
              className={activeButtonClass('date')}
              classNameIcon={activeButtonClassIcon('date')}
            />
            {/* <SearchButtons
              text="Id"
              fn={() => handleFilterChange('id')}
              className={activeButtonClass('id')}
              classNameIcon={activeButtonClassIcon('id')}
            /> */}
            {/* <SearchButtons text="Flag" fn={() => handleFilterChange('flag')} className={activeButtonClass('flag')} classNameIcon={activeButtonClassIcon('flag')}/> */}
          </div>
          <Tab.List className="w-full h-full overflow-auto px-2">
            <table className="table-auto w-full text-left">
              <tbody className="bg-white">
                {filteredTranscripts.map((transcript: Transcript) => (
                  <Tab
                    key={transcript.id}
                    as="tr"
                    className={({ selected }) =>
                      classNames('cursor-pointer focus:outline-none', selected ? 'bg-gray-100' : 'hover:bg-gray-50')
                    }
                  >
                    <td className="px-2 py-4 flex flex-col justify-center">
                      {/* <span className="font-bold text-lg">{transcript.id.slice(0, 8)}...</span> */}
                      <span className="text-black/60">{transcript.date}</span>
                    </td>
                    <td className="px-2 py-4 text-black/85">{transcript.name + ' ' + transcript.lastName}</td>
                    <td className="px-2 py-4 text-SCJ-primary">@{transcript.agent}</td>
                    {/* <td className="px-2 py-4">
                      <div
                        className={`h-3 w-3 rounded-full ${sentimentColor(
                          -100
                        )} inline-block`}
                      ></div>
                    </td>
                    <td className="px-2 py-4">
                      <FlagIcon className={`w-6 h-6 ${flagColor(transcript.flagged)}`} />
                    </td> */}
                  </Tab>
                ))}
              </tbody>
            </table>
          </Tab.List>
        </div>
        <div className="w-2/3 h-full rounded-xl border border-black/20">
          <Tab.Panels className="h-full w-full">
            {filteredTranscripts.map((transcript) => (
              <Tab.Panel key={transcript.id} className="h-full py-3 text-black">
                <div className="h-full w-full flex flex-col gap-2">
                  <div className="w-full flex justify-between items-center border-b-2 border-black/20 px-5 pb-2">
                    <div className="flex flex-col space-y-2">
                      <span className="font-bold text-3xl">{transcript.name + ' ' + transcript.lastName}</span>
                      <span className="text-lg text-black/40">{transcript.date}</span>
                    </div>
                    {/* <div className=" flex flex-col space-y-2 items-end">
                      <span className="font-medium text-2Ixl">{transcript.date}</span>
                    </div> */}
                  </div>
                  {/* Render de los chunks */}
                  <div className="rounded-b-xl size-full px-10 py-5 overflow-auto">
                    {transcript.chunks?.map((chunk) => (
                      <div key={chunk.Id} className="flex flex-col gap-1 m-4">
                        <div className="flex justify-between items-center">
                          {chunk.ParticipantId && <span className="text-black/60">{chunk.ParticipantId}</span>}
                        </div>
                        {/* // Bloques de chunk */}
                        <div className="rounded-xl bg-white border border-black/20 p-3">
                          <span>{chunk.Content}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Botón to see more */}
                  <div className="w-full flex justify-center items-center my-3">
                    <div
                      className="rounded-xl bg-SCJ-primary text-white px-5 py-3 cursor-pointer"
                      onClick={() => ClickToTranscript(transcript)}
                    >
                      See more...
                    </div>
                  </div>
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </div>
      </Tab.Group>
    </div>
  )
}
