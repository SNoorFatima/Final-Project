import React from 'react';
import { Box, Typography, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, IconButton, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { CalendarToday, CalendarTodayTwoTone, Email, EmailTwoTone, PhoneAndroidTwoTone } from '@mui/icons-material';
import { borderColor, Stack } from '@mui/system';

const OrderDetails = () => {
  const products = [
    { id: 1, productName: 'Logo Design', category: 'Design', price: 200, date: '2023-07-15', qty: 6 },
    { id: 2, productName: 'Landing Page', category: 'Web Development', price: 100, date: '2023-07-16', qty: 7 },
    { id: 3, productName: 'Admin Template', category: 'Web Development', price: 150, date: '2023-07-17', qty: 5 },
    // add more products as needed
  ];

  return (
    <Box p={3} sx={{padding:3}}>
      <Paper sx={{padding:3, border:"1px solid rgb(227, 232, 239)",boxShadow:"none"}} >
        <Typography variant="h6" gutterBottom>Customer</Typography>
        <Grid container spacing={2}>
          
          <Grid item xs={12}>
          <Stack direction={'row '} gap={2} alignItems={'center'}>
            <Typography variant="body1"><CalendarTodayTwoTone sx={{width:"15px",height:"15px"}}/>   Sophia Hale</Typography>
            <Typography variant="body2"><PhoneAndroidTwoTone sx={{width:"15px",height:"15px"}}/> 070 123 4567</Typography>
            <Typography variant="body2"><EmailTwoTone sx={{width:"15px",height:"15px"}}/> example@mail.com</Typography>
            </Stack>
          </Grid>
        
        </Grid>
        <Divider sx={{marginTop:2,mb:2}}/>
        <Stack direction={'row'} gap={12}>
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
        </Stack>
        <Divider sx={{marginTop:2,mb:2}}/>
        <Stack direction={'row'} gap={8}>
        <Box>
          <Typography variant="h6" gutterBottom>Billing address</Typography>
          <Typography variant="body2">First name: Joseph</Typography>
          <Typography variant="body2">Last name: William</Typography>
          <Typography variant="body2">Address: 4898 Joanne Lane street</Typography>
          <Typography variant="body2">City: Boston</Typography>
          <Typography variant="body2">State: Massachusetts</Typography>
          <Typography variant="body2">Zip code: 02110</Typography>
          <Typography variant="body2">Phone: +1 (070) 123-4567</Typography>
        </Box>

        <Box >
          <Typography variant="h6" gutterBottom>Shipping address</Typography>
          <Typography variant="body2">First name: Sara</Typography>
          <Typography variant="body2">Last name: Soudan</Typography>
          <Typography variant="body2">Address: 4898 Joanne Lane street</Typography>
          <Typography variant="body2">City: Boston</Typography>
          <Typography variant="body2">State: Massachusetts</Typography>
          <Typography variant="body2">Zip code: 02110</Typography>
          <Typography variant="body2">Phone: +1 (070) 123-4567</Typography>
        </Box>
        </Stack>
        </Paper>
        <Paper sx={{padding:3, border:"1px solid rgb(227, 232, 239)",boxShadow:"none",mt:4}}>
        <Box  >
          <Typography variant="h6" gutterBottom>Products</Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Product Name</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.id}</TableCell>
                  <TableCell>{product.productName}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>${product.price.toFixed(2)}</TableCell>
                  <TableCell>{product.date}</TableCell>
                  <TableCell>{product.qty}</TableCell>
                  <TableCell>
                    <IconButton>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>

        <Box mt={4} sx={{ bgcolor: 'rgba(0, 0, 255, 0.1)', p: 2,textAlign:"right" }}>
          <Typography variant="h6" gutterBottom>Summary</Typography>
          <Typography variant="body2">Sub Total: $4725.00</Typography>
          <Typography variant="body2">Taxes (10%): $57.00</Typography>
          <Typography variant="body2">Discount (5%): $45.00</Typography>
          <Typography variant="body2">Total: $4827.00</Typography>
        </Box>
        </Paper>
      </Box>
   
  );
};

export default OrderDetails;
