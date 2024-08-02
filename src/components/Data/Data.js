import { Grid } from '@mui/material'
import React from 'react'
import ToDoList from './todo'
import TrafficSources from './traficsourses'
import TeamMembers from './Teammembers'
import UserActivity from './UserActivities'
import Messages from './messages'
import ProjectsTable from './Projecttable'
import ProductSalesTable from './Productsales'
import Tasks from './tasks'
import ApplicationSales from './Applicationsales'
import ActiveTickets from './Activeticket'
import LatestPosts from './Latestposts'
import Feeds from './Feeds'
import LatestCustomers from '../Analytics/LatestCustomers'
import LatestOrder from './Latestorder'
import IncomingRequests from './Incomingrequest'
import TotalRevenue from '../Analytics/TotalRevenue'
import NewCustomers from './Newcustomers'
import RecentTickets from './Recenttickets'

const Data = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={4}>
<ToDoList/>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
<TrafficSources/>
</Grid>
<Grid item xs={12} lg={4}>
<TeamMembers/>
</Grid>
<Grid item xs={12} md={6} lg={6}><UserActivity/></Grid>

<Grid item xs={12} md={6} lg={6}>
  <Messages/>
</Grid>
<Grid item xs={12} md={6} lg={6}>
  <ProjectsTable/>
</Grid>
<Grid item xs={12} md={6} >
  <ProductSalesTable/>
</Grid> 
<Grid item xs={12} md={4} >
  <Tasks/>
</Grid>
<Grid item xs={12} md={8} >
  <ApplicationSales/>
</Grid>
<Grid item xs={12} md={8} >
  <ActiveTickets/>
</Grid>
<Grid item xs={12} md={4}>
  <LatestPosts/>
</Grid>
<Grid item xs={12} md={5} >
  <Feeds/>
</Grid>
<Grid item xs={12} md={7} >
  <LatestCustomers/>
</Grid>
<Grid item xs={12} >
  <LatestOrder/>
</Grid>
<Grid item xs={12} md={6} lg={4}>
  <IncomingRequests/>
</Grid>
<Grid item xs={12} md={6} lg={4}>
  <TotalRevenue/>
</Grid>
<Grid item xs={12}  lg={4}>
  <NewCustomers/>
</Grid>
<Grid item xs={12} md={8}>
<RecentTickets/>
</Grid>
    </Grid>       
  )
}

export default Data
