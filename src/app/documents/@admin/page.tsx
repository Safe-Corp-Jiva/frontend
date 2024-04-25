import React from 'react'
import { BottomNav } from '@/components/docs'

const documents = ['Document 1', 'Document 2', 'Document 3', 'Document 4', 'Document 5', 'Document 6']

export default function Documents() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-evenly py-5 px-36 gap-5">
      <div className="w-full h-full bg-white rounded-xl flex justify-start divide-x-2 divide-black/20">
        <div className="h-full w-[13.3333%] rounded-l-xl">
          <div className="bg-SCJ-dark-primary rounded-tl-xl py-3 text-center text-white">Documents</div>
          <div className="flex flex-col w-full items-center divide-y-2">
            {documents.map((document, index) => (
              <div key={index} className="w-full text-center py-2">
                {document}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">Document View</div>
      </div>
      <BottomNav />
    </div>
  )
}
