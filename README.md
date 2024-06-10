This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Frontend

Open the terminal and clone the repository from github:

```bash
git clone https://github.com/Safe-Corp-Jiva/frontend.git
```

## Prerequisites 

before you begin, ensure you have met the following prerequisites: 

### Node

In order to install Node, make sure to follow the steps listed in the [Node documentation](https://nodejs.org/en/download/package-manager)

### Amplify

Make sure you have an AWS account

1. Install the Amplify CLI
    ```bash
    npm install -g @aws-amplify/cli
    ```
2. Configure Amplify by running the following command:
  ```bash
    amplify configure
    ```
  - Amplify configure will ask you to sign into the AWS Console.
   
For any troubleshooting consult the [Amplify documentation](https://docs.amplify.aws/gen1/javascript/tools/cli/start/set-up-cli/) 

## Dependencies

The dependencies will be listed on the [package json](package.json)


## Getting Started

First, you need to install the packages:

```bash
npm install
```

Then, to run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
