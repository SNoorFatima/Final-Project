import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Divider,
  Box,
  Avatar,
  Grid,
} from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { BugReportOutlined, QueryBuilderOutlined, ThumbUpAltOutlined } from "@mui/icons-material";

const tasks = [
  {
    time: "8:50",
    description: "You're getting more and more followers, keep it up!",
    icon: <ThumbUpAltOutlined sx={{ color: "rgb(255,255,255)" }} />,
    bgcolor: "rgb(0, 230, 118)",
  },
  {
    time: "Sat, 5 Mar",
    description: "Design mobile Application",
    icon: <QueryBuilderOutlined sx={{ color: "rgb(255,255,255)" }} />,
    bgcolor: "rgb(33, 150, 243)",
  },
  {
    time: "Sun, 17 Feb",
    description: "Jenny assign you a task Mockup Design.",
    icon: <BugReportOutlined sx={{ color: "rgb(255,255,255)" }} />,
    bgcolor: "rgb(244, 67, 54)",
  },
  {
    time: "Sat, 18 Mar",
    description: "Design logo",
    icon: <ErrorOutlineIcon sx={{ color: "rgb(255,255,255)" }} />,
    bgcolor: "rgb(255, 229, 127)",
  },
  {
    time: "Sat, 22 Mar",
    description: "Design mobile Application",
    icon: <ThumbUpAltOutlined sx={{ color: "rgb(255,255,255)" }} />,
    bgcolor: "rgb(0, 230, 118)",
  },
];

const Tasks = () => {
  return (
    <Card sx={{ maxWidth: 345, mx: "auto" }}>
      <CardHeader title="Tasks" />
      <Divider />
      <CardContent>
        <Grid container direction="column" spacing={2}>
          {tasks.map((task, index) => (
            <Grid
              item
              key={index}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Avatar sx={{ bgcolor: task.bgcolor, mr: 2 }}>
                {task.icon}
              </Avatar>
              <Box>
                <Typography variant="subtitle2" fontSize={"12px"}>
                  {task.time}
                </Typography>
                <Typography variant="body2">{task.description}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
      <Divider />
      <Box sx={{ textAlign: "right",p:"24px"}}>
          <Typography
            variant="body2"
            color="rgb(33, 150, 243)"
            fontSize="13px"
            sx={{ cursor: "pointer" }}
            onClick={() => console.log("View All Projects clicked")}
          >
            View All Tasks
          </Typography>
        </Box>
    </Card>
  );
};

export default Tasks;
