import { generateClient } from 'aws-amplify/api';
import { onChunkByCallId, onCreateCall, onUpdateCall, onDeleteCall, onUpdateTopics } from '@/graphql/subscriptions';
import { chunksByCallId, listCalls, listTopics } from '@/graphql/queries';
import { CallStatus } from '@/API';

const client = generateClient();

export const topicSubFactory = () => ({
  getter: async () => (
    client.graphql({
      query: listTopics
    }).then(({ data }) => {
      return data?.listTopics?.items ?? [];
    })
  ),
  updateSub: client.graphql({
    query: onUpdateTopics
  }),
});


export const chunkSubFactory = (callId: string) => ({
  getter: async () => (
    client.graphql({
      query: chunksByCallId, 
      variables: {
        callId
      }
    }).then(({ data }) => {
      return data?.chunksByCallId?.items ?? null
    })
  ),
  sub: client.graphql({
    query: onChunkByCallId,
    variables: {
      callId,
    },
  })
});


export const callSubFactory = () => ({
  getter: async () => (
    client.graphql({
      query: listCalls,
      variables: {
        filter: {
          status: {
            eq: CallStatus.STARTED
          }
        }
      }
    }).then(({ data }) => {
      return data?.listCalls?.items ?? [];
    })
  ),
  createSub: client.graphql({
    query: onCreateCall
  }),
  updateSub: client.graphql({
    query: onUpdateCall
  }),
  deleteSub: client.graphql({
    query: onDeleteCall
  })
});