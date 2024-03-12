/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getCaller = /* GraphQL */ `query GetCaller($id: ID!) {
  getCaller(id: $id) {
    id
    phone
    sentiments
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
      phone
      sentiments
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
` as GeneratedQuery<APITypes.GetCallQueryVariables, APITypes.GetCallQuery>;
export const listCalls = /* GraphQL */ `query ListCalls(
  $filter: ModelCallFilterInput
  $limit: Int
  $nextToken: String
) {
  listCalls(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      agentId
      createdAt
      updatedAt
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
    sentiment
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
      sentiment
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
` as GeneratedQuery<
  APITypes.ListMetricsQueryVariables,
  APITypes.ListMetricsQuery
>;
