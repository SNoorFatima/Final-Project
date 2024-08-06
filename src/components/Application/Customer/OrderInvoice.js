import React from 'react';
import { Box, Typography, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow, IconButton, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Stack } from '@mui/system';
import Navidation_orders from './Navidation_orders';

const products = [
  { id: 1, productName: 'Logo Design', category: 'Design', price: 200, date: '12 Jun', qty: 6 },
  { id: 2, productName: 'Landing Page', category: 'Development', price: 100, date: '12 Jun', qty: 7 },
  { id: 3, productName: 'Admin Template', category: 'Development', price: 150, date: '12 Jun', qty: 5 },
  { id: 4, productName: 'E-commerce Website', category: 'Development', price: 500, date: '15 Jun', qty: 2 },
  { id: 5, productName: 'Mobile App', category: 'Development', price: 300, date: '18 Jun', qty: 3 },
  { id: 6, productName: 'SEO Services', category: 'Marketing', price: 100, date: '20 Jun', qty: 8 },
  { id: 7, productName: 'Social Media Campaign', category: 'Marketing', price: 200, date: '22 Jun', qty: 4 },
  { id: 8, productName: 'Brand Strategy', category: 'Consulting', price: 250, date: '25 Jun', qty: 5 },
  { id: 9, productName: 'Content Creation', category: 'Marketing', price: 150, date: '27 Jun', qty: 6 },
  { id: 10, productName: 'Website Maintenance', category: 'Development', price: 100, date: '30 Jun', qty: 10 },
];

const OrderInvoice = () => {
  return (
    <>
    <Navidation_orders/>
    <Box p={3}>
      <Paper sx={{ padding: 3, border: "1px solid rgb(227, 232, 239)", boxShadow: "none" }}>
        <Typography variant="h5" gutterBottom>Invoice #125863478945</Typography>
<Divider />
        <Box mt={3}>
          <Typography variant="h6">Demo Company Inc.</Typography>
          <Typography variant="body2">1065 Mandan Road, Columbia MO,</Typography>
          <Typography variant="body2">Missouri. (123)-65202</Typography>
          <Typography variant="body2">demo@company.com</Typography>
          <Typography variant="body2">(+91) 9999 999 999</Typography>
        </Box>
<Stack direction={'row'} gap={10}>
        <Box mt={3}>
          <Typography variant="h6">Customer:</Typography>
          <Typography variant="body2">John Doe</Typography>
          <Typography variant="body2">1065 Mandan Road, Columbia MO,</Typography>
          <Typography variant="body2">Missouri. (123)-65202</Typography>
          <Typography variant="body2">(+61) 9999 567 891</Typography>
          <Typography variant="body2">demo@company.com</Typography>
        </Box>

        <Box mt={3}>
          <Typography variant="h6">Order Details:</Typography>
          <Typography variant="body2">Date: November 14</Typography>
          <Typography variant="body2">Status: Pending</Typography>
          <Typography variant="body2">Order Id: #146859</Typography>
        </Box>
        </Stack>

        <Paper sx={{ padding: 3, border: "1px solid rgb(227, 232, 239)", boxShadow: "none", mt: 4 }}>
          <Box>
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

          <Box mt={4} sx={{ bgcolor: 'rgba(0, 0, 255, 0.1)', p: 2, textAlign: "right" }}>
            <Typography variant="h6" gutterBottom>Summary</Typography>
            <Typography variant="body2">Sub Total: $4725.00</Typography>
            <Typography variant="body2">Taxes (10%): $57.00</Typography>
            <Typography variant="body2">Discount (5%): $45.00</Typography>
            <Typography variant="body2">Total: $4827.00</Typography>
          </Box>
        </Paper>
      </Paper>
    </Box>
    </>
  );
};

export default OrderInvoice;
