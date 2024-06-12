import { listDocuments } from '@/api/documents'
import { DocumentViewer } from '@/components/docs'

export default async function Documents() {
  const documents = await listDocuments()
  return (
    <div className="w-full h-full flex flex-col items-center justify-evenly py-6 px-16 gap-5">
      <DocumentViewer documents={documents ?? []} />
    </div>
  )
}
