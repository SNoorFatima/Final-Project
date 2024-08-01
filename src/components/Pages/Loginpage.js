import React from 'react';
import { Box, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../../logo.png'
import { Stack } from '@mui/system';
const LoginPage = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/dashboard'); // Redirect to your dashboard or desired page
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password'); // Redirect to your forgot password page
  };

  const handleSignUp = () => {
    navigate('/sign-up'); // Redirect to your sign-up page
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={12} sm={8} md={4}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Box display="flex" flexDirection="column" >
            <Stack direction={'row'} justifyContent={'space-between'}>
            <Typography variant="h3" fontSize={'20px'} fontWeight={600} color={'rgb(103, 58, 183)'}>
              Hi, Welcome Back
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
            <Typography variant="body2"  fontWeight={600}  color={"rgb(54, 65, 82)"}>
              Login in to your account
            </Typography>
          </Box>
          <Box mt={3}>
            <TextField
              fullWidth
              label="Email Address / Username"
              type="email"
              variant="outlined"
              margin="normal"
              defaultValue="info@codedthemes.com"
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              defaultValue="123456"
             
            />
            <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Keep me logged in"
              />
              <Link fontSize={'14px'} href="#" onClick={handleForgotPassword}>
                    Forgot Password?
                  </Link>
            </Box>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSignIn}
              style={{ marginTop: '20px', backgroundColor: '#6a1b9a' }}
            >
              Sign In
            </Button>
          </Box>
          <Box mt={2} display="flex" justifyContent="center">
            <Typography variant="body2">
              Don't have an account?{' '}
              <Link href="#" onClick={handleSignUp}>
                Sign Up
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
