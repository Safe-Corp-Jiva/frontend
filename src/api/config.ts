// Config to be used in the modules to connect to external
// AWS services
// ronuma, may 2024
import { S3Client } from '@aws-sdk/client-s3'
import { ConnectClient } from '@aws-sdk/client-connect'
import { generateClient } from 'aws-amplify/api'
import { Amplify } from 'aws-amplify'
import awsconfig from '@/aws-exports'
Amplify.configure(awsconfig)

const config = {
  region: process.env.AWS_REGION ?? 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? '',
  },
}

// Configure the AWS SDK with your credentials and region
export const S3 = new S3Client(config)
export const CONNECT = new ConnectClient(config)
export const AMPLIFY_CLIENT = generateClient()
