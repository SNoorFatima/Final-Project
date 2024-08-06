import React from 'react';
import {
  CardContent,
  Paper,
  Grid,
  Typography,
  FormControlLabel,
  Switch,
  Checkbox,
  Divider,
  Button,
  Box
} from '@mui/material';
import Navigation from './Navigation';

const SettingsPage = () => {
  return (
    <>
    <Navigation/>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <CardContent>
            <Grid container spacing={3} direction="column">
              {/* Email Settings */}
              <Grid item>
                <Typography variant="h6" gutterBottom>Email Settings</Typography>
                <Divider />
                <Grid container spacing={2} marginTop={1}>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Switch defaultChecked />}
                      label="Email Notification"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Switch />}
                      label="Send Copy To Personal Email"
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Divider sx={{ my: 2 }} />

              {/* Activity Related Emails */}
              <Grid item>
                <Typography variant="h6" gutterBottom>Activity Related Emails</Typography>
                <Divider />
                <Grid container spacing={2} marginTop={1}>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Switch defaultChecked />}
                      label="Have new notifications"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Switch />}
                      label="You're sent a direct message"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Switch />}
                      label="Someone adds you as a connection"
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Divider sx={{ my: 2 }} />

              {/* When to escalate emails */}
              <Grid item>
                <Typography variant="h6" gutterBottom>When to escalate emails?</Typography>
                <Divider />
                <Grid container spacing={2} marginTop={1}>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Switch defaultChecked />}
                      label="Upon new order"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Switch />}
                      label="New membership approval"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Switch />}
                      label="Member registration"
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Divider sx={{ my: 2 }} />

              {/* Updates From System Notification */}
              <Grid item>
                <Typography variant="h6" gutterBottom>Updates From System Notification</Typography>
                <Divider />
                <Grid container spacing={2} marginTop={1}>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="News about PCT-themes products and feature updates"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Tips on getting more out of PCT-themes"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Things you missed since you last logged into PCT-themes"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="News about products and other services"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Tips and Document business products"
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Divider sx={{ my: 2 }} />

              {/* Update and Clear Buttons */}
              <Grid item>
                <Grid container justifyContent="flex-end" spacing={2}>
                  <Grid item>
                    <Button variant="outlined" color="primary">Clear</Button>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" color="primary">Update</Button>
                  </Grid>
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

export default SettingsPage;
