/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onChunkByCallId = /* GraphQL */ `subscription OnChunkByCallId($callId: ID!) {
  onChunkByCallId(callId: $callId) {
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
` as GeneratedSubscription<
  APITypes.OnChunkByCallIdSubscriptionVariables,
  APITypes.OnChunkByCallIdSubscription
>;
export const onContactLensEvent = /* GraphQL */ `subscription OnContactLensEvent {
  onContactLensEvent {
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
` as GeneratedSubscription<
  APITypes.OnContactLensEventSubscriptionVariables,
  APITypes.OnContactLensEventSubscription
>;
export const onCreateAgent = /* GraphQL */ `subscription OnCreateAgent($filter: ModelSubscriptionAgentFilterInput) {
  onCreateAgent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAgentSubscriptionVariables,
  APITypes.OnCreateAgentSubscription
>;
export const onUpdateAgent = /* GraphQL */ `subscription OnUpdateAgent($filter: ModelSubscriptionAgentFilterInput) {
  onUpdateAgent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAgentSubscriptionVariables,
  APITypes.OnUpdateAgentSubscription
>;
export const onDeleteAgent = /* GraphQL */ `subscription OnDeleteAgent($filter: ModelSubscriptionAgentFilterInput) {
  onDeleteAgent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAgentSubscriptionVariables,
  APITypes.OnDeleteAgentSubscription
>;
export const onCreateQueue = /* GraphQL */ `subscription OnCreateQueue($filter: ModelSubscriptionQueueFilterInput) {
  onCreateQueue(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateQueueSubscriptionVariables,
  APITypes.OnCreateQueueSubscription
>;
export const onUpdateQueue = /* GraphQL */ `subscription OnUpdateQueue($filter: ModelSubscriptionQueueFilterInput) {
  onUpdateQueue(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateQueueSubscriptionVariables,
  APITypes.OnUpdateQueueSubscription
>;
export const onDeleteQueue = /* GraphQL */ `subscription OnDeleteQueue($filter: ModelSubscriptionQueueFilterInput) {
  onDeleteQueue(filter: $filter) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteQueueSubscriptionVariables,
  APITypes.OnDeleteQueueSubscription
>;
export const onCreateChunk = /* GraphQL */ `subscription OnCreateChunk($filter: ModelSubscriptionChunkFilterInput) {
  onCreateChunk(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateChunkSubscriptionVariables,
  APITypes.OnCreateChunkSubscription
>;
export const onUpdateChunk = /* GraphQL */ `subscription OnUpdateChunk($filter: ModelSubscriptionChunkFilterInput) {
  onUpdateChunk(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateChunkSubscriptionVariables,
  APITypes.OnUpdateChunkSubscription
>;
export const onDeleteChunk = /* GraphQL */ `subscription OnDeleteChunk($filter: ModelSubscriptionChunkFilterInput) {
  onDeleteChunk(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteChunkSubscriptionVariables,
  APITypes.OnDeleteChunkSubscription
>;
export const onCreateCaller = /* GraphQL */ `subscription OnCreateCaller($filter: ModelSubscriptionCallerFilterInput) {
  onCreateCaller(filter: $filter) {
    id
    name
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCallerSubscriptionVariables,
  APITypes.OnCreateCallerSubscription
>;
export const onUpdateCaller = /* GraphQL */ `subscription OnUpdateCaller($filter: ModelSubscriptionCallerFilterInput) {
  onUpdateCaller(filter: $filter) {
    id
    name
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCallerSubscriptionVariables,
  APITypes.OnUpdateCallerSubscription
>;
export const onDeleteCaller = /* GraphQL */ `subscription OnDeleteCaller($filter: ModelSubscriptionCallerFilterInput) {
  onDeleteCaller(filter: $filter) {
    id
    name
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCallerSubscriptionVariables,
  APITypes.OnDeleteCallerSubscription
>;
export const onCreateCall = /* GraphQL */ `subscription OnCreateCall($filter: ModelSubscriptionCallFilterInput) {
  onCreateCall(filter: $filter) {
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
    result
    updatedAt
    topicsCallsId
    callAgentId
    callQueueId
    callMetricsId
    callCallerId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCallSubscriptionVariables,
  APITypes.OnCreateCallSubscription
>;
export const onUpdateCall = /* GraphQL */ `subscription OnUpdateCall($filter: ModelSubscriptionCallFilterInput) {
  onUpdateCall(filter: $filter) {
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
    result
    updatedAt
    topicsCallsId
    callAgentId
    callQueueId
    callMetricsId
    callCallerId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCallSubscriptionVariables,
  APITypes.OnUpdateCallSubscription
>;
export const onDeleteCall = /* GraphQL */ `subscription OnDeleteCall($filter: ModelSubscriptionCallFilterInput) {
  onDeleteCall(filter: $filter) {
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
    result
    updatedAt
    topicsCallsId
    callAgentId
    callQueueId
    callMetricsId
    callCallerId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCallSubscriptionVariables,
  APITypes.OnDeleteCallSubscription
>;
export const onCreateMetric = /* GraphQL */ `subscription OnCreateMetric($filter: ModelSubscriptionMetricFilterInput) {
  onCreateMetric(filter: $filter) {
    id
    length
    waittime
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMetricSubscriptionVariables,
  APITypes.OnCreateMetricSubscription
>;
export const onUpdateMetric = /* GraphQL */ `subscription OnUpdateMetric($filter: ModelSubscriptionMetricFilterInput) {
  onUpdateMetric(filter: $filter) {
    id
    length
    waittime
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMetricSubscriptionVariables,
  APITypes.OnUpdateMetricSubscription
>;
export const onDeleteMetric = /* GraphQL */ `subscription OnDeleteMetric($filter: ModelSubscriptionMetricFilterInput) {
  onDeleteMetric(filter: $filter) {
    id
    length
    waittime
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMetricSubscriptionVariables,
  APITypes.OnDeleteMetricSubscription
>;
export const onCreateContactLensEvent = /* GraphQL */ `subscription OnCreateContactLensEvent(
  $filter: ModelSubscriptionContactLensEventFilterInput
) {
  onCreateContactLensEvent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateContactLensEventSubscriptionVariables,
  APITypes.OnCreateContactLensEventSubscription
>;
export const onUpdateContactLensEvent = /* GraphQL */ `subscription OnUpdateContactLensEvent(
  $filter: ModelSubscriptionContactLensEventFilterInput
) {
  onUpdateContactLensEvent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateContactLensEventSubscriptionVariables,
  APITypes.OnUpdateContactLensEventSubscription
>;
export const onDeleteContactLensEvent = /* GraphQL */ `subscription OnDeleteContactLensEvent(
  $filter: ModelSubscriptionContactLensEventFilterInput
) {
  onDeleteContactLensEvent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteContactLensEventSubscriptionVariables,
  APITypes.OnDeleteContactLensEventSubscription
>;
export const onCreateTopics = /* GraphQL */ `subscription OnCreateTopics($filter: ModelSubscriptionTopicsFilterInput) {
  onCreateTopics(filter: $filter) {
    id
    name
    description
    calls {
      nextToken
      __typename
    }
    count
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTopicsSubscriptionVariables,
  APITypes.OnCreateTopicsSubscription
>;
export const onUpdateTopics = /* GraphQL */ `subscription OnUpdateTopics($filter: ModelSubscriptionTopicsFilterInput) {
  onUpdateTopics(filter: $filter) {
    id
    name
    description
    calls {
      nextToken
      __typename
    }
    count
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTopicsSubscriptionVariables,
  APITypes.OnUpdateTopicsSubscription
>;
export const onDeleteTopics = /* GraphQL */ `subscription OnDeleteTopics($filter: ModelSubscriptionTopicsFilterInput) {
  onDeleteTopics(filter: $filter) {
    id
    name
    description
    calls {
      nextToken
      __typename
    }
    count
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTopicsSubscriptionVariables,
  APITypes.OnDeleteTopicsSubscription
>;
