import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import DeleteIcon from '@material-ui/icons/Delete';
import image from 'images/paella.jpg';
import { useMutation, gql } from '@apollo/client';
import { deleteBlog } from 'graphql/mutations';

export const BlogCard = ({ blogId, name, createdAt, text }) => {
  const classes = useStyles();
  const [deleteBlogFn] = useMutation(gql(deleteBlog));
  const handleDelete = () => {
    deleteBlogFn({
      variables: { input: { id: blogId } },
      refetchQueries: ['ListBlogs'],
    });
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="type" className={classes.avatar}>
            B
          </Avatar>
        }
        title={name}
        subheader={new Date(createdAt).toDateString()}
      />
      <CardMedia className={classes.media} image={image} title={name} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={handleDelete} aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

/**
 * Styling
 */
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
