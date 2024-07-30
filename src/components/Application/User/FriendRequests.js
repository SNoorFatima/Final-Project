import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import friend1 from "./Assets/follower1.png"; // Example avatar
import friend2 from "./Assets/follwer2.png"; // Add more avatars as needed

const FriendRequestCard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const friendRequests = [
    { name: "Barney", mutualFriends: 10, avatar: friend1 },
    { name: "Alice", mutualFriends: 8, avatar: friend2 },
    // Add more friend requests as needed
  ];

  return (
    <Grid container spacing={3} marginTop={'16px'}>
      {friendRequests.map((friend, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <Paper >
            <Box sx={{ display: "flex", alignItems: "center", padding: 2 ,'&:hover':{ 
    borderColor: "rgb(33, 150, 243)"}}}>
              <Avatar src={friend.avatar} alt={friend.name} sx={{ mr: 2 }} />
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6">{friend.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {friend.mutualFriends} mutual friends
                </Typography>
              </Box>
              <IconButton onClick={handleMenuClick}>
                <MoreVertIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>Report</MenuItem>
                <MenuItem onClick={handleMenuClose}>Block</MenuItem>
              </Menu>
            </Box>
            <CardContent sx={{ display: "flex", justifyContent: "space-between", px: 2, pb: 2 }}>
              <Button variant="outlined"  fullWidth sx={{ mr: 1,color:"rgb(33, 150, 243)",'&:hover':{
               
                    textDecoration: "none",
                    backgroundColor:" rgba(33, 150, 243, 0.04)",
                    border: "1px solid rgb(33, 150, 243)",
               
              } }}>
                Confirm
              </Button>
              <Button variant="outlined"  fullWidth sx={{color:"rgb(244, 67, 54)",'&:hover':{
               
                    backgroundColor: "rgba(244, 67, 54, 0.04)",
                    textDecoration:" none",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "rgb(244, 67, 54)",
              }
               
              }}>
                Delete
              </Button>
            </CardContent>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default FriendRequestCard;
