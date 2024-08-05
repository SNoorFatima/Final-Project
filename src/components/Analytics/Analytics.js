import { Container,Grid } from '@mui/material'
import React from 'react'
import MarketShareCard from './Marketshare'
import Revenuecard from './Revenuecard'
import Orderscard from './Orderscard'
import LatestCustomers from './LatestCustomers'
import DashboardBoxes from './InfoGrid'
import TotalRevenue from './TotalRevenue'
import Dailyusers from './Dailyusers'
import Dailypageview from './Dailypageview'
 
const Analytics = () => {
  return (
    
      <Grid container spacing={3}>
        <Grid item lg={6} xs={12} sm={6} md={6}>
            <Grid container spacing={3} direction={'column'}>
                <Grid item xs={12} sm={6} md={3}>
                    <MarketShareCard/>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Revenuecard/>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Orderscard/>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <LatestCustomers/>
                </Grid>
            </Grid>
        </Grid>
        <Grid item lg={6} xs={12} sm={6} md={6} >
        <Grid container spacing={3} direction={'column'}>
                <Grid item xs={12} sm={6} md={3}>
                    <DashboardBoxes/>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <TotalRevenue/>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Dailyusers/>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Dailypageview/>
                </Grid>
            </Grid>
        </Grid>
      </Grid>
    
  )
}

export default Analytics
