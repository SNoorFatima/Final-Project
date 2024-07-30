import { Container,Grid } from '@mui/material'
import React from 'react'
import MarketShareCard from './Marketshare'

const Analytics = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={6} md={3}>
            <Grid container>
                <Grid item>
                    <MarketShareCard/>
                </Grid>
                <Grid item></Grid>
                <Grid item></Grid>
            </Grid>
        </Grid>
        <Grid item xs={12} sm={6} md={3}></Grid>
      </Grid>
    </Container>
  )
}

export default Analytics
