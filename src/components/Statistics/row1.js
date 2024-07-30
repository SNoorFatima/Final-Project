import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { AssessmentTwoTone, CalendarTodayTwoTone, DescriptionTwoTone, ThumbDownAltTwoTone } from '@mui/icons-material';
import { CardContent } from '@mui/material';


const statistics = [
  { value: "$30200", label: "All Earnings", icon: <AssessmentTwoTone sx={{color:"rgb(103, 58, 183)",height:"35px",width:"35px"}}/> },
  { value: "145", label: "Task", icon: <CalendarTodayTwoTone sx={{color: "rgb(244, 67, 54)",height:"35px",width:"35px" }} /> },
  { value: "290+", label: "Page Views", icon: <DescriptionTwoTone sx={{color:"rgb(0, 200, 83)",height:"35px",width:"35px"}} /> },
  { value: "500", label: "Downloads", icon: <ThumbDownAltTwoTone sx={{color:"rgb(33, 150, 243)",height:"35px",width:"35px"}} /> },
];

const Row1 = () => {
  return (
      <Grid container spacing={2}>
        {statistics.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper>
              <CardContent>
                <Grid container sx={{justifyContent:"space-between",alignItems:"center"}}>
              <Grid item>
              <Typography variant="h3" sx={{fontSize:"20px",fontWeight:"600",color:"#121946"}}>{stat.value}</Typography>
              <Typography variant="body2"sx={{mt:"8px" ,color:"#364152"}}>{stat.label}</Typography>
              </Grid>
              <Grid item >
                <Typography varient="h2">
                {stat.icon}
                </Typography>
              </Grid>
              </Grid>
              </CardContent>
            </Paper>
          </Grid>
        ))}
      </Grid>
  );
};

export default Row1;
