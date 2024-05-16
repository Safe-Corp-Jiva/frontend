import { useEffect, useState } from 'react';
import { Call, CallStatus } from '@/API';
import { callSubFactory } from '@/utils/gql';

interface CustomCall extends Call {
  help?: number;
  topic?: string;
}

export function useOngoingCalls() {
  const [OnGoingCalls, setOnGoingCalls] = useState<CustomCall[]>([]);

  const createCallback = (calls: Call[]) => {
    setOnGoingCalls((prev) => [...prev, ...calls]);
  };

  const updateCallback = (call?: Call) => {
    if (!call) return;

    if (call.status === CallStatus.FINALIZED) {
      setOnGoingCalls((prev) => prev.filter((prevCall) => prevCall.id !== call.id));
    } else {
      setOnGoingCalls((prev) => prev.map((prevCall) => prevCall.id === call.id ? call : prevCall));
    }
  }

  const deleteCallback = (call: Call) => {
    setOnGoingCalls((prev) => prev.filter((prevCall) => prevCall.id !== call.id));
  }

  const fallback = (error: Error) => {
    console.error(error);
  };

  useEffect(() => {
    const { getter, createSub, updateSub, deleteSub } = callSubFactory();

    const fetchCalls = async () => {
      const calls = await getter();
      console.log(calls);
      createCallback(calls);
    };

    fetchCalls();

    const formatter = (data?: Call) => data ? [data] : [];

    const createSubscriber = createSub.subscribe({
      next: (value) => createCallback(formatter(value?.data?.onCreateCall as Call)),
      error: (error) => fallback(error)
    });

    const updateSubscriber = updateSub.subscribe({
      next: (value) => updateCallback(value?.data?.onUpdateCall as Call),
      error: (error) => fallback(error)
    });

    const deleteSubscriber = deleteSub.subscribe({
      next: (value) => deleteCallback(value?.data?.onDeleteCall as Call),
      error: (error) => fallback(error)
    });

    return () => {
      createSubscriber.unsubscribe();
      updateSubscriber.unsubscribe();
      deleteSubscriber.unsubscribe();
    }
  }, []);

  return OnGoingCalls;
}