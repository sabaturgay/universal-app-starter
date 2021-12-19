import { BACKEND } from '../constants'
import { GraphQLClient } from 'graphql-request'
import React from 'react'
// import { createClient } from 'graphql-ws'
import { isServer } from '@utils'

const createClient = () => ({})
type WebSocketClient = {}

type Props = {
  children: React.ReactNode;
}

export type GraphQLClientState = {
  graphQLClient: GraphQLClient;
  webSocketClient: WebSocketClient;
}

export type GraphQLClientProviderState = GraphQLClientState | null

export const GraphQLClientContext = React.createContext<GraphQLClientProviderState>(null)

const LINK = BACKEND.graphqlURL

export const initialState: GraphQLClientState = {
  graphQLClient: new GraphQLClient(LINK, {
    headers: {
      // authorization: '',
    },
  }),
  webSocketClient: isServer()
    ? null
    : (
      createClient({ url: LINK.replace(/https?/g, 'ws') })
    ),
}

export function GraphQLClientProvider({ children }: Props) {
  return (
    <GraphQLClientContext.Provider value={initialState}>
      {children}
    </GraphQLClientContext.Provider>
  )
}

export function useGraphQLClient() {
  const contextValue = React.useContext(GraphQLClientContext)

  if (!contextValue) {
    throw new Error(
      'Wrap your components tree with a GraphQLClientProvider component',
    )
  }

  return contextValue
}
