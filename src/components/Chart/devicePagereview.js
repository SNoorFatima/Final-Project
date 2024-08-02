import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { Box, Card, CardContent, Grid, Typography, Button, Menu, MenuItem } from '@mui/material';
import { DesktopWindows, PhoneIphone, TabletMac, LaptopMac, ArrowUpward, ArrowDownward, ImportantDevices, PhonelinkLock, TabletAndroid, Laptop } from '@mui/icons-material';

const DevicePageViewsChart = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const series = [
    {
      name: 'Page Views',
      data: [66.6,29.7,32,85.02], // Example data for 4 different devices
    },
  ];

  const options = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        distributed: true,
      },
    },
    colors: ['rgba(33, 150, 243, 0.85)', 'rgba(0, 200, 83, 0.85)', 'rgba(244, 67, 54,0.85)', 'rgba(216, 67, 21,0.85)'], // Different colors for each bar
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['Desktop', 'Mobile', 'Tablet', 'Laptop'],
      labels: {
        style: {
          fontSize: '14px',
        },
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
  };

  const devices = [
    { name: 'Desktop', icon: <ImportantDevices sx={{ color: 'rgb(33, 150, 243)' }} />, percentage: '40%', trend: 'up' },
    { name: 'Mobile', icon: <PhonelinkLock sx={{ color: 'rgb(0, 200, 83)' }} />, percentage: '30%', trend: 'down' },
    { name: 'Tablet', icon: <TabletAndroid sx={{ color: 'rgb(244, 67, 54)' }} />, percentage: '20%', trend: 'up' },
    { name: 'Laptop', icon: <Laptop sx={{ color: 'rgb(216, 67, 21)' }} />, percentage: '10%', trend: 'down' },
  ];

  return (
    <Card>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h8" fontSize={'14px'} gutterBottom>
            Page Views by Device
          </Typography>
          <Button
            variant="outlined"
            aria-controls={open ? 'menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            Weekly
          </Button>
          <Menu
            id="menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'button',
            }}
          >
            <MenuItem onClick={handleClose}>1 Week</MenuItem>
            <MenuItem onClick={handleClose}>This Year</MenuItem>
            <MenuItem onClick={handleClose}>2 Months</MenuItem>
          </Menu>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" mb={3}>
          {devices.map((device, index) => (
            <Grid container alignItems="center" justifyContent={'center'} spacing={1} key={index} sx={{ mb: 1 }} >
              <Grid item>{device.icon}</Grid>
              <Grid item>
                <Typography variant="body2">{device.name}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" sx={{ color: device.icon.props.sx.color }}>
                  {device.percentage}
                </Typography>
              </Grid>
              <Grid item>
                {device.trend === 'up' ? (
                  <ArrowUpward sx={{ color: 'green', fontSize: 'small' }} />
                ) : (
                  <ArrowDownward sx={{ color: 'red', fontSize: 'small' }} />
                )}
              </Grid>
            </Grid>
          ))}
        </Box>
        <Chart options={options} series={series} type="bar" height={180} />
      </CardContent>
    </Card>
  );
};

export default DevicePageViewsChart;
