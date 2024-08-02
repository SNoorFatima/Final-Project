import React from "react";
import { Grid, Paper, Stack, Typography } from "@mui/material";
import Chart from "react-apexcharts";

const AvgSessionLineGraph = () => {
  // Line chart options and data
  const lineChartOptions = {
    chart: {
      type: "line",
      height: 40,
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "straight",
      width: 2, // Set line width
    },
    colors: ["#1E88E5"], // Line color
    xaxis: {
      labels: {
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
        formatter: (val) => `Analytics: ${val}`,
      },
    },
  };

  const lineChartData = [
    {
      name: "AvgSessions",
      data: [2, 1, 2, 1, 1, 3,0], // Values from 1 to 3
    },
  ];

  return (
    <Paper sx={{ padding: 2 }}>
        <Grid container direction={'column'}>
            <Grid item>
                <Stack>
                   <Typography variant="body" fontSize={'14px'} color={'rgb(105, 117, 134)'}>Avg.Session</Typography>
                   <Typography variant="h3" fontSize={'20px'}>04:30</Typography>
                </Stack>
            </Grid>
            <Grid item>
            <Chart
        options={lineChartOptions}
        series={lineChartData}
        type="line"
        height={100}
      />
            </Grid>
        </Grid>
      
    </Paper>
  );
};

export default AvgSessionLineGraph;
