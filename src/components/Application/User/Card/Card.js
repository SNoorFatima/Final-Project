import React, { useState } from 'react';
import { Avatar, Box, Button, Card, CardContent, CardHeader, Divider, Grid, IconButton, InputBase, Menu, MenuItem, Paper, Typography, TablePagination, Stack } from '@mui/material';
import { styled } from '@mui/system';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchTwoTone from '@mui/icons-material/SearchTwoTone';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PinDropIcon from '@mui/icons-material/PinDrop';
import follower1 from '../Assets/follower1.png';
import follower2 from '../Assets/follwer2.png';
import follower3 from '../Assets/follwer3.png';
import follower4 from '../Assets/follower4.png';
import follower5 from '../Assets/follwer5.png';
import follower6 from '../Assets/follwer7.png';

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

const FollowerCard = ({ name, jobTitle, email, phone, location, avatar }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card>
      <CardContent>
        <Grid container spacing={3} direction={'column'}>
          <Grid item>
            <Avatar src={avatar} alt={name} sx={{ width: 56, height: 56 }} />
          </Grid>
          <Grid item xs>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Box>
                <Typography variant="h6">{name}</Typography>
                <Typography variant="body2" color="textSecondary">{jobTitle}</Typography>
              </Box>
              <IconButton onClick={handleMenuClick}>
                <MoreVertIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
                <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
             
              </Menu>
            </Box>
            <Typography variant="body2" mt={1}>
              Use the neural RSS application, then you can program the bluetooth firewall! #DOO
            </Typography>
            <Box mt={2}>
              <Grid container spacing={3} flexDirection={'column'}>
                <Grid item xs={12}>
                  <Typography variant="body2">
                    Email
                  </Typography>
                  <Typography variant="body2">
                   {email}
                  </Typography>
                </Grid>
                <Stack direction={'row'} justifyContent={'space-between'} pt={'24px'} pl={'24px'}>
                <Grid item xs={12} flexGrow={1}>
                  <Typography variant="body2">
                    Phone
                  </Typography>
                  <Typography variant="body2">
                    {phone}
                  </Typography>
                </Grid>
                <Grid item xs={12} flexGrow={1}>
                  <Typography variant="body2">
                   Location
                  </Typography>
                  <Typography variant="body2">
                  {location}
                  </Typography>
                </Grid>
                </Stack>
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Box mt={2}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button variant="outlined" color="primary" fullWidth>Message</Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="outlined" color="secondary" fullWidth>Block</Button>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

const Cards = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const followersData = [
    {
      name: 'Phoebe',
      jobTitle: 'Operations Officer',
      email: 'clauda@gmail.com',
      phone: '380-293-0177',
      location: 'Port Narcos',
      avatar: follower1
    },
    {
      name: 'Alice',
      jobTitle: 'Creative Director',
      email: 'alice@gmail.com',
      phone: '123-456-7890',
      location: 'Springfield',
      avatar: follower2
    },
    {
      name: 'Charlie',
      jobTitle: 'Marketing Manager',
      email: 'charlie@gmail.com',
      phone: '098-765-4321',
      location: 'Riverdale',
      avatar: follower3
    },
    {
      name: 'Dana',
      jobTitle: 'Product Manager',
      email: 'dana@gmail.com',
      phone: '567-890-1234',
      location: 'Hill Valley',
      avatar: follower4
    },
    {
      name: 'Eve',
      jobTitle: 'Software Engineer',
      email: 'eveblack@gmail.com',
      phone: '345-678-9012',
      location: 'Gotham',
      avatar: follower5
    },
    {
      name: 'Frank',
      jobTitle: 'Sales Manager',
      email: 'frank@gmail.com',
      phone: '234-567-8901',
      location: 'Metropolis',
      avatar: follower6
    }
  ];

  const paginatedFollowers = followersData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Grid container spacing={3} mt={2}>
      <Grid item xs={12}>
        <Box>
          <Paper>
            <CardHeader
              title="Cards"
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
                {paginatedFollowers.map((follower, index) => (
                  <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                    <FollowerCard {...follower} />
                  </Grid>
                ))}
              </Grid>
              <TablePagination
                rowsPerPageOptions={[4, 8, 12]}
                component="div"
                count={followersData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </CardContent>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Cards;
