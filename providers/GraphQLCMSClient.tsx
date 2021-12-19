import { GraphQLClient } from 'graphql-request'
import React from 'react'
import { isServer } from '@utils'

const createClient = () => ({})
type WebSocketClient = {}
// import { Client as WebSocketClient, createClient } from 'graphql-ws'

const LINK = '*************************'

type Props = {
  children: React.ReactNode;
}

export type GraphQLClientState = {
  graphQLClient: GraphQLClient;
  webSocketClient: WebSocketClient;
}

export type GraphQLClientProviderState = GraphQLClientState | null

export const GraphQLClientContext = React.createContext<GraphQLClientProviderState>(null)

export const initialState: GraphQLClientState = {
  graphQLClient: new GraphQLClient(LINK, {
    headers: {
      // authorization: '',
    },
  }),
  webSocketClient: isServer()
    ? null
    : createClient({ url: LINK.replace(/https?/g, 'ws') }),
}

export function GraphQLCMSClientProvider({ children }: Props) {
  return (
    <GraphQLClientContext.Provider value={initialState}>
      {children}
    </GraphQLClientContext.Provider>
  )
}

export function useGraphQLCMSClient() {
  const contextValue = React.useContext(GraphQLClientContext)

  if (!contextValue) {
    throw new Error(
      'Wrap your components tree with a GraphQLClientProvider component',
    )
  }

  return contextValue
}
