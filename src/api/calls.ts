import { AMPLIFY_CLIENT } from './config'
import { listPastCalls } from '../graphql/custom'
import { CallStatus } from '@/API'

export const getPastCalls = async () => {
  // List calls and add to data object, which should be finalized
  const calls = await AMPLIFY_CLIENT.graphql({
    query: listPastCalls,
    variables: { filter: { status: { eq: CallStatus.FINALIZED } } },
  }).then(({ data }) => {
    const calls = data?.listCalls?.items ?? []
    return calls.sort((a: any, b: any) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    })
  })
  return calls
}
