// Connection to AWS Connect to retrieve call data
// ronuma, may 2024
import { CONNECT_METRICS, CONNECT_ROUTING_PROFILES } from '@/constants'
import { CONNECT } from './config'
import { GetContactAttributesCommand, GetMetricDataV2Command } from '@aws-sdk/client-connect'

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

export const getMetrics = async () => {
  try {
    const params = {
      Metrics: CONNECT_METRICS.map((metricName) => ({ Name: metricName })),
      Groupings: [],
      MaxResults: 5,
      ResourceArn: process.env.CONNECT_INSTANCE_ARN,
      // A week ago
      StartTime: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      EndTime: new Date(),
      Filters: [
        {
          FilterKey: 'ROUTING_PROFILE',
          FilterValues: CONNECT_ROUTING_PROFILES,
        },
      ],
    }
    const command = new GetMetricDataV2Command(params)
    const response = await CONNECT.send(command)
    return response?.MetricResults?.[0]?.Collections
  } catch (error) {
    console.error('Error getting metrics:', error)
    return null
  }
}
