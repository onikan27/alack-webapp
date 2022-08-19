import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createHttpLink({
    uri: process.env.BASE_URL,
    credentials: 'include',
  }),
})
