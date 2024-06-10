This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Frontend

Open the terminal and clone the repository from github:

```bash
git clone https://github.com/Safe-Corp-Jiva/frontend.git
```

### Prerequisites 

before you begin, ensure you have met the following prerequisites: 

#### Node

In order to install Node, make sure to follow the steps listed in the [Node documentation](https://nodejs.org/en/download/package-manager)

#### Amplify

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
   
> For any troubleshooting consult the [Amplify documentation](https://docs.amplify.aws/gen1/javascript/tools/cli/start/set-up-cli/) 

### Dependencies

The dependencies will be listed on the [package json](package.json)


### Getting Started

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


## Backend

In order to be able to manage the required functionality in this application you must have an AWS Amplify instance.

The following steps will show you how to set up the instance:

### Manual installation 

Create the Amplify instance within your AWS account:

Select where your instance will be connected to, in this case GitHub:

<img width="500" alt="Captura de pantalla 2024-06-10 a la(s) 4 11 22 p m" src="https://github.com/Safe-Corp-Jiva/frontend/assets/83849161/fc2fdfd7-cc36-48bd-bf31-18e8660f664b">

Select the repository you wish to connect to:

<img width="500" alt="Captura de pantalla 2024-06-10 a la(s) 4 14 24 p m" src="https://github.com/Safe-Corp-Jiva/frontend/assets/83849161/69c17698-1c84-4abc-9ed6-bf3994205013">

Ensure the configuration is as you want it:

<img width="500" alt="Captura de pantalla 2024-06-10 a la(s) 4 16 18 p m" src="https://github.com/Safe-Corp-Jiva/frontend/assets/83849161/198e5ddd-b3a9-48c3-9ab4-72f033126aea">

Review the configuration and if everything is good, click save and deploy:

<img width="500" alt="Captura de pantalla 2024-06-10 a la(s) 4 16 29 p m" src="https://github.com/Safe-Corp-Jiva/frontend/assets/83849161/5bbc7526-764a-4fe8-b2e7-86b4a86f494c">

> Your Amplify instance should be deployed. For any troubleshooting consult the [Amplify documentation](https://docs.amplify.aws/gen1/).

### With Amplify CLI 

If you have cloned this repo correctly, you are able to push the infrastructure to your Amplify application by running the following command:

   ```bash
   amplify init
   ```
   This should create a new enviorment within your account with the desired configuration, to test this:

   ```bash
   amplify env list
   ```
