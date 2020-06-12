import { ApolloClient, InMemoryCache, from } from '@apollo/client';
import { gql } from '@apollo/client';
import { networkLink } from './networkLink';
import { errorLink } from './errorLink';

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([errorLink, networkLink]), // order matters
});

console.log('GITHUB_TOKEN', process.env.REACT_APP_GITHUB_TOKEN);

export const GET_REPOSITORIES = gql`
  query GetRepositiories($byLanguage: String!) {
    search(type: REPOSITORY, query: $byLanguage, first: 10) {
      nodes {
        ... on Repository {
          id
          name
          url
          createdAt
          pushedAt
          updatedAt
          description
          forkCount
          viewerHasStarred
          stargazers {
            totalCount
          }
          owner {
            avatarUrl
            login
          }
        }
      }
    }
  }
`;

// client
//   .query({
//     query: GET_REPOSITORIES,
//     variables: { byLanguage: 'JavaScript' },
//   })
//   .then((result) => console.log('-result:', result));
