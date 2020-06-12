import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useQuery, gql } from '@apollo/client';
import { listBlogs } from 'graphql/queries';
import { BlogCard } from './BlogCard';
import { AddBlogForm } from './AddBlogForm';

export const BlogGrid = () => {
  const { loading, error, data } = useQuery(gql(listBlogs));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <Grid container justify="center" spacing={4}>
        {data?.listBlogs?.items.map(({ id, name, createdAt }) => (
          <Grid key={id} item>
            <BlogCard blogId={id} name={name} createdAt={createdAt} />
          </Grid>
        ))}
        <Grid key="add-blog" item>
          <AddBlogForm />
        </Grid>
      </Grid>
    </>
  );
};
