import React from "react";
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography
} from "@mui/material";
import { Check, ErrorOutline, Info, Warning } from "@mui/icons-material";
import muilogo from '../../Utilities/Assets/logoMUI.png';

// Basic Alerts
const BasicAlerts = () => (
  <Paper sx={{ border: "1px solid rgb(227, 232, 239)" }}>
    <CardHeader title="Basic Alert" titleTypographyProps={{ fontSize: "14px" }} />
    <Divider />
    <CardContent sx={{ p: '24px' }}>
      <Grid container spacing={3} direction={'column'}>
        <Grid item>
          <Alert severity="error">This is an error alert!</Alert>
        </Grid>
        <Grid item>
          <Alert severity="warning">This is a warning alert!</Alert>
        </Grid>
        <Grid item>
          <Alert severity="success">This is a success alert!</Alert>
        </Grid>
        <Grid item>
          <Alert severity="info">This is a primary alert!</Alert>
        </Grid>
      </Grid>
    </CardContent>
  </Paper>
);

// Description Alerts
const DescriptionAlerts = () => (
  <Paper sx={{ border: "1px solid rgb(227, 232, 239)" }}>
    <CardHeader title="Description Alert" titleTypographyProps={{ fontSize: "14px" }} />
    <Divider />
    <CardContent sx={{ p: '24px' }}>
      <Grid container spacing={3} direction={'column'}>
        <Grid item>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            This is an error alert — check it out!
          </Alert>
        </Grid>
        <Grid item>
          <Alert severity="warning">
            <AlertTitle>Warning</AlertTitle>
            This is a warning alert — check it out!
          </Alert>
        </Grid>
        <Grid item>
          <Alert severity="info">
            <AlertTitle>Info</AlertTitle>
            This is an info alert — check it out!
          </Alert>
        </Grid>
        <Grid item>
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            This is a success alert — check it out!
          </Alert>
        </Grid>
      </Grid>
    </CardContent>
  </Paper>
);

// Alerts with Action
const AlertsWithAction = () => (
  <Paper sx={{ border: "1px solid rgb(227, 232, 239)" }}>
    <CardHeader title="Alerts with Action" titleTypographyProps={{ fontSize: "14px" }} />
    <Divider />
    <CardContent sx={{ p: '24px' }}>
      <Grid container spacing={3} direction={'column'}>
        <Grid item>
          <Alert
            severity="error"
            action={
              <Button color="inherit" size="small">
                UNDO
              </Button>
            }
          >
            This is an error alert!
          </Alert>
        </Grid>
        <Grid item>
          <Alert
            severity="warning"
            action={
              <Button color="inherit" size="small">
                UNDO
              </Button>
            }
          >
            This is a warning alert!
          </Alert>
        </Grid>
        <Grid item>
          <Alert
            severity="success"
            action={
              <Button color="inherit" size="small">
                UNDO
              </Button>
            }
          >
            This is a success alert!
          </Alert>
        </Grid>
        <Grid item>
          <Alert
            severity="info"
            action={
              <Button color="inherit" size="small">
                UNDO
              </Button>
            }
          >
            This is a primary alert!
          </Alert>
        </Grid>
      </Grid>
    </CardContent>
  </Paper>
);

// Alerts with Icon
const AlertsWithIcon = () => (
  <Paper sx={{ border: "1px solid rgb(227, 232, 239)" }}>
    <CardHeader title="Alerts with Icon" titleTypographyProps={{ fontSize: "14px" }} />
    <Divider />
    <CardContent sx={{ p: '24px' }}>
      <Grid container spacing={3} direction={'column'}>
        <Grid item>
          <Alert icon={<ErrorOutline fontSize="inherit" />} severity="error">
            This is an error alert!
          </Alert>
        </Grid>
        <Grid item>
          <Alert icon={<Warning fontSize="inherit" />} severity="warning">
            This is a warning alert!
          </Alert>
        </Grid>
        <Grid item>
          <Alert icon={<Check fontSize="inherit" />} severity="success">
            This is a success alert!
          </Alert>
        </Grid>
        <Grid item>
          <Alert icon={<Info fontSize="inherit" />} severity="info">
            This is a primary alert!
          </Alert>
        </Grid>
      </Grid>
    </CardContent>
  </Paper>
);

// Outlined Alerts
const OutlinedAlerts = () => (
  <Paper sx={{ border: "1px solid rgb(227, 232, 239)" }}>
    <CardHeader title="Outlined Alerts" titleTypographyProps={{ fontSize: "14px" }} />
    <Divider />
    <CardContent sx={{ p: '24px' }}>
      <Grid container spacing={3} direction={'column'}>
        <Grid item>
          <Alert variant="outlined" severity="error">
            This is an error alert — check it out!
          </Alert>
        </Grid>
        <Grid item>
          <Alert variant="outlined" severity="warning">
            This is a warning alert — check it out!
          </Alert>
        </Grid>
        <Grid item>
          <Alert variant="outlined" severity="info">
            This is an info alert — check it out!
          </Alert>
        </Grid>
        <Grid item>
          <Alert variant="outlined" severity="success">
            This is a success alert — check it out!
          </Alert>
        </Grid>
      </Grid>
    </CardContent>
  </Paper>
);

// Filled Alerts
const FilledAlerts = () => (
  <Paper sx={{ border: "1px solid rgb(227, 232, 239)" }}>
    <CardHeader title="Filled Alerts" titleTypographyProps={{ fontSize: "14px" }} />
    <Divider />
    <CardContent sx={{ p: '24px' }}>
      <Grid container spacing={3} direction={'column'}>
        <Grid item>
          <Alert variant="filled" severity="error">
            This is an error alert — check it out!
          </Alert>
        </Grid>
        <Grid item>
          <Alert variant="filled" severity="warning">
            This is a warning alert — check it out!
          </Alert>
        </Grid>
        <Grid item>
          <Alert variant="filled" severity="info">
            This is an info alert — check it out!
          </Alert>
        </Grid>
        <Grid item>
          <Alert variant="filled" severity="success">
            This is a success alert — check it out!
          </Alert>
        </Grid>
      </Grid>
    </CardContent>
  </Paper>
);

const AlertsPlayground = () => {
  return (
    <Paper sx={{ p: 3 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5">Alerts</Typography>
        <a href="https://mui.com/material-ui/react-alert/" target="_blank" rel="noopener noreferrer">
          <img src={muilogo} alt="MUI Logo" style={{ height: 40 }} />
        </a>
      </Stack>
      <Divider sx={{ mb: 2 }} />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <BasicAlerts />
        </Grid>
        <Grid item xs={12}>
          <DescriptionAlerts />
        </Grid>
        <Grid item xs={12}>
          <AlertsWithAction />
        </Grid>
        <Grid item xs={12}>
          <AlertsWithIcon />
        </Grid>
        <Grid item xs={12}>
          <OutlinedAlerts />
        </Grid>
        <Grid item xs={12}>
          <FilledAlerts />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AlertsPlayground;
