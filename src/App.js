import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import { client } from 'client/client';
import { BlogGrid } from 'components/Blogs/BlogGrid';
import { PostGrid } from 'components/Posts/PostGrid';

const App = () => {
  const classes = useStyles();

  return (
    <ApolloProvider client={client}>
      <main>
        <h1>My Favourite Blogs</h1>
        <BlogGrid />
        <Divider className={classes.divider} />
        <PostGrid />
      </main>
    </ApolloProvider>
  );
};

export default App;

const useStyles = makeStyles((theme) => ({
  divider: {
    margin: theme.spacing(4, 0),
  },
}));
