/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateCaller = /* GraphQL */ `subscription OnCreateCaller($filter: ModelSubscriptionCallerFilterInput) {
  onCreateCaller(filter: $filter) {
    id
    phone
    sentiments
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
    sentiments
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
    sentiments
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
      sentiment
      length
      waittime
      createdAt
      updatedAt
      __typename
    }
    agentId
    createdAt
    updatedAt
    caller {
      id
      phone
      sentiments
      createdAt
      updatedAt
      __typename
    }
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
      sentiment
      length
      waittime
      createdAt
      updatedAt
      __typename
    }
    agentId
    createdAt
    updatedAt
    caller {
      id
      phone
      sentiments
      createdAt
      updatedAt
      __typename
    }
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
      sentiment
      length
      waittime
      createdAt
      updatedAt
      __typename
    }
    agentId
    createdAt
    updatedAt
    caller {
      id
      phone
      sentiments
      createdAt
      updatedAt
      __typename
    }
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
    sentiment
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
    sentiment
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
    sentiment
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
