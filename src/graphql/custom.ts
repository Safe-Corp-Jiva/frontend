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
