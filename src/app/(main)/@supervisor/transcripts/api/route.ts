import { listTranscripts } from '@/api/transcripts'

export async function GET() {
  const transcripts = await listTranscripts()
  return Response.json(transcripts)
}
