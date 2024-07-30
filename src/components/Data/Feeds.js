import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Avatar,
  Box,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CancelIcon from "@mui/icons-material/Cancel";
import { blue, red, green, yellow } from "@mui/material/colors";

const feeds = [
  { icon: <NotificationsIcon sx={{ color: "white" }} />, message: "You have 3 pending tasks.", bgcolor: blue[500] },
  { icon: <ShoppingCartIcon sx={{ color: "white" }} />, message: "New order received", bgcolor: red[500] },
  { icon: <AssignmentIcon sx={{ color: "white" }} />, message: "You have 3 pending tasks.", bgcolor: green[500] },
  { icon: <ShoppingCartIcon sx={{ color: "white" }} />, message: "New order received", bgcolor: blue[500] },
  { icon: <CancelIcon sx={{ color: "white" }} />, message: "Order cancelled", bgcolor: yellow[700] },
];

const Feeds = () => {
  return (
    <Card>
      <CardHeader title="Feeds" titleTypographyProps={{fontSize:'18px'}} />
      <Divider />
      <CardContent sx={{ padding: "0px!important" }}>
        <List>
          {feeds.map((feed, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <Avatar sx={{ bgcolor: feed.bgcolor }}>
                  {feed.icon}
                </Avatar>
              </ListItemIcon>
              <ListItemText sx={{fontSize:'14px'}} primary={feed.message} />
              <ListItemSecondaryAction>
                <Typography variant="caption" color="textSecondary" sx={{fontSize:'12px'}} >
                  Just Now
                </Typography>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </CardContent>
      <Box sx={{ textAlign: "right", p: "24px" }}>
          <Typography
            variant="body2"
            color="rgb(33, 150, 243)"
            fontSize="13px"
            sx={{ cursor: "pointer" }}
            onClick={() => console.log("View All Projects clicked")}
          >
            View All Feeds
          </Typography>
        </Box>
    </Card>
  );
};

export default Feeds;
