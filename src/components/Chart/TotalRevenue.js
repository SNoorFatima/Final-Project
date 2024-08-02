import React from 'react';
import { Card, CardHeader, CardContent, Box, Typography, Divider, Grid } from '@mui/material';
import Chart from 'react-apexcharts';
import { red, blue, purple } from '@mui/material/colors';

const TotalRevenueCard = () => {
  const chartOptions = {
    chart: {
      type: 'donut',
    },
    labels: ['Youtube', 'Facebook', 'Twitter'],
    colors: [red[500], blue[500], purple[500]],
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
  };

  const chartSeries = [16.85, 45.36, 50.69];

  return (
    <Card>
      <CardHeader
        title="Total Revenue"
        titleTypographyProps={{ variant: 'subtitle1', sx: { color: '#697586' } }}
      />
      <Divider />
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Chart options={chartOptions} series={chartSeries} type="donut" height={200} />
        </Box>
        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item>
              <Box display="flex" alignItems="center">
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    bgcolor: red[500],
                    borderRadius: '50%',
                    mr: 1,
                  }}
                />
                <Typography variant="body2" sx={{ color: '#697586', mr: 1 }}>
                  Youtube
                </Typography>
                <Typography variant="body2" sx={{ color: red[500] }}>
                  +16.85%
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box display="flex" alignItems="center">
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    bgcolor: blue[500],
                    borderRadius: '50%',
                    mr: 1,
                  }}
                />
                <Typography variant="body2" sx={{ color: '#697586', mr: 1 }}>
                  Facebook
                </Typography>
                <Typography variant="body2" sx={{ color: blue[500] }}>
                  +45.36%
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Box display="flex" alignItems="center">
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    bgcolor: purple[500],
                    borderRadius: '50%',
                    mr: 1,
                  }}
                />
                <Typography variant="body2" sx={{ color: '#697586', mr: 1 }}>
                  Twitter
                </Typography>
                <Typography variant="body2" sx={{ color: purple[500] }}>
                  -50.69%
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TotalRevenueCard;
