import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CommentList } from 'components/Comments/CommentList';

export const PostCard = ({ postId, blogName, title, createdAt }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const datePosted = new Date(createdAt).toDateString();

  const handleLoadComments = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {blogName}
        </Typography>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography className={classes.posted} color="textSecondary">
          {datePosted}
        </Typography>
        <Typography variant="body2" component="p">
          This is the body of the post.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleLoadComments} color="primary">
          {expanded ? 'Hide Comments' : 'Load Comments'}
        </Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <CommentList postId={postId} />
        </CardContent>
      </Collapse>
    </Card>
  );
};

/**
 * Styling
 */
const useStyles = makeStyles((theme) => ({
  root: {
    width: 350,
  },
  title: {
    fontSize: 14,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  posted: {
    marginBottom: 12,
  },
}));
