import { updateCall } from '@/graphql/mutations'
import { generateClient } from 'aws-amplify/api'

const client = generateClient()

export const onHelpClick = async (id: string, help: boolean) => {
  let res;
  try {
    res = await client.graphql({
      query: updateCall,
      variables: {
        input: {
          id,
          help,
        },
      }
    });

  } catch (error) {
    console.error('Error updating call:', error)
    return null
  }
  const callId = res?.data?.updateCall?.id;
  return callId ? callId : null
}

/* Usage Example:

  'use client'

  import { onHelpClick } from "/path/to/hooks"
  
  const SomeComponent = () => {
    return (
      <button onClick={onHelpClick(callId, help)}>Help</button>
    )
  }

*/
