import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { useQuery, gql } from '@apollo/client';
import { listPosts } from 'graphql/queries';
import { PostCard } from './PostCard';

export const PostGrid = () => {
  const classes = useStyles();
  const { loading, error, data } = useQuery(gql(listPosts));

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <Container className={classes.root}>
      <Typography className={classes.title} variant="h4" component="h2" gutterBottom>
        Recent Blog Posts
      </Typography>
      <Grid container justify="center" spacing={4}>
        {data?.listPosts?.items.map(({ id, title, blog, createdAt }) => (
          <Grid key={id} item>
            <PostCard postId={id} title={title} createdAt={createdAt} blogName={blog.name} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

/**
 * Styling
 */
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 800,
  },
  title: {
    textAlign: 'center',
  },
}));
