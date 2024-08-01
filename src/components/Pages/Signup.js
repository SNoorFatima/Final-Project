import React, { useState } from 'react';
import { Box, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography, Link, IconButton, InputAdornment } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../../logo.png';
import { Stack } from '@mui/system';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const SignupPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.firstName = form.firstName ? "" : "First Name is required";
    tempErrors.lastName = form.lastName ? "" : "Last Name is required";
    tempErrors.email = form.email ? "" : "Email is required";
    tempErrors.password = form.password ? "" : "Password is required";

    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleSignUp = () => {
    if (validate()) {
      // Redirect to your desired page
      navigate('/welcome');
    }
  };

  const handleSignIn = () => {
    navigate('./Loginpage'); // Redirect to your login page
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={12} sm={8} md={4}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Box display="flex" flexDirection="column">
            <Stack direction={'row'} justifyContent={'space-between'}>
              <Typography variant="h3" fontSize={'20px'} fontWeight={600} color={'rgb(103, 58, 183)'}>
                Sign up
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
            <Typography variant="body2" color="textSecondary">
              Sign up with Email address
            </Typography>
          </Box>
          <Box mt={3}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  name="firstName"
                  variant="outlined"
                  margin="normal"
                  value={form.firstName}
                  onChange={handleChange}
                  error={Boolean(errors.firstName)}
                  helperText={errors.firstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  variant="outlined"
                  margin="normal"
                  value={form.lastName}
                  onChange={handleChange}
                  error={Boolean(errors.lastName)}
                  helperText={errors.lastName}
                />
              </Grid>
            </Grid>
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              variant="outlined"
              margin="normal"
              value={form.email}
              onChange={handleChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
            />
            <TextField
              fullWidth
              label="Password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              margin="normal"
              value={form.password}
              onChange={handleChange}
              error={Boolean(errors.password)}
              helperText={errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
              <FormControlLabel
                control={<Checkbox />}
                label="Agree with terms and privacy"
              />
            </Box>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSignUp}
              style={{ marginTop: '20px', backgroundColor: '#6a1b9a' }}
            >
              Sign Up
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

export default SignupPage;
