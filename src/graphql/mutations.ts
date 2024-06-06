/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createAgent = /* GraphQL */ `mutation CreateAgent(
  $input: CreateAgentInput!
  $condition: ModelAgentConditionInput
) {
  createAgent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateAgentMutationVariables,
  APITypes.CreateAgentMutation
>;
export const updateAgent = /* GraphQL */ `mutation UpdateAgent(
  $input: UpdateAgentInput!
  $condition: ModelAgentConditionInput
) {
  updateAgent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateAgentMutationVariables,
  APITypes.UpdateAgentMutation
>;
export const deleteAgent = /* GraphQL */ `mutation DeleteAgent(
  $input: DeleteAgentInput!
  $condition: ModelAgentConditionInput
) {
  deleteAgent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteAgentMutationVariables,
  APITypes.DeleteAgentMutation
>;
export const createQueue = /* GraphQL */ `mutation CreateQueue(
  $input: CreateQueueInput!
  $condition: ModelQueueConditionInput
) {
  createQueue(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateQueueMutationVariables,
  APITypes.CreateQueueMutation
>;
export const updateQueue = /* GraphQL */ `mutation UpdateQueue(
  $input: UpdateQueueInput!
  $condition: ModelQueueConditionInput
) {
  updateQueue(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateQueueMutationVariables,
  APITypes.UpdateQueueMutation
>;
export const deleteQueue = /* GraphQL */ `mutation DeleteQueue(
  $input: DeleteQueueInput!
  $condition: ModelQueueConditionInput
) {
  deleteQueue(input: $input, condition: $condition) {
    id
    name
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteQueueMutationVariables,
  APITypes.DeleteQueueMutation
>;
export const createChunk = /* GraphQL */ `mutation CreateChunk(
  $input: CreateChunkInput!
  $condition: ModelChunkConditionInput
) {
  createChunk(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateChunkMutationVariables,
  APITypes.CreateChunkMutation
>;
export const updateChunk = /* GraphQL */ `mutation UpdateChunk(
  $input: UpdateChunkInput!
  $condition: ModelChunkConditionInput
) {
  updateChunk(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateChunkMutationVariables,
  APITypes.UpdateChunkMutation
>;
export const deleteChunk = /* GraphQL */ `mutation DeleteChunk(
  $input: DeleteChunkInput!
  $condition: ModelChunkConditionInput
) {
  deleteChunk(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteChunkMutationVariables,
  APITypes.DeleteChunkMutation
>;
export const createCaller = /* GraphQL */ `mutation CreateCaller(
  $input: CreateCallerInput!
  $condition: ModelCallerConditionInput
) {
  createCaller(input: $input, condition: $condition) {
    id
    name
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCallerMutationVariables,
  APITypes.CreateCallerMutation
>;
export const updateCaller = /* GraphQL */ `mutation UpdateCaller(
  $input: UpdateCallerInput!
  $condition: ModelCallerConditionInput
) {
  updateCaller(input: $input, condition: $condition) {
    id
    name
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCallerMutationVariables,
  APITypes.UpdateCallerMutation
>;
export const deleteCaller = /* GraphQL */ `mutation DeleteCaller(
  $input: DeleteCallerInput!
  $condition: ModelCallerConditionInput
) {
  deleteCaller(input: $input, condition: $condition) {
    id
    name
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCallerMutationVariables,
  APITypes.DeleteCallerMutation
>;
export const createCall = /* GraphQL */ `mutation CreateCall(
  $input: CreateCallInput!
  $condition: ModelCallConditionInput
) {
  createCall(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCallMutationVariables,
  APITypes.CreateCallMutation
>;
export const updateCall = /* GraphQL */ `mutation UpdateCall(
  $input: UpdateCallInput!
  $condition: ModelCallConditionInput
) {
  updateCall(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCallMutationVariables,
  APITypes.UpdateCallMutation
>;
export const deleteCall = /* GraphQL */ `mutation DeleteCall(
  $input: DeleteCallInput!
  $condition: ModelCallConditionInput
) {
  deleteCall(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCallMutationVariables,
  APITypes.DeleteCallMutation
>;
export const createMetric = /* GraphQL */ `mutation CreateMetric(
  $input: CreateMetricInput!
  $condition: ModelMetricConditionInput
) {
  createMetric(input: $input, condition: $condition) {
    id
    length
    waittime
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateMetricMutationVariables,
  APITypes.CreateMetricMutation
>;
export const updateMetric = /* GraphQL */ `mutation UpdateMetric(
  $input: UpdateMetricInput!
  $condition: ModelMetricConditionInput
) {
  updateMetric(input: $input, condition: $condition) {
    id
    length
    waittime
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateMetricMutationVariables,
  APITypes.UpdateMetricMutation
>;
export const deleteMetric = /* GraphQL */ `mutation DeleteMetric(
  $input: DeleteMetricInput!
  $condition: ModelMetricConditionInput
) {
  deleteMetric(input: $input, condition: $condition) {
    id
    length
    waittime
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteMetricMutationVariables,
  APITypes.DeleteMetricMutation
>;
export const createContactLensEvent = /* GraphQL */ `mutation CreateContactLensEvent(
  $input: CreateContactLensEventInput!
  $condition: ModelContactLensEventConditionInput
) {
  createContactLensEvent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateContactLensEventMutationVariables,
  APITypes.CreateContactLensEventMutation
>;
export const updateContactLensEvent = /* GraphQL */ `mutation UpdateContactLensEvent(
  $input: UpdateContactLensEventInput!
  $condition: ModelContactLensEventConditionInput
) {
  updateContactLensEvent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateContactLensEventMutationVariables,
  APITypes.UpdateContactLensEventMutation
>;
export const deleteContactLensEvent = /* GraphQL */ `mutation DeleteContactLensEvent(
  $input: DeleteContactLensEventInput!
  $condition: ModelContactLensEventConditionInput
) {
  deleteContactLensEvent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteContactLensEventMutationVariables,
  APITypes.DeleteContactLensEventMutation
>;
export const createTopics = /* GraphQL */ `mutation CreateTopics(
  $input: CreateTopicsInput!
  $condition: ModelTopicsConditionInput
) {
  createTopics(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateTopicsMutationVariables,
  APITypes.CreateTopicsMutation
>;
export const updateTopics = /* GraphQL */ `mutation UpdateTopics(
  $input: UpdateTopicsInput!
  $condition: ModelTopicsConditionInput
) {
  updateTopics(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateTopicsMutationVariables,
  APITypes.UpdateTopicsMutation
>;
export const deleteTopics = /* GraphQL */ `mutation DeleteTopics(
  $input: DeleteTopicsInput!
  $condition: ModelTopicsConditionInput
) {
  deleteTopics(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteTopicsMutationVariables,
  APITypes.DeleteTopicsMutation
>;
