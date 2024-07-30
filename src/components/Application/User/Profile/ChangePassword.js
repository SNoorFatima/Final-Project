import React from 'react';
import {
  CardContent,
  Paper,
  Grid,
  Typography,
  TextField,
  Button,
  Box,
  Alert,
  Tabs,
  Tab
} from '@mui/material';

import { Link } from 'react-router-dom';

const ChangePassword = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper>
          <CardContent>
            <Grid container spacing={3} direction={'column'}>

              {/* Alert */}
              <Grid item>
                <Alert severity="warning">
                  <Typography variant="body2">
                    Your Password will expire in every 3 months. So change it periodically. <strong>Do not share your password</strong>
                  </Typography>
                </Alert>
              </Grid>

              {/* Change Password Form */}
              <Grid item>
                <Typography variant="h6" gutterBottom>Change Password</Typography>
                <Grid container spacing={2} marginTop={1}>
                  <Grid item xs={12}>
                    <TextField fullWidth label="Current Password" type="password" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="New Password" type="password" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth label="Confirm Password" type="password" />
                  </Grid>
                </Grid>
              </Grid>

              {/* Buttons */}
              <Grid item>
                <Grid container justifyContent="flex-end">
                  <Button variant="contained" color="primary">Change Password</Button>
                  <Button variant="text" color="secondary">Clear</Button>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ChangePassword;
