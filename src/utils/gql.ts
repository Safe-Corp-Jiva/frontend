import { generateClient } from 'aws-amplify/api'
import { onChunkByCallId, onContactLensEvent, onUpdateTopics } from '@/graphql/subscriptions'
import { chunksByCallId, listTopics } from '@/graphql/queries'
import { CallStatus } from '@/API'
import { onCreateContactLensEventWithCreatedAt, customOnCreateCall, customOnDeleteCall, customOnUpdateCall, customListCalls } from '../graphql/custom'

const client = generateClient()

export const chunkSubFactory = (callId: string) => ({
  getter: async () =>
    client
      .graphql({
        query: chunksByCallId,
        variables: {
          callId,
        },
      })
      .then(({ data }) => {
        return data?.chunksByCallId?.items ?? null
      }),
  sub: client.graphql({
    query: onChunkByCallId,
    variables: {
      callId,
    },
  }),
})

export const callSubFactory = () => ({
  getter: async () => {
    return (
      client
        .graphql({
          query: customListCalls,
          variables: {
            filter: {
              status: {
                eq: CallStatus.STARTED,
              },
            },
          },
        })
        .then(({ data }) => {
          return data?.listCalls?.items ?? []
        })
    );
  },

  deleteSub: client.graphql({
    query: customOnDeleteCall,
  }),

  createSub: client.graphql({
    query: customOnCreateCall,
  }),
  
  updateSub: client.graphql({
    query: customOnUpdateCall,
  }),
})

export const contactLensEventSubFactory = () => ({
  sub: client.graphql({
    query: onContactLensEvent,
  }),
})

export const createContactLensSubFactory = () => ({
  sub: client.graphql({
    query: onCreateContactLensEventWithCreatedAt,
  }),
})

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
