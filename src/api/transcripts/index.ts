// AWS connection to storage to get transcripts
// ronuma, may 2024
import { GetObjectCommand, ListObjectsCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { S3 } from '../config'
import { getRecording, listRecordings } from '../recordings'
import { listPastCalls } from '@/graphql/queries'
import { CallStatus } from '@/API'
import { AMPLIFY_CLIENT } from '../config'

export type Transcript = {
  [key: string]: { recordingURL: string | null; transcript: any[] | null; callData: any }
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
    const transcript = data.Transcript
    return transcript
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
      Prefix: 'Analysis/Voice/',
    }
    const data = {} as Transcript

    // List calls and add to data object, which should be finalized
    const calls = await AMPLIFY_CLIENT.graphql({
      query: listPastCalls,
      // variables: { filter: { status: { eq: CallStatus.FINALIZED } } },
    }).then(({ data }) => data?.listCalls?.items ?? [])

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
      const matches = contactIdExp.exec(item.Key ?? '') ?? []
      const contactId = matches[1]
      if (contactId && data[contactId]) {
        const transcript = await getTranscript({ fileKey: item.Key ?? '' })
        data[contactId].transcript = transcript
      }
    }
    return data
  } catch (error) {
    console.error('Error listing objects:', error)
    return null
  }
}
