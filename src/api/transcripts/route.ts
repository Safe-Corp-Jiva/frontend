import { listTranscripts } from '.'

// Route handler so we can cache the data
export async function GET(_req: Request): Promise<Response> {
  const transcripts = await listTranscripts()
  return new Response(JSON.stringify(transcripts), {
    headers: { 'Content-Type': 'application/json' },
  })
}
