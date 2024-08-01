import React from 'react';
import { Grid, Paper, Box, Typography, CardContent, CardMedia } from '@mui/material';

const GridDisplay = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>Grid Examples</Typography>

      {/* Multiple Breakpoints */}
      <Paper sx={{ padding: 2, marginBottom: 2 }}>
        <Typography variant="h6" component="div" sx={{ padding: 2 }}>
          Multiple Breakpoints
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ backgroundColor: 'rgb(227, 242, 253)', padding: 2, borderRadius: 2 }}>xs=12 sm=6 md=4</Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ backgroundColor: 'rgb(227, 242, 253)', padding: 2, borderRadius: 2 }}>xs=12 sm=6 md=4</Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ backgroundColor: 'rgb(227, 242, 253)', padding: 2, borderRadius: 2 }}>xs=12 sm=6 md=4</Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Spacing */}
      <Paper sx={{ padding: 2, marginBottom: 2 }}>
        <Typography variant="h6" component="div" sx={{ padding: 2 }}>
          Grid Spacing
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <Box sx={{ backgroundColor: 'rgb(227, 242, 253)', padding: 2, borderRadius: 2 }}>Spacing=4</Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ backgroundColor: 'rgb(227, 242, 253)', padding: 2, borderRadius: 2 }}>Spacing=4</Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Auto Grid */}
      <Paper sx={{ padding: 2, marginBottom: 2 }}>
        <Typography variant="h6" component="div" sx={{ padding: 2 }}>
          Auto Grid
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs>
            <Box sx={{ backgroundColor: 'rgb(227, 242, 253)', padding: 2, borderRadius: 2 }}>Auto</Box>
          </Grid>
          <Grid item xs>
            <Box sx={{ backgroundColor: 'rgb(227, 242, 253)', padding: 2, borderRadius: 2 }}>Auto</Box>
          </Grid>
          <Grid item xs>
            <Box sx={{ backgroundColor: 'rgb(227, 242, 253)', padding: 2, borderRadius: 2 }}>Auto</Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Column Grid */}
      <Paper sx={{ padding: 2, marginBottom: 2 }}>
        <Typography variant="h6" component="div" sx={{ padding: 2 }}>
          Column Grid
        </Typography>
        <Grid container spacing={2} direction="column">
          <Grid item>
            <Box sx={{ backgroundColor: 'rgb(227, 242, 253)', padding: 2, borderRadius: 2 }}>Column 1</Box>
          </Grid>
          <Grid item>
            <Box sx={{ backgroundColor: 'rgb(227, 242, 253)', padding: 2, borderRadius: 2 }}>Column 2</Box>
          </Grid>
          <Grid item>
            <Box sx={{ backgroundColor: 'rgb(227, 242, 253)', padding: 2, borderRadius: 2 }}>Column 3</Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Nested Grid */}
      <Paper sx={{ padding: 2, marginBottom: 2 }}>
        <Typography variant="h6" component="div" sx={{ padding: 2 }}>
          Nested Grid
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box sx={{ backgroundColor: 'rgb(227, 242, 253)', padding: 2, borderRadius: 2 }}>
              Parent
              <Grid container spacing={2} sx={{ marginTop: 1 }}>
                <Grid item xs={6}>
                  <Box sx={{ backgroundColor: 'rgb(255, 235, 238)', padding: 2, borderRadius: 2 }}>Nested 1</Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ backgroundColor: 'rgb(255, 235, 238)', padding: 2, borderRadius: 2 }}>Nested 2</Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Complex Grid with Picture and Description */}
      <Paper sx={{ padding: 2, marginBottom: 2 }}>
        <Typography variant="h6" component="div" sx={{ padding: 2 }}>
          Complex Grid with Picture and Description
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
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
                  margin: 2,
                  height: 100,
                  borderRadius: 2,
                }}
              >
                <Typography variant="body2">
                  Description goes here. This can be any text that describes the image on the right.
                </Typography>
              </Box>
            </CardContent>
          </Grid>
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              height="140"
              image="https://via.placeholder.com/150"
              alt="Sample Image"
              sx={{ borderRadius: 2 }}
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default GridDisplay;
