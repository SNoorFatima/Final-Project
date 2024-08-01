import React from 'react';
import { Box, List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@mui/material';

const Sidebar = ({ onSelectUser, users }) => {
  return (
    <Box sx={{ width: 250, borderRight: '1px solid #ccc' }}>
      <List>
        {users.map((user) => (
          <ListItem button key={user.id} onClick={() => onSelectUser(user)}>
            <ListItemAvatar>
              <Avatar src={user.avatar} alt={user.name} />
            </ListItemAvatar>
            <ListItemText primary={user.name} secondary={user.lastMessage} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
