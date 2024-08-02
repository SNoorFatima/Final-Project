import React from 'react';
import { Card, CardContent, CardHeader, Paper, Typography } from '@mui/material';
import Chart from 'react-apexcharts';

const TotalStatusCard = () => {
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
    name: 'Total Status',
    data: [30,15,18,12,25,10,20]
  }];

  return (
    <Paper sx={{ height: '200px', position: 'relative', overflow: 'hidden', backgroundColor: 'rgb(0, 200, 83)' }}>
      <CardHeader
        title={
          <Typography variant="h6" sx={{ color: '#fff' }}>
            Total Status
          </Typography>
        }
        subheader={
          <Typography variant="h4" sx={{ color: '#fff' }}>
            2500
          </Typography>
        }
        action={
          <Typography variant="h6" sx={{ color: '#fff' }}>
            95%
          </Typography>
        }
      />
      <CardContent sx={{ padding: 0, paddingTop: 2 }}>
        <Chart options={chartOptions} series={chartSeries} type="area" height={80} />
      </CardContent>
    </Paper>
  );
};

export default TotalStatusCard;
