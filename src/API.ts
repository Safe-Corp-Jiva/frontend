/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAgentInput = {
  id?: string | null,
  username?: string | null,
};

export type ModelAgentConditionInput = {
  username?: ModelStringInput | null,
  and?: Array< ModelAgentConditionInput | null > | null,
  or?: Array< ModelAgentConditionInput | null > | null,
  not?: ModelAgentConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
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

export type Agent = {
  __typename: "Agent",
  id: string,
  username?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAgentInput = {
  id: string,
  username?: string | null,
};

export type DeleteAgentInput = {
  id: string,
};

export type CreateQueueInput = {
  id?: string | null,
  name?: string | null,
};

export type ModelQueueConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelQueueConditionInput | null > | null,
  or?: Array< ModelQueueConditionInput | null > | null,
  not?: ModelQueueConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Queue = {
  __typename: "Queue",
  id: string,
  name?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateQueueInput = {
  id: string,
  name?: string | null,
};

export type DeleteQueueInput = {
  id: string,
};

export type CreateChunkInput = {
  id?: string | null,
  sentiment?: Sentiment | null,
  content?: ChunkContentInput | null,
  callId: string,
};

export enum Sentiment {
  NEGATIVE = "NEGATIVE",
  NEUTRAL = "NEUTRAL",
  POSITIVE = "POSITIVE",
  UNDEFINED = "UNDEFINED",
}


export type ChunkContentInput = {
  role?: TranscriptRole | null,
  text?: string | null,
};

export enum TranscriptRole {
  AGENT = "AGENT",
  CUSTOMER = "CUSTOMER",
}


export type ModelChunkConditionInput = {
  sentiment?: ModelSentimentInput | null,
  callId?: ModelIDInput | null,
  and?: Array< ModelChunkConditionInput | null > | null,
  or?: Array< ModelChunkConditionInput | null > | null,
  not?: ModelChunkConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelSentimentInput = {
  eq?: Sentiment | null,
  ne?: Sentiment | null,
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

export type Chunk = {
  __typename: "Chunk",
  id: string,
  sentiment?: Sentiment | null,
  content?: ChunkContent | null,
  callId: string,
  createdAt: string,
  updatedAt: string,
};

export type ChunkContent = {
  __typename: "ChunkContent",
  role?: TranscriptRole | null,
  text?: string | null,
};

export type UpdateChunkInput = {
  id: string,
  sentiment?: Sentiment | null,
  content?: ChunkContentInput | null,
  callId?: string | null,
};

export type DeleteChunkInput = {
  id: string,
};

export type CreateCallerInput = {
  id: string,
  name?: string | null,
  email?: string | null,
};

export type ModelCallerConditionInput = {
  id?: ModelStringInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelCallerConditionInput | null > | null,
  or?: Array< ModelCallerConditionInput | null > | null,
  not?: ModelCallerConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Caller = {
  __typename: "Caller",
  id: string,
  name?: string | null,
  email?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCallerInput = {
  id: string,
  name?: string | null,
  email?: string | null,
};

export type DeleteCallerInput = {
  id: string,
};

export type CreateCallInput = {
  id?: string | null,
  transcript?: S3ObjectInput | null,
  audio?: S3ObjectInput | null,
  createdAt?: string | null,
  status: CallStatus,
  callAgentId?: string | null,
  callQueueId?: string | null,
  callMetricsId: string,
  callCallerId?: string | null,
};

export type S3ObjectInput = {
  key?: string | null,
  bucketId?: string | null,
};

export enum CallStatus {
  STARTED = "STARTED",
  FINALIZED = "FINALIZED",
}


export type ModelCallConditionInput = {
  createdAt?: ModelStringInput | null,
  status?: ModelCallStatusInput | null,
  and?: Array< ModelCallConditionInput | null > | null,
  or?: Array< ModelCallConditionInput | null > | null,
  not?: ModelCallConditionInput | null,
  updatedAt?: ModelStringInput | null,
  callAgentId?: ModelIDInput | null,
  callQueueId?: ModelIDInput | null,
  callMetricsId?: ModelIDInput | null,
  callCallerId?: ModelIDInput | null,
};

export type ModelCallStatusInput = {
  eq?: CallStatus | null,
  ne?: CallStatus | null,
};

export type Call = {
  __typename: "Call",
  id: string,
  transcript?: S3Object | null,
  audio?: S3Object | null,
  agent?: Agent | null,
  queue?: Queue | null,
  metrics: Metric,
  createdAt: string,
  caller?: Caller | null,
  status: CallStatus,
  chunks?: ModelChunkConnection | null,
  updatedAt: string,
  callAgentId?: string | null,
  callQueueId?: string | null,
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
  length?: number | null,
  waittime?: number | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelChunkConnection = {
  __typename: "ModelChunkConnection",
  items:  Array<Chunk | null >,
  nextToken?: string | null,
};

export type UpdateCallInput = {
  id: string,
  transcript?: S3ObjectInput | null,
  audio?: S3ObjectInput | null,
  createdAt?: string | null,
  status?: CallStatus | null,
  callAgentId?: string | null,
  callQueueId?: string | null,
  callMetricsId?: string | null,
  callCallerId?: string | null,
};

export type DeleteCallInput = {
  id: string,
};

export type CreateMetricInput = {
  id?: string | null,
  length?: number | null,
  waittime?: number | null,
};

export type ModelMetricConditionInput = {
  length?: ModelFloatInput | null,
  waittime?: ModelFloatInput | null,
  and?: Array< ModelMetricConditionInput | null > | null,
  or?: Array< ModelMetricConditionInput | null > | null,
  not?: ModelMetricConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
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
  length?: number | null,
  waittime?: number | null,
};

export type DeleteMetricInput = {
  id: string,
};

export type ModelAgentFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelAgentFilterInput | null > | null,
  or?: Array< ModelAgentFilterInput | null > | null,
  not?: ModelAgentFilterInput | null,
};

export type ModelAgentConnection = {
  __typename: "ModelAgentConnection",
  items:  Array<Agent | null >,
  nextToken?: string | null,
};

export type ModelQueueFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelQueueFilterInput | null > | null,
  or?: Array< ModelQueueFilterInput | null > | null,
  not?: ModelQueueFilterInput | null,
};

export type ModelQueueConnection = {
  __typename: "ModelQueueConnection",
  items:  Array<Queue | null >,
  nextToken?: string | null,
};

export type ModelChunkFilterInput = {
  id?: ModelIDInput | null,
  sentiment?: ModelSentimentInput | null,
  callId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelChunkFilterInput | null > | null,
  or?: Array< ModelChunkFilterInput | null > | null,
  not?: ModelChunkFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelCallerFilterInput = {
  id?: ModelStringInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
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
  createdAt?: ModelStringInput | null,
  status?: ModelCallStatusInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCallFilterInput | null > | null,
  or?: Array< ModelCallFilterInput | null > | null,
  not?: ModelCallFilterInput | null,
  callAgentId?: ModelIDInput | null,
  callQueueId?: ModelIDInput | null,
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
  length?: ModelFloatInput | null,
  waittime?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMetricFilterInput | null > | null,
  or?: Array< ModelMetricFilterInput | null > | null,
  not?: ModelMetricFilterInput | null,
};

export type ModelMetricConnection = {
  __typename: "ModelMetricConnection",
  items:  Array<Metric | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionAgentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAgentFilterInput | null > | null,
  or?: Array< ModelSubscriptionAgentFilterInput | null > | null,
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

export type ModelSubscriptionQueueFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionQueueFilterInput | null > | null,
  or?: Array< ModelSubscriptionQueueFilterInput | null > | null,
};

export type ModelSubscriptionChunkFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  sentiment?: ModelSubscriptionStringInput | null,
  callId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionChunkFilterInput | null > | null,
  or?: Array< ModelSubscriptionChunkFilterInput | null > | null,
};

export type ModelSubscriptionCallerFilterInput = {
  id?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCallerFilterInput | null > | null,
  or?: Array< ModelSubscriptionCallerFilterInput | null > | null,
};

export type ModelSubscriptionCallFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCallFilterInput | null > | null,
  or?: Array< ModelSubscriptionCallFilterInput | null > | null,
  callAgentId?: ModelSubscriptionIDInput | null,
  callQueueId?: ModelSubscriptionIDInput | null,
  callMetricsId?: ModelSubscriptionIDInput | null,
  callCallerId?: ModelSubscriptionIDInput | null,
};

export type ModelSubscriptionMetricFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  length?: ModelSubscriptionFloatInput | null,
  waittime?: ModelSubscriptionFloatInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
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

export type CreateAgentMutationVariables = {
  input: CreateAgentInput,
  condition?: ModelAgentConditionInput | null,
};

export type CreateAgentMutation = {
  createAgent?:  {
    __typename: "Agent",
    id: string,
    username?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAgentMutationVariables = {
  input: UpdateAgentInput,
  condition?: ModelAgentConditionInput | null,
};

export type UpdateAgentMutation = {
  updateAgent?:  {
    __typename: "Agent",
    id: string,
    username?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAgentMutationVariables = {
  input: DeleteAgentInput,
  condition?: ModelAgentConditionInput | null,
};

export type DeleteAgentMutation = {
  deleteAgent?:  {
    __typename: "Agent",
    id: string,
    username?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateQueueMutationVariables = {
  input: CreateQueueInput,
  condition?: ModelQueueConditionInput | null,
};

export type CreateQueueMutation = {
  createQueue?:  {
    __typename: "Queue",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateQueueMutationVariables = {
  input: UpdateQueueInput,
  condition?: ModelQueueConditionInput | null,
};

export type UpdateQueueMutation = {
  updateQueue?:  {
    __typename: "Queue",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteQueueMutationVariables = {
  input: DeleteQueueInput,
  condition?: ModelQueueConditionInput | null,
};

export type DeleteQueueMutation = {
  deleteQueue?:  {
    __typename: "Queue",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateChunkMutationVariables = {
  input: CreateChunkInput,
  condition?: ModelChunkConditionInput | null,
};

export type CreateChunkMutation = {
  createChunk?:  {
    __typename: "Chunk",
    id: string,
    sentiment?: Sentiment | null,
    content?:  {
      __typename: "ChunkContent",
      role?: TranscriptRole | null,
      text?: string | null,
    } | null,
    callId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChunkMutationVariables = {
  input: UpdateChunkInput,
  condition?: ModelChunkConditionInput | null,
};

export type UpdateChunkMutation = {
  updateChunk?:  {
    __typename: "Chunk",
    id: string,
    sentiment?: Sentiment | null,
    content?:  {
      __typename: "ChunkContent",
      role?: TranscriptRole | null,
      text?: string | null,
    } | null,
    callId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChunkMutationVariables = {
  input: DeleteChunkInput,
  condition?: ModelChunkConditionInput | null,
};

export type DeleteChunkMutation = {
  deleteChunk?:  {
    __typename: "Chunk",
    id: string,
    sentiment?: Sentiment | null,
    content?:  {
      __typename: "ChunkContent",
      role?: TranscriptRole | null,
      text?: string | null,
    } | null,
    callId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCallerMutationVariables = {
  input: CreateCallerInput,
  condition?: ModelCallerConditionInput | null,
};

export type CreateCallerMutation = {
  createCaller?:  {
    __typename: "Caller",
    id: string,
    name?: string | null,
    email?: string | null,
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
    name?: string | null,
    email?: string | null,
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
    name?: string | null,
    email?: string | null,
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
    agent?:  {
      __typename: "Agent",
      id: string,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    queue?:  {
      __typename: "Queue",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    metrics:  {
      __typename: "Metric",
      id: string,
      length?: number | null,
      waittime?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    caller?:  {
      __typename: "Caller",
      id: string,
      name?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: CallStatus,
    chunks?:  {
      __typename: "ModelChunkConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    callAgentId?: string | null,
    callQueueId?: string | null,
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
    agent?:  {
      __typename: "Agent",
      id: string,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    queue?:  {
      __typename: "Queue",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    metrics:  {
      __typename: "Metric",
      id: string,
      length?: number | null,
      waittime?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    caller?:  {
      __typename: "Caller",
      id: string,
      name?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: CallStatus,
    chunks?:  {
      __typename: "ModelChunkConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    callAgentId?: string | null,
    callQueueId?: string | null,
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
    agent?:  {
      __typename: "Agent",
      id: string,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    queue?:  {
      __typename: "Queue",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    metrics:  {
      __typename: "Metric",
      id: string,
      length?: number | null,
      waittime?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    caller?:  {
      __typename: "Caller",
      id: string,
      name?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: CallStatus,
    chunks?:  {
      __typename: "ModelChunkConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    callAgentId?: string | null,
    callQueueId?: string | null,
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
    length?: number | null,
    waittime?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetAgentQueryVariables = {
  id: string,
};

export type GetAgentQuery = {
  getAgent?:  {
    __typename: "Agent",
    id: string,
    username?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAgentsQueryVariables = {
  filter?: ModelAgentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAgentsQuery = {
  listAgents?:  {
    __typename: "ModelAgentConnection",
    items:  Array< {
      __typename: "Agent",
      id: string,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetQueueQueryVariables = {
  id: string,
};

export type GetQueueQuery = {
  getQueue?:  {
    __typename: "Queue",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListQueuesQueryVariables = {
  filter?: ModelQueueFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQueuesQuery = {
  listQueues?:  {
    __typename: "ModelQueueConnection",
    items:  Array< {
      __typename: "Queue",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetChunkQueryVariables = {
  id: string,
};

export type GetChunkQuery = {
  getChunk?:  {
    __typename: "Chunk",
    id: string,
    sentiment?: Sentiment | null,
    content?:  {
      __typename: "ChunkContent",
      role?: TranscriptRole | null,
      text?: string | null,
    } | null,
    callId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListChunksQueryVariables = {
  filter?: ModelChunkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChunksQuery = {
  listChunks?:  {
    __typename: "ModelChunkConnection",
    items:  Array< {
      __typename: "Chunk",
      id: string,
      sentiment?: Sentiment | null,
      callId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ChunksByCallIdQueryVariables = {
  callId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelChunkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ChunksByCallIdQuery = {
  chunksByCallId?:  {
    __typename: "ModelChunkConnection",
    items:  Array< {
      __typename: "Chunk",
      id: string,
      sentiment?: Sentiment | null,
      callId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCallerQueryVariables = {
  id: string,
};

export type GetCallerQuery = {
  getCaller?:  {
    __typename: "Caller",
    id: string,
    name?: string | null,
    email?: string | null,
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
      name?: string | null,
      email?: string | null,
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
    agent?:  {
      __typename: "Agent",
      id: string,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    queue?:  {
      __typename: "Queue",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    metrics:  {
      __typename: "Metric",
      id: string,
      length?: number | null,
      waittime?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    caller?:  {
      __typename: "Caller",
      id: string,
      name?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: CallStatus,
    chunks?:  {
      __typename: "ModelChunkConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    callAgentId?: string | null,
    callQueueId?: string | null,
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
      createdAt: string,
      status: CallStatus,
      updatedAt: string,
      callAgentId?: string | null,
      callQueueId?: string | null,
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
      length?: number | null,
      waittime?: number | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnChunkByCallIdSubscriptionVariables = {
  callId: string,
};

export type OnChunkByCallIdSubscription = {
  onChunkByCallId?:  {
    __typename: "Chunk",
    id: string,
    sentiment?: Sentiment | null,
    content?:  {
      __typename: "ChunkContent",
      role?: TranscriptRole | null,
      text?: string | null,
    } | null,
    callId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAgentSubscriptionVariables = {
  filter?: ModelSubscriptionAgentFilterInput | null,
};

export type OnCreateAgentSubscription = {
  onCreateAgent?:  {
    __typename: "Agent",
    id: string,
    username?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAgentSubscriptionVariables = {
  filter?: ModelSubscriptionAgentFilterInput | null,
};

export type OnUpdateAgentSubscription = {
  onUpdateAgent?:  {
    __typename: "Agent",
    id: string,
    username?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAgentSubscriptionVariables = {
  filter?: ModelSubscriptionAgentFilterInput | null,
};

export type OnDeleteAgentSubscription = {
  onDeleteAgent?:  {
    __typename: "Agent",
    id: string,
    username?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateQueueSubscriptionVariables = {
  filter?: ModelSubscriptionQueueFilterInput | null,
};

export type OnCreateQueueSubscription = {
  onCreateQueue?:  {
    __typename: "Queue",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateQueueSubscriptionVariables = {
  filter?: ModelSubscriptionQueueFilterInput | null,
};

export type OnUpdateQueueSubscription = {
  onUpdateQueue?:  {
    __typename: "Queue",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteQueueSubscriptionVariables = {
  filter?: ModelSubscriptionQueueFilterInput | null,
};

export type OnDeleteQueueSubscription = {
  onDeleteQueue?:  {
    __typename: "Queue",
    id: string,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateChunkSubscriptionVariables = {
  filter?: ModelSubscriptionChunkFilterInput | null,
};

export type OnCreateChunkSubscription = {
  onCreateChunk?:  {
    __typename: "Chunk",
    id: string,
    sentiment?: Sentiment | null,
    content?:  {
      __typename: "ChunkContent",
      role?: TranscriptRole | null,
      text?: string | null,
    } | null,
    callId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChunkSubscriptionVariables = {
  filter?: ModelSubscriptionChunkFilterInput | null,
};

export type OnUpdateChunkSubscription = {
  onUpdateChunk?:  {
    __typename: "Chunk",
    id: string,
    sentiment?: Sentiment | null,
    content?:  {
      __typename: "ChunkContent",
      role?: TranscriptRole | null,
      text?: string | null,
    } | null,
    callId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChunkSubscriptionVariables = {
  filter?: ModelSubscriptionChunkFilterInput | null,
};

export type OnDeleteChunkSubscription = {
  onDeleteChunk?:  {
    __typename: "Chunk",
    id: string,
    sentiment?: Sentiment | null,
    content?:  {
      __typename: "ChunkContent",
      role?: TranscriptRole | null,
      text?: string | null,
    } | null,
    callId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCallerSubscriptionVariables = {
  filter?: ModelSubscriptionCallerFilterInput | null,
};

export type OnCreateCallerSubscription = {
  onCreateCaller?:  {
    __typename: "Caller",
    id: string,
    name?: string | null,
    email?: string | null,
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
    name?: string | null,
    email?: string | null,
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
    name?: string | null,
    email?: string | null,
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
    agent?:  {
      __typename: "Agent",
      id: string,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    queue?:  {
      __typename: "Queue",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    metrics:  {
      __typename: "Metric",
      id: string,
      length?: number | null,
      waittime?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    caller?:  {
      __typename: "Caller",
      id: string,
      name?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: CallStatus,
    chunks?:  {
      __typename: "ModelChunkConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    callAgentId?: string | null,
    callQueueId?: string | null,
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
    agent?:  {
      __typename: "Agent",
      id: string,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    queue?:  {
      __typename: "Queue",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    metrics:  {
      __typename: "Metric",
      id: string,
      length?: number | null,
      waittime?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    caller?:  {
      __typename: "Caller",
      id: string,
      name?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: CallStatus,
    chunks?:  {
      __typename: "ModelChunkConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    callAgentId?: string | null,
    callQueueId?: string | null,
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
    agent?:  {
      __typename: "Agent",
      id: string,
      username?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    queue?:  {
      __typename: "Queue",
      id: string,
      name?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    metrics:  {
      __typename: "Metric",
      id: string,
      length?: number | null,
      waittime?: number | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    caller?:  {
      __typename: "Caller",
      id: string,
      name?: string | null,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: CallStatus,
    chunks?:  {
      __typename: "ModelChunkConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    callAgentId?: string | null,
    callQueueId?: string | null,
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
    length?: number | null,
    waittime?: number | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
