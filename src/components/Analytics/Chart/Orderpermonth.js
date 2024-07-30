import React from 'react';
import { Paper, Box, Typography, Grid, Stack } from '@mui/material';
import Chart from 'react-apexcharts';
import { TrendingDown } from '@mui/icons-material';

const OrderspermonthChart = () => {
  // Line chart options and data
  const lineChartOptions = {
    chart: {
      type: 'line',
      height: 40,
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: 'smooth',
      width: 3, // You can adjust the width if needed
    },
    colors: ['#FFFFFF'], // Set line color to white
    xaxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      theme: 'dark',
    },
  };

  const lineChartData = [
    {
      name: 'Sales per day',
      data: [55,35,75,25,90,50],
    },
  ];

  return (
    <Paper sx={{ padding: 2 }}>
        <Grid container direction={'column'}>
      <Grid item sx={{ backgroundColor: 'rgb(30, 136, 229)', padding: 2, borderRadius: 1 }}>
        <Grid container justifyContent={'space-between'}>
            <Grid item>
            <Typography variant="h6" sx={{ mb: 2, color: '#fff' }}>
          Orders per Day
        </Typography>
            </Grid>
            <Grid item>
                <Stack direction={'row'}>
                    <TrendingDown sx={{color: '#fff' }}/>
                    <Typography variant="h6" sx={{ ml: 1, color: '#fff' }}>
          28%
        </Typography>
                </Stack>
            </Grid>
        </Grid>
       
        <Chart options={lineChartOptions} series={lineChartData} type="line" height={200} />
      </Grid>
      <Grid item sx={{ mt: 4, padding: 2 }}>
        <Grid container spacing={2} justifyContent={'space-around'}>
          <Grid item>
            <Box>
              <Stack>
                <Typography variant="h4" sx={{ fontSize: '20px' }}>
                  1695
                </Typography>
                <Typography variant="h4" sx={{ fontSize: '14px' }}>
                  Total Orders
                </Typography>
              </Stack>
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <Stack>
                <Typography variant="h4" sx={{ fontSize: '20px' }}>
                  321
                </Typography>
                <Typography variant="h4" sx={{ fontSize: '14px' }}>
                  Today orders
                </Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      </Grid>
    </Paper>
  );
};

export default OrderspermonthChart;
