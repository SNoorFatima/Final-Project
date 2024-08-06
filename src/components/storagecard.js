// StorageCard.js
import React from 'react';
import { Box, Typography, Avatar, LinearProgress } from '@mui/material';
import { TableChartOutlined } from '@mui/icons-material';


const StorageCard = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#d2eafc',
        padding: 2,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: 2,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
        <Avatar sx={{ bgcolor: 'white', marginRight: 1 }}>
          <TableChartOutlined color="#1976d2" />
        </Avatar>
        <Box>
          <Typography variant="body1" fontWeight="bold">
            Get Extra Space
          </Typography>
          <Typography variant="body2" color="textSecondary">
            28/23 GB
          </Typography>
        </Box>
      </Box>
      <Typography variant="body2" gutterBottom>
        Progress
      </Typography>
      <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
        <LinearProgress
          variant="determinate"
          value={80}
          sx={{ flexGrow: 1, marginRight: 1 }}
        />
        <Typography variant="body2">80%</Typography>
      </Box>
    </Box>
  );
};

export default StorageCard;
