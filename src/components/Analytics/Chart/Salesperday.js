import React from 'react';
import { Paper, Grid, Typography, Stack } from '@mui/material';
import Chart from 'react-apexcharts';
import { TrendingDown } from '@mui/icons-material';

const SalesperDayChart = () => {
  // Line chart options and data
  const lineChartOptions = {
    chart: {
      type: 'line',
      height: 200,
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: 'smooth',
      width: 3, // Set the width for the line
    },
    colors: ['#FFFFFF'], // Set the line color to white
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
      data: [55, 35, 75, 25, 90, 50],
    },
  ];

  return (
    <Paper sx={{ padding: 2 }}>
      <Grid container direction="column">
        <Grid item sx={{ backgroundColor: 'rgb(244, 67, 54)', padding: 2, borderRadius: 1 }}>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography variant="h6" sx={{ mb: 2, color: '#fff' }}>
                Sales per Day
              </Typography>
            </Grid>
            <Grid item>
              <Stack direction="row">
                <TrendingDown sx={{ color: '#fff' }} />
                <Typography variant="h6" sx={{ ml: 1, color: '#fff' }}>
                  3%
                </Typography>
              </Stack>
            </Grid>
          </Grid>
          <Chart options={lineChartOptions} series={lineChartData} type="line" height={200} />
        </Grid>
        <Grid item sx={{ mt: 4, padding: 2 }}>
          <Grid container spacing={2} justifyContent="space-around">
            <Grid item>
              <Stack>
                <Typography variant="h4" sx={{ fontSize: '20px' }}>
                $4230
                </Typography>
                <Typography variant="h4" sx={{ fontSize: '14px' }}>
                  Total Revenue
                </Typography>
              </Stack>
            </Grid>
            <Grid item>
              <Stack>
                <Typography variant="h4" sx={{ fontSize: '20px' }}>
                 421
                </Typography>
                <Typography variant="h4" sx={{ fontSize: '14px' }}>
                  Today Sales
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SalesperDayChart;
