import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

import {
  errorLink,
  queryOrMutationLink,
  subscriptionLink,
  requestLink,
} from '~/shared/links';
import '~/style/app.scss';
import Layout from '~/layouts/Layout';

const client = new ApolloClient({
  ssrForceFetchDelay: 100,
  link: ApolloLink.from([
    errorLink,
    requestLink({
      queryOrMutationLink: queryOrMutationLink(),
      subscriptionLink: subscriptionLink(),
    }),
  ]),
  // Itializing the cache with the data from the server's cache
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
});

render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('content')
);
