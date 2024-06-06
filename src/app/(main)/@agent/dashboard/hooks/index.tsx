import { updateCall } from "@/graphql/mutations";
import { generateClient } from "aws-amplify/api";

const client = generateClient();

export const onHelpClick = (id: string, help: boolean) => async () => {
  try {
    const res = await client.graphql({
      query: updateCall,
      variables: {
        input: {
          id,
          help,
        },
      },
    });

    if(res?.data?.updateCall?.id) {
      console.log("Successfully updated call:", res.data.updateCall.id);
    } else {
      console.error("Failed to update call:", res);
    }

  } catch (error) {
    console.error("Error updating call:", error);
  }
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