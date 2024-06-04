import { dataSearch, SlugPage } from '@components/transcpt'
import { getRecording, recordingSampleKey } from '@/api/recordings'

export default async function Page({ params }: { params: { slug: string } }) {
  const transcript = dataSearch.find((transcript: any) => transcript.id === parseInt("1"/* params.slug */))

  const recordingURL = await getRecording({ fileKey: recordingSampleKey })

  return (
    <div className="w-full h-full p-14">
      {transcript ? <SlugPage transcript={transcript} audioURL={recordingURL ?? ''} /> : <p>Transcript not found.</p>}
    </div>
  )
}
