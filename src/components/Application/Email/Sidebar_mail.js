import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import {  DeleteTwoTone, NewReleasesTwoTone } from '@mui/icons-material';

const Sidebar_mail = ({ selectedFolder, setSelectedFolder }) => {
  const folders = [
    { name: 'All Mail', icon: <MailIcon /> },
    { name: 'Inbox', icon: <InboxIcon /> },
    { name: 'Sent', icon: <SendIcon /> },
    { name: 'Drafts', icon: <DraftsIcon /> },
    {name: 'Spam', icon:<NewReleasesTwoTone/>},
    {name:'Trash', icon:<DeleteTwoTone/>}
    // Add more folders as needed
  ];

  return (
    <List>
      {folders.map((folder, index) => (
        <ListItem button key={index} selected={selectedFolder === folder.name} onClick={() => setSelectedFolder(folder.name)}>
          <ListItemIcon>{folder.icon}</ListItemIcon>
          <ListItemText primary={folder.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default Sidebar_mail;
