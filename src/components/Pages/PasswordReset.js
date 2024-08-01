import React, { useState } from 'react';
import { Box, Button, Grid, Paper, TextField, Typography, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../../logo.png';
import { Stack } from '@mui/system';

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');

  const handleResetPassword = () => {
    if (!password || !confirmPassword) {
      setError('Both fields are required');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      // Logic to reset the password
      console.log('Password reset successfully');
      navigate('/login'); // Redirect to your login page
    }
  };

  const handleChangePassword = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setError('');
    evaluatePasswordStrength(newPassword);
  };

  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setError('');
  };

  const evaluatePasswordStrength = (password) => {
    if (password.length < 6) {
      setPasswordStrength('Poor');
    } else if (password.length < 10) {
      setPasswordStrength('Normal');
    } else {
      setPasswordStrength('Good');
    }
  };

  const handleSignIn = () => {
    navigate('/login'); // Redirect to your login page
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={12} sm={8} md={4}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Box display="flex" flexDirection="column">
            <Stack direction={'row'} justifyContent={'space-between'}>
              <Typography variant="h3" fontSize={'20px'} fontWeight={600} color={'rgb(103, 58, 183)'}>
                Reset Password
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
              Enter credentials to continue
            </Typography>
          </Box>
          <Box mt={3}>
            <TextField
              fullWidth
              label="New Password"
              name="password"
              type="password"
              variant="outlined"
              margin="normal"
              value={password}
              onChange={handleChangePassword}
              error={Boolean(error)}
            />
            <Typography variant="body2" color="textSecondary" style={{ marginBottom: '10px' }}>
              Password strength: {passwordStrength}
            </Typography>
            <TextField
              fullWidth
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              variant="outlined"
              margin="normal"
              value={confirmPassword}
              onChange={handleChangeConfirmPassword}
              error={Boolean(error)}
              helperText={error}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleResetPassword}
              style={{ marginTop: '20px', backgroundColor: '#6a1b9a' }}
            >
              Reset Password
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

export default ResetPasswordPage;
