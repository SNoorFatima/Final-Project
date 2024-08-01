import React from 'react';
import { Grid, Paper, CardHeader, CardContent, Typography, CssBaseline, Divider } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Stack } from '@mui/system';
import muilogo from './Assets/logoMUI.png'
const theme = createTheme({
  typography: {
    h1: {
      fontSize: '34px',
      fontWeight:700
    },
    h2: {
        fontSize: '24px',
        fontWeight:700
      },
      h3: {
        fontSize: '20px',
        fontWeight:600
      },
      h4: {
        fontSize: '16px',
        fontWeight:600
      },
      h5: {
        fontSize: '14px',
        fontWeight:500
      },
      h6: {
        fontSize: '12px',
        fontWeight:500
      },
      subtitle1:{

      }
  },
});

const TypographyShowcase = () => {
  return (
    <ThemeProvider theme={theme}>
        <Paper sx={{p:3}}>
      <CssBaseline />
      <Stack direction={'row'} justifyContent={'space-between'}>
      <CardHeader title=" Basic Typography" titleTypographyProps={{fontSize:"18px"}}/>
      <a href="https://mui.com/system/typography/" target="_blank" rel="noopener noreferrer">
      <img src={muilogo} />
            </a>
     
      </Stack>
      <Divider sx={{mb:3}}/>
      <Grid container spacing={3}>
      
        {/* Heading Component */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3}>
            <CardHeader title="Heading" />
            <CardContent>
              <Typography variant="h1">h1. Heading</Typography>
              <Typography variant="h2">h2. Heading</Typography>
              <Typography variant="h3">h3. Heading</Typography>
              <Typography variant="h4">h4. Heading</Typography>
              <Typography variant="h5">h5. Heading</Typography>
              <Typography variant="h6">h6. Heading</Typography>
            </CardContent>
          </Paper>
        </Grid>

        {/* Subtitle Component */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3}>
            <CardHeader title="Subtitle" />
            <CardContent>
              <Typography variant="h5" >
                subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
              </Typography>
              <Typography variant="h6">
                subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
              </Typography>
            </CardContent>
          </Paper>
        </Grid>

        {/* Body Component */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3}>
            <CardHeader title="Body" />
            <CardContent>
              <Typography variant="body1">
                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
              <Typography variant="body2">
                body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
            </CardContent>
          </Paper>
        </Grid>

        {/* Extra Component */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3}>
            <CardHeader title="Extra" />
            <CardContent>
              <Typography variant="button" display="block" gutterBottom>
                button text
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                caption text
              </Typography>
              <Typography variant="overline" display="block" gutterBottom>
                overline text
              </Typography>
              <Typography variant="body2" color="textSecondary" display="block" gutterBottom>
                <a href="https://berrydashboard.io" target="_blank" rel="noopener noreferrer">https://berrydashboard.io</a>
              </Typography>
            </CardContent>
          </Paper>
        </Grid>
      </Grid>
      </Paper>
    </ThemeProvider>
  );
};

export default TypographyShowcase;
