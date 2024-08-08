import { Breadcrumbs,Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import MarketShareCard from './Marketshare'
import Revenuecard from './Revenuecard'
import Orderscard from './Orderscard'
import LatestCustomers from './LatestCustomers'
import DashboardBoxes from './InfoGrid'
import TotalRevenue from './TotalRevenue'
import Dailyusers from './Dailyusers'
import Dailypageview from './Dailypageview'
import { Link } from 'react-router-dom'
import { Home } from '@mui/icons-material'
 
const Analytics = () => {
  return (
    <Grid container spacing={2}>
       <Grid item xs={12}>
    <>
      <Paper >
        <Grid container p={2} display="flex" justifyContent={'space-between'}>
          <Grid item>
          <Typography variant="h6" sx={{ marginRight: '1rem' }}>Analytics</Typography>
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
           
            <Typography color="rgb(105, 117, 134)">Analytics</Typography>
          </Breadcrumbs>
          </Grid>
        </Grid>
      </Paper>
    </>
    </Grid>
    <Grid item xs={12}>
      <Grid container spacing={3}>
        <Grid item  xs={12}  md={6}>
            <Grid container spacing={3} direction={'column'}>
                <Grid item xs={12} >
                    <MarketShareCard/>
                </Grid>
                <Grid item xs={12} >
                  <Revenuecard/>
                </Grid>
                <Grid item xs={12} >
                  <Orderscard/>
                </Grid>
                <Grid item xs={12} >
                  <LatestCustomers/>
                </Grid>
            </Grid>
        </Grid>
        <Grid item  xs={12}  md={6} >
        <Grid container spacing={3} direction={'column'}>
                <Grid item xs={12} >
                    <DashboardBoxes/>
                </Grid>
                <Grid item xs={12} >
                  <TotalRevenue/>
                </Grid>
                <Grid item xs={12} >
                  <Dailyusers/>
                </Grid>
                <Grid item xs={12} >
                  <Dailypageview/>
                </Grid>
            </Grid>
        </Grid>
      </Grid>
      </Grid>
      </Grid>
    
  )
}

export default Analytics
