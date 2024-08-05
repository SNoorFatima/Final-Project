import React from 'react';
import { Avatar, Grid, Card, CardContent, Typography, Badge, Box, AvatarGroup, CardHeader, Paper, Divider } from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { Folder, Pageview, Assignment } from '@mui/icons-material';
import img1 from '../../Data/Assets/avatar-1-Dja0YEDP.png';
import { Stack } from '@mui/system';
import muilogo from '../../Utilities/Assets/logoMUI.png';

const AvatarPlayground = () => {
  return (
    <Paper sx={{ padding: 3 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5">Avatar</Typography>
        <a href="https://mui.com/material-ui/react-avatar/" target="_blank" rel="noopener noreferrer">
          <img src={muilogo} alt="MUI Logo" style={{ height: 40 }} />
        </a>
      </Stack>
      <Divider sx={{ mb: 2 }} />

      <Grid container spacing={3}>
        {/* Basic Avatar */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader title="Basic Avatar" titleTypographyProps={{fontSize:'14px'}}/>
            <Divider />
            <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
              <Avatar />
            </CardContent>
          </Card>
        </Grid>

        {/* Image Avatar */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader title="Image Avatar" titleTypographyProps={{fontSize:'14px'}}/>
            <Divider />
            <CardContent>
              <Stack direction="row" spacing={2}>
                <Avatar src={img1} />
                <Avatar src={img1} />
                <Avatar src={img1} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Letter Avatar */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader title="Letter Avatar"titleTypographyProps={{fontSize:'14px'}} />
            <Divider />
            <CardContent>
              <Stack direction="row" spacing={2}>
                <Avatar>AG</Avatar>
                <Avatar sx={{ bgcolor: deepPurple[500] }}>P</Avatar>
                <Avatar sx={{ bgcolor: deepOrange[500] }}>C</Avatar>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Icon Avatar */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader title="Icon Avatar" titleTypographyProps={{fontSize:'14px'}}/>
            <Divider />
            <CardContent>
              <Stack direction="row" spacing={2}>
                <Avatar>
                  <Folder />
                </Avatar>
                <Avatar sx={{ bgcolor: deepPurple[500] }}>
                  <Pageview />
                </Avatar>
                <Avatar sx={{ bgcolor: deepOrange[500] }}>
                  <Assignment />
                </Avatar>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Variant Avatar */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader title="Variant Avatar" titleTypographyProps={{fontSize:'14px'}} />
            <Divider />
            <CardContent>
              <Stack direction="row" spacing={2}>
                <Avatar variant="square" sx={{ bgcolor: deepPurple[500] }}>A</Avatar>
                <Avatar variant="rounded" sx={{ bgcolor: deepOrange[500] }}>
                  <Folder />
                </Avatar>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Outline Avatar */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader title="Outline Avatar"titleTypographyProps={{fontSize:'14px'}} />
            <Divider />
            <CardContent>
              <Stack direction="row" spacing={2}>
                <Avatar sx={{ border: '2px solid' }}>A</Avatar>
                <Avatar sx={{ border: '2px solid', borderColor: deepPurple[500] }}>
                  <Folder />
                </Avatar>
                <Avatar sx={{ border: '2px solid', borderColor: deepOrange[500] }}>
                  <Assignment />
                </Avatar>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Fallback Avatar */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader title="Fallback Avatar" titleTypographyProps={{fontSize:'14px'}} />
            <Divider />
            <CardContent>
              <Stack direction="row" spacing={2}>
                <Avatar src="/broken-image.jpg">A</Avatar>
                <Avatar src="/broken-image.jpg" sx={{ bgcolor: deepPurple[500] }}>R</Avatar>
                <Avatar src="/broken-image.jpg" sx={{ bgcolor: deepOrange[500] }}>M</Avatar>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Grouped Avatar */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader title="Grouped Avatar" titleTypographyProps={{fontSize:'14px'}} />
            <Divider />
            <CardContent>
              <AvatarGroup max={4}>
                <Avatar src={img1} />
                <Avatar src={img1} />
                <Avatar src={img1} />
                <Avatar src={img1} />
                <Avatar src={img1} />
              </AvatarGroup>
            </CardContent>
          </Card>
        </Grid>

        {/* Color Variation Avatar */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader title="Color Variation Avatar " titleTypographyProps={{fontSize:'14px'}}/>
            <Divider />
            <CardContent>
              <Stack direction="row" spacing={2}>
                <Avatar sx={{ bgcolor: deepPurple[500] }}>A</Avatar>
                <Avatar sx={{ bgcolor: deepOrange[500] }}>C</Avatar>
                <Avatar sx={{ bgcolor: '#ff5722' }}>P</Avatar>
                <Avatar sx={{ bgcolor: '#3f51b5' }}>R</Avatar>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Size Avatar */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader title="Size Avatar" titleTypographyProps={{fontSize:'14px'}} />
            <Divider />
            <CardContent>
              <Stack direction="row" spacing={2}>
                <Avatar sx={{ width: 24, height: 24 }} src={img1} />
                <Avatar sx={{ width: 32, height: 32 }} src={img1} />
                <Avatar sx={{ width: 40, height: 40 }} src={img1} />
                <Avatar sx={{ width: 48, height: 48 }} src={img1} />
               
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Avatar with Badge */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader title="Avatar with Badge" titleTypographyProps={{fontSize:'14px'}} />
            <Divider />
            <CardContent>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent={<Avatar src={img1} sx={{ width: 20, height: 20 }} />}
              >
                <Avatar src={img1} />
              </Badge>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AvatarPlayground;
