import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Divider,
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
} from "@mui/material";
import { FiberManualRecord, WatchLaterTwoTone } from "@mui/icons-material";
import { green } from "@mui/material/colors";

import img1 from "./Assets/avatar-1-Dja0YEDP.png";
import img2 from "./Assets/avatar-2-F9B2bxNX.png";
import img3 from "./Assets/avatar-3-DAakmaVf.png";

const customers = [
  {
    name: "Alex Thompson",
    message: "Cheers!",
    time: "30 min ago",
    img: img1,
    online: true,
  },
  {
    name: "John Doue",
    message: "stay hungry stay foolish!",
    img: img2,
    time: "30 min ago",
    online: true,
  },
  {
    name: "Alex Thompson",
    message: "Cheers!",
    img: img3,
    time: "30 min ago",
    online: false,
  },
  {
    name: "John Doue",
    message: "stay hungry stay foolish!",
    img: img3,
    time: "10 min ago",
    online: false,
  },
  {
    name: "Shirley Hoe",
    message: "Cheers!",
    img: img2,
    time: "30 min ago",
    online: false,
  },
  {
    name: "Alex Thompson",
    message: "Cheers!",
    time: "30 min ago",
    img: img1,
    online: true,
  },
  {
    name: "John Doue",
    message: "stay hungry stay foolish!",
    img: img2,
    time: "30 min ago",
    online: true,
  },
];

const NewCustomers = () => {
  return (
    <Card>
      <CardHeader title="New Customers" titleTypographyProps={{fontSize:"18px"}} />
      <Divider />
      <CardContent
        sx={{ padding: "0px!important", height: 300, overflowY: "auto" }}
      >
        <List>
          {customers.map((customer, index) => (
            <ListItem key={index} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={customer.name} src={customer.img} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography variant="body1" fontSize={'14px'}>
                    {customer.name}
                  </Typography>
                }
                secondary={
                  <Typography variant="body2" color="textSecondary" fontSize={'12px'}>
                    {customer.message}
                  </Typography>
                }
              />
              <ListItemSecondaryAction>
                <Grid container alignItems="center" spacing={1}>
                  {customer.online ? (
                    <Grid item>
                      <FiberManualRecord sx={{ color: green[500], height: "15px", width: "15px" }} />
                    </Grid>
                  ) : (
                    <Grid item> 
                         <Grid container alignItems="center">
                <Grid item>
                  <WatchLaterTwoTone
                    fontSize="12px"
                    sx={{ color: "grey.600" }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="body2" color="textSecondary" sx={{fontSize:"12px"}}>
                    {customer.time}
                  </Typography>
                </Grid>
              </Grid>
                    </Grid>
                  )}
                </Grid>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default NewCustomers;
