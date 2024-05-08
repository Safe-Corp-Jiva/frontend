/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

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
    phone
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
    phone
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
    phone
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
      phone
      createdAt
      updatedAt
      __typename
    }
    status
    chunks {
      nextToken
      __typename
    }
    updatedAt
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
      phone
      createdAt
      updatedAt
      __typename
    }
    status
    chunks {
      nextToken
      __typename
    }
    updatedAt
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
      phone
      createdAt
      updatedAt
      __typename
    }
    status
    chunks {
      nextToken
      __typename
    }
    updatedAt
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
