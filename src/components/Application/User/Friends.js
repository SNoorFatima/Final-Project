import React, { useState } from 'react';
import {
  Avatar, Button, CardContent, Divider, Grid, IconButton, Menu, MenuItem, Paper, Typography, CardHeader, Box, InputBase, styled, alpha
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import ChatIcon from '@mui/icons-material/Chat';
import { SearchTwoTone } from '@mui/icons-material';

import follower1 from './Assets/follower1.png';
import follower2 from './Assets/follwer2.png';
import follower3 from './Assets/follwer3.png';
import follower4 from './Assets/follower4.png';
import follower5 from './Assets/follwer5.png';
import follower6 from './Assets/follwer7.png';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "rgb(248, 250, 252)",
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

const Friends = () => {
  const followers = [
    { name: "Barney Handburgh", avatar: follower1 },
    { name: "Lisa Wong", avatar: follower2 },
    { name: "John Doe", avatar: follower3 },
    { name: "Jane Smith", avatar: follower4 },
    { name: "Michael Johnson", avatar: follower5 },
    { name: "Sarah Connor", avatar: follower6 },
  ];

  return (
    <Grid container mt={'16px'}>
      <Grid item>
        <Box>
          <Paper>
            <CardHeader
              title="Followers"
              action={
                <Search>
                  <SearchIconWrapper>
                    <SearchTwoTone />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>
              }
            />
            <Divider />
            <CardContent>
              <Grid container spacing={3} direction={"row"}>
                {followers.map((follower, index) => (
                  <FollowerCard key={index} name={follower.name} avatar={follower.avatar} />
                ))}
              </Grid>
            </CardContent>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

const FollowerCard = ({ name, avatar }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid item>
      <Paper>
        <CardContent>
          <Grid container spacing={2} direction={'column'}>
            <Grid item>
              <Grid container alignItems="center" spacing={2}>
                <Grid item>
                  <Avatar src={avatar} alt="Profile" />
                </Grid>
                <Grid item xs>
                  <Typography variant="h6">{name.split(" ")[0]}</Typography>
                  <Typography variant="body2" color="textSecondary">{name.split(" ")[1]}</Typography>
                </Grid>
                <Grid item>
                  <IconButton onClick={handleMenuClick}>
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                  >
                    <MenuItem onClick={handleMenuClose}>
                      <FavoriteIcon fontSize="small" />
                      Favorites
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose}>
                      <PersonAddIcon fontSize="small" />
                      Edit Friend List
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose}>
                      <DeleteIcon fontSize="small" />
                      Removed
                    </MenuItem>
                  </Menu>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <Button variant="outlined" startIcon={<VideoCallIcon sx={{ color: "rgb(103, 58, 183)" }} />} fullWidth>
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="outlined" startIcon={<ChatIcon sx={{ color: "rgb(33, 150, 243)" }} />} fullWidth>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Paper>
    </Grid>
  );
};

export default Friends;
