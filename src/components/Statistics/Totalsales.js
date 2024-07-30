import { CardContent, Grid, Paper, Typography, Box } from '@mui/material';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import React from 'react';
import { LocalMallTwoTone } from '@mui/icons-material';

const TotalSales = () => {
  return (
    <Grid item>
      <Paper 
        sx={{
          transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          boxShadow: "none",
          backgroundColor: "rgb(216, 67, 21)",
          position: "relative",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          padding: 2,
        }}
      >
        <CardContent sx={{ flex: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sx={{ padding: "8px 0px 0px 8px !important",fontWeight:'500' }}>
              <Typography variant="h5" sx={{fontSize:'14px'}}>TotalSales</Typography>
            </Grid>
            <Grid item xs={12} sx={{ padding: "8px 0px 0px 8px !important",fontWeight:'600' }}>
              <Typography variant="h3" sx={{fontSize:'20px'}}>1641</Typography>
            </Grid>
            <Grid item xs={12} sx={{ padding: "8px 0px 0px 8px !important",fontWeight:'400' }}>
              <Typography variant="h6" sx={{fontSize:'12px'}}>$1055 Revenue Generated</Typography>
            </Grid>
          </Grid>
        </CardContent>
        <Box 
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            width: 100,
            height: 100,
          }}
        >
          <LocalMallTwoTone 
            sx={{
              opacity: '0.5',
              fontSize: '2.1875rem',
              height:"100px",
              width:"100px"
            }}
          />
        </Box>
      </Paper>
    </Grid>
  );
}

export default TotalSales;
