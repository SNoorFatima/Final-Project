import React, { useState, useMemo } from 'react';
import { Container, Grid, CssBaseline, IconButton, Drawer, AppBar, Toolbar, Typography, Button, InputBase, Divider, Box, Pagination, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Sidebar from './Sidebar_mail';
import MailList from './MailList';
import MailDetail from './MailDetail';
import ComposeMail from './ComposeMail';
import ReplyMail from './ReplyMail';

const drawerWidth = 240;

const MailSystem = () => {
  const [selectedFolder, setSelectedFolder] = useState('All Mail');
  const [selectedMail, setSelectedMail] = useState(null);
  const [composeOpen, setComposeOpen] = useState(false);
  const [replyingTo, setReplyingTo] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(5);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const mails = {
    'All Mail': [
      { subject: 'Meeting', sender: 'Alice', date: '2021-01-01', body: 'Meeting at 10am', starred: false },
      { subject: 'Project Update', sender: 'Bob', date: '2021-01-02', body: 'Project is on track.', starred: false },
      // Add more sample mails
    ],
    'Inbox': [
      { subject: 'Hello', sender: 'Bob', date: '2021-01-02', body: 'How are you?', starred: false },
      // Add more sample mails
    ],
    'Sent': [
      { subject: 'Project', sender: 'Carol', date: '2021-01-03', body: 'Project details', starred: false },
      // Add more sample mails
    ],
    // Add more categories
  };

  const filteredMails = useMemo(() => {
    const allMails = mails[selectedFolder] || [];
    return allMails.filter(mail =>
      mail.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mail.sender.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [mails, selectedFolder, searchTerm]);

  const paginatedMails = useMemo(() => {
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return filteredMails.slice(startIndex, endIndex);
  }, [filteredMails, page, rowsPerPage]);

  const handleSelectMail = (mail) => {
    setSelectedMail(mail);
  };

  const handleComposeOpen = () => {
    setComposeOpen(true);
  };

  const handleComposeClose = () => {
    setComposeOpen(false);
  };

  const handleReply = (mail) => {
    setReplyingTo(mail);
  };

  const handleReplyClose = () => {
    setReplyingTo(null);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleBack = () => {
    setSelectedMail(null);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box sx={{ display: 'flex',marginLeft:'10' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: "white", color: "black" }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={toggleSidebar}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mail System
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ position: 'relative' }}>
            <SearchIcon sx={{ position: 'absolute', pointerEvents: 'none', left: 15, top: '50%', transform: 'translateY(-50%)' }} />
            <InputBase
              placeholder="Search…"
              sx={{ color: 'inherit', pl: 4, width: '100%', maxWidth: 300, backgroundColor: 'rgba(255, 255, 255, 0.15)', borderRadius: 1, ml: 2 }}
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant={isMobile ? 'temporary' : 'persistent'}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Divider />
        <Button variant="contained" color="primary" onClick={handleComposeOpen} sx={{ margin: 2 }}>
          Compose
        </Button>
        <Sidebar selectedFolder={selectedFolder} setSelectedFolder={setSelectedFolder} />
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: 3,
          marginLeft: sidebarOpen ? `${drawerWidth}px` : 0,
          transition: 'margin 0.3s',
        }}
      >
        <Toolbar />
        {selectedMail ? (
          <MailDetail mail={selectedMail} handleReply={handleReply} handleBack={handleBack} />
        ) : (
          <>
            <MailList mails={paginatedMails} selectMail={handleSelectMail} />
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
              <Pagination
                count={Math.ceil(filteredMails.length / rowsPerPage)}
                page={page}
                onChange={handlePageChange}
                color="primary"
                siblingCount={1}
                boundaryCount={1}
                showFirstButton
                showLastButton
              />
            </Box>
          </>
        )}
        <ComposeMail open={composeOpen} handleClose={handleComposeClose} />
        {replyingTo && (
          <ReplyMail mail={replyingTo} handleClose={handleReplyClose} />
        )}
      </Box>
    </Box>
  );
};

export default MailSystem;
