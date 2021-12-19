import { QueryClient } from 'react-query'

export const QUERY_CLIENT_CONFIG = {
  defaultOptions: {
    queries: {
      staleTime: 3 * 60 * 1000,
      // suspense: true,
    },
  },
}

export const queryClient = new QueryClient(QUERY_CLIENT_CONFIG)
