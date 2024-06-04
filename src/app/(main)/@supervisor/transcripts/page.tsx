import { BottomNav } from '@/components/docs'
import { SearchPlusTabs } from '@/components/transcpt'
import { listTranscripts } from '@/api/transcripts/'

async function Transcripts() {
  const transcripts = await listTranscripts();
  
  return (
    <div className="w-full h-screen flex flex-col justify-evenly items-center py-4 space-y-2 px-24">
      <SearchPlusTabs transcripts={transcripts ?? []} />
      <BottomNav />
    </div>
  )
}

export default Transcripts
