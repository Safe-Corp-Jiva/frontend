import { BottomNav } from '@/components/docs'
import { SearchPlusTabs } from '@/components/transcpt'
import { listTranscripts, Transcript } from '@/api/transcripts/'

async function Transcripts() {
  const transcripts = await listTranscripts()
  // transcripts return objects with the type Transcript (check source code, imported above)
  return (
    <div className="w-full h-screen flex flex-col justify-evenly items-center py-4 space-y-2 px-24">
      <SearchPlusTabs />
      <BottomNav />
    </div>
  )
}

export default Transcripts
