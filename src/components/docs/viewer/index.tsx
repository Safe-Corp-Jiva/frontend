'use client'

import { useState } from 'react'

export default function DocumentViewer({ documents }: { documents: any[] }) {
  const [selected, setSelected] = useState<any>(documents?.[0] ?? null)

  return (
    <div className="w-full h-full bg-white rounded-xl flex justify-start divide-x-2 divide-SCJ-gray">
      <div className="h-full w-1/5 rounded-l-xl">
        <div className="bg-SCJ-dark-primary rounded-tl-xl py-3 text-center border-b-2 divide-SCJ-gray text-white">
          Documents
        </div>
        <div className="flex flex-col w-full items-center divide-y-2">
          {documents &&
            documents.map((document: any, index: number) => (
              <button
                key={index}
                className={`w-full text-center p-2 text-xs truncate ${
                  selected.filename === document.filename && 'bg-slate-300'
                }`}
                onClick={() => setSelected(document)}
              >
                {document.filename}
              </button>
            ))}
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        {selected ? (
          <object data={selected.URL} type="application/pdf" width="100%" height="100%"></object>
        ) : (
          <p>Select a document to view</p>
        )}
      </div>
    </div>
  )
}
