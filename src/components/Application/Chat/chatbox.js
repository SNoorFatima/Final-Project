import React, { useState } from 'react';
import { Box, Breadcrumbs, Grid, Paper, Typography } from '@mui/material';
import Sidebar from './chatsidebar';
import ChatArea from './chatArea';
import { Link } from 'react-router-dom';
import { Home } from '@mui/icons-material';

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
    <Grid container spacing={2}>
    <Grid item xs={12}>
 <>
   <Paper >
     <Grid container p={2} display="flex" justifyContent={'space-between'}>
       <Grid item>
       <Typography variant="h6" sx={{ marginRight: '1rem' }}>Chat</Typography>
       </Grid>
       <Grid item>
       <Breadcrumbs separator="›">
         <Link underline="hover" color="inherit" href="/">
           <Home sx={{
             marginRight: '0px',
             marginTop: '-2px',
             width: '1rem',
             height: '1rem',
             color: 'rgb(103, 58, 183)'
           }} />
         </Link>
        
         <Typography color="rgb(105, 117, 134)">Chat</Typography>
       </Breadcrumbs>
       </Grid>
     </Grid>
   </Paper>
 </>
 </Grid>
 <Grid item xs={12}> 
    <Paper sx={{ display: 'flex', height: '100vh' }}>
      {sidebarOpen && <Sidebar onSelectUser={handleSelectUser} users={users} />}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {selectedUser ? <ChatArea selectedUser={selectedUser} toggleSidebar={toggleSidebar} /> : <Typography sx={{ p: 2 }}>Select a user to start chatting</Typography>}
      </Box>
    </Paper>
    </Grid>
    </Grid>
  );
};

export default ChatBox;
