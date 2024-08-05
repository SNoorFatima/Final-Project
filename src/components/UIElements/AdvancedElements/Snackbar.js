import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Button,
  Typography,
  Snackbar,
  IconButton,
  ToggleButtonGroup,
  ToggleButton,
  FormGroup,
  FormControlLabel,
  Switch,
  RadioGroup,
  Radio,
  TextField,
  Checkbox,
  Slider,
  Select,
  MenuItem,
  ListItemText,
  Paper,
} from "@mui/material";
import { Close, CheckCircle, Warning, ErrorOutline, Info } from "@mui/icons-material";

const SnackbarPlayground = () => {
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState("info");
  const [position, setPosition] = useState("bottom-center");
  const [duration, setDuration] = useState(6000);
  const [vertical, setVertical] = useState("bottom");
  const [horizontal, setHorizontal] = useState("center");

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleSeverityChange = (event, newSeverity) => {
    setSeverity(newSeverity);
  };

  const handlePositionChange = (event, newPosition) => {
    setPosition(newPosition);
    const [vertical, horizontal] = newPosition.split("-");
    setVertical(vertical);
    setHorizontal(horizontal);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
        <Close fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Paper sx={{ flexGrow: 1, padding: 2 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Snackbar Playground
      </Typography>
      <Grid container spacing={2}>
        {/* Snackbar Types */}
        <Grid item xs={12}>
          <Card>
            <CardHeader title="Snackbar Types" />
            <CardContent>
              <FormGroup row>
                <FormControlLabel
                  control={<Switch checked={severity === "info"} onChange={() => setSeverity("info")} />}
                  label="Info"
                />
                <FormControlLabel
                  control={<Switch checked={severity === "success"} onChange={() => setSeverity("success")} />}
                  label="Success"
                />
                <FormControlLabel
                  control={<Switch checked={severity === "warning"} onChange={() => setSeverity("warning")} />}
                  label="Warning"
                />
                <FormControlLabel
                  control={<Switch checked={severity === "error"} onChange={() => setSeverity("error")} />}
                  label="Error"
                />
              </FormGroup>
            </CardContent>
          </Card>
        </Grid>

        {/* Snackbar Position */}
        <Grid item xs={12}>
          <Card>
            <CardHeader title="Snackbar Position" />
            <CardContent>
              <ToggleButtonGroup
                value={position}
                exclusive
                onChange={handlePositionChange}
                aria-label="Snackbar Position"
              >
                <ToggleButton value="top-left">Top-Left</ToggleButton>
                <ToggleButton value="top-center">Top-Center</ToggleButton>
                <ToggleButton value="top-right">Top-Right</ToggleButton>
                <ToggleButton value="bottom-left">Bottom-Left</ToggleButton>
                <ToggleButton value="bottom-center">Bottom-Center</ToggleButton>
                <ToggleButton value="bottom-right">Bottom-Right</ToggleButton>
              </ToggleButtonGroup>
            </CardContent>
          </Card>
        </Grid>

        {/* Snackbar Duration */}
        <Grid item xs={12}>
          <Card>
            <CardHeader title="Snackbar Duration" />
            <CardContent>
              <Slider
                value={duration}
                onChange={(event, newValue) => setDuration(newValue)}
                aria-labelledby="continuous-slider"
                min={1000}
                max={10000}
                step={1000}
                valueLabelDisplay="auto"
                marks
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Open Snackbar Button */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Button variant="contained" onClick={handleClick}>
                Show Snackbar
              </Button>
              <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                autoHideDuration={duration}
                onClose={handleClose}
                message={
                  <span>
                    {severity === "info" && <Info />} {severity === "success" && <CheckCircle />}
                    {severity === "warning" && <Warning />} {severity === "error" && <ErrorOutline />}
                    {" "}This is a {severity} message!
                  </span>
                }
                action={action}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SnackbarPlayground;
