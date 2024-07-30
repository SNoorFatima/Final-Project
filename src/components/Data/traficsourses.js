import React from 'react';
import { Typography, List, ListItem, LinearProgress, Paper } from '@mui/material';

const trafficData = [
  { label: 'Direct', value: 80, color: 'primary' },
  { label: 'Social', value: 50, color: 'secondary' },
  { label: 'Referral', value: 20, color: 'primary' },
  { label: 'Bounce', value: 58, color: 'secondary' },
  { label: 'Internet', value: 40, color: 'primary' },
  { label: 'Social', value: 90, color: 'primary' },
];

const TrafficSources = () => {
  return (
    <Paper style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <Typography variant="h6" gutterBottom>
        Traffic Sources
      </Typography>
      <List>
        {trafficData.map((source, index) => (
          <ListItem key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body1" style={{ flexGrow: 1 }}>
              {source.label}
            </Typography>
            <Typography variant="body1" style={{ marginRight: '10px' }}>
              {source.value}%
            </Typography>
            <LinearProgress
              variant="determinate"
              value={source.value}
              style={{ width: '100px', marginLeft: '10px' }}
              color={source.color}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default TrafficSources;
