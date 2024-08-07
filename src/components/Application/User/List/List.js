import React, { useState } from 'react';
import { Avatar, Box, Chip, Grid, IconButton, InputBase, Menu, MenuItem, Paper, Typography, TablePagination, Table, TableBody, TableCell, TableHead, TableRow, CardHeader, Divider, Breadcrumbs } from '@mui/material';
import { styled } from '@mui/system';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchTwoTone from '@mui/icons-material/SearchTwoTone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BlockIcon from '@mui/icons-material/Block';
import follower1 from '../Assets/follower1.png';
import follower2 from '../Assets/follwer2.png';
import follower3 from '../Assets/follwer3.png';
import follower4 from '../Assets/follower4.png';
import follower5 from '../Assets/follwer5.png';
import follower6 from '../Assets/follwer7.png';
import { Link } from 'react-router-dom';
import { Home } from '@mui/icons-material';

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

const FollowerRow = ({ index, name, email, country, friends, followers, status, avatar }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <TableRow>
      <TableCell>{index + 1}</TableCell>
      <TableCell>
        <Box display="flex" alignItems="center">
          <Avatar src={avatar} alt={name} sx={{ width: 40, height: 40, marginRight: 2 }} />
          <Box>
            <Typography variant="body1">{name}</Typography>
            <Typography variant="body2" color="textSecondary">{email}</Typography>
          </Box>
        </Box>
      </TableCell>
      <TableCell>{country}</TableCell>
      <TableCell>{friends}</TableCell>
      <TableCell>{followers}</TableCell>
      <TableCell>
        <Chip label={status} sx={getStatusChipStyles(status)} />
      </TableCell>
      <TableCell>
        <IconButton>
          <ChatBubbleOutlineIcon  sx={{color:"rgb(33, 150, 243)"}}/>
        </IconButton>
        <IconButton>
          <BlockIcon sx={{color:"rgb(216, 67, 21)",borderColor: "rgb(255, 171, 145)"}} />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

const Lists = () => {
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
      name: 'Curtis',
      email: 'wiegand@hotmail.com',
      country: 'Saucerize',
      friends: 834,
      followers: 3645,
      status: 'Success',
      avatar: follower1
    },
    {
      name: 'Xavier',
      email: 'tyrell86@company.com',
      country: 'South Bradfordstad',
      friends: 634,
      followers: 2345,
      status: 'Pending',
      avatar: follower2
    },
    {
      name: 'Lola',
      email: 'aufderhar56@yahoo.com',
      country: 'North Tannermouth',
      friends: 164,
      followers: 9345,
      status: 'Failed',
      avatar: follower3
    },
    {
      name: 'Milton',
      email: 'dikinson49@hotmail.com',
      country: 'North Anika',
      friends: 684,
      followers: 3654,
      status: 'Pending',
      avatar: follower4
    },
    {
      name: 'Lysanne',
      email: 'zack.turner49@company.com',
      country: 'Betteland',
      friends: 842,
      followers: 5863,
      status: 'Success',
      avatar: follower5
    },
    {
      name: 'Bonita',
      email: 'keebler57@company.com',
      country: 'Alexburgh',
      friends: 543,
      followers: 8965,
      status: 'Failed',
      avatar: follower6
    },
    {
      name: 'Retta',
      email: 'mathew92@yahoo.com',
      country: 'East Bryceland',
      friends: 871,
      followers: 9321,
      status: 'Success',
      avatar: follower1
    },
    {
      name: 'Zoie',
      email: 'hulda1@hotmail.com',
      country: 'Beattytown',
      friends: 354,
      followers: 1686,
      status: 'Pending',
      avatar: follower2
    },
    {
      name: 'Easton',
      email: 'hilpert66@hotmail.com',
      country: 'North Pedromouth',
      friends: 546,
      followers: 9562,
      status: 'Success',
      avatar: follower3
    },
    {
      name: 'Brianne',
      email: 'noe45@hotmail.com',
      country: 'New Alexanderborough',
      friends: 1482,
      followers: 10865,
      status: 'Success',
      avatar: follower4
    }
  ];

  const paginatedFollowers = followersData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Grid container spacing={2}>
    <Grid item xs={12}>
 <>
   <Paper >
     <Grid container p={2} display="flex" justifyContent={'space-between'}>
       <Grid item>
       <Typography variant="h6" sx={{ marginRight: '1rem' }}>List</Typography>
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
        
         <Typography color="rgb(105, 117, 134)">List</Typography>
       </Breadcrumbs>
       </Grid>
     </Grid>
   </Paper>
 </>
 </Grid>
 <Grid item xs={12}>
    <Grid container spacing={3} mt={2}>
      <Grid item xs={12}>
        <Box>
          <Paper>
            <CardHeader
              title="List"
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
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>User Profile</TableCell>
                  <TableCell>Country</TableCell>
                  <TableCell>Friends</TableCell>
                  <TableCell>Followers</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedFollowers.map((follower, index) => (
                  <FollowerRow key={index} index={index + page * rowsPerPage} {...follower} />
                ))}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[4, 8, 12]}
              component="div"
              count={followersData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Box>
      </Grid>
    </Grid>
    </Grid>
    </Grid>
  );
};

export default Lists;
