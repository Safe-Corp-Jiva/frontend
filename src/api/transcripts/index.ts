// AWS connection to storage to get transcripts
// ronuma, may 2024
import { GetObjectCommand, ListObjectsCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { S3 } from '../config'
import { getRecording, listRecordings } from '../recordings'
import { getPastCalls } from '../calls'

export type TranscriptChunk = {
  Content: string
  Id: string
  LoudnessScore: number[]
  ParticipantId: string
  Sentiment: string
}

export type Transcript = {
  recordingURL: string | null
  chunks: TranscriptChunk[] | null
  id: string
  date: string
  name: string
  lastName: string
  agent: string
  flagged: boolean
}

export const getTranscript = async ({ fileKey }: { fileKey: string }) => {
  try {
    const params = {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: fileKey,
    }
    const command = new GetObjectCommand(params)
    const url = await getSignedUrl(S3, command, { expiresIn: 60 * 60 * 24 })
    const response = await fetch(url)
    const data = await response.json()
    return data.Transcript
  } catch (error) {
    console.error('Error generating pre-signed URL:', error)
    return null
  }
}

export const listTranscripts = async () => {
  // RegEx to extract contact ID from file key
  const contactIdExp = /\/\d{4}\/\d{2}\/\d{2}\/([a-zA-Z0-9\-]+)_/g
  try {
    const params = {
      Bucket: process.env.S3_BUCKET_NAME,
      Prefix: 'Analysis/Voice/2024',
    }
    const data: any = {}

    const calls = await getPastCalls()

    // Add keys to data object as long as they exist in dynamoDB
    for (const call of calls) {
      const contactId = call?.id
      if (contactId) {
        data[contactId] = {
          recordingURL: null,
          transcript: null,
          callData: call,
        }
      }
    }
    // List recordings and add to data object, only if they exist in dynamoDB
    const recordings = (await listRecordings()) ?? []
    for (const recording of recordings) {
      const matches = contactIdExp.exec(recording.Key ?? '') ?? []
      const contactId = matches[1]
      if (contactId && data[contactId]) {
        data[contactId].recordingURL = await getRecording({ fileKey: recording.Key ?? '' })
      }
    }
    // List transcripts and add to data object if they exist in dynamoDB
    const command = new ListObjectsCommand(params)
    const response = await S3.send(command)
    for (const item of response.Contents ?? []) {
      // Audio storage was moved so we need to skip .wav files
      if (item.Key?.includes('.wav')) continue
      const matches = contactIdExp.exec(item.Key ?? '') ?? []
      const contactId = matches[1]
      if (contactId && data[contactId]) {
        const transcript = await getTranscript({ fileKey: item.Key ?? '' })
        data[contactId].transcript = transcript
      }
    }

    // Create final array of transcripts
    const transcripts: Transcript[] = []
    for (const key in data) {
      const { recordingURL, transcript, callData } = data[key]
      const { id, createdAt, agent, flagged } = callData

      // Convert createdAt (ISO Timestamp) to DD/MM/YYYY
      const date = new Date(createdAt)

      transcripts.push({
        recordingURL,
        chunks: transcript,
        id,
        date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
        flagged: flagged ?? false,
        name: agent?.firstName,
        lastName: agent?.lastName,
        agent: agent?.username,
      })
    }

    return transcripts
  } catch (error) {
    console.error('Error listing objects:', error)
    return null
  }
}
