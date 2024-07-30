import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

const OrderDetails = () => {
  return (
    <Box p={3}>
        <Paper sx={{padding:3}}>
      <Typography variant="h6" gutterBottom>Customer</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          
            <Typography variant="body1">Sophia Hale</Typography>
            <Typography variant="body2">070 123 4567</Typography>
            <Typography variant="body2">example@mail.com</Typography>
          
        </Grid>
      </Grid>

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>Payment method</Typography>
        
          <Typography variant="body2">Credit Card</Typography>
          <Typography variant="body2">Transaction ID: 000001-TXT</Typography>
          <Typography variant="body2">Amount: $2500</Typography>
       
      </Box>

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>Shipping method</Typography>
        
          <Typography variant="body2">Carrier: FX-012345-6</Typography>
          <Typography variant="body2">Tracking Code: FX-012345-6</Typography>
          <Typography variant="body2">Date: 12.15.2018</Typography>
        
      </Box>

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>Billing address</Typography>
        
          <Typography variant="body2">First name: Joseph</Typography>
          <Typography variant="body2">Last name: William</Typography>
          <Typography variant="body2">Address: 4898 Joanne Lane street</Typography>
          <Typography variant="body2">City: Boston</Typography>
          <Typography variant="body2">State: Massachusetts</Typography>
          <Typography variant="body2">Zip code: 02110</Typography>
          <Typography variant="body2">Phone: +1 (070) 123-4567</Typography>
        
      </Box>

      <Box mt={4}>
        <Typography variant="h6" gutterBottom>Shipping address</Typography>
        
          <Typography variant="body2">First name: Sara</Typography>
          <Typography variant="body2">Last name: Soudan</Typography>
          <Typography variant="body2">Address: 4898 Joanne Lane street</Typography>
          <Typography variant="body2">City: Boston</Typography>
          <Typography variant="body2">State: Massachusetts</Typography>
          <Typography variant="body2">Zip code: 02110</Typography>
          <Typography variant="body2">Phone: +1 (070) 123-4567</Typography>
        
      </Box>
      </Paper>
    </Box>
  );
};

export default OrderDetails;
