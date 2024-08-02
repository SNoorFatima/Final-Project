import React from 'react';
import { Box, List, ListItem, ListItemAvatar, ListItemText, Avatar, Typography, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Sidebar = ({ onSelectUser, users }) => {
  return (
    <Box sx={{ width: 250, borderRight: '1px solid #ccc' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
        <Avatar src="https://via.placeholder.com/150" alt="JWT User" sx={{ width: 56, height: 56 }} />
        <Typography variant="h6" sx={{ mt: 1 }}>JWT User</Typography>
        <TextField
          variant="outlined"
          placeholder="Search Mail"
          size="small"
          sx={{ mt: 2, width: '100%' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
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
