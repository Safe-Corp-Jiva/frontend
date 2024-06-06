/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getAgent = /* GraphQL */ `query GetAgent($id: ID!) {
  getAgent(id: $id) {
    id
    username
    lastName
    firstName
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetAgentQueryVariables, APITypes.GetAgentQuery>;
export const listAgents = /* GraphQL */ `query ListAgents(
  $filter: ModelAgentFilterInput
  $limit: Int
  $nextToken: String
) {
  listAgents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      lastName
      firstName
      email
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAgentsQueryVariables,
  APITypes.ListAgentsQuery
>;
export const getQueue = /* GraphQL */ `query GetQueue($id: ID!) {
  getQueue(id: $id) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetQueueQueryVariables, APITypes.GetQueueQuery>;
export const listQueues = /* GraphQL */ `query ListQueues(
  $filter: ModelQueueFilterInput
  $limit: Int
  $nextToken: String
) {
  listQueues(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListQueuesQueryVariables,
  APITypes.ListQueuesQuery
>;
export const getChunk = /* GraphQL */ `query GetChunk($id: ID!) {
  getChunk(id: $id) {
    id
    sentiment
    content {
      role
      text
      __typename
    }
    callId
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetChunkQueryVariables, APITypes.GetChunkQuery>;
export const listChunks = /* GraphQL */ `query ListChunks(
  $filter: ModelChunkFilterInput
  $limit: Int
  $nextToken: String
) {
  listChunks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      sentiment
      callId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListChunksQueryVariables,
  APITypes.ListChunksQuery
>;
export const chunksByCallId = /* GraphQL */ `query ChunksByCallId(
  $callId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelChunkFilterInput
  $limit: Int
  $nextToken: String
) {
  chunksByCallId(
    callId: $callId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      sentiment
      callId
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ChunksByCallIdQueryVariables,
  APITypes.ChunksByCallIdQuery
>;
export const getCaller = /* GraphQL */ `query GetCaller($id: ID!) {
  getCaller(id: $id) {
    id
    name
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetCallerQueryVariables, APITypes.GetCallerQuery>;
export const listCallers = /* GraphQL */ `query ListCallers(
  $filter: ModelCallerFilterInput
  $limit: Int
  $nextToken: String
) {
  listCallers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      email
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCallersQueryVariables,
  APITypes.ListCallersQuery
>;
export const getCall = /* GraphQL */ `query GetCall($id: ID!) {
  getCall(id: $id) {
    id
    transcript {
      key
      bucketId
      __typename
    }
    audio {
      key
      bucketId
      __typename
    }
    agent {
      id
      username
      lastName
      firstName
      email
      createdAt
      updatedAt
      __typename
    }
    queue {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    metrics {
      id
      length
      waittime
      createdAt
      updatedAt
      __typename
    }
    createdAt
    caller {
      id
      name
      email
      createdAt
      updatedAt
      __typename
    }
    status
    chunks {
      nextToken
      __typename
    }
    topic {
      id
      name
      description
      count
      createdAt
      updatedAt
      __typename
    }
    help
    updatedAt
    topicsCallsId
    callAgentId
    callQueueId
    callMetricsId
    callCallerId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetCallQueryVariables, APITypes.GetCallQuery>;
export const listCalls = /* GraphQL */ `query ListCalls(
  $filter: ModelCallFilterInput
  $limit: Int
  $nextToken: String
) {
  listCalls(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      status
      help
      updatedAt
      topicsCallsId
      callAgentId
      callQueueId
      callMetricsId
      callCallerId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListCallsQueryVariables, APITypes.ListCallsQuery>;
export const getMetric = /* GraphQL */ `query GetMetric($id: ID!) {
  getMetric(id: $id) {
    id
    length
    waittime
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetMetricQueryVariables, APITypes.GetMetricQuery>;
export const listMetrics = /* GraphQL */ `query ListMetrics(
  $filter: ModelMetricFilterInput
  $limit: Int
  $nextToken: String
) {
  listMetrics(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      length
      waittime
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListMetricsQueryVariables, APITypes.ListMetricsQuery>
export const getContactLensEvent = /* GraphQL */ `query GetContactLensEvent($id: ID!) {
  getContactLensEvent(id: $id) {
    id
    ruleName
    actionName
    instanceArn
    contactArn
    agentArn
    queueArn
    timestamp
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetContactLensEventQueryVariables, APITypes.GetContactLensEventQuery>
export const listContactLensEvents = /* GraphQL */ `query ListContactLensEvents(
  $filter: ModelContactLensEventFilterInput
  $limit: Int
  $nextToken: String
) {
  listContactLensEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      ruleName
      actionName
      instanceArn
      contactArn
      agentArn
      queueArn
      timestamp
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListContactLensEventsQueryVariables, APITypes.ListContactLensEventsQuery>
