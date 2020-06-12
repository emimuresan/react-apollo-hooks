import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Comment } from './Comment';
import { useQuery, gql } from '@apollo/client';
import { listComments } from 'graphql/queries';

export const CommentList = ({ postId }) => {
  const classes = useStyles();
  const { loading, error, data } = useQuery(gql(listComments), {
    variables: {
      limit: 10,
      filter: { postID: { eq: postId } },
    },
  });

  if (loading) return <p>Loading Comments...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <List className={classes.root}>
      {data?.listComments?.items.map(({ id, content, createdAt }) => (
        <ListItem key={id}>
          <Comment content={content} createdAt={createdAt} />
        </ListItem>
      ))}
    </List>
  );
};

/**
 * Styling
 */
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));
