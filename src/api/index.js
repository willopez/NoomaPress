const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');

import schema from './schema';

const start = app => {
  app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

  app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
};

export default start;
