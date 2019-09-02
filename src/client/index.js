import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { CookiesProvider } from 'react-cookie';
import Routes from './components/Routes';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

render(
  <ApolloProvider client={client}>
    <CookiesProvider>
      <Routes />
    </CookiesProvider>
  </ApolloProvider>,
  document.getElementById('app'),
);
