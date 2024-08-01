import React from 'react';
import { Grid, Paper, Box, Typography, CardContent, Divider, CardHeader } from '@mui/material';
import { Stack } from '@mui/system';
import muilogo from './Assets/logoMUI.png'
const ShadowDisplay = () => {
  const colors = ['primary', 'secondary', 'error', 'warning', 'success', 'info'];

  return (
    <Paper sx={{p:3}}>
        <Stack direction={'row'} justifyContent={'space-between'}>
      <CardHeader title=" Basic Shadow" titleTypographyProps={{fontSize:"18px"}}/>
      <a href="https://mui.com/system/shadows/" target="_blank" rel="noopener noreferrer">
      <img src={muilogo} />
            </a>
      </Stack>
      <Divider sx={{marginBottom:3}}/>
      <Paper sx={{marginTop:2}}>
      <CardHeader title=" Basic Shadow" titleTypographyProps={{fontSize:"18px"}}/>
      <Divider sx={{marginBottom:3}}/>
        <Grid container spacing={2}>
          {Array.from({ length: 25 }, (_, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Typography variant="h6" component="div" sx={{ padding: 2 }}>
                Shadow {index}
              </Typography>
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: 4.5,
                    paddingBottom: 4.5,
                    backgroundColor: 'rgb(227, 242, 253)',
                    color: 'rgb(66, 66, 66)',
                    boxShadow: (theme) => theme.shadows[index],
                    margin: 2,
                    height: 100,
                    borderRadius: 2, // Added border radius
                  }}
                >
                  <Typography variant="body2">
                    {`theme.shadows[${index}]`}
                  </Typography>
                </Box>
              </CardContent>
            </Grid>
          ))}
        </Grid>
      </Paper>

      <Paper sx={{ marginTop: 4 }}>
      <CardHeader title=" Basic Shadow" titleTypographyProps={{fontSize:"18px"}}/>
      <Divider sx={{marginBottom:3}}/>
        <Grid container spacing={2}>
          {colors.map((color, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Typography variant="h6" component="div" sx={{ padding: 2 }}>
                {color.charAt(0).toUpperCase() + color.slice(1)} Shadow
              </Typography>
              <CardContent>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: 4.5,
                    paddingBottom: 4.5,
                    backgroundColor: (theme) => theme.palette[color].main,
                    color: 'rgb(255, 255, 255)',
                    boxShadow: (theme) => theme.shadows[4],
                    margin: 2,
                    height: 100,
                    borderRadius: 2, // Added border radius
                  }}
                >
                  <Typography variant="body2">
                    {`${color}.main with shadow`}
                  </Typography>
                </Box>
              </CardContent>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Paper>
  );
};

export default ShadowDisplay;
