import React, { useState } from 'react';
import { Box, Button, Grid, Paper, TextField, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../../logo.png';
import { Stack } from '@mui/system';

const CheckMail = () => {
 

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={12} sm={8} md={4}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Box display="flex" flexDirection="column">
            <Stack direction={'row'} justifyContent={'space-between'}>
              <Typography variant="h3" fontSize={'20px'} fontWeight={600} color={'rgb(103, 58, 183)'} >
              Check Mail
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img
                  src={logo}
                  alt="Berry Logo"
                  style={{ width: 30, height: 30, marginRight: 10 }}
                />
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ color: "black", fontWeight: "bold" }}
                >
                  BERRY
                </Typography>
              </Box>
            </Stack>
            <Typography variant="body2" fontWeight={600}  color="rgb(54, 65, 82)">
            Avoid getting locked out.
            </Typography>
            <Typography variant="body2" color="textSecondary" marginTop={3}>
            We have sent a password recover instructions to your email.
            </Typography>
          </Box>
          <Box mt={3}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
             
              style={{ marginTop: '20px', backgroundColor: '#6a1b9a' }}
            >
              Open Mail
            </Button>
          </Box>
          
        </Paper>
      </Grid>
    </Grid>
  );
};

export default CheckMail;
