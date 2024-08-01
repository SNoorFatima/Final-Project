import React, { useState } from 'react';
import { Grid, Paper, Box, Typography, CardContent, Radio, RadioGroup, FormControlLabel, CardMedia, Button, CardHeader } from '@mui/material';
import image from './Assets/Gridimage.png'
const GridDisplay = () => {
  const [spacing, setSpacing] = useState(2); // Default spacing

  const handleSpacingChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Box sx={{ padding: 3 }}>
       
      {/* Spacing Control */}
      <Paper sx={{ padding: 2, marginBottom: 2 }}>
        <Typography variant="h6" component="div" sx={{ padding: 2 }}>
          Grid Spacing
        </Typography>
        <RadioGroup row value={spacing} onChange={handleSpacingChange}>
          {Array.from({ length: 13 }, (_, index) => (
            <FormControlLabel
              key={index}
              value={index}
              control={<Radio />}
              label={String(index)}
            />
          ))}
        </RadioGroup>
      </Paper>
      {/*Basic Grid*/}
      <Paper sx={{ padding: 2, marginBottom: 2 }}>
        <Typography variant="h6" component="div" sx={{ padding: 2 }}>
          Basic Grid
        </Typography>
        <Grid container spacing={spacing} justifyContent="center">
        <Grid container spacing={spacing} justifyContent="center">
          <Grid item xs={8}>
            <Box sx={{ backgroundColor: 'rgb(227, 242, 253)', padding: 2, borderRadius: 2 }}>sx=8</Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ backgroundColor: 'rgb(227, 242, 253)', padding: 2, borderRadius: 2 }}>sx=4</Box>
          </Grid>
          </Grid>
          <Grid container spacing={spacing} justifyContent="center" marginTop={2}>
          <Grid item xs={4}>
            <Box sx={{ backgroundColor: 'rgb(227, 242, 253)', padding: 2, borderRadius: 2 }}>sx=4</Box>
          </Grid>
          <Grid item xs={8}>
            <Box sx={{ backgroundColor: 'rgb(227, 242, 253)', padding: 2, borderRadius: 2 }}>sx=8</Box>
          </Grid>
        </Grid>
        </Grid>
      </Paper>
      {/* Complex Grid */}
      <Paper sx={{ padding: 2, marginBottom: 2 }}>
        <Typography variant="h6" component="div" sx={{ padding: 2 }}>
          Complex Grid
        </Typography>
        <Box sx={{ padding: 2, border: '1px solid #e0e0e0', borderRadius: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <CardMedia
                component="img"
                height="140"
                image={image}
                alt="Sample Image"
                sx={{ borderRadius: 1 }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <CardContent sx={{ padding: 0 }}>
                <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                  Standard license
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: 1 }}>
                  Full resolution 1920x1080 • JPEG
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: 1 }}>
                  ID: 1030114
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                  $19.00
                </Typography>
                <Button variant="text" color="error" sx={{ marginTop: 1 }}>
                  Remove
                </Button>
              </CardContent>
            </Grid>
          </Grid>
        </Box>
      </Paper>

      {/* Additional grids from original example */}
      <Paper sx={{ padding: 2, marginBottom: 2 }}>
        <Typography variant="h6" component="div" sx={{ padding: 2 }}>
          Multiple Breakpoints
        </Typography>
        <Grid container spacing={spacing}>
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

      {/* Auto Grid */}
      <Paper sx={{ padding: 2, marginBottom: 2 }}>
        <Typography variant="h6" component="div" sx={{ padding: 2 }}>
          Auto Grid
        </Typography>
        <Grid container spacing={spacing} justifyContent="center">
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
        <Grid container spacing={spacing} direction="column">
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
        <Grid container spacing={spacing}>
          <Grid item xs={12}>
            <Box sx={{ backgroundColor: 'rgb(227, 242, 253)', padding: 2, borderRadius: 2 }}>
              Parent
              <Grid container spacing={spacing} sx={{ marginTop: 1 }}>
                <Grid item xs={6}>
                  <Box sx={{ backgroundColor: 'rgb(255, 235, 238)', padding: 2, borderRadius: 2 }}>Nested 1</Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ backgroundColor: 'rgb(255, 235, 238)', padding: 2, borderRadius: 2 }}>Nested 2</Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ backgroundColor: 'rgb(255, 235, 238)', padding: 2, borderRadius: 2 }}>Nested 3</Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ backgroundColor: 'rgb(255, 235, 238)', padding: 2, borderRadius: 2 }}>Nested 4</Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default GridDisplay;
