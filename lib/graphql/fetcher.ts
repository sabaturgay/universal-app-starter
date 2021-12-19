import { initialState } from '@root/providers/GraphQLClient'
import { getIdToken } from '@cloud'

export function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  const client = initialState.graphQLClient
  return async (): Promise<TData> => {
    const token = await getIdToken()
    return client.request<TData, TVariables>(query, variables, {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    })
  }
}
