import { Container, Grid } from '@mui/material'
import React from 'react'
import EarningBox from './Earningbox'
import OrderBox from './orderbox'
import TotalIncome from './TotalIncome'
import Charts from './Charts'
import { Margin } from '@mui/icons-material'

const Dashboard = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item md={4} sm={6} xs={12}>
        <EarningBox/>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
        <OrderBox/>
         </Grid>
         <Grid item md={4} sm={6} xs={12}>
         <TotalIncome/>
         </Grid>
        <Grid item >
          <Charts/>
        </Grid>
       
      </Grid>
    </Container>
  )
}
export default Dashboard