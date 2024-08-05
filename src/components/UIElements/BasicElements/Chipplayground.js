import React from 'react';
import { Grid, Card, CardContent, Typography, Divider, Chip, Paper, Stack,Avatar,CardHeader } from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { Face } from '@mui/icons-material';
import muilogo from '../../Utilities/Assets/logoMUI.png';

const ChipPlayground = () => {
  return (
    <Paper sx={{ padding: 3 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5">Chip Playground</Typography>
        <a href="https://mui.com/material-ui/react-chip/" target="_blank" rel="noopener noreferrer">
          <img src={muilogo} alt="MUI Logo" style={{ height: 40 }} />
        </a>
      </Stack>
      <Divider sx={{ mb: 2 }} />

      <Grid container spacing={3}>
        {/* Basic Chips */}
        <Grid item  >
          <Card>
            <CardHeader title="Basic Chips" titleTypographyProps={{ fontSize: '14px' }} />
            <Divider />
            <CardContent>
              <Stack direction={'row'} spacing={2}>
                <Chip label="Default" />
                <Chip label="Deletable" onDelete={() => {}} />
                <Chip label="Clickable" onClick={() => {}} />
                <Chip label="Disabled" disabled />
                <Chip label="Clickable Deletable" onClick={() => {}} onDelete={() => {}} />
                <Chip label="Clickable with Avatar" avatar={<Avatar>M</Avatar>} onClick={() => {}} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Outlined Chips */}
        <Grid item >
          <Card>
            <CardHeader title="Outlined Chips" titleTypographyProps={{ fontSize: '14px' }} />
            <Divider />
            <CardContent>
              <Stack direction="row" spacing={2}>
                <Chip label="Default" variant="outlined" />
                <Chip label="Deletable" variant="outlined" onDelete={() => {}} />
                <Chip label="Clickable" variant="outlined" onClick={() => {}} />
                <Chip label="Disabled" variant="outlined" disabled />
                <Chip label="Clickable Deletable" variant="outlined" onClick={() => {}} onDelete={() => {}} />
                <Chip label="Clickable with Avatar" avatar={<Avatar>M</Avatar>} variant="outlined" onClick={() => {}} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Outlined Color Chips */}
        <Grid item >
          <Card>
            <CardHeader title="Outlined Color Chips" titleTypographyProps={{ fontSize: '14px' }} />
            <Divider />
            <CardContent>
              <Stack direction="row" spacing={2}>
                <Chip label="Primary" variant="outlined" color="primary" />
                <Chip label="Secondary" variant="outlined" color="secondary" />
                <Chip label="Success" variant="outlined" color="success" />
                <Chip label="Error" variant="outlined" color="error" />
                <Chip label="Clickable" variant="outlined" color="primary" onClick={() => {}} />
                <Chip label="Clickable Deletable" variant="outlined" color="secondary" onClick={() => {}} onDelete={() => {}} />
                <Chip label="Clickable with Avatar" avatar={<Avatar>M</Avatar>} variant="outlined" color="success" onClick={() => {}} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Filled Color Chips */}
        <Grid item >
          <Card>
            <CardHeader title="Filled Color Chips" titleTypographyProps={{ fontSize: '14px' }} />
            <Divider />
            <CardContent>
              <Stack direction="row" spacing={2}>
                <Chip label="Primary" color="primary" />
                <Chip label="Secondary" color="secondary" />
                <Chip label="Success" color="success" />
                <Chip label="Error" color="error" />
                <Chip label="Clickable" color="primary" onClick={() => {}} />
                <Chip label="Clickable Deletable" color="secondary" onClick={() => {}} onDelete={() => {}} />
                <Chip label="Clickable with Avatar" avatar={<Avatar>M</Avatar>} color="success" onClick={() => {}} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ChipPlayground;
