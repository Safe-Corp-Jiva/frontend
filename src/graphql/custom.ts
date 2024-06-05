type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType
  __generatedQueryOutput: OutputType
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