// AWS connection and pre-signed URL generation
// ronuma, may 2024
import { S3Client, S3ClientConfig, GetObjectCommand, ListObjectsCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

const config: S3ClientConfig = {
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? '',
  },
}
// Configure the AWS SDK with your credentials and region
const s3 = new S3Client(config)

export const getTranscript = async ({ fileKey }: { fileKey: string }) => {
  try {
    const params = {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: fileKey,
    }
    const command = new GetObjectCommand(params)
    const url = await getSignedUrl(s3, command, { expiresIn: 60 * 60 * 24 })
    const response = await fetch(url)
    const data = await response.json()
    const transcript = data.Transcript
    return transcript.map((item: any) => ({
      content: item.Content,
      displayName: item.DisplayName,
      role: item.ParticipantRole,
    }))
  } catch (error) {
    console.error('Error generating pre-signed URL:', error)
    return null
  }
}

export const listTranscripts = async () => {
  try {
    const params = {
      Bucket: process.env.S3_BUCKET_NAME,
      Prefix: 'connect/adventure-architects-dev/ChatTranscripts/2024/',
    }
    const command = new ListObjectsCommand(params)
    const response = await s3.send(command)
    return response.Contents?.map((item) => ({ key: item.Key, lastModified: item.LastModified }))
  } catch (error) {
    console.error('Error listing objects:', error)
    return null
  }
}
