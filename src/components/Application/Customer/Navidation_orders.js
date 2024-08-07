import { Home } from '@mui/icons-material'
import { AppBar, Breadcrumbs, Grid, Paper, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navidation_orders = () => {
  return (
    <Grid container spacing={2}>
    <Grid item xs={12}>
 <>
   <Paper>
     <Grid container p={2} display="flex" justifyContent={'space-between'}>
       <Grid item>
       <Typography variant="h6" sx={{ marginRight: '1rem' }}>Order Details</Typography>
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
         <Typography color="rgb(105, 117, 134)">Customers</Typography>
         <Typography color="rgb(105, 117, 134)">Order Details</Typography>
       </Breadcrumbs>
       </Grid>
     </Grid>
   </Paper>
 </>
 </Grid>
 <Grid item xs={12}>
    <AppBar position="static">
    <Tabs value={false}>
      <Tab label="Details" component={Link} to="/ordernavigation/OrderDetails" />
      <Tab label="Invoice" component={Link} to="/ordernavigation/OrderInvoice" />
      <Tab label="Status" component={Link} to="/ordernavigation/OrderStatus" />
    </Tabs>
  </AppBar>
  </Grid>
  </Grid>
  )
}

export default Navidation_orders
