import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { AssessmentTwoTone, CalendarTodayTwoTone, DescriptionTwoTone, ThumbDownAltTwoTone } from '@mui/icons-material';
import { CardContent } from '@mui/material';

const Row1 = () => {
  return (
      < >
        <Grid item lg={3}>
          <Paper>
            <CardContent>
              <Grid container sx={{justifyContent:"space-between",alignItems:"center"}}>
                <Grid item>
                  <Typography variant="h3" sx={{fontSize:"20px",fontWeight:"600",color:"#121946"}}>$30200</Typography>
                  <Typography variant="body2"sx={{mt:"8px" ,color:"#364152"}}>All Earnings</Typography>
                </Grid>
                <Grid item >
                  <Typography varient="h2">
                    <AssessmentTwoTone sx={{color:"rgb(103, 58, 183)",height:"35px",width:"35px"}}/>
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Paper>
        </Grid>
        <Grid item lg={3}>
          <Paper>
            <CardContent>
              <Grid container sx={{justifyContent:"space-between",alignItems:"center"}}>
                <Grid item>
                  <Typography variant="h3" sx={{fontSize:"20px",fontWeight:"600",color:"#121946"}}>145</Typography>
                  <Typography variant="body2"sx={{mt:"8px" ,color:"#364152"}}>Task</Typography>
                </Grid>
                <Grid item >
                  <Typography varient="h2">
                    <CalendarTodayTwoTone sx={{color: "rgb(244, 67, 54)",height:"35px",width:"35px" }} />
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Paper>
        </Grid>
        <Grid item lg={3}>
          <Paper>
            <CardContent>
              <Grid container sx={{justifyContent:"space-between",alignItems:"center"}}>
                <Grid item>
                  <Typography variant="h3" sx={{fontSize:"20px",fontWeight:"600",color:"#121946"}}>290+</Typography>
                  <Typography variant="body2"sx={{mt:"8px" ,color:"#364152"}}>Page Views</Typography>
                </Grid>
                <Grid item >
                  <Typography varient="h2">
                    <DescriptionTwoTone sx={{color:"rgb(0, 200, 83)",height:"35px",width:"35px"}} />
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Paper>
        </Grid>
        <Grid item lg={3}>
          <Paper>
            <CardContent>
              <Grid container sx={{justifyContent:"space-between",alignItems:"center"}}>
                <Grid item>
                  <Typography variant="h3" sx={{fontSize:"20px",fontWeight:"600",color:"#121946"}}>500</Typography>
                  <Typography variant="body2"sx={{mt:"8px" ,color:"#364152"}}>Downloads</Typography>
                </Grid>
                <Grid item >
                  <Typography varient="h2">
                    <ThumbDownAltTwoTone sx={{color:"rgb(33, 150, 243)",height:"35px",width:"35px"}} />
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Paper>
        </Grid>
      </>
  );
};

export default Row1;
