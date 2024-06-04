// Connection to AWS Connect to retrieve call data
// ronuma, may 2024
import { CONNECT } from './config'
import { GetContactAttributesCommand } from '@aws-sdk/client-connect'

export const getCallData = async ({ contactId }: { contactId: string }) => {
  try {
    const params = {
      InstanceId: process.env.CONNECT_INSTANCE_ID,
      InitialContactId: contactId,
    }
    const command = new GetContactAttributesCommand(params)
    const response = await CONNECT.send(command)
    return response
  } catch (error) {
    console.error('Error getting call data:', error)
    return null
  }
}
