import React from 'react';
import { Box, Card, CardContent, CardHeader, Paper, Typography } from '@mui/material';
import Chart from 'react-apexcharts';

const TotalComments = () => {
  const chartOptions = {
    chart: {
      type: 'area',
      height: 160,
      sparkline: {
        enabled: true
      },
    },
    stroke: {
      curve: 'smooth',
    },
    fill: {
      opacity: 1,
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100]
      }
    },
    colors: ['#fff'],
    tooltip: {
      theme: 'dark'
    },
    xaxis: {
      type: 'category',
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      show: false
    },
    grid: {
      show: false
    }
  };

  const chartSeries = [{
    name: 'Total Visitors',
    data: [30,15,18,12,25,10,20]
  }];

  return (
    <Paper sx={{ height: '200px', position: 'relative', overflow: 'hidden', backgroundColor: " rgb(244, 67, 54)" }}>
      <CardHeader 
        title={
          <Typography variant="h6" sx={{ color: '#fff' }}>
            Total Comments
          </Typography>
        }
        subheader={
          <Typography variant="h4" sx={{ color: '#fff' }}>
          2500
          </Typography>
        }
        action={
          <Typography variant="h6" sx={{ color: '#fff' }}>
            15%
          </Typography>
        }
      
      />
      <CardContent sx={{ padding: 0, paddingTop: 2 }}>
        <Chart options={chartOptions} series={chartSeries} type="area" height={80} />
      </CardContent>
    </Paper>
  );
};

export default TotalComments;
