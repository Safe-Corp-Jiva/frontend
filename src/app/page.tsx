"use client";
import awsExports from "@/aws-exports";
import { TextGenerateEffect } from "@/ui/text-generate-effect";
import { WavyBackground } from "@/ui/wavy-background";

import {
  useAuthenticator,
  withAuthenticator,
  WithAuthenticatorProps,
} from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";

Amplify.configure(awsExports);

interface Props extends WithAuthenticatorProps {
  isPassedToWithAuthenticator: boolean;
}

function Home({ isPassedToWithAuthenticator = true, signOut }: Props) {
  if (!isPassedToWithAuthenticator) {
    throw new Error("isPassedToWithAuthenticator is not passed to Home");
  }
  const { user } = useAuthenticator((context) => [context.user]);
  console.log("User: ", user);

  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <TextGenerateEffect
        words={"Safe Corp Jiva"}
        className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center"
      />
      <TextGenerateEffect
        words={`Welcome, ${user?.signInDetails?.loginId}!`}
        className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center"
      />
      <button onClick={signOut} className="mt-4">
        Sign Out
      </button>
    </WavyBackground>
  );
}

export default withAuthenticator(Home);
