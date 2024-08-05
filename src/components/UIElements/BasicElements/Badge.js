import React from 'react';
import { Badge, Grid, Card, CardContent, Typography, Box, Avatar, CardHeader, Paper, Divider } from '@mui/material';
import { Mail, Notifications, Folder, ShoppingCart } from '@mui/icons-material';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { Stack } from '@mui/system';
import muilogo from '../../Utilities/Assets/logoMUI.png';
import BadgeVisibility from './BadgeVisibility'; // Import the BadgeVisibility component
const shapeStyles = { bgcolor: 'primary.main', width: 40, height: 40 };
const shapeCircleStyles = { borderRadius: '50%' };
const rectangle = <Box component="span" sx={shapeStyles} />;
const circle = (
  <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
);
const BadgePlayground = () => {
  return (
    <Paper sx={{ padding: 3 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5">Badge</Typography>
        <a href="https://mui.com/material-ui/react-badge/" target="_blank" rel="noopener noreferrer">
          <img src={muilogo} alt="MUI Logo" style={{ height: 40 }} />
        </a>
      </Stack>
      <Divider sx={{ mb: 2 }} />

      <Grid container spacing={3}>
        {/* Basic Badge */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader title="Basic Badge" titleTypographyProps={{fontSize:'14px'}} />
            <Divider />
            <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
              <Badge badgeContent={4} color="primary">
                <Mail color="action" />
              </Badge>
            </CardContent>
          </Card>
        </Grid>

        {/* Maximum Value Badges */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader title="Maximum Value Badges" titleTypographyProps={{fontSize:'14px'}} />
            <Divider />
            <CardContent>
              <Stack direction="row" spacing={2} justifyContent="center">
                <Badge badgeContent={99} color="primary">
                  <Mail color="action" />
                </Badge>
                <Badge badgeContent={100} color="primary">
                  <Mail color="action" />
                </Badge>
                <Badge badgeContent={1000} max={999} color="primary">
                  <Mail color="action" />
                </Badge>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Dot Badges */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader title="Dot Badges" titleTypographyProps={{fontSize:'14px'}} />
            <Divider />
            <CardContent>
              <Stack direction="row" spacing={2} justifyContent="center">
                <Badge color="primary" variant="dot">
                  <Mail color="action" />
                </Badge>
                <Badge color="secondary" variant="dot">
                  <Notifications color="action" />
                </Badge>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Badge Overlap */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader title="Badge Overlap" titleTypographyProps={{fontSize:'14px'}} />
            <Divider />
            <CardContent>
              <Stack direction="row" spacing={2} justifyContent="center">
              <Badge color="secondary" badgeContent=" ">
  {rectangle}
</Badge>
<Badge color="secondary" badgeContent=" " variant="dot">
  {rectangle}
</Badge>
<Badge color="secondary" overlap="circular" badgeContent=" ">
  {circle}
</Badge>
<Badge color="secondary" overlap="circular" badgeContent=" " variant="dot">
  {circle}
</Badge>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Badge Alignment */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader title="Badge Alignment" titleTypographyProps={{fontSize:'14px'}} />
            <Divider />
            <CardContent>
              <Stack direction="row" spacing={2} justifyContent="center">
                <Badge badgeContent={4} color="primary" anchorOrigin={{ vertical: 'top', horizontal: 'left' }}>
                  <Mail color="action" />
                </Badge>
                <Badge badgeContent={4} color="primary" anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                  <Mail color="action" />
                </Badge>
                <Badge badgeContent={4} color="primary" anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
                  <Mail color="action" />
                </Badge>
                <Badge badgeContent={4} color="primary" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                  <Mail color="action" />
                </Badge>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Customized Badges */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader title="Customized Badges" titleTypographyProps={{fontSize:'14px'}} />
            <Divider />
            <CardContent>
              <Stack direction="row" spacing={2} justifyContent="center">
                <Badge badgeContent={4} color="primary" sx={{ '& .MuiBadge-badge': { bgcolor: deepPurple[500] } }}>
                  <Mail color="action" />
                </Badge>
                <Badge badgeContent={4} color="secondary" sx={{ '& .MuiBadge-badge': { bgcolor: deepOrange[500] } }}>
                  <Notifications color="action" />
                </Badge>
                <Badge badgeContent={4} color="secondary" sx={{ '& .MuiBadge-badge': { bgcolor: deepOrange[500] } }}>
                  <ShoppingCart color="action" />
                </Badge>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Badge Visibility */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader title="Badge Visibility" titleTypographyProps={{fontSize:'14px'}} />
            <Divider />
            <CardContent>
              <BadgeVisibility />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default BadgePlayground;
