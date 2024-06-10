import * as APITypes from '../API'
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType
  __generatedQueryOutput: OutputType
}

type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType
  __generatedSubscriptionOutput: OutputType
}

export const listPastCalls = /* GraphQL */ `query ListPastCalls {
  listCalls {
      nextToken
      items {
          id
          createdAt
          status
          agent {
              username
              lastName
              firstName
          }
          result
          updatedAt
      }
  }
}
` as GeneratedQuery<any, any>

export const onCreateContactLensEventWithCreatedAt = /* GraphQL */ `subscription OnCreateContactLensEvent(
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
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateContactLensEventSubscriptionVariables,
  APITypes.OnCreateContactLensEventSubscription
>

export const customOnCreateCall = /* GraphQL */ `subscription OnCreateCall {
  onCreateCall {
    id
    createdAt
    status
    help
    result
    updatedAt
    callCallerId
    agent {
      id
      username
      lastName
      firstName
      email
    }
    queue {
      id
      name
    }
    topic {
      id
      name
      count
    }
    metrics {
      id
      length
      waittime
    }
  }
}` as GeneratedSubscription<any, any>

export const customOnUpdateCall = /* GraphQL */ `subscription OnUpdateCall {
  onUpdateCall {
    id
    createdAt
    status
    help
    result
    updatedAt
    callCallerId
    agent {
      id
      username
      lastName
      firstName
      email
    }
    queue {
      id
      name
    }
    topic {
      id
      name
      count
    }
    metrics {
      id
      length
      waittime
    }
  }
}` as GeneratedSubscription<any, any>

export const customOnDeleteCall = /* GraphQL */ `subscription OnDeleteCall {
  onDeleteCall {
    id
    createdAt
    status
    help
    result
    updatedAt
    callCallerId
    agent {
      id
      username
      lastName
      firstName
      email
    }
    queue {
      id
      name
    }
    topic {
      id
      name
      count
    }
    metrics {
      id
      length
      waittime
    }
  }
}` as GeneratedSubscription<any, any>

export const customListCalls = /* GraphQL */ `query ListCalls(
  $filter: ModelCallFilterInput
) {
  listCalls(filter: $filter) {
    items {
      id
      createdAt
      status
      help
      result
      updatedAt
      callCallerId
      agent {
        id
        username
        lastName
        firstName
        email
      }
      queue {
        id
        name
      }
      topic {
        id
        name
        count
      }
      metrics {
        id
        length
        waittime
      }
    }
  }
}
` as GeneratedQuery<any, any>

