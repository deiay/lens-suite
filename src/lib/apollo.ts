import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context';
import { getCookie } from 'cookies-next';
import { AUTH_COOKIE_LABELS } from '~hooks/useAuth';


const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_LENS_API_URL,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = getCookie(AUTH_COOKIE_LABELS.LENS_JWT)
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      'X-ACCESS-TOKEN': token || "",
    }
  }
})


export const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });