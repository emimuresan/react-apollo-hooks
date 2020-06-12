import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import { useMutation, gql } from '@apollo/client';
import { createBlog } from 'graphql/mutations';
import { listBlogs } from 'graphql/queries';
import AddIcon from '@material-ui/icons/AddCircle';

export const AddBlogForm = () => {
  const classes = useStyles();
  const [createBlogFn] = useMutation(gql(createBlog), {
    update(cache, { data }) {
      const { listBlogs: existingBlogs } = cache.readQuery({ query: gql(listBlogs) });
      cache.writeQuery({
        query: gql(listBlogs),
        data: {
          listBlogs: { items: [...existingBlogs.items, data.createBlog] },
        },
      });
    },
  });
  const [blogName, setBlogName] = useState('');

  const handleChange = (event) => {
    setBlogName(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBlogFn({ variables: { input: { name: blogName } } });
    setBlogName('');
  };

  return (
    <Card className={classes.root}>
      <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          label="Blog name"
          id="blog-name"
          placeholder="Bloggy McBlog"
          onChange={handleChange}
          value={blogName}
        />

        <IconButton type="submit" aria-label="add">
          <AddIcon fontSize="large" />
        </IconButton>
      </form>
    </Card>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    height: '100%',
  },
  form: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: `${theme.spacing(2)}px`,
  },
}));
