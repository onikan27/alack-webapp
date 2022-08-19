import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { client } from 'src/lib/apolloClient'
import { ChakraProvider } from '@chakra-ui/react'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default MyApp
