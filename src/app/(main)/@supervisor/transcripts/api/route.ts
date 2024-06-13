import { listTranscripts } from '@/api/transcripts'

// Opt out of cache
// export const dynamic = 'force-dynamic'

// Cache for 30 seconds
export const revalidate = 30

export async function GET() {
  const transcripts = await listTranscripts()
  return Response.json(transcripts)
}
