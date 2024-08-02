import React from "react";
import { Card, CardHeader, Divider, Grid, Avatar, Typography, Box } from "@mui/material";
import { WatchLaterTwoTone } from "@mui/icons-material";
import img1 from './Assets/avatar-1-Dja0YEDP.png'
import img2 from './Assets/avatar-2-F9B2bxNX.png'
import img3 from './Assets/avatar-3-DAakmaVf.png'
const userActivities = [
  {
    name: "John Doe",
    description: "Developer",
    time: "2 min ago",
    avatarimage:img1
  },
  {
    name: "John Doe",
    description: "Developer",
    time: "2 min ago",
    avatarimage: img2
  },
  {
    name: "John Doe",
    description: "Developer",
    time: "2 min ago",
    avatarimage: img3
  },
  {
    name: "John Doe",
    description: "Developer",
    time: "2 min ago",
    avatarimage: img2,
  },
];

const TeamMembers = () => {
  return (
    <Card>
      <CardHeader title="Team Members"   titleTypographyProps={{fontSize:"18px",fontWeight:"500"}}/>
      <Divider />
      <Box sx={{ p: 2 }}>
        {userActivities.map((activity, index) => (
          <Grid
            container
            key={index}
            alignItems="center"
            sx={{ mb: 2 }}
            spacing={2}
          >
            <Grid item>
              <Avatar sx={{ bgcolor: activity.avatarColor }}  src={activity.avatarimage}/>
             
            </Grid>
            <Grid item xs>
              <Typography variant="body1" sx={{ fontWeight: "500" ,fontSize:"14px"}}>
                {activity.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{fontSize:"12px"}}>
                {activity.description}
              </Typography>
            </Grid>
            <Grid item>
              <Grid container alignItems="center" spacing={0.5}>
              
                <Grid item>
                  <Typography variant="body2" color="textSecondary" sx={{fontSize:"12px"}}>
                    {activity.time}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}
        <Divider />
        <Box sx={{ textAlign: "right", mt: 1 }}>
          <Typography
            variant="body2"
            color="rgb(33, 150, 243)"
            fontSize="13px"
            sx={{ cursor: "pointer" }}
            onClick={() => console.log("View All Projects clicked")}
          >
            View All Projects
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default TeamMembers;
