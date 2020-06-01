import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from 'client/apolloClient';
import './App.css';

const App = () => (
  <ApolloProvider client={client}>
    <div className="App">
      <h2>My first Apollo app 🚀</h2>
    </div>
  </ApolloProvider>
);

export default App;
