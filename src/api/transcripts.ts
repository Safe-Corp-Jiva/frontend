// AWS connection to storage to get transcripts
// ronuma, may 2024
import { GetObjectCommand, ListObjectsCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { S3 } from './config'
import { getRecording, listRecordings } from './recordings'

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
    const data = {} as { [key: string]: { recording: string | null; transcript: any[] | null } }

    // RegEx to extract contact ID from file key
    const contactIdExp = /\/\d{4}\/\d{2}\/\d{2}\/([a-zA-Z0-9\-]+)_/g

    // List recordings and add to data object
    const recordings = (await listRecordings()) ?? []
    for (const recording of recordings) {
      const res = contactIdExp.exec(recording.Key ?? '') ?? []
      const contactId = res[1]
      if (contactId) {
        data[contactId] = {
          recording: await getRecording({ fileKey: recording.Key ?? '' }),
          transcript: null,
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
        data[contactId] = {
          recording: null,
          transcript: await getTranscript({ fileKey: item.Key ?? '' }),
        }
      }
    }

    return data
  } catch (error) {
    console.error('Error listing objects:', error)
    return null
  }
}
