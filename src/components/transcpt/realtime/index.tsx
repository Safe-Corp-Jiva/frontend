"use client";

import { useEffect, useState } from "react";
import { Chunk } from "@/API";
import { chunkSubFactory } from "@/utils/gql";

interface RealTimeTranscriptProps {
  callId: string;
}

export default function RealTimeTranscript({
  callId
}: RealTimeTranscriptProps) {
  const [chunks, setChunks] = useState<Chunk[]>([]);

  // TODO: If this is ugly you can move stuff to `./hooks.tsx` I guess?
  const callback = (chunks: Chunk[]) => {
    setChunks((prev) => [...prev, ...chunks]);
  };

  const fallback = (error: Error) => {
    console.error(error);
  };

  useEffect(() => {
    const { getter, sub } = chunkSubFactory(callId);

    const fetchChunks = async () => {
      const chunks = await getter();
      callback(chunks);
    };

    fetchChunks();

    const formatter = (data?: Chunk) => data ? [data] : [];
  
    const subscriber = sub.subscribe({
      next: (value) => callback(formatter(value?.data?.onChunkByCallId)),
      error: (error) => fallback(error)
    });
  
    return () => { subscriber.unsubscribe() };
  }, []);

  return (
    <div>
      {chunks.map((chunk) => (
        <div key={chunk.id}>{chunk?.content?.text ?? ""}</div>
      ))}
    </div>
  );

}