import { AMPLIFY_CLIENT } from './config'
import { listPastCalls } from '@/graphql/queries'
import { CallStatus } from '@/API'

export const getPastCalls = async () => {
  // List calls and add to data object, which should be finalized
  const calls = await AMPLIFY_CLIENT.graphql({
    query: listPastCalls,
    // variables: { filter: { status: { eq: CallStatus.FINALIZED } } },
  }).then(({ data }) => data?.listCalls?.items ?? [])
  return calls
}
