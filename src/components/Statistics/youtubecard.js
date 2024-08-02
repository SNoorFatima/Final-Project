import { CardContent, Grid, Paper, Typography, Box } from '@mui/material';
import React from 'react';
import { LinkedIn } from '@mui/icons-material';

const Youtubecard = () => {
  return (
    <Grid item>
      <Paper 
        sx={{
          transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          boxShadow: "none",
          backgroundColor: "rgb(244, 67, 54)",
          position: "relative",
          color: "#fff",
          display: "flex",
          alignItems: "center",
        
        }}
      >
        <CardContent sx={{ flex: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6} sx={{ fontWeight:'600' }}>
              <Typography variant="h3" sx={{fontSize:'20px'}}>998+</Typography>
              <Typography variant="h6" sx={{fontSize:'12px'}}>Youtube Users</Typography>
            </Grid>
            <Grid item xs={6} 
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <LinkedIn
            sx={{
              opacity: '0.5',
              fontSize: '2.1875rem',
              
            }}
          />
        </Grid>
          </Grid>
        </CardContent>
        
      </Paper>
    </Grid>
  );
}

export default Youtubecard;
