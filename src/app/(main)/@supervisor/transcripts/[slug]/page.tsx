import { dataSearch, SlugPage } from '@components/transcpt'
import { getRecording, recordingSampleKey } from '@/api/recordings'

export default async function Page({ params }: { params: { slug: string } }) {
  const transcript = dataSearch.find((transcript) => transcript.id === parseInt(params.slug))

  const recordingURL = await getRecording({ fileKey: recordingSampleKey })

  return (
    <div className="w-full h-full p-14">
      {transcript ? <SlugPage transcript={transcript} audioURL={recordingURL ?? ''} /> : <p>Transcript not found.</p>}
    </div>
  )
}
