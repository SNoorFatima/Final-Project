import { Breadcrumbs, Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import EarningBox from "./Earningbox";
import OrderBox from "./orderbox";
import TotalIncome from "./TotalIncome";
import Charts from "./Charts";
import { Home, Margin } from "@mui/icons-material";
import Totalicomebox2 from "./Totalicomebox2";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <Grid container spacing={2}>
       <Grid item xs={12}>
    <>
      <Paper >
        <Grid container p={2} display="flex" justifyContent={'space-between'}>
          <Grid item>
          <Typography variant="h6" sx={{ marginRight: '1rem' }}>Dasboard</Typography>
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
           
            <Typography color="rgb(105, 117, 134)">Dasboard</Typography>
          </Breadcrumbs>
          </Grid>
        </Grid>
      </Paper>
    </>
    </Grid>
    <Grid item>
      <Grid container spacing={3} direction={"column"}>
        <Grid item>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <EarningBox />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrderBox />
            </Grid>
            <Grid item xs={12} lg={4}>
              <Grid container spacing={3} >
                <Grid item xs={12} md={6} lg={12}>
                  <TotalIncome />
                </Grid>
                <Grid item xs={12} md={6} lg={12}>
                  <Totalicomebox2 />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
        <Charts/>
        </Grid>

      </Grid>
      </Grid>
      </Grid>
    
  );
};
export default Dashboard;
