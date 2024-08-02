import React from "react";
import { Paper, Grid, Typography, Stack } from "@mui/material";
import Chart from "react-apexcharts";
import { ArrowUpward } from "@mui/icons-material";

const StockBarChart = () => {
  // Bar chart options and data
  const barChartOptions = {
    chart: {
      type: "bar",
      height: 200,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
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
    fill: {
      opacity: 1,
      colors: ["rgba(103, 58, 183, 0.85)"], // Bar fill color
    },
    tooltip: {
      y: {
        formatter: (val) => `${val}`,
      },
    },
  };

  const barChartData = [
    {
      name: "Stock Value",
      data: [
        15, 45, 32, 78, 61, 24, 59, 48, 36, 62, 28, 54, 73, 89, 21, 43, 29, 90,
        74, 67, 33, 58, 84, 25, 60, 49, 39, 81, 56, 66,
      ],
    },
  ];

  return (
    <Paper sx={{ padding: 2 }}>
      <Grid container direction="column">
        <Grid item>
          <Grid container direction={"column"} spacing={1}>
            <Grid item>
              <Grid container spacing={1} alignItems="center">
                <Grid item>
                  <Typography variant="h6" sx={{ fontSize: "14px", color: "#333" }}>
                    Stock Values
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="caption" sx={{ color: "#888" }}>
                    (Purchased)
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container alignItems="center" spacing={1}>
                <Grid item>
                  <Typography variant="h6" fontSize={'16px'}>
                    0.85%
                  </Typography>
                </Grid>
                <Grid item>
                  <Stack direction={"row"} sx={{ color: "rgb(2, 136, 209)", fontSize: '16px' }}>
                    <ArrowUpward />
                    <Typography variant="h6" fontSize={'16px'}>
                      0.50%
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Chart
            options={barChartOptions}
            series={barChartData}
            type="bar"
            height={200}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default StockBarChart;
