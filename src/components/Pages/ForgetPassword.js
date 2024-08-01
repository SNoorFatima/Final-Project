import React, { useState } from 'react';
import { Box, Button, Grid, Paper, TextField, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../../logo.png';
import { Stack } from '@mui/system';

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSendMail = () => {
    if (email) {
      // Logic to send the password reset OTP
      console.log('Password reset OTP sent to:', email);
      // Redirect to a confirmation page or display a success message
      navigate('/otp-sent');
    } else {
      setError('Email is required');
    }
  };

  const handleSignIn = () => {
    navigate('/login'); // Redirect to your login page
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    setError('');
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={12} sm={8} md={4}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Box display="flex" flexDirection="column">
            <Stack direction={'row'} justifyContent={'space-between'}>
              <Typography variant="h3" fontSize={'20px'} fontWeight={600} color={'rgb(103, 58, 183)'} >
                Forgot Password?
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
            <Typography variant="body2" fontWeight={600}  color={"rgb(54, 65, 82)"}>
              Enter credentials to continue
            </Typography>
            <Typography variant="body2" color="textSecondary" marginTop={3}>
              Enter your email address below and we'll send you a password reset OTP.
            </Typography>
          </Box>
          <Box mt={3}>
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              variant="outlined"
              margin="normal"
              value={email}
              onChange={handleChange}
              error={Boolean(error)}
              helperText={error}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSendMail}
              style={{ marginTop: '20px', backgroundColor: '#6a1b9a' }}
            >
              Send Mail
            </Button>
          </Box>
          <Box mt={2} display="flex" justifyContent="center">
            <Typography variant="body2">
              Already have an account?{' '}
              <Link href="#" onClick={handleSignIn}>
                Sign In
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ForgotPasswordPage;
