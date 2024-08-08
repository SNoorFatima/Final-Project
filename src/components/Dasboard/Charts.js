import React, { useState } from 'react';
import { CardContent, Grid, Paper, Typography, Box, Button, Menu, MenuItem, Link } from '@mui/material';
import Chart from 'react-apexcharts';
import { ArrowDropDown } from '@mui/icons-material';
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Area } from 'recharts';
import { Stack } from '@mui/system';

const barChartOptions = {
  chart: {
    type: "bar",
    stacked: true,
  },
  xaxis: {
    categories: [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ],
  },
  yaxis: {
    labels: {
      formatter: (val) => `${val}`,
      tickAmount: 7,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: '15px',
    }
  },
  legend: {
    position: "bottom",
  },
  fill: {
    opacity: 1,
  },
  dataLabels: {
    enabled: false,
  },
  colors: ["#90CAF9", "#1E88E5", "rgba(103, 58, 183, 0.85)", "#EDE7F6"],
};

const barChartSeries = [
  { name: "Investment", data: [35, 125, 35, 35, 35, 80, 35, 20, 35, 45, 15, 75] },
  { name: "Loss", data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
  { name: "Profit", data: [35, 145, 35, 35, 20, 105, 100, 10, 65, 45, 30, 10] },
  { name: "Maintenance", data: [0, 0, 75, 0, 0, 115, 0, 0, 0, 0, 150, 0] },
];

const chartData = [
  { name: "Jan", value: 0 },
  { name: "Feb", value: 15 },
  { name: "Mar", value: 10 },
  { name: "Apr", value: 50 },
  { name: "Jun", value: 30 },
  { name: "Jul", value: 40 },
  { name: "Aug", value: 25 },
];

const lineChartOptions = {
    chart: {
      type: 'area',
      toolbar: {
        show: false, // Hide chart toolbar
      },
      zoom: {
        enabled: false, // Disable zoom
      },
      parentHeightOffset: 0, // No offset from parent
      parentWidthOffset: 0, // No offset from parent

      offsetX: 0,
      offsetY: 0,
    },
    grid: {
      padding: {
        top: 0,
        right: -10,
        bottom: -40,
        left: 0,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [],
      show: false,
    },
    yaxis: {
      show: false,
    },
    stroke: {
        curve: 'smooth',
        width: 2, // Change this value to adjust the line width
      },
    colors: ['#8884d8'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'vertical',
        shadeIntensity: 0.5,
        gradientToColors: ['purple'],
        inverseColors: true,
        opacityFrom: 0.6,
        opacityTo: 0.5,
        stops: [0, 100],
      },
    },
    tooltip: {
      marker: {
        show: true,
        fillColors: ['purple'],
        strokeColors: ['white'],
        radius: 4,
      },
    },
    plotOptions: {
      area: {
        fillTo: 'end'
      }
    },
    markers: {
      size: 0, // Hide markers to reduce spacing
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            // width: '100%',
          },
        },
      },
    ],
  };
  
  
  

  const lineChartSeries = [
    { name: 'Value', data: [0,15,10,50,50,40,25] },
  ];


const stockData = [
  { name: "Bajaj Finery", profit: true, value: "$1839.00"},
  { name: "TTML", profit: false, value: "$100.00 " },
  { name: "Reliance", profit: true, value: "$200.00 " },
  { name: "TTML", profit: false, value: "$189.00 " },
  { name: "Stolon", profit: false, value: "$189.00 " },
]

const Charts = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState("Today");
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (selection) => {
    setAnchorEl(null);
    if (selection) {
      setSelectedMenu(selection);
    }
  };

  return (
    <Grid container spacing={2} >
      <Grid item xs={12}  lg={8}> 
        <Paper>
          <CardContent>
            <Grid container spacing={2}>
              {/* Upper Part */}
              <Grid item xs={12}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="h6">Total Growth</Typography>
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    variant="outlined"
                    sx={{ color: " rgb(18, 25, 38)",
                          fontWeight: "500",
                         borderColor:"rgb(54, 65, 82)",
                         backgroundColor:"rgb(248, 250, 252)"
                    }}
                  >
                    {selectedMenu}
                    <ArrowDropDown/>
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={() => handleClose()}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={() => handleClose("Today")}>Today</MenuItem>
                    <MenuItem onClick={() => handleClose("This Week")}>This Week</MenuItem>
                    <MenuItem onClick={() => handleClose("This Month")}>This Month</MenuItem>
                  </Menu>
                </Box>
                <Typography variant="h5">$2,324.00</Typography>
              </Grid>
              {/* Lower Part */}
              <Grid item xs={12}>
                <Box sx={{ marginTop: "16px", marginBottom: "16px" }}>
                  <Chart
                    options={barChartOptions}
                    series={barChartSeries}
                    type="bar"
                    height={300}
                  />
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Paper>
      </Grid>
      <Grid item xs={12}  lg={4}>
        <Paper >
          <CardContent>
            <Grid container direction={'column'} spacing={2}>
              <Grid item>
                <Typography variant="h6">Popular Stocks</Typography>
              </Grid>
              <Grid item sx={{pt:"16px"}}>
                <Paper sx={{backgroundColor: 'rgb(237, 231, 246)' }}>
                  <Grid container direction={'column'} >
                    <Grid item>
                      <Grid container justifyContent={'space-between'} >
                        <Grid item>
                          <Typography variant='h6' p={2}>Bajaj Finery</Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant='h5'  p={2}>$1839.00</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography pl={2}>10% profit</Typography>
                    </Grid>
                    <Grid item>
                      <>
                      <Chart className="linechart"

options={lineChartOptions}
series={lineChartSeries}
type="area"
height={100}
width = "100%"

/>

                      </>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item>
                {stockData.map((stock, index) => (
                  <Grid container
                    key={index}
                   direction={'column'}
                    sx={{ padding: "8px 0", borderBottom: "1px solid #f0f0f0" }}
                  >
                    <Grid item>
                      <Stack direction={'row'} justifyContent={'space-between'}>
                      <Typography>{stock.name}</Typography>
                      <Typography  color={stock.profit ? "green" : "red"}>{stock.value}  {stock.profit ? "▲" : "▼"}</Typography>
                    </Stack>
                    </Grid>
                    <Grid item>
                   
                    <Typography variant="caption" color={stock.profit ? "green" : "red"}>
                        {stock.profit ? "10% Profit" : "10% Loss"}
                      </Typography>
                    </Grid>
                  </Grid>
                ))}
                <Box display="flex" justifyContent="center" sx={{ marginTop: "16px" }}>
                  <Link href="#" variant="body2">
                    View All
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Charts;
