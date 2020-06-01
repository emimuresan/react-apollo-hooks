import { onError } from '@apollo/link-error';

/**
 * ERROR HANDLING LINK
 */

export const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`); // eslint-disable-line
    });
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`); // eslint-disable-line
  }
});
