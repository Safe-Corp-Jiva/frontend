// Config to be used in the modules to connect to external
// AWS services
// ronuma, may 2024
import { S3Client } from '@aws-sdk/client-s3'

const config = {
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? '',
  },
}
// Configure the AWS SDK with your credentials and region
export const S3 = new S3Client(config)
