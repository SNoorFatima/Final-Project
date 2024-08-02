import React from "react";
import {
  CardHeader,
  Divider,
  Grid,
  Avatar,
  Typography,
  Box,
  Link,
  Paper,
  CardContent,
} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import BackupIcon from "@mui/icons-material/Backup";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const messages = [
  {
    time: "2 hrs ago",
    icon: <TwitterIcon />,
    iconColor: "#1DA1F2",
    title: "+ 1652 Followers",
    description: "You’re getting more and more followers",
  },
  {
    time: "4 hrs ago",
    icon: <WorkOutlineIcon />,
    iconColor: "#F44336",
    title: "+ 5 New Products were added!",
    description: "Congratulations!",
  },
  {
    time: "1 day ago",
    icon: <BackupIcon />,
    iconColor: "#4CAF50",
    title: "Database backup completed!",
    description: (
      <>
        Download the{" "}
        <Link href="#" underline="hover" color="primary">
          latest backup
        </Link>
        .
      </>
    ),
  },
  {
    time: "2 day ago",
    icon: <PersonAddIcon />,
    iconColor: "#2196F3",
    title: "+2 Friend Requests",
    description: "This is great, keep it up!",
  },
];

const Messages = () => {
  return (
    <Grid item>
        <Paper>
      <CardHeader title="Messages" />
      <Divider />
      <CardContent sx={{ p: 2 }}>
        {messages.map((message, index) => (
          <Grid container key={index} sx={{ mb: 2 }} spacing={2}>
            <Grid item >
              <Grid container alignItems="center" spacing={2}>
                <Grid item>
                    <Grid container>
                        <Grid item textAlign={'center'}>  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{fontSize:"12px" }}
                  >
                    {message.time}
                  </Typography></Grid>
                  <Grid item paddingTop={1} paddingLeft={1} mt={'-15px'}>
                  <Avatar
                    sx={{
                      bgcolor: message.iconColor,
                      color: "white",
                    }}
                  >
                    {message.icon}
                  </Avatar>
                  </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                <Grid container>
                    <Grid item>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", display: "block",fontSize:"14px" }}
                  >
                    {message.title}
                  </Typography>
                  <Typography variant="h6" color="textSecondary" fontSize={'12px'}>
                    {message.description}
                  </Typography>
                  </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}
        <Divider />
        <Box sx={{ textAlign: "right", mt: 1 }}>
          <Typography
            variant="body2"
            color="primary"
            sx={{ cursor: "pointer" }}
            onClick={() => console.log("View All Projects clicked")}
          >
            View All Projects
          </Typography>
        </Box>
      </CardContent>
      </Paper>
    </Grid>
  );
};

export default Messages;
