import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4rdmx9v0wst01yyda9v6afz/master',
  cache: new InMemoryCache(),
})