import { WbSunnyTwoTone } from "@mui/icons-material";
import { CardContent, Paper, Typography,Grid } from "@mui/material";
import React from "react";

const Weatherbox = () => {
  return (
    <Grid container>
            <Grid item xs={12} md={6} lg={4}>
      <Paper>
        <CardContent sx={{padding:"0 0 0 0 !important"}}>
          <Grid container>
            <Grid item sx={{width:'50%',padding:"24px",textAlign:"center"}}>
                <Typography varient="h2">19 <sup>°</sup></Typography>
                <Typography variant="h6">Sunny</Typography>
            </Grid>
            <Grid item sx={{backgroundColor: "rgb(30, 136, 229)",width:"50%",borderTopRightRadius:"4px",borderEndEndRadius:"4px",padding:"24px",textAlign:"center",color:"#ffffff"}}>
             <Typography variant="h6"><WbSunnyTwoTone/></Typography>
             <Typography varient="h6">New York,NY</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Paper>
      </Grid>
    </Grid>
  );
};

export default Weatherbox;
