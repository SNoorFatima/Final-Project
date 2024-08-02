import React, { useState } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import Sidebar from './chatsidebar';
import ChatArea from './chatArea';

const users = [
  { id: 1, name: 'Alene', avatar: 'https://via.placeholder.com/150', lastMessage: 'Hey. Very good morning. How are you?' },
  { id: 2, name: 'Keefe', avatar: 'https://via.placeholder.com/150', lastMessage: 'Support Executive' },
  { id: 3, name: 'Lazaro', avatar: 'https://via.placeholder.com/150', lastMessage: 'Resource Investigator' },
  { id: 4, name: 'Hazle', avatar: 'https://via.placeholder.com/150', lastMessage: 'Teamworker' },
  { id: 5, name: 'Herman Essertg', avatar: 'https://via.placeholder.com/150', lastMessage: 'Co-ordinator' },
];

const ChatBox = () => {
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Paper sx={{ display: 'flex', height: '100vh' }}>
      {sidebarOpen && <Sidebar onSelectUser={handleSelectUser} users={users} />}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {selectedUser ? <ChatArea selectedUser={selectedUser} toggleSidebar={toggleSidebar} /> : <Typography sx={{ p: 2 }}>Select a user to start chatting</Typography>}
      </Box>
    </Paper>
  );
};

export default ChatBox;
