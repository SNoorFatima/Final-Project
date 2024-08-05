import { Container, Grid } from "@mui/material";
import React from "react";
import EarningBox from "./Earningbox";
import OrderBox from "./orderbox";
import TotalIncome from "./TotalIncome";
import Charts from "./Charts";
import { Margin } from "@mui/icons-material";
import Totalicomebox2 from "./Totalicomebox2";

const Dashboard = () => {
  return (
   
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
    
  );
};
export default Dashboard;
