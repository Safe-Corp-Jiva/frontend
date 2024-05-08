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
    phone
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
    phone
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
    phone
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
