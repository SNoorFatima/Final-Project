import { Breadcrumbs, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import TotalSalesCard from './TotalSales'
import TotalComments from './Totalcomments'
import TotalStatusCard from './TotalStatus'
import TotalVisitors from './Totalvisitors'
import MarketShareCard from '../Analytics/Marketshare'
import TotalRevenueCard from './TotalRevenue'
import UserLineGraph from './users'
import TimeoutLineGraph from './Timeout'
import ViewLineGraph from './views'
import SessionLineGraph from './Session'
import AvgSessionLineGraph from './Avgsession'
import BounceRateChart from './bounce_rate'
import BounceRateLineGraph from './Bouncerate'
import SalesperDayChart from './Salesperday'
import OrderspermonthChart from './Orderpermonth'
import DevicePageViewsChart from './devicePagereview'
import VisitsChart from './Visitchart'
import ProductsChart from './Productchart'
import StockBarChart from './newstocks'
import CustomerSatisfactionChart from './customersatistaction'
import { Link } from 'react-router-dom'
import { Home } from '@mui/icons-material'

const Chart = () => {
  return (
    <Grid container spacing={2}>
    <Grid item xs={12}>
 <>
   <Paper >
     <Grid container p={2} display="flex" justifyContent={'space-between'}>
       <Grid item>
       <Typography variant="h6" sx={{ marginRight: '1rem' }}>Chart</Typography>
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
        
         <Typography color="rgb(105, 117, 134)">Chart</Typography>
       </Breadcrumbs>
       </Grid>
     </Grid>
   </Paper>
 </>
 </Grid>
 <Grid item>
    <Grid container spacing={3}>
        <Grid item xs={12} sm={6} lg={3}>
            <TotalSalesCard/>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
            <TotalComments/>
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
        <TotalStatusCard/>
        </Grid>
        <Grid item xs={12}  sm={6} lg={3}>
          <TotalVisitors/>
        </Grid>
        <Grid item xs={12} sm={6}>
         <MarketShareCard/>
        </Grid>
        <Grid item xs={12} sm={6}>
        <TotalRevenueCard/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <UserLineGraph/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <TimeoutLineGraph/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <ViewLineGraph/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <SessionLineGraph/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <AvgSessionLineGraph/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <BounceRateLineGraph/>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <SalesperDayChart/>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <OrderspermonthChart/>
        </Grid>
        <Grid item xs={12}  lg={4}>
          <DevicePageViewsChart/>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <VisitsChart/>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <BounceRateChart/>
        </Grid>
        <Grid item xs={12} lg={4}>
          <ProductsChart/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <StockBarChart/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomerSatisfactionChart/>
        </Grid>
        
      
    </Grid>
    </Grid>
    </Grid>
  )
}

export default Chart
