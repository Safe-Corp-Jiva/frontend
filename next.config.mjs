/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    S3_BUCKET_NAME: process.env.S3_BUCKET_NAME,
    CUSTOM_AWS_REGION: process.env.CUSTOM_AWS_REGION,
    CUSTOM_AWS_ACCESS_KEY_ID: process.env.CUSTOM_AWS_ACCESS_KEY_ID,
    CUSTOM_AWS_SECRET_ACCESS_KEY: process.env.CUSTOM_AWS_SECRET_ACCESS_KEY,
    CONNECT_INSTANCE_ID: process.env.CONNECT_INSTANCE_ID,
    NEXT_PUBLIC_WEBSOCKET_ENDPOINT: process.env.NEXT_PUBLIC_WEBSOCKET_ENDPOINT,
  }
}

export default nextConfig
