import 'regenerator-runtime/runtime.js';
import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

import { errorLink, queryOrMutationLink } from '~/shared/links';
import '~/static/styles/index.scss';
import Layout from '~/layouts/Layout';

const client = new ApolloClient({
  ssrForceFetchDelay: 100,
  link: ApolloLink.from([errorLink, queryOrMutationLink()]),
  // Itializing the cache with the data from the server's cache
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
});

hydrate(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();

  module.hot.accept('./index.js', () => {
    try {
      console.log('Updating front-end');
    } catch (err) {}
  });
}
