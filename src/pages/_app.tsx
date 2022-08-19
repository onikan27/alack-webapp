import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { client } from 'src/lib/apolloClient'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
