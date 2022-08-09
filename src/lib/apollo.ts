import { ApolloClient, InMemoryCache } from '@apollo/client'

export const apolloClient = new ApolloClient({
    uri: 'https://api-mumbai.lens.dev',
    cache: new InMemoryCache(),
  });