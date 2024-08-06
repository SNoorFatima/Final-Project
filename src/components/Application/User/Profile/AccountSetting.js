import React from 'react';
import {
  CardContent,
  Paper,
  Grid,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Switch,
  Box,
  Divider,
  IconButton
} from '@mui/material';
import { DesktopWindows, TabletMac, MobileFriendly, Logout, Clear } from '@mui/icons-material';
import Navigation from './Navigation';

const AccountSettings = () => {
  return (
    <>
    <Navigation/>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper elevation={3}>
          <CardContent>
            <Grid container spacing={3} direction="column">
              {/* General Settings */}
              <Grid item>
                <Paper elevation={1} sx={{ padding: 2 }}>
                  <Typography variant="h6" gutterBottom>General Settings</Typography>
                  <Divider />
                  <Grid container spacing={2} marginTop={1}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Username"
                        defaultValue="Asoka_Tens_16"
                        InputProps={{
                          sx: {
                            backgroundColor: 'rgb(248, 250, 252)',
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Account Email"
                        defaultValue="demo@sample.com"
                        InputProps={{
                          sx: {
                            backgroundColor: 'rgb(248, 250, 252)',
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Your Profile Url"
                        defaultValue="https://example.com/Asoka_Tens_16"
                        InputProps={{
                          sx: {
                            backgroundColor: 'rgb(248, 250, 252)',
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Language"
                        defaultValue="Washington"
                        InputProps={{
                          sx: {
                            backgroundColor: 'rgb(248, 250, 252)',
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Signing Using"
                        defaultValue="Startup"
                        InputProps={{
                          sx: {
                            backgroundColor: 'rgb(248, 250, 252)',
                          },
                        }}
                      />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>

              {/* Advanced Settings */}
              <Grid item>
                <Paper elevation={1} sx={{ padding: 2 }}>
                  <Typography variant="h6" gutterBottom>Advanced Settings</Typography>
                  <Divider />
                  <Grid container spacing={2} marginTop={1}>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={<Switch defaultChecked />}
                        label="Browsing Security (https) when it's necessary"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={<Switch defaultChecked />}
                        label="Notify when login attempted from other place"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={<Switch />}
                        label="Approval is not required when login from unrecognized devices"
                      />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>

              {/* Recognized Devices */}
              <Grid item>
                <Paper elevation={1} sx={{ padding: 2 }}>
                  <Typography variant="h6" gutterBottom>Recognized Devices</Typography>
                  <Divider />
                  <Grid container spacing={2} marginTop={1}>
                    <Grid item xs={12}>
                      <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                          <Box display="flex" alignItems="center">
                            <DesktopWindows sx={{ mr: 1, color: 'green' }} />
                            <Typography variant="body2">
                              <Box component="span" sx={{ fontWeight: 'bold' }}>Cert Desktop</Box> (1087 Dean Lane, Chelmsford)
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item>
                          <Typography variant="body2" color="green">Current Active</Typography>
                        </Grid>
                      </Grid>
                      <Grid container alignItems="center" justifyContent="space-between" sx={{ mt: 1 }}>
                        <Grid item>
                          <Box display="flex" alignItems="center">
                            <TabletMac sx={{ mr: 1, color: 'gray' }} />
                            <Typography variant="body2">
                              <Box component="span" sx={{ fontWeight: 'bold' }}>Imto Tablet</Box> (4125 Michigan Avenue)
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item>
                          <Typography variant="body2" color="gray">Active 5 days ago</Typography>
                        </Grid>
                      </Grid>
                      <Grid container alignItems="center" justifyContent="space-between" sx={{ mt: 1 }}>
                        <Grid item>
                          <Box display="flex" alignItems="center">
                            <MobileFriendly sx={{ mr: 1, color: 'gray' }} />
                            <Typography variant="body2">
                              <Box component="span" sx={{ fontWeight: 'bold' }}>Alte Mobile</Box> (2842 Peffer Drive, Montclair)
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid item>
                          <Typography variant="body2" color="gray">Active 1 month ago</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>

              {/* Active Sessions */}
              <Grid item>
                <Paper elevation={1} sx={{ padding: 2 }}>
                  <Typography variant="h6" gutterBottom>Active Sessions</Typography>
                  <Divider />
                  <Grid container spacing={2} marginTop={1}>
                    <Grid item xs={12}>
                      <Grid container alignItems="center" justifyContent="space-between">
                        <Box display="flex" alignItems="center">
                          <DesktopWindows sx={{ mr: 1, color: 'green' }} />
                          <Typography variant="body2">
                            <Box component="span" sx={{ fontWeight: 'bold' }}>Ceto Desktop</Box> (1087 Dean Lane, Chelmsford)
                          </Typography>
                        </Box>
                        <Button variant="text" color="primary" startIcon={<Logout />}>Logout</Button>
                      </Grid>
                      <Grid container alignItems="center" justifyContent="space-between" sx={{ mt: 1 }}>
                        <Box display="flex" alignItems="center">
                          <TabletMac sx={{ mr: 1, color: 'green' }} />
                          <Typography variant="body2">
                            <Box component="span" sx={{ fontWeight: 'bold' }}>Moon Tablet</Box> (4125 Michigan Avenue)
                          </Typography>
                        </Box>
                        <Button variant="text" color="primary" startIcon={<Logout />}>Logout</Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>

              {/* Update Profile */}
              <Grid item>
                <Grid container justifyContent="space-between">
                  <Button variant="contained" color="primary" startIcon={<Clear />}>Clear</Button>
                  <Button variant="contained" color="primary">Update Profile</Button>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Paper>
      </Grid>
    </Grid>
    </>
  );
};

export default AccountSettings;
