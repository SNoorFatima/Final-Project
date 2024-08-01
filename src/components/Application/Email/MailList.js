// MailList.js
import React from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Divider, Paper } from '@mui/material';
import { StarBorder, Star, Delete, Drafts } from '@mui/icons-material';

const MailList = ({ mails, selectMail }) => {
  return (
    <List>
      {mails.map((mail, index) => (
        <Paper key={index}>
          <ListItem button onClick={() => selectMail(mail)}>
            <ListItemText primary={mail.subject} secondary={`${mail.sender} - ${mail.date}`} />
            <ListItemSecondaryAction>
              <IconButton>
                {mail.starred ? <Star /> : <StarBorder />}
              </IconButton>
              <IconButton>
                <Delete />
              </IconButton>
              <IconButton>
                <Drafts />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
        </Paper>
      ))}
    </List>
  );
};

export default MailList;
