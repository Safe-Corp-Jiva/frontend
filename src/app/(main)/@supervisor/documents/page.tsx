import { BottomNav } from '@/components/docs'
import { listDocuments } from '@/api/documents'
import { DocumentViewer } from '@/components/docs'
// const documents = ['Document 1', 'Document 2', 'Document 3', 'Document 4', 'Document 5', 'Document 6']

export default async function Documents() {
  const documents = await listDocuments()
  return (
    <div className="w-full h-full flex flex-col items-center justify-evenly py-5 px-36 gap-5">
      <DocumentViewer documents={documents ?? []} />
      <BottomNav />
    </div>
  )
}