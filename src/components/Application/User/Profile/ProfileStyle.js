import React from "react";
import {
  Avatar,
  CardContent,
  Grid,
  Paper,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import avater from "../Assets/avater.png";
import { MailTwoTone, PhonelinkRingTwoTone, PinDropTwoTone } from "@mui/icons-material";
import Navigation from "./Navigation";

const ProfileStyle = () => {
  return (
    <>
    <Navigation/>
    <Paper sx={{p:2}}>
    <Grid container spacing={3} padding={3}>
      <Grid item xs={12} md={4}>
        <Paper>
          <CardContent>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Avatar src={avater} alt="Profile" style={{ width: 80, height: 80 }} />
              </Grid>
              <Grid item xs>
                <Typography variant="h6">JWT User</Typography>
                <Typography variant="body2" color="textSecondary">
                  UI/UX Designer
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginTop: 8 }}
                >
                  Pro
                </Button>
              </Grid>
            </Grid>
            <Divider style={{ marginTop: 16, marginBottom: 16 }} />
            <Grid container spacing={2} direction="column">
              <Grid item>
                <Grid container spacing={1} alignItems="center">
                  <Grid item>
                    <MailTwoTone />
                  </Grid>
                  <Grid item>
                    <Typography variant="body1" style={{ marginLeft: 8 }}>
                      <strong>Email: </strong> demo@sample.com
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container spacing={1} alignItems="center">
                  <Grid item>
                    <PhonelinkRingTwoTone />
                  </Grid>
                  <Grid item>
                    <Typography variant="body1" style={{ marginLeft: 8 }}>
                      <strong>Phone: </strong> (+99) 9999 999 999
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container spacing={1} alignItems="center">
                  <Grid item>
                    <PinDropTwoTone />
                  </Grid>
                  <Grid item>
                    <Typography variant="body1" style={{ marginLeft: 8 }}>
                      <strong>Location: </strong> Melbourne
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Divider style={{ marginTop: 16, marginBottom: 16 }} />
            <Grid container justifyContent="space-around">
              <Grid item>
                <Typography variant="body1">
                  <strong>37</strong> Mails
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  <strong>2749</strong> Followers
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  <strong>678</strong> Following
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Paper>
      </Grid>

      <Grid item xs={12} md={8}>
        <Paper>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              About me
            </Typography>
            <Typography variant="body1" paragraph>
              Hello, I'm Anshan Handgun Creative Graphic Designer & User
              Experience Designer based in Website, I create digital Products a
              more Beautiful and usable place. Morbid accusant ipsum. Nam nec
              tellus at.
            </Typography>
            <Divider />
            <Grid container spacing={2} marginTop={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  <strong>Full Name:</strong> JWT User
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  <strong>Fathers Name:</strong> Mr. Deepen Handgun
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  <strong>Address:</strong> Street 110-B Kalians Bag, Dewan,
                  M.P. INDIA
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  <strong>Zip Code:</strong> 12345
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  <strong>Phone:</strong> +0 123456789, +0 123456789
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  <strong>Email:</strong> support@example.com
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  <strong>Website:</strong> http://example.com
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Paper>

        <Paper style={{ marginTop: 16 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Education
            </Typography>
            <Divider />
            <Grid container spacing={2} marginTop={2}>
              <Grid item xs={12}>
                <Typography variant="body1">
                  <strong>2014-2017:</strong> Master Degree in Computer
                  Application
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  University of Oxford, England
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  <strong>2011-2013:</strong> Bachelor Degree in Computer
                  Engineering
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Imperial College London
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  <strong>2009-2011:</strong> Higher Secondary Education
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  School of London, England
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Paper>

        <Paper style={{ marginTop: 16, padding: 16 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Employment
            </Typography>
            <Divider />
            <Grid container spacing={2} marginTop={2}>
              <Grid item xs={12}>
                <Typography variant="body1">
                  <strong>Current:</strong> Senior UI/UX designer
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Perform task related to project manager with the 100+ team
                  under my observation. Team management is key role in this
                  company.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  <strong>2017-2019:</strong> Trainee cum Project Manager
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Microsoft, TX, USA
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Paper>
      </Grid>
    </Grid>
    </Paper>
    </>
  );
};

export default ProfileStyle;
