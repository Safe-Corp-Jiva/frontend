import { generateClient } from 'aws-amplify/api';
import { onChunkByCallId } from '@/graphql/subscriptions';
import { chunksByCallId } from '@/graphql/queries';


const client = generateClient();

export const chunkSubFactory = (callId: string) => ({
  getter: async () => (
    client.graphql({
      query: chunksByCallId, 
        variables: {
          callId: callId
        }
    }).then(({ data }) => {
      return data?.chunksByCallId?.items ?? null
    })
  ),
  sub: client.graphql({
    query: onChunkByCallId, 
      variables: {
        callId
      }
  })
});

