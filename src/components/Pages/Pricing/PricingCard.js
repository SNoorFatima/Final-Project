import { Alert, Grid, Paper } from "@mui/material";
import React from "react";
import PricingCard1 from "./pricingcard1";
import PricingCard2 from "./pricingcard2";
import PricingCard3 from "./pricingcard3";
import { InfoOutlined } from "@mui/icons-material";
import { Box } from "@mui/system";

const PricingCard = () => {
  return (
    <Grid container direction={"column"} spacing={3}>
      <Grid item >
        <Box sx={{padding:0,border:"1px dashed rgb(2, 136, 209)"}}>
        <Alert icon={<InfoOutlined  />} variant="outlined" severity="info">
        Note
        The pricing provided is for demonstration purposes only. For actual product pricing, please refer to the official
         <span><a href="https://mui.com/store/items/mantis-react-admin-dashboard-template/" style={{color:" rgb(33, 150, 243)"}}> pricing page</a></span>
</Alert>
        </Box>
      </Grid>
<Grid item>
      
        <Grid container spacing={3} direction={"row"}>
          <PricingCard1 />
          <PricingCard2 />
          <PricingCard3 />
        </Grid>
     
      </Grid>
    </Grid>
  );
};

export default PricingCard;
