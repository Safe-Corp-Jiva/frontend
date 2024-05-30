import { BottomNav } from '@/components/docs'
import { SearchPlusTabs } from '@/components/transcpt'
import { listTranscripts } from '@/api/transcripts'

async function Transcripts() {
  const transcripts = await listTranscripts()
  console.log(transcripts?.['7a629e2f-3b01-41df-89ac-9ec1deac64af'])
  return (
    <div className="w-full h-screen flex flex-col justify-evenly items-center py-4 space-y-2 px-24">
      <SearchPlusTabs />
      <BottomNav />
    </div>
  )
}

export default Transcripts
