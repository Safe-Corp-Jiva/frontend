// AWS connection to storage to get recordings
// ronuma, may 2024
import { GetObjectCommand, ListObjectsCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { S3 } from './config'

export const recordingSampleKey =
  'connect/adventure-architects-dev/CallRecordings/2024/04/24/8c2622e8-0b4e-4d6b-b36e-70eaddf48f51_20240424T13:43_UTC.wav'

export const getRecording = async ({ fileKey }: { fileKey: string }) => {
  try {
    const params = {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: fileKey,
    }
    const command = new GetObjectCommand(params)
    const url = await getSignedUrl(S3, command, { expiresIn: 60 * 60 * 24 })
    return url
  } catch (error) {
    console.error('Error generating pre-signed URL:', error)
    return null
  }
}

export const listRecordings = async () => {
  try {
    const params = {
      Bucket: process.env.S3_BUCKET_NAME,
      Prefix: 'connect/adventure-architects-dev/CallRecordings/2024/',
    }
    const command = new ListObjectsCommand(params)
    const response = await S3.send(command)
    return response.Contents
  } catch (error) {
    console.error('Error listing objects:', error)
    return null
  }
}
