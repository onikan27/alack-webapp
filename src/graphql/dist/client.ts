import { GraphQLClient } from 'graphql-request'
import * as Dom from 'graphql-request/dist/types.dom'
import gql from 'graphql-tag'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Mutation = {
  __typename?: 'Mutation'
  createTodo: Todo
}

export type MutationCreateTodoArgs = {
  input: NewTodo
}

export type NewTodo = {
  text: Scalars['String']
  userId: Scalars['String']
}

export type Query = {
  __typename?: 'Query'
  todos: Array<Todo>
}

export type Todo = {
  __typename?: 'Todo'
  done: Scalars['Boolean']
  id: Scalars['ID']
  text: Scalars['String']
  user: User
}

export type User = {
  __typename?: 'User'
  id: Scalars['ID']
  name: Scalars['String']
}

export type GetTodoQueryVariables = Exact<{ [key: string]: never }>

export type GetTodoQuery = {
  __typename?: 'Query'
  todos: Array<{ __typename?: 'Todo'; id: string; text: string }>
}

export const GetTodoDocument = gql`
  query getTodo {
    todos {
      id
      text
    }
  }
`

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType,
) => action()

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {
    getTodo(
      variables?: GetTodoQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<GetTodoQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetTodoQuery>(GetTodoDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getTodo',
        'query',
      )
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
