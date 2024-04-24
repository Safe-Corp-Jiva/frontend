'use client'
import { TextGenerateEffect } from '@/ui/text-generate-effect'
import { WavyBackground } from '@/ui/wavy-background'

export default function Home() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <TextGenerateEffect
        words={'Safe Corp Jiva'}
        className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center"
      />
      <TextGenerateEffect
        words={`Welcome back!`}
        className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center"
      />
      <button className="mt-4 bg-white w-full mx-auto text-black px-4 py-2 rounded-md">Sign Out</button>
    </WavyBackground>
  )
}
