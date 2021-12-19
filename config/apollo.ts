import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const URI = 'http://localhost:8080/graphql'

const httpLink = createHttpLink({ uri: URI })

const authLink = setContext(async (_, { headers }) => {
  const token = 'token'
  return {
    headers: {
      ...headers,
      authorization: token,
    },
  }
})

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})
