import { initialState } from '@root/providers/GraphQLCMSClient'

export function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  const client = initialState.graphQLClient
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables)
}
