import { Spotlight } from "@/ui/spotlight";
import { TextGenerateEffect } from "@/ui/text-generate-effect";
import { WavyBackground } from "@/ui/wavy-background";
import Image from "next/image";

export default function Home() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <TextGenerateEffect
        words={"Safe Corp Jiva"}
        className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center"
      />
      <TextGenerateEffect
        words={"More than just technical support solutions"}
        className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center"
      />
    </WavyBackground>
  );
}
