import { LAMBDA_CLIENT } from './config'
import { InvokeCommand } from '@aws-sdk/client-lambda'

export const getQueues = async () => {
  const res: any = await fetch('https://fgl72sxlnfrbucwz2uo647cv7y0jaxlr.lambda-url.us-east-1.on.aws/', {
    method: 'GET',
    headers: {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
    },
    cache: 'no-store',
  }).then((res) => res.json())

  const queues: any = {}

  Object.keys(res)
    .filter((key: string) => key == 'Bookings' || key == 'Cancellations' || key == 'Information')
    .forEach((key: string) => {
      queues[key] = {
        id: key,
        title: key,
        route_id: res[key].rout_id,
        taskIds: Object.keys(res[key].agents).map((agentKey) => res[key].agents[agentKey].id),
      }
    })

  const tasks: any = Object.keys(res).reduce((acc, key) => {
    const queue = res[key]
    const agents = Object.keys(queue.agents).map((agentKey) => queue.agents[agentKey])
    const agentTasks = agents.map((agent) => {
      return {
        id: agent.id,
        content: agent.username,
      }
    })
    return {
      ...acc,
      ...agentTasks.reduce((acc, task) => {
        return {
          ...acc,
          [task.id]: task,
        }
      }, {}),
    }
  }, {})

  return {
    columns: queues,
    tasks,
  }
}

export const updateQueue = async (user_id: string, target_route: string) => {
  const input = {
    FunctionName: 'single_routing_profile_switch',
    Payload: JSON.stringify({
      user_id,
      target_route,
    }),
  }
  const command = new InvokeCommand(input)
  const res = await LAMBDA_CLIENT.send(command)
  return res
}
