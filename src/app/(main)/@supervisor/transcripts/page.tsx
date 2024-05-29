import { BottomNav } from '@/components/docs'
import { SearchPlusTabs } from '@/components/transcpt'
import { getTranscript, listTranscripts } from '@/api/storage'

async function Transcripts() {
  // Hardcoded key for testing purposes
  const key =
    'connect/adventure-architects-dev/ChatTranscripts/2024/04/21/2a36471d-c7d7-4510-83e9-407828cb2239_20240421T23:46_UTC.json'
  const transcript = await getTranscript({ fileKey: key })
  const transcripts = await listTranscripts()

  return (
    <div className="w-full h-screen flex flex-col justify-evenly items-center py-4 space-y-2 px-24">
      <SearchPlusTabs />
      <BottomNav />
    </div>
  )
}

export default Transcripts
