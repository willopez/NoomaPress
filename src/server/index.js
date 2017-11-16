import 'regenerator-runtime/runtime.js';
import Express from 'express';
import path from 'path';
import proxy from 'http-proxy-middleware';
import nconf from 'nconf';

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
} from '~/shared/links';
import config from './config';
import HTMLDocument from '~/components/html-document';
import Layout from '~/layouts/Layout';
import api from '~/api';

const app = new Express();

// Initialize GraphQL API
api(app);

if (config.get('env') === 'production') {
  // In production we want to serve our JS from a file on the filesystem.
  app.use('/static', Express.static(path.join(process.cwd(), 'build')));
} else {
  // Otherwise we want to proxy the webpack development server.
  app.use(
    '/static',
    proxy({
      target: config.get('webpack_dev_server'),
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
        uri: config.get('api_uri'),
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

app.listen(config.get('port'), () =>
  console.log(
    // eslint-disable-line no-console
    `App Server is now running on http://${config.get('host')}:${config.get(
      'port'
    )}`
  )
);
