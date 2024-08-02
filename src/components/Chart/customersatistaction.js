import React from 'react';
import Chart from 'react-apexcharts';
import { Card, CardContent, Typography } from '@mui/material';

const CustomerSatisfactionChart = () => {
  const series = [66, 50, 40, 30]; // Example data for customer satisfaction categories
  const options = {
    chart: {
      type: 'pie',
    },
    labels: ['Extremely Satisfied', 'Satisfied', 'Poor', 'Very Poor'],
    colors: ['rgb(216, 67, 21)', 'rgb(222, 98, 59)', 'rgb(229, 128, 97)', 'rgb(235, 159, 135)'], // Different colors for each category
    legend: {
      position: 'bottom',
    },
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" fontSize={'14px'} gutterBottom>
          Customer Satisfaction
        </Typography>
        <Chart options={options} series={series} type="pie" height={270} />
      </CardContent>
    </Card>
  );
};

export default CustomerSatisfactionChart;
