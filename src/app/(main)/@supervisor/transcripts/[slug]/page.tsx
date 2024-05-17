import React from 'react'
import { dataSearch, SlugPage } from '@components/transcpt'


export default function Page({ params }: { params: { slug: string } }) {
  const transcript = dataSearch.find((transcript) => transcript.id === parseInt(params.slug))

  return (
    <div className="w-full h-full p-14">
      {transcript ? <SlugPage transcript={transcript} /> : <p>Transcript not found.</p>}
    </div>
  )
}


//localhost:3000/mockcall/140d00fd-4b68-48e6-b315-bd8f770230a7