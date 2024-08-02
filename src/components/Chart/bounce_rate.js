import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { Card, CardContent, Box, Typography, Button, Menu, MenuItem, Stack } from '@mui/material';
import { ArrowDropUp } from '@mui/icons-material';

const BounceRateChart = () => {

  const series = [
    {
      name: 'Bounce Rate',
      data: [25, 55, 41, 89, 63,25, 44, 12, 36, 9,54, 25, 66, 41, 89,63], // Example bounce rates for 5 different pages
    },
  ];

  const options = {
    chart: {
      type: 'bar',
      height: 20,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    colors: ['rgba(0, 200, 83, 0.85)'], // Single color for the bars
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['Home', 'About', 'Services', 'Contact', 'Blog'],
      labels: {
        style: {
          fontSize: '14px',
        },
        show: false, // Hide x-axis labels
      },
      axisBorder: {
        show: false, // Hide x-axis border
      },
      axisTicks: {
        show: false, // Hide x-axis ticks
      },
    },
    yaxis: {
      labels: {
        formatter: (val) => `${val}%`,
        show: false, // Hide y-axis labels
      },
      axisBorder: {
        show: false, // Hide y-axis border
      },
      axisTicks: {
        show: false, // Hide y-axis ticks
      },
    },
    grid: {
      show: false, // Hide grid
    },
    tooltip: {
      y: {
        formatter: (val) => `${val}%`,
      },
    },
  };

  return (
    <Card>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Stack>
            <Typography variant='h3' fontSize={'20px'}>4.95%</Typography>
            <Stack direction={'row'}>
          <Typography variant="h6" fontSize={'14px'} gutterBottom>
            Bounce Rate by Page 
          </Typography>
          <ArrowDropUp sx={{color:'rgb(33, 150, 243)'}}/>
          </Stack>
          </Stack>
        </Box>
        <Chart options={options} series={series} type="bar" height={100} />
      </CardContent>
    </Card>
  );
};

export default BounceRateChart;
