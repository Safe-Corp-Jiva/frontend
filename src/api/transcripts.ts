// AWS connection to storage to get transcripts
// ronuma, may 2024
import { GetObjectCommand, ListObjectsCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { S3 } from './config'
import { getRecording, listRecordings } from './recordings'
import { getCallData } from './connect'

export type Transcript = {
  [key: string]: { recordingURL: string | null; transcript: any[] | null; contactData: any }
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
  try {
    const params = {
      Bucket: process.env.S3_BUCKET_NAME,
      Prefix: 'Analysis/Voice/',
    }
    const data = {} as Transcript

    // RegEx to extract contact ID from file key
    const contactIdExp = /\/\d{4}\/\d{2}\/\d{2}\/([a-zA-Z0-9\-]+)_/g

    // List recordings and add to data object
    const recordings = (await listRecordings()) ?? []
    for (const recording of recordings) {
      const res = contactIdExp.exec(recording.Key ?? '') ?? []
      const contactId = res[1]
      if (contactId) {
        const contactData = await getCallData({ contactId })
        data[contactId] = {
          recordingURL: await getRecording({ fileKey: recording.Key ?? '' }),
          transcript: null,
          contactData,
        }
      }
    }

    // List transcripts and add to data object
    const command = new ListObjectsCommand(params)
    const response = await S3.send(command)
    for (const item of response.Contents ?? []) {
      const res = contactIdExp.exec(item.Key ?? '') ?? []
      const contactId = res[1]
      if (contactId && data[contactId]) {
        const transcript = await getTranscript({ fileKey: item.Key ?? '' })
        data[contactId].transcript = transcript
      } else if (contactId) {
        const contactData = await getCallData({ contactId })
        data[contactId] = {
          recordingURL: null,
          transcript: await getTranscript({ fileKey: item.Key ?? '' }),
          contactData,
        }
      }
    }

    return data
  } catch (error) {
    console.error('Error listing objects:', error)
    return null
  }
}
