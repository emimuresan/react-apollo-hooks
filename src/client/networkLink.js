import { HttpLink, ApolloLink, from } from '@apollo/client';

const { REACT_APP_GITHUB_API, REACT_APP_GITHUB_TOKEN } = process.env;

/**
 * NETWORK LINK
 */
const httpLink = new HttpLink({
  uri: REACT_APP_GITHUB_API,
});

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: `Bearer ${REACT_APP_GITHUB_TOKEN}`,
    },
  });

  return forward(operation);
});

export const networkLink = from([authLink, httpLink]);
