/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCallerInput = {
  id?: string | null,
  phone: string,
  sentiments?: Array< Sentiment | null > | null,
};

export enum Sentiment {
  POSITIVE = "POSITIVE",
  NEUTRAL = "NEUTRAL",
  NEGATIVE = "NEGATIVE",
}


export type ModelCallerConditionInput = {
  phone?: ModelStringInput | null,
  sentiments?: ModelSentimentListInput | null,
  and?: Array< ModelCallerConditionInput | null > | null,
  or?: Array< ModelCallerConditionInput | null > | null,
  not?: ModelCallerConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelSentimentListInput = {
  eq?: Array< Sentiment | null > | null,
  ne?: Array< Sentiment | null > | null,
  contains?: Sentiment | null,
  notContains?: Sentiment | null,
};

export type Caller = {
  __typename: "Caller",
  id: string,
  phone: string,
  sentiments?: Array< Sentiment | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCallerInput = {
  id: string,
  phone?: string | null,
  sentiments?: Array< Sentiment | null > | null,
};

export type DeleteCallerInput = {
  id: string,
};

export type CreateCallInput = {
  id?: string | null,
  transcript?: S3ObjectInput | null,
  audio?: S3ObjectInput | null,
  agentId: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  callMetricsId: string,
  callCallerId?: string | null,
};

export type S3ObjectInput = {
  key?: string | null,
  bucketId?: string | null,
};

export type ModelCallConditionInput = {
  agentId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCallConditionInput | null > | null,
  or?: Array< ModelCallConditionInput | null > | null,
  not?: ModelCallConditionInput | null,
  callMetricsId?: ModelIDInput | null,
  callCallerId?: ModelIDInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Call = {
  __typename: "Call",
  id: string,
  transcript?: S3Object | null,
  audio?: S3Object | null,
  metrics: Metric,
  agentId: string,
  createdAt: string,
  updatedAt: string,
  caller?: Caller | null,
  callMetricsId: string,
  callCallerId?: string | null,
};

export type S3Object = {
  __typename: "S3Object",
  key?: string | null,
  bucketId?: string | null,
};

export type Metric = {
  __typename: "Metric",
  id: string,
  sentiment?: Array< Sentiment | null > | null,
  length?: number | null,
  waittime?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCallInput = {
  id: string,
  transcript?: S3ObjectInput | null,
  audio?: S3ObjectInput | null,
  agentId?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  callMetricsId?: string | null,
  callCallerId?: string | null,
};

export type DeleteCallInput = {
  id: string,
};

export type CreateMetricInput = {
  id?: string | null,
  sentiment?: Array< Sentiment | null > | null,
  length?: number | null,
  waittime?: number | null,
};

export type ModelMetricConditionInput = {
  sentiment?: ModelSentimentListInput | null,
  length?: ModelFloatInput | null,
  waittime?: ModelFloatInput | null,
  and?: Array< ModelMetricConditionInput | null > | null,
  or?: Array< ModelMetricConditionInput | null > | null,
  not?: ModelMetricConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateMetricInput = {
  id: string,
  sentiment?: Array< Sentiment | null > | null,
  length?: number | null,
  waittime?: number | null,
};

export type DeleteMetricInput = {
  id: string,
};

export type ModelCallerFilterInput = {
  id?: ModelIDInput | null,
  phone?: ModelStringInput | null,
  sentiments?: ModelSentimentListInput | null,
  and?: Array< ModelCallerFilterInput | null > | null,
  or?: Array< ModelCallerFilterInput | null > | null,
  not?: ModelCallerFilterInput | null,
};

export type ModelCallerConnection = {
  __typename: "ModelCallerConnection",
  items:  Array<Caller | null >,
  nextToken?: string | null,
};

export type ModelCallFilterInput = {
  id?: ModelIDInput | null,
  agentId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCallFilterInput | null > | null,
  or?: Array< ModelCallFilterInput | null > | null,
  not?: ModelCallFilterInput | null,
  callMetricsId?: ModelIDInput | null,
  callCallerId?: ModelIDInput | null,
};

export type ModelCallConnection = {
  __typename: "ModelCallConnection",
  items:  Array<Call | null >,
  nextToken?: string | null,
};

export type ModelMetricFilterInput = {
  id?: ModelIDInput | null,
  sentiment?: ModelSentimentListInput | null,
  length?: ModelFloatInput | null,
  waittime?: ModelFloatInput | null,
  and?: Array< ModelMetricFilterInput | null > | null,
  or?: Array< ModelMetricFilterInput | null > | null,
  not?: ModelMetricFilterInput | null,
};

export type ModelMetricConnection = {
  __typename: "ModelMetricConnection",
  items:  Array<Metric | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionCallerFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  phone?: ModelSubscriptionStringInput | null,
  sentiments?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCallerFilterInput | null > | null,
  or?: Array< ModelSubscriptionCallerFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionCallFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  agentId?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCallFilterInput | null > | null,
  or?: Array< ModelSubscriptionCallFilterInput | null > | null,
};

export type ModelSubscriptionMetricFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  sentiment?: ModelSubscriptionStringInput | null,
  length?: ModelSubscriptionFloatInput | null,
  waittime?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionMetricFilterInput | null > | null,
  or?: Array< ModelSubscriptionMetricFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateCallerMutationVariables = {
  input: CreateCallerInput,
  condition?: ModelCallerConditionInput | null,
};

export type CreateCallerMutation = {
  createCaller?:  {
    __typename: "Caller",
    id: string,
    phone: string,
    sentiments?: Array< Sentiment | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCallerMutationVariables = {
  input: UpdateCallerInput,
  condition?: ModelCallerConditionInput | null,
};

export type UpdateCallerMutation = {
  updateCaller?:  {
    __typename: "Caller",
    id: string,
    phone: string,
    sentiments?: Array< Sentiment | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCallerMutationVariables = {
  input: DeleteCallerInput,
  condition?: ModelCallerConditionInput | null,
};

export type DeleteCallerMutation = {
  deleteCaller?:  {
    __typename: "Caller",
    id: string,
    phone: string,
    sentiments?: Array< Sentiment | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCallMutationVariables = {
  input: CreateCallInput,
  condition?: ModelCallConditionInput | null,
};

export type CreateCallMutation = {
  createCall?:  {
    __typename: "Call",
    id: string,
    transcript?:  {
      __typename: "S3Object",
      key?: string | null,
      bucketId?: string | null,
    } | null,
    audio?:  {
      __typename: "S3Object",
      key?: string | null,
      bucketId?: string | null,
    } | null,
    metrics:  {
      __typename: "Metric",
      id: string,
      sentiment?: Array< Sentiment | null > | null,
      length?: number | null,
      waittime?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    agentId: string,
    createdAt: string,
    updatedAt: string,
    caller?:  {
      __typename: "Caller",
      id: string,
      phone: string,
      sentiments?: Array< Sentiment | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    callMetricsId: string,
    callCallerId?: string | null,
  } | null,
};

export type UpdateCallMutationVariables = {
  input: UpdateCallInput,
  condition?: ModelCallConditionInput | null,
};

export type UpdateCallMutation = {
  updateCall?:  {
    __typename: "Call",
    id: string,
    transcript?:  {
      __typename: "S3Object",
      key?: string | null,
      bucketId?: string | null,
    } | null,
    audio?:  {
      __typename: "S3Object",
      key?: string | null,
      bucketId?: string | null,
    } | null,
    metrics:  {
      __typename: "Metric",
      id: string,
      sentiment?: Array< Sentiment | null > | null,
      length?: number | null,
      waittime?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    agentId: string,
    createdAt: string,
    updatedAt: string,
    caller?:  {
      __typename: "Caller",
      id: string,
      phone: string,
      sentiments?: Array< Sentiment | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    callMetricsId: string,
    callCallerId?: string | null,
  } | null,
};

export type DeleteCallMutationVariables = {
  input: DeleteCallInput,
  condition?: ModelCallConditionInput | null,
};

export type DeleteCallMutation = {
  deleteCall?:  {
    __typename: "Call",
    id: string,
    transcript?:  {
      __typename: "S3Object",
      key?: string | null,
      bucketId?: string | null,
    } | null,
    audio?:  {
      __typename: "S3Object",
      key?: string | null,
      bucketId?: string | null,
    } | null,
    metrics:  {
      __typename: "Metric",
      id: string,
      sentiment?: Array< Sentiment | null > | null,
      length?: number | null,
      waittime?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    agentId: string,
    createdAt: string,
    updatedAt: string,
    caller?:  {
      __typename: "Caller",
      id: string,
      phone: string,
      sentiments?: Array< Sentiment | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    callMetricsId: string,
    callCallerId?: string | null,
  } | null,
};

export type CreateMetricMutationVariables = {
  input: CreateMetricInput,
  condition?: ModelMetricConditionInput | null,
};

export type CreateMetricMutation = {
  createMetric?:  {
    __typename: "Metric",
    id: string,
    sentiment?: Array< Sentiment | null > | null,
    length?: number | null,
    waittime?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMetricMutationVariables = {
  input: UpdateMetricInput,
  condition?: ModelMetricConditionInput | null,
};

export type UpdateMetricMutation = {
  updateMetric?:  {
    __typename: "Metric",
    id: string,
    sentiment?: Array< Sentiment | null > | null,
    length?: number | null,
    waittime?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMetricMutationVariables = {
  input: DeleteMetricInput,
  condition?: ModelMetricConditionInput | null,
};

export type DeleteMetricMutation = {
  deleteMetric?:  {
    __typename: "Metric",
    id: string,
    sentiment?: Array< Sentiment | null > | null,
    length?: number | null,
    waittime?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCallerQueryVariables = {
  id: string,
};

export type GetCallerQuery = {
  getCaller?:  {
    __typename: "Caller",
    id: string,
    phone: string,
    sentiments?: Array< Sentiment | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCallersQueryVariables = {
  filter?: ModelCallerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCallersQuery = {
  listCallers?:  {
    __typename: "ModelCallerConnection",
    items:  Array< {
      __typename: "Caller",
      id: string,
      phone: string,
      sentiments?: Array< Sentiment | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCallQueryVariables = {
  id: string,
};

export type GetCallQuery = {
  getCall?:  {
    __typename: "Call",
    id: string,
    transcript?:  {
      __typename: "S3Object",
      key?: string | null,
      bucketId?: string | null,
    } | null,
    audio?:  {
      __typename: "S3Object",
      key?: string | null,
      bucketId?: string | null,
    } | null,
    metrics:  {
      __typename: "Metric",
      id: string,
      sentiment?: Array< Sentiment | null > | null,
      length?: number | null,
      waittime?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    agentId: string,
    createdAt: string,
    updatedAt: string,
    caller?:  {
      __typename: "Caller",
      id: string,
      phone: string,
      sentiments?: Array< Sentiment | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    callMetricsId: string,
    callCallerId?: string | null,
  } | null,
};

export type ListCallsQueryVariables = {
  filter?: ModelCallFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCallsQuery = {
  listCalls?:  {
    __typename: "ModelCallConnection",
    items:  Array< {
      __typename: "Call",
      id: string,
      agentId: string,
      createdAt: string,
      updatedAt: string,
      callMetricsId: string,
      callCallerId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMetricQueryVariables = {
  id: string,
};

export type GetMetricQuery = {
  getMetric?:  {
    __typename: "Metric",
    id: string,
    sentiment?: Array< Sentiment | null > | null,
    length?: number | null,
    waittime?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMetricsQueryVariables = {
  filter?: ModelMetricFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMetricsQuery = {
  listMetrics?:  {
    __typename: "ModelMetricConnection",
    items:  Array< {
      __typename: "Metric",
      id: string,
      sentiment?: Array< Sentiment | null > | null,
      length?: number | null,
      waittime?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCallerSubscriptionVariables = {
  filter?: ModelSubscriptionCallerFilterInput | null,
};

export type OnCreateCallerSubscription = {
  onCreateCaller?:  {
    __typename: "Caller",
    id: string,
    phone: string,
    sentiments?: Array< Sentiment | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCallerSubscriptionVariables = {
  filter?: ModelSubscriptionCallerFilterInput | null,
};

export type OnUpdateCallerSubscription = {
  onUpdateCaller?:  {
    __typename: "Caller",
    id: string,
    phone: string,
    sentiments?: Array< Sentiment | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCallerSubscriptionVariables = {
  filter?: ModelSubscriptionCallerFilterInput | null,
};

export type OnDeleteCallerSubscription = {
  onDeleteCaller?:  {
    __typename: "Caller",
    id: string,
    phone: string,
    sentiments?: Array< Sentiment | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCallSubscriptionVariables = {
  filter?: ModelSubscriptionCallFilterInput | null,
};

export type OnCreateCallSubscription = {
  onCreateCall?:  {
    __typename: "Call",
    id: string,
    transcript?:  {
      __typename: "S3Object",
      key?: string | null,
      bucketId?: string | null,
    } | null,
    audio?:  {
      __typename: "S3Object",
      key?: string | null,
      bucketId?: string | null,
    } | null,
    metrics:  {
      __typename: "Metric",
      id: string,
      sentiment?: Array< Sentiment | null > | null,
      length?: number | null,
      waittime?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    agentId: string,
    createdAt: string,
    updatedAt: string,
    caller?:  {
      __typename: "Caller",
      id: string,
      phone: string,
      sentiments?: Array< Sentiment | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    callMetricsId: string,
    callCallerId?: string | null,
  } | null,
};

export type OnUpdateCallSubscriptionVariables = {
  filter?: ModelSubscriptionCallFilterInput | null,
};

export type OnUpdateCallSubscription = {
  onUpdateCall?:  {
    __typename: "Call",
    id: string,
    transcript?:  {
      __typename: "S3Object",
      key?: string | null,
      bucketId?: string | null,
    } | null,
    audio?:  {
      __typename: "S3Object",
      key?: string | null,
      bucketId?: string | null,
    } | null,
    metrics:  {
      __typename: "Metric",
      id: string,
      sentiment?: Array< Sentiment | null > | null,
      length?: number | null,
      waittime?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    agentId: string,
    createdAt: string,
    updatedAt: string,
    caller?:  {
      __typename: "Caller",
      id: string,
      phone: string,
      sentiments?: Array< Sentiment | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    callMetricsId: string,
    callCallerId?: string | null,
  } | null,
};

export type OnDeleteCallSubscriptionVariables = {
  filter?: ModelSubscriptionCallFilterInput | null,
};

export type OnDeleteCallSubscription = {
  onDeleteCall?:  {
    __typename: "Call",
    id: string,
    transcript?:  {
      __typename: "S3Object",
      key?: string | null,
      bucketId?: string | null,
    } | null,
    audio?:  {
      __typename: "S3Object",
      key?: string | null,
      bucketId?: string | null,
    } | null,
    metrics:  {
      __typename: "Metric",
      id: string,
      sentiment?: Array< Sentiment | null > | null,
      length?: number | null,
      waittime?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    agentId: string,
    createdAt: string,
    updatedAt: string,
    caller?:  {
      __typename: "Caller",
      id: string,
      phone: string,
      sentiments?: Array< Sentiment | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    callMetricsId: string,
    callCallerId?: string | null,
  } | null,
};

export type OnCreateMetricSubscriptionVariables = {
  filter?: ModelSubscriptionMetricFilterInput | null,
};

export type OnCreateMetricSubscription = {
  onCreateMetric?:  {
    __typename: "Metric",
    id: string,
    sentiment?: Array< Sentiment | null > | null,
    length?: number | null,
    waittime?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMetricSubscriptionVariables = {
  filter?: ModelSubscriptionMetricFilterInput | null,
};

export type OnUpdateMetricSubscription = {
  onUpdateMetric?:  {
    __typename: "Metric",
    id: string,
    sentiment?: Array< Sentiment | null > | null,
    length?: number | null,
    waittime?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMetricSubscriptionVariables = {
  filter?: ModelSubscriptionMetricFilterInput | null,
};

export type OnDeleteMetricSubscription = {
  onDeleteMetric?:  {
    __typename: "Metric",
    id: string,
    sentiment?: Array< Sentiment | null > | null,
    length?: number | null,
    waittime?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
