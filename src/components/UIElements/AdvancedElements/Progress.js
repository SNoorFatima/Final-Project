import React, { useState, useEffect } from 'react';
import { Grid, Card, CardHeader, Divider, Paper, CircularProgress, LinearProgress, Typography, Box } from '@mui/material';
import muilogo from "../../Utilities/Assets/logoMUI.png";
import { Stack } from '@mui/system';
const CircularIndeterminate = () => (
  <Card>
    <CardHeader title="Circular Indeterminate" titleTypographyProps={{ fontSize: "14px" }} />
    <Divider />
    <Paper sx={{ p: 2, textAlign: 'center' }}>
      <CircularProgress />
      <CircularProgress color="secondary" />
    </Paper>
  </Card>
);

const CircularDeterminate = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => clearInterval(timer);
  }, []);

  return (
    <Card>
      <CardHeader title="Circular Determinate" titleTypographyProps={{ fontSize: "14px" }} />
      <Divider />
      <Paper sx={{ p: 2, textAlign: 'center' }}>
        <CircularProgress variant="determinate" value={progress} />
      </Paper>
    </Card>
  );
};

const CircularLabel = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => clearInterval(timer);
  }, []);

  return (
    <Card>
      <CardHeader title="Circular Label" titleTypographyProps={{ fontSize: "14px" }} />
      <Divider />
      <Paper sx={{ p: 2, textAlign: 'center' }}>
        <Box position="relative" display="inline-flex">
          <CircularProgress variant="determinate" value={progress} />
          <Box
            top={0}
            left={0}
            bottom={0}
            right={0}
            position="absolute"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(progress)}%`}</Typography>
          </Box>
        </Box>
      </Paper>
    </Card>
  );
};

const LinearIndeterminate = () => (
  <Card>
    <CardHeader title="Linear Indeterminate" titleTypographyProps={{ fontSize: "14px" }} />
    <Divider />
    <Paper sx={{ p: 2 }}>
      <LinearProgress />
      <LinearProgress color="secondary" />
    </Paper>
  </Card>
);

const LinearLabel = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => clearInterval(timer);
  }, []);

  return (
    <Card>
      <CardHeader title="Linear Label" titleTypographyProps={{ fontSize: "14px" }} />
      <Divider />
      <Paper sx={{ p: 2 }}>
        <Box display="flex" alignItems="center">
          <Box width="100%" mr={1}>
            <LinearProgress variant="determinate" value={progress} />
          </Box>
          <Box minWidth={35}>
            <Typography variant="body2" color="textSecondary">{`${progress}%`}</Typography>
          </Box>
        </Box>
      </Paper>
    </Card>
  );
};

const LinearDeterminate = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => clearInterval(timer);
  }, []);

  return (
    <Card>
      <CardHeader title="Linear Determinate" titleTypographyProps={{ fontSize: "14px" }} />
      <Divider />
      <Paper sx={{ p: 2 }}>
        <LinearProgress variant="determinate" value={progress} />
      </Paper>
    </Card>
  );
};

const LinearBuffer = () => {
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
      setBuffer((prevBuffer) => (prevBuffer >= 100 ? 10 : prevBuffer + 10));
    }, 800);
    return () => clearInterval(timer);
  }, []);

  return (
    <Card>
      <CardHeader title="Linear Buffer" titleTypographyProps={{ fontSize: "14px" }} />
      <Divider />
      <Paper sx={{ p: 2 }}>
        <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
      </Paper>
    </Card>
  );
};

const ColorProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => clearInterval(timer);
  }, []);

  return (
    <Card>
      <CardHeader title="Color" titleTypographyProps={{ fontSize: "14px" }} />
      <Divider />
      <Paper sx={{ p: 2 }}>
        {['primary', 'secondary', 'success', 'warning', 'error'].map((color, index) => (
          <Box display="flex" alignItems="center" key={color} sx={{ mb: index < 4 ? 1 : 0 }}>
            <Typography variant="body2" sx={{ mr: 1 }}>{`Progress ${color.charAt(0).toUpperCase() + color.slice(1)}`}</Typography>
            <Box width="100%" mr={1}>
              <LinearProgress variant="determinate" value={progress} color={color} />
            </Box>
            <Box minWidth={35}>
              <Typography variant="body2" color="textSecondary">{`${progress}%`}</Typography>
            </Box>
          </Box>
        ))}
      </Paper>
    </Card>
  );
};

const ColorWithHeight = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => clearInterval(timer);
  }, []);

  return (
    <Card>
      <CardHeader title="Color With Height" titleTypographyProps={{ fontSize: "14px" }} />
      <Divider />
      <Paper sx={{ p: 2 }}>
        {['primary', 'secondary', 'success', 'warning', 'error'].map((color, index) => (
          <Box display="flex" alignItems="center" key={color} sx={{ mb: index < 4 ? 1 : 0 }}>
            <Typography variant="body2" sx={{ mr: 1 }}>{`Progress ${color.charAt(0).toUpperCase() + color.slice(1)}`}</Typography>
            <Box width="100%" mr={1}>
              <LinearProgress variant="determinate" value={progress} color={color} sx={{ height: 10 }} />
            </Box>
            <Box minWidth={35}>
              <Typography variant="body2" color="textSecondary">{`${progress}%`}</Typography>
            </Box>
          </Box>
        ))}
      </Paper>
    </Card>
  );
};

const ProgressPlayground = () => {
  return (
    <Paper sx={{p:3}}>
<Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5">Dialog</Typography>
        <a href="https://mui.com/material-ui/react-dialog/" target="_blank" rel="noopener noreferrer">
          <img src={muilogo} alt="MUI Logo" style={{ height: 40 }} />
        </a>
      </Stack>
      <Divider sx={{mb:2}}/>
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <CircularIndeterminate />
      </Grid>
      <Grid item xs={12} md={4}>
        <CircularDeterminate />
      </Grid>
      <Grid item xs={12} md={4}>
        <CircularLabel />
      </Grid>
      <Grid item xs={12} md={6}>
        <LinearIndeterminate />
      </Grid>
      <Grid item xs={12} md={6}>
        <LinearLabel />
      </Grid>
      <Grid item xs={12} md={6}>
        <LinearDeterminate />
      </Grid>
      <Grid item xs={12} md={6}>
        <LinearBuffer />
      </Grid>
      <Grid item xs={12} md={6}>
        <ColorProgress />
      </Grid>
      <Grid item xs={12} md={6}>
        <ColorWithHeight />
      </Grid>
    </Grid>
    </Paper>
  );
};

export default ProgressPlayground;
