import { S3 } from './config'
import { ListObjectsCommand, GetObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

export const listDocuments = async () => {
  try {
    const params = {
      Bucket: process.env.S3_BUCKET_NAME,
      Prefix: 'Documents/',
    }
    const command = new ListObjectsCommand(params)
    const response = await S3.send(command)
    const documents = []
    for (const item of response.Contents ?? []) {
      const command = new GetObjectCommand({
        Bucket: process.env.S3_BUCKET_NAME,
        Key: item.Key,
      })
      const url = await getSignedUrl(S3, command, { expiresIn: 60 * 60 * 24 })
      documents.push({ filename: item.Key?.replace('Documents/', ''), URL: url })
    }
    // We do this to remove the FAKE FILE (the one about AMZ ALGORITHM SOMETHING)
    return documents.slice(1)
  } catch (error) {
    console.error('Error listing objects:', error)
    return null
  }
}
