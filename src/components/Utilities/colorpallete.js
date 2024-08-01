import React from 'react';
import { Grid, Paper, Box, Typography, CardContent, CardHeader, Divider } from '@mui/material';
import muilogo from './Assets/logoMUI.png'
import { Stack } from '@mui/system';
const colors = [
  {
    title: "Primary Color",
    variants: [
      { name: "primary.light", color: "#E3F2FD" },
      { name: "primary[200]", color: "#90CAF9" },
      { name: "primary.main", color: "#2196F3" },
      { name: "primary.dark", color: "#1E88E5" },
      { name: "primary[800]", color: "#1565C0" }
    ]
  },
  {
    title: "Secondary Color",
    variants: [
      { name: "secondary.light", color: "#EDE7F6" },
      { name: "secondary[200]", color: "#B39DDB" },
      { name: "secondary.main", color: "#673AB7" },
      { name: "secondary.dark", color: "#5E35B1" },
      { name: "secondary[800]", color: "#4527A0" }
    ]
  },
  {
    title: "Success Color",
    variants: [
      { name: "success.light", color: "#B9F6CA" },
      { name: "success[200]", color: "#69F0AE" },
      { name: "success.main", color: "#00E676" },
      { name: "success.dark", color: "#00C853" }
    ]
  },
  {
    title: "Orange Color",
    variants: [
      { name: "orange.light", color: "#FFECB3" },
      { name: "orange.main", color: "#FF9800" },
      { name: "orange.dark", color: "#F57C00" }
    ]
  },
  {
    title: "Error Color",
    variants: [
      { name: "error.light", color: "#FFEBEE" },
      { name: "error.main", color: "#F44336" },
      { name: "error.dark", color: "#D32F2F" }
    ]
  },
  {
    title: "Warning Color",
    variants: [
      { name: "warning.light", color: "#FFF3E0" },
      { name: "warning.main", color: "#FF9800" },
      { name: "warning.dark", color: "#F57C00" }
    ]
  },
  {
    title: "Grey Color",
    variants: [
      { name: "grey[50]", color: "#FAFAFA" },
      { name: "grey[100]", color: "#F5F5F5" },
      { name: "grey[200]", color: "#EEEEEE" },
      { name: "grey[300]", color: "#E0E0E0" },
      { name: "grey[400]", color: "#BDBDBD" },
      { name: "grey[500]", color: "#9E9E9E" },
      { name: "grey[600]", color: "#757575" },
      { name: "grey[700]", color: "#616161" },
      { name: "grey[800]", color: "#424242" }
    ]
  }
];

const ColorPalette = () => {
  return (
    <Paper>
      <Stack direction={'row'} justifyContent={'space-between'}>
      <CardHeader title=" Color Palette" titleTypographyProps={{fontSize:"18px"}}/>
      <a href="https://mui.com/system/palette/" target="_blank" rel="noopener noreferrer">
      <img src={muilogo} />
            </a>
     
      </Stack>
      <Divider sx={{marginBottom:3}}/>
    <Grid container spacing={2}>
      {colors.map((colorGroup) => (
        <Grid item xs={12} key={colorGroup.title}>
          <Paper>
            <Typography variant="h6" component="div" sx={{ padding: 2 }}>
              {colorGroup.title}
            </Typography>
            <CardContent>
              <Grid container spacing={2}>
                {colorGroup.variants.map((variant) => (
                  <Grid item xs={6} sm={4} md={2} key={variant.name}>
                    <Box
                      sx={{
                        backgroundColor: variant.color,
                        height: 100,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Typography variant="body2" sx={{ color: '#fff' }}>
                        {variant.name}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Paper>
        </Grid>
      ))}
    </Grid>
    </Paper>
  );
};

export default ColorPalette;
