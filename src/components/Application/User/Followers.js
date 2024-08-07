import { Home, PinDropTwoTone, SearchTwoTone } from "@mui/icons-material";
import { Box, Breadcrumbs, CardContent, CardHeader, Divider, Grid, InputBase, Paper, styled, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Avatar, Button, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import follower1 from './Assets/follower1.png';
import follower2 from './Assets/follwer2.png';
import follower3 from './Assets/follwer3.png';
import follower4 from './Assets/follower4.png';
import follower5 from './Assets/follwer5.png';
import follower6 from './Assets/follwer7.png';
import User from "./userprofile";
import { Link } from "react-router-dom";

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
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Followers = () => {

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const followersData = [
    { name: 'Barney', location: 'Handburgh', avatar: follower1, needsFollowBack: true },
    { name: 'Alice', location: 'Springfield', avatar: follower2, needsFollowBack: true },
    { name: 'Charlie', location: 'Riverdale', avatar: follower3, needsFollowBack: true },
    { name: 'Dana', location: 'Hill Valley', avatar: follower4, needsFollowBack: false },
    { name: 'Eve', location: 'Gotham', avatar: follower5, needsFollowBack: false },
    { name: 'Frank', location: 'Metropolis', avatar: follower6, needsFollowBack: false },
  ];

  return (
    <Grid container spacing={2}>
    <Grid item xs={12}>
 
   <Paper >
     <Grid container p={2} display="flex" justifyContent={'space-between'}>
       <Grid item>
       <Typography variant="h6" sx={{ marginRight: '1rem' }}>Followers</Typography>
       </Grid>
       <Grid item>
       <Breadcrumbs separator="›">
         <Link underline="hover" color="inherit" href="/">
           Home
         </Link>
         <Typography color="rgb(105, 117, 134)">Social Profile</Typography>
         <Typography color="rgb(105, 117, 134)">Followers</Typography>
       </Breadcrumbs>
       </Grid>
     </Grid>
   </Paper>
 
 </Grid>
 <Grid item>
    <User/>
    <Grid container spacing={3} mt={2}>
      <Grid item xs={12}>
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
              <Grid container spacing={3}>
                {followersData.map((follower, index) => (
                  <Grid item key={index}>
                    <Paper>
                      <CardContent>
                        <Grid container spacing={3} direction={'column'}>
                          <Grid item>
                            <Grid container alignItems="center" spacing={2}>
                              <Grid item>
                                <Avatar src={follower.avatar} alt="Profile" />
                              </Grid>
                              <Grid item xs>
                                <Typography variant="h6">{follower.name}</Typography>
                                <Typography variant="body2" color="textSecondary">
                                  <PinDropTwoTone sx={{ height: "16px", width: "16px" }} />{follower.location}
                                </Typography>
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
                            {follower.needsFollowBack ? (
                              <Button variant="contained" startIcon={<PersonAddIcon />} fullWidth>
                                Follow Back
                              </Button>
                            ) : (
                              <Button variant="outlined" startIcon={<PersonAddIcon />} fullWidth>
                                Followed
                              </Button>
                            )}
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Paper>
        </Box>
      </Grid>
    </Grid>
    <Grid/>
    </Grid>
    </Grid>

  );
};

export default Followers;
