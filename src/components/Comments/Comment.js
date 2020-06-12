import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import CommentIcon from '@material-ui/icons/Comment';

export const Comment = ({ content, createdAt }) => (
  <>
    <ListItemAvatar>
      <Avatar>
        <CommentIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary={content} secondary={new Date(createdAt).toDateString()} />
  </>
);
