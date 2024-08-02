import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { Card, CardContent, Box, Typography, Button, Menu, MenuItem, Stack } from '@mui/material';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';

const ProductsChart = () => {

  const series = [
    {
      name: 'Product Sales',
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 110, 123, 90, 101, 124, 150, 120],
    },
  ];

  const options = {
    chart: {
      type: 'line',
      height: 40, // Reduced height
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: 'straight',
      width: 2.5
    },
    markers: {
      size: 5,
    },
    colors: ['rgb(244, 67, 54)'],
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
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
        formatter: (val) => `${val}`,
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
        formatter: (val) => `${val}`,
      },
    },
  };

  return (
    <Card>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Stack>
            <Typography variant='h3' fontSize={'20px'}>1,62,564</Typography>
            <Stack direction={'row'} alignItems="center">
              <Typography variant="h6" fontSize={'14px'} gutterBottom>
                Product Sales
              </Typography>
              <ArrowDropDown sx={{ color: 'rgb(244, 67, 54)' }} />
            </Stack>
          </Stack>
        </Box>
        <Chart options={options} series={series} type="line" height={100} />
      </CardContent>
    </Card>
  );
};

export default ProductsChart;
