import React, { useState } from 'react';
import {
  Avatar, Box, Grid, IconButton, InputBase, Menu, MenuItem, Paper, Typography, TablePagination,
  Table, TableBody, TableCell, TableHead, TableRow, CardHeader, Divider, Checkbox, Toolbar, Tooltip,
  Drawer, List, ListItem, ListItemIcon, ListItemText, Button, Dialog, DialogActions, DialogContent,
  DialogTitle, TextField
} from '@mui/material';
import { styled } from '@mui/system';
import { SearchTwoTone, Delete as DeleteIcon, ArrowDropUp as ArrowDropUpIcon, ArrowDropDown as ArrowDropDownIcon,
  MailOutline, Inbox as InboxIcon, Send as SendIcon, Drafts as DraftsIcon, Star as StarIcon,
  LabelImportant as LabelImportantIcon, Label as LabelIcon, Create as CreateIcon
} from '@mui/icons-material';

const drawerWidth = 240;

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "rgb(248, 250, 252)",
  border: "1px solid black",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const emailsData = [
  {
    id: 1,
    sender: 'Lucas Farmer',
    email: 'lucas.farmer@example.com',
    subject: 'Cih dahe elthimi va zioner vi taw umgo ag torar.',
    snippet: 'Enjiwuv mi adamhozc zam a...',
    content: 'Cih dahe elthimi va zioner vi taw umgo ag torar. Enjiwuv mi adamhozc zam a...',
    date: '16 Feb',
    avatar: 'https://via.placeholder.com/40'
  },
  // ... other emails
];

const getStatusChipStyles = (status) => {
  switch (status) {
    case "Pending":
      return { backgroundColor: "rgba(255, 193, 7, 0.2)", color: "orange" };
    case "Paid":
      return { backgroundColor: "rgba(33, 150, 243, 0.2)", color: "blue" };
    case "Success":
      return { backgroundColor: "rgba(76, 175, 80, 0.2)", color: "green" };
    case "Failed":
      return { backgroundColor: "rgba(244, 67, 54, 0.2)", color: "red" };
    default:
      return { backgroundColor: "grey", color: "white" };
  }
};

const EmailRow = ({ email, onClick }) => {
  return (
    <TableRow onClick={() => onClick(email)}>
      <TableCell padding="checkbox">
        <Checkbox />
      </TableCell>
      <TableCell>
        <Avatar alt={email.sender} src={email.avatar} />
      </TableCell>
      <TableCell>
        <Typography variant="body1">{email.sender}</Typography>
        <Typography variant="body2">{email.email}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body1">{email.subject}</Typography>
        <Typography variant="body2">{email.snippet}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body2">{email.date}</Typography>
      </TableCell>
    </TableRow>
  );
};

const MailSystem = () => {
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [composeOpen, setComposeOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(true);

  const handleEmailClick = (email) => {
    setSelectedEmail(email);
  };

  const handleComposeOpen = () => {
    setComposeOpen(true);
  };

  const handleComposeClose = () => {
    setComposeOpen(false);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEmails = emailsData.filter(email =>
    email.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
    email.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    email.snippet.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Paper sx={{ display: 'flex' }}>
      <Drawer
        variant="persistent"
        anchor="left"
        open={drawerOpen}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem button>
              <ListItemIcon>
                <MailOutline />
              </ListItemIcon>
              <ListItemText primary="All Mail" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary="Sent" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <LabelImportantIcon />
              </ListItemIcon>
              <ListItemText primary="Important" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <LabelIcon />
              </ListItemIcon>
              <ListItemText primary="Labels" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        {selectedEmail ? (
          <Box>
            <IconButton onClick={() => setSelectedEmail(null)}>Back</IconButton>
            <Typography variant="h5">{selectedEmail.subject}</Typography>
            <Typography variant="subtitle1">{selectedEmail.sender}</Typography>
            <Typography variant="body1">{selectedEmail.content}</Typography>
            <Button variant="contained" onClick={() => alert('Reply clicked')}>Reply</Button>
          </Box>
        ) : (
          <Box>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setDrawerOpen(!drawerOpen)}
              >
                {drawerOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              </IconButton>
              <Search>
                <SearchIconWrapper>
                  <SearchTwoTone />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </Search>
              <Tooltip title="Compose">
                <IconButton color="inherit" onClick={handleComposeOpen}>
                  <CreateIcon />
                </IconButton>
              </Tooltip>
            </Toolbar>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox />
                  </TableCell>
                  <TableCell>Sender</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Subject</TableCell>
                  <TableCell>Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredEmails.map(email => (
                  <EmailRow key={email.id} email={email} onClick={handleEmailClick} />
                ))}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={emailsData.length}
              rowsPerPage={10}
              page={0}
              onPageChange={() => {}}
              onRowsPerPageChange={() => {}}
            />
          </Box>
        )}
      </Box>

      <Dialog open={composeOpen} onClose={handleComposeClose}>
        <DialogTitle>New Message</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="to"
            label="To"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="subject"
            label="Subject"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="body"
            label="Body"
            type="text"
            fullWidth
            multiline
            rows={4}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleComposeClose}>Cancel</Button>
          <Button onClick={handleComposeClose}>Send</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default MailSystem;
