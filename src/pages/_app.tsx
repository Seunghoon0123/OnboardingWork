import type { AppProps } from 'next/app';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import Head from 'next/head';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/global-style';
import { theme } from '../styles/theme';

const client = new ApolloClient({
  uri: 'https://devserver.ontol.com/graphql',
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <title>Ontol Onboarding</title>

      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}
