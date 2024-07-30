import React from "react";
import {
  CardContent,
  Paper,
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import { Facebook, Twitter, LinkedIn } from "@mui/icons-material";

const Personaldetails = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper elevation={3}>
          <CardContent>
            <Grid container spacing={3} direction="row">
              {/* Personal Information */}
              <Grid item lg={6} md={6} sm={12}>
                <Paper elevation={1} sx={{ padding: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Personal Information
                  </Typography>
                  <Divider />
                  <Grid container spacing={2} marginTop={1}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Name"
                        defaultValue="JWT User"
                        InputProps={{
                          sx: {
                            backgroundColor: "rgb(248, 250, 252)",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Location"
                        defaultValue="Washington"
                        InputProps={{
                          sx: {
                            backgroundColor: "rgb(248, 250, 252)",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Bio"
                        multiline
                        rows={4}
                        defaultValue="I consider myself as a creative, professional and a flexible person. I can adapt with any kind of brief and design style"
                        InputProps={{
                          sx: {
                            backgroundColor: "rgb(248, 250, 252)",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Experience"
                        defaultValue="Startup"
                        InputProps={{
                          sx: {
                            backgroundColor: "rgb(248, 250, 252)",
                          },
                        }}
                      />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>

              {/* Contact Information */}
              <Grid item lg={6} md={6} sm={12}>
                <Paper elevation={1} sx={{ padding: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Contact Information
                  </Typography>
                  <Divider />
                  <Grid container spacing={2} marginTop={1}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Contact Phone"
                        defaultValue="(+99) 9999 999 999"
                        InputProps={{
                          sx: {
                            backgroundColor: "rgb(248, 250, 252)",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        fullWidth
                        label="Email"
                        defaultValue="demo@sample.com"
                        InputProps={{
                          sx: {
                            backgroundColor: "rgb(248, 250, 252)",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Portfolio Url"
                        defaultValue="https://demo.com"
                        InputProps={{
                          sx: {
                            backgroundColor: "rgb(248, 250, 252)",
                          },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Address"
                        defaultValue="3379 Monroe Avenue, Fort Myers, Florida(33912)"
                        InputProps={{
                          sx: {
                            backgroundColor: "rgb(248, 250, 252)",
                          },
                        }}
                      />
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>

              {/* Social Information */}
              <Grid item lg={6} md={6} sm={12}>
                <Paper elevation={1} sx={{ padding: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Social Information
                  </Typography>
                  <Divider />
                  <Grid container spacing={2} marginTop={1}>
                    <Grid item xs={12}>
                      <Grid container spacing={2} alignItems={"center"}>
                        <Grid item>
                          <Facebook />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <TextField
                            fullWidth
                            label="Facebook Profile Url"
                            InputProps={{
                              sx: {
                                backgroundColor: "rgb(248, 250, 252)",
                              },
                            }}
                          />
                        </Grid>
                        <Grid item>
                          <Button
                            variant="contained"
                            sx={{ backgroundColor: "rgb(103, 58, 183)" }}
                          >
                            Connect
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container spacing={2} alignItems={"center"}>
                        <Grid item>
                          <Twitter />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <TextField
                            fullWidth
                            label="Twitter Profile Url"
                            InputProps={{
                              sx: {
                                backgroundColor: "rgb(248, 250, 252)",
                              },
                            }}
                          />
                        </Grid>
                        <Grid item>
                          <Button
                            variant="contained"
                            sx={{ backgroundColor: "rgb(103, 58, 183)" }}
                          >
                            Connect
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container spacing={2} alignItems={"center"}>
                        <Grid item>
                          <LinkedIn />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                          <TextField
                            fullWidth
                            label="LinkedIn Profile Url"
                            InputProps={{
                              sx: {
                                backgroundColor: "rgb(248, 250, 252)",
                              },
                            }}
                          />
                        </Grid>
                        <Grid item>
                          <Button
                            variant="contained"
                            sx={{ backgroundColor: "rgb(103, 58, 183)" }}
                          >
                            Connect
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </CardContent>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Personaldetails;
