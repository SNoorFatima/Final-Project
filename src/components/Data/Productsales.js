import React from "react";
import {
  CardHeader,
  CardContent,
  Typography,
  Divider,
  Box,
  Grid,
  Paper,
} from "@mui/material";

const productSales = {
  earnings: 20569,
  yesterday: 580,
  thisWeek: 5789,
  products: [
    { id: 2681, name: "Jacket", price: 786.4 },
    { id: 2756, name: "HeadPhone", price: 563.45 },
    { id: 8765, name: "Sofa", price: 769.45 },
    { id: 3652, name: "Iphone 7", price: 754.45 },
    { id: 7456, name: "Jacket", price: 743.23 },
    { id: 6502, name: "T-Shirt", price: 642.23 },
    { id: 3652, name: "Iphone 7", price: 754.45 },
    { id: 7456, name: "Jacket", price: 743.23 },
    { id: 6502, name: "T-Shirt", price: 642.23 }
  ]
};

const ProductSalesTable = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={6}>
        <Paper>
          <CardHeader title="Product Sales" titleTypographyProps={{ fontSize: "18px", fontWeight: "500" }} />
          <Divider />
          <CardContent>
            <Grid container justifyContent="space-around" sx={{ mb: 2 }}>
              <Grid item>
                <Typography variant="caption" color="textSecondary" fontSize={'12px'}>Earning</Typography>
                <Typography variant="h4" fontSize={'20px'}>${productSales.earnings.toLocaleString()}</Typography> 
              </Grid>
              <Grid item>
                <Typography variant="caption" color="textSecondary" fontSize={'12px'}>Yesterday</Typography>
                <Typography variant="h6" fontSize={'20px'}>${productSales.yesterday.toLocaleString()}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="caption" color="textSecondary" fontSize={'12px'}>This Week</Typography>
                <Typography variant="h6" fontSize={'20px'}>${productSales.thisWeek.toLocaleString()}</Typography>
              </Grid>
            </Grid>
            <Divider />
            <Box sx={{ maxHeight: 250, overflowY: "auto" }}>
              {productSales.products.map((product, index) => (
                <Box key={index} sx={{ display: "flex", justifyContent: "space-between", py: 1 }}>
                  <Typography variant="body2">{product.id}</Typography>
                  <Typography variant="body2">{product.name}</Typography>
                  <Typography variant="body2">${product.price.toFixed(2)}</Typography>
                </Box>
              ))}
            </Box>
          </CardContent>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ProductSalesTable;
