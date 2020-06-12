import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from 'client/client';
import { BlogList } from 'components/Blogs/BlogList';

const App = () => (
  <ApolloProvider client={client}>
    <div className="App">
      <h2>My first Apollo app</h2>
      <BlogList />
    </div>
  </ApolloProvider>
);

export default App;
