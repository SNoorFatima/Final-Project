import React from 'react';
import Chart from 'react-apexcharts';
import { Card, CardContent, Box, Typography, Stack } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';

const VisitsChart = () => {
  const series = [
    {
      name: 'Product Sales',
      data: [10, 66, 41, 89, 63, 25, 44, 12, 36, 20, 54, 25, 10],
    },
  ];

  const options = {
    chart: {
      type: 'area', // Change to 'area' for an area chart
      height: 40,
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: 'straight',
      width: 2.5,
      colors: ['rgb(33, 150, 243)'], // Line color
    },
    markers: {
      size: 5,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0.1,
        stops: [0, 100],
        colorStops: [
          {
            offset: 0,
            color: 'rgb(33, 150, 243)', // Fill gradient starting color
            opacity: 0.3,
          },
          {
            offset: 100,
            color: 'rgb(33, 150, 243)', // Fill gradient ending color
            opacity: 0.1,
          },
        ],
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
      labels: {
        style: {
          fontSize: '14px',
        },
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
      labels: {
        formatter: (val) => `${val}`,
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    grid: {
      show: false,
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
            <Typography variant='h3' fontSize={'20px'}>$16,756</Typography>
            <Stack direction={'row'} alignItems="center">
              <Typography variant="h6" fontSize={'14px'} gutterBottom>
                Visits
              </Typography>
              <ArrowDropDown sx={{ color: 'rgb(244, 67, 54)' }} />
            </Stack>
          </Stack>
        </Box>
        <Chart options={options} series={series} type="area" height={100} />
      </CardContent>
    </Card>
  );
};

export default VisitsChart;
