import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { getMainDefinition } from 'apollo-utilities';

export const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, location, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${location}, Path: ${
          path
        }`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

export const queryOrMutationLink = (config = {}) =>
  new ApolloLink((operation, forward) => {
    operation.setContext({
      credentials: 'same-origin',
    });

    return forward(operation);
  }).concat(
    new HttpLink({
      ...config,
    })
  );
