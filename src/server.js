import Express from 'express';
import path from 'path';
import proxy from 'http-proxy-middleware';

import React from 'react';
import ReactDOM from 'react-dom/server';
import { StaticRouter } from 'react-router';

import ApolloClient from 'apollo-client';
import { ApolloProvider, renderToStringWithData } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';

import {
  errorLink,
  subscriptionLink,
  requestLink,
  queryOrMutationLink,
} from './links';
import HTMLDocument from './components/html-document';
import Layout from './layouts/Layout';
import api from './api';

let PORT = 3000,
  API_HOST = `http://localhost:${PORT}`;
if (process.env.NODE_ENV === 'production') {
  (PORT = 80), (API_HOST = 'http://example.local');
}

if (process.env.PORT) {
  PORT = parseInt(process.env.PORT, 10);
}

const app = new Express();

// Initialize GraphQL API
api(app);

if (process.env.NODE_ENV === 'production') {
  // In production we want to serve our JS from a file on the filesystem.
  app.use('/static', Express.static(path.join(process.cwd(), 'build')));
} else {
  // Otherwise we want to proxy the webpack development server.
  app.use(
    '/static',
    proxy({
      target: 'http://localhost:3020',
      pathRewrite: { '^/static/client': '' },
    })
  );
}

app.use((req, res) => {
  const cache = new InMemoryCache();

  const client = new ApolloClient({
    ssrMode: true,
    link: ApolloLink.from([
      errorLink,
      queryOrMutationLink({
        fetch,
        uri: `${API_HOST}/graphql`,
      }),
    ]),
    cache,
  });

  const context = {};

  const component = (
    <ApolloProvider client={client}>
      <StaticRouter location={req.url} context={context}>
        <Layout />
      </StaticRouter>
    </ApolloProvider>
  );

  renderToStringWithData(component)
    .then(content => {
      res.status(200);
      const html = <HTMLDocument content={content} client={client} />;
      res.send(`<!doctype html>\n${ReactDOM.renderToString(html)}`);
      res.end();
    })
    .catch(e => {
      console.error('RENDERING ERROR:', e); // eslint-disable-line no-console
      res.status(500);
      res.end('An error occurred');
    });
});

app.listen(PORT, () =>
  console.log(
    // eslint-disable-line no-console
    `App Server is now running on http://localhost:${PORT}`
  )
);
