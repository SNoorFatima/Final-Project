import React from 'react';
import Chart from 'react-apexcharts';
import { Box, Card, CardContent, Typography, Avatar, Grid, Paper } from '@mui/material';
import { pink, blue, purple } from '@mui/material/colors';
import { IconBrandFacebook, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TrendingDownTwoToneIcon from '@mui/icons-material/TrendingDownTwoTone';

const MarketShareCard = () => {
  const chartOptions = {
    chart: {
      type: 'area',
      toolbar: { show: false },
    },
    colors: [blue[500], pink[500], purple[500]],
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth', width: 2 },
    fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.4, opacityTo: 0.2 } },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'right',
      labels: {
        colors: '#000',
        useSeriesColors: true,
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      labels: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: { show: false },
      axisTicks: { show: false },
    },
    tooltip: {
      x: {
        formatter: function(val, { dataPointIndex }) {
          return dataPointIndex + 1;
        }
      }
    },
  };

  const chartSeries = [
    { name: 'Facebook', data: [10, 90, 65, 85, 49, 80, 30] },
    { name: 'Twitter', data: [50, 30, 25, 15, 60, 10, 25] },
    { name: 'YouTube', data: [5, 50, 40, 55, 80, 40, 20] },
  ];

  return (
    <Grid>
    <Paper sx={{  borderRadius: "8px" }}>
      <CardContent sx={{padding:"0px !important"}}>
        <Box p={3}>
          <Grid container spacing={3} direction={'column'}>
        <Grid item container sx={{justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" component="div">Market Share</Typography>
          <Typography variant="h6" component="div">
            <TrendingDownTwoToneIcon sx={{ color: "#f44336", marginTop: "8px", fontSize: "2.1875rem" }} /> 27,695.65
          </Typography>
        </Grid>
        <Grid item xs={12}>
        <Typography variant="body2" color="text.secondary">
          Department wise monthly sales report
        </Typography>
        </Grid>
        <Grid container item spacing={3} sx={{pt:"24px",pl:"24px"}} >
          <Grid item     >
            <Grid  container >
              <Grid item  >
              <Typography sx={{ bgcolor: "#ede7f6", color: "#673ab7", height: "40px", width: "40px", borderRadius: "14px",padding:"8px" }}>
              <IconBrandFacebook />
            </Typography>
              </Grid>
              <Grid item sx={{pt:"8px",pl:"8px"}} >
              <Typography >+ 45.36%</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item     >
            <Grid  container >
              <Grid item  >
              <Typography sx={{ bgcolor: "#e3f2fd", color: "#2196f3", height: "40px", width: "40px", borderRadius: "14px",padding:"8px" }}>
              <IconBrandTwitter />
            </Typography>
              </Grid>
              <Grid item sx={{pt:"8px",pl:"8px"}} >
              <Typography >+ 45.36%</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item     >
            <Grid  container >
              <Grid item  >
              <Typography sx={{ bgcolor: "#ef9a9a40", color: "#f44336", height: "40px", width: "40px", borderRadius: "14px",padding:"8px" }}>
              <IconBrandYoutube />
            </Typography>
              </Grid>
              <Grid item sx={{pt:"8px",pl:"8px"}} >
              <Typography >+ 45.36%</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        </Grid>
        </Box>
        <Chart options={chartOptions} series={chartSeries} type="area" height={200} />
      </CardContent>
    </Paper>
    </Grid>
  );
};

export default MarketShareCard;
