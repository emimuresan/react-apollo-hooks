import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useQuery, useMutation, gql } from '@apollo/client';
import { listBlogs } from 'graphql/queries';
import { createBlog } from 'graphql/mutations';
import { RecipeCard } from './BlogCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export const BlogList = () => {
  let input;
  const [createBlogFn] = useMutation(gql(createBlog));
  const { loading, error, data } = useQuery(gql(listBlogs));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <Grid container justify="center" spacing={4}>
        {data?.listBlogs?.items.map(({ id, name, createdAt }) => (
          <Grid key={id} item>
            <RecipeCard name={name} createdAt={createdAt} text="Description text" />
          </Grid>
        ))}
      </Grid>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createBlogFn({ variables: { input: { name: input.value } } });
          input.value = '';
        }}
      >
        <input
          ref={(node) => {
            input = node;
          }}
        />
        <button type="submit">Create Blog</button>
      </form>
    </>
  );
};
