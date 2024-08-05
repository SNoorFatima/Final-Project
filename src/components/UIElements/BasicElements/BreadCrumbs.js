import React from 'react';
import {
  Breadcrumbs,
  Link,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Box,
  Paper,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { AccountTreeTwoTone, Home } from '@mui/icons-material';
import { IconBrush } from '@tabler/icons-react';

// Basic Breadcrumb Component
const BasicBreadcrumb = () => (
  <Card>
    <CardHeader title="Basic Breadcrumb" titleTypographyProps={{ fontSize: '14px' }} />
    <Divider />
    <CardContent>
      <Paper sx={{ backgroundColor: "rgb(248, 250, 252)" }}>
        <Box p={2}>
          <Breadcrumbs>
            <Link underline="hover" color="inherit" href="/">
              <Home sx={{
                marginRight: '0px',
                marginTop: '-2px',
                width: '1rem',
                height: '1rem',
                color: 'rgb(103, 58, 183)'
              }} />
            </Link>
            <Link underline="hover" color="rgb(18, 25, 38)" >
              Basic
            </Link>
            <Typography color="rgb(105, 117, 134)">Breadcrumbs</Typography>
          </Breadcrumbs>
        </Box>
      </Paper>
    </CardContent>
  </Card>
);

// Custom Separator Breadcrumb Component
const CustomSeparatorBreadcrumb = () => (
  <Card>
    <CardHeader title="Custom Separator" titleTypographyProps={{ fontSize: '14px' }} />
    <Divider />
    <CardContent>
      <Paper sx={{ backgroundColor: "rgb(248, 250, 252)" }}>
        <Box p={2}>
          <Breadcrumbs separator="›">
            <Link underline="hover" color="inherit" href="/">
              <Home sx={{
                marginRight: '0px',
                marginTop: '-2px',
                width: '1rem',
                height: '1rem',
                color: 'rgb(103, 58, 183)'
              }} />
            </Link>
            <Link underline="hover" color="rgb(18, 25, 38)" >
             Basic
            </Link>
            <Typography color="rgb(105, 117, 134)">Breadcrumbs</Typography>
          </Breadcrumbs>
        </Box>
      </Paper>
    </CardContent>
  </Card>
);

// Breadcrumb With Title Component
const BreadcrumbWithTitle = () => (
  <Card>
    <CardHeader title="Breadcrumb With Title" titleTypographyProps={{ fontSize: '14px' }} />
    <Divider />
    <CardContent>
      <Paper sx={{ backgroundColor: "rgb(248, 250, 252)" }}>
        <Box p={2}>
          <Typography variant="h6">Breadcrumb</Typography>
          <Breadcrumbs>
            <Link underline="hover" color="inherit" href="/">
              <Home sx={{
                marginRight: '0px',
                marginTop: '-2px',
                width: '1rem',
                height: '1rem',
                color: 'rgb(103, 58, 183)'
              }} />
            </Link>
            <Link underline="hover" color="rgb(18, 25, 38)" >
              Basic
            </Link>
            <Typography color="rgb(105, 117, 134)">Breadcrumbs</Typography>
          </Breadcrumbs>
        </Box>
      </Paper>
    </CardContent>
  </Card>
);

// Breadcrumb With Icons Component
const BreadcrumbWithIcons = () => (
  <Card>
    <CardHeader title="Breadcrumb With Icons" titleTypographyProps={{ fontSize: '14px' }} />
    <Divider />
    <CardContent>
      <Paper sx={{ backgroundColor: "rgb(248, 250, 252)" }}>
        <Box p={2}>
          <Breadcrumbs separator="›" >
            <Link underline="hover" color="inherit" href="/">
              <HomeIcon fontSize="small" sx={{
                marginRight: '6px',
                marginTop: '-2px',
                width: '1rem',
                height: '1rem',
                color: 'rgb(103, 58, 183)'
              }} />
             Dashboard
            </Link>
            <Link underline="hover" color="inherit" >
            
             
              <IconBrush style={{marginRight: '6px',
                marginTop: '-2px',
                width: '1rem',
                height: '1rem',
                color: 'rgb(103, 58, 183)'}}/>
              Basic
            </Link>
            <Typography color="textPrimary">
             
              <AccountTreeTwoTone style={{marginRight: '6px',
                marginTop: '-2px',
                width: '1rem',
                height: '1rem',
                color: 'rgb(103, 58, 183)'}}/>
              Breadcrumbs
            </Typography>
          </Breadcrumbs>
        </Box>
      </Paper>
    </CardContent>
  </Card>
);

// Breadcrumb With Dashboard Icons Component
const BreadcrumbWithDashboardIcons = () => (
  <Card>
    <CardHeader title="Only Dashboard Icons" titleTypographyProps={{ fontSize: '14px' }} />
    <Divider />
    <CardContent>
      <Paper sx={{ backgroundColor: "rgb(248, 250, 252)" }}>
        <Box p={2}>
          <Breadcrumbs>
            
              <HomeIcon sx={{
                marginRight: '0px',
                marginTop: '-2px',
                width: '1rem',
                height: '1rem',
                color: 'rgb(103, 58, 183)'
              }} />
            
            <Link underline="hover" color="rgb(18, 25, 38)" >
              Basic
            </Link>
            <Typography color="rgb(105, 117, 134)">Breadcrumbs</Typography>
          </Breadcrumbs>
        </Box>
      </Paper>
    </CardContent>
  </Card>
);

// Collapsed Breadcrumb Component
const CollapsedBreadcrumb = () => (
  <Card>
    <CardHeader title="Collapsed Breadcrumbs" titleTypographyProps={{ fontSize: '14px' }} />
    <Divider />
    <CardContent>
      <Paper sx={{ backgroundColor: "rgb(248, 250, 252)" }}>
        <Box p={2}>
          <Breadcrumbs maxItems={2} aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              <Home sx={{
                marginRight: '0px',
                marginTop: '-2px',
                width: '1rem',
                height: '1rem',
                color: 'rgb(103, 58, 183)'
              }} />
            </Link>
            <Link underline="hover" color="rgb(18, 25, 38)" >
              Basic
            </Link>
            <Link underline="hover" color="rgb(18, 25, 38)" >
              Components
            </Link>
            <Typography color="rgb(105, 117, 134)">Breadcrumbs</Typography>
          </Breadcrumbs>
        </Box>
      </Paper>
    </CardContent>
  </Card>
);

// No Card with Divider Breadcrumb Component
const NoCardWithDividerBreadcrumb = () => (
  <Paper>
    <CardHeader title="No Card with Divider " titleTypographyProps={{ fontSize: '14px' }} />
    <Divider />
   
      <Box p={2}>
        <Breadcrumbs>
          <Link underline="hover" color="inherit" href="/">
            <Home sx={{
              marginRight: '0px',
              marginTop: '-2px',
              width: '1rem',
              height: '1rem',
              color: 'rgb(103, 58, 183)'
            }} />
          </Link>
          <Link underline="hover" color="rgb(18, 25, 38)" >
            Basic
          </Link>
          <Typography color="rgb(105, 117, 134)">Breadcrumbs</Typography>
        </Breadcrumbs>
        <Divider sx={{mt:2,mb:2}} />
      </Box>
   
    
  </Paper>
);

// No Card & No Divider Breadcrumb Component
const NoCardNoDividerBreadcrumb = () => (
    <Paper>
    <CardHeader title="No Card with NO Divider " titleTypographyProps={{ fontSize: '14px' }} />
    <Divider />
   
      <Box p={2}>
        <Breadcrumbs>
          <Link underline="hover" color="inherit" href="/">
            <Home sx={{
              marginRight: '0px',
              marginTop: '-2px',
              width: '1rem',
              height: '1rem',
              color: 'rgb(103, 58, 183)'
            }} />
          </Link>
          <Link underline="hover" color="rgb(18, 25, 38)" >
            Basic
          </Link>
          <Typography color="rgb(105, 117, 134)">Breadcrumbs</Typography>
        </Breadcrumbs>
       
      </Box>
   
    
  </Paper>
);
// Breadcrumb With Title on Bottom Component
const BreadcrumbWithTitleBottom = () => (
    <Card>
      <CardHeader title="Title on Bottom" titleTypographyProps={{ fontSize: '14px' }} />
      <Divider />
      <CardContent>
        <Paper sx={{ backgroundColor: "rgb(248, 250, 252)" }}>
          <Box p={2}>
            <Breadcrumbs>
              <Link underline="hover" color="inherit" href="/">
                <Home sx={{
                  marginRight: '0px',
                  marginTop: '-2px',
                  width: '1rem',
                  height: '1rem',
                  color: 'rgb(103, 58, 183)'
                }} />
              </Link>
              <Link underline="hover" color="rgb(18, 25, 38)">
                Basic
              </Link>
              <Typography color="rgb(105, 117, 134)">Breadcrumbs</Typography>
            </Breadcrumbs>
            <Typography variant="h6">Breadcrumb</Typography>
          </Box>
        </Paper>
      </CardContent>
    </Card>
  );
  
// Breadcrumb with title on the left
const BreadcrumbWithTitleLeft = () => (
  <Card>
    <CardHeader title="Breadcrumb With Title on Left" titleTypographyProps={{ fontSize: '14px' }} />
    <Divider />
    <CardContent>
      <Paper sx={{ backgroundColor: "rgb(248, 250, 252)" }}>
        <Box p={2} display="flex" alignItems="center">
          <Typography variant="h6" sx={{ marginRight: '1rem' }}>Breadcrumbs</Typography>
          <Breadcrumbs>
            <Link underline="hover" color="inherit" href="/">
              <Home sx={{
                marginRight: '0px',
                marginTop: '-2px',
                width: '1rem',
                height: '1rem',
                color: 'rgb(103, 58, 183)'
              }} />
            </Link>
            <Link underline="hover" color="rgb(18, 25, 38)" >
              Basic
            </Link>
            <Typography color="rgb(105, 117, 134)">Breadcrumbs</Typography>
          </Breadcrumbs>
        </Box>
      </Paper>
    </CardContent>
  </Card>
);

// Breadcrumb with title on the right
const BreadcrumbWithTitleRight = () => (
  <Card>
    <CardHeader title="Breadcrumb With Title on Right" titleTypographyProps={{ fontSize: '14px' }} />
    <Divider />
    <CardContent>
      <Paper sx={{ backgroundColor: "rgb(248, 250, 252)" }}>
        <Box p={2} display="flex" justifyContent="space-between" alignItems="center">
          <Breadcrumbs>
            <Link underline="hover" color="inherit" href="/">
              <Home sx={{
                marginRight: '0px',
                marginTop: '-2px',
                width: '1rem',
                height: '1rem',
                color: 'rgb(103, 58, 183)'
              }} />
            </Link>
            <Link underline="hover" color="rgb(18, 25, 38)" >
              Basic
            </Link>
            <Typography color="rgb(105, 117, 134)">Breadcrumbs</Typography>
          </Breadcrumbs>
          <Typography variant="h6" sx={{ marginLeft: '1rem' }}>Breadcrumbs</Typography>
        </Box>
      </Paper>
    </CardContent>
  </Card>
);

const BreadcrumbsPlayground = () => {
  return (
    <Paper sx={{p:3}}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <BasicBreadcrumb />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomSeparatorBreadcrumb />
        </Grid>
        <Grid item xs={12} md={6}>
          <BreadcrumbWithTitle />
        </Grid>
        <Grid item xs={12} md={6}>
          <BreadcrumbWithIcons />
        </Grid>
        <Grid item xs={12} md={6}>
          <BreadcrumbWithDashboardIcons />
        </Grid>
        <Grid item xs={12} md={6}>
          <CollapsedBreadcrumb />
        </Grid>
        <Grid item xs={12} md={6}>
          <NoCardWithDividerBreadcrumb />
        </Grid>
        <Grid item xs={12} md={6}>
          <NoCardNoDividerBreadcrumb />
        </Grid>
        <Grid item xs={12} md={6}>
          <BreadcrumbWithTitleLeft />
        </Grid>
        <Grid item xs={12} md={6}>
          <BreadcrumbWithTitleRight />
        </Grid>
        <Grid item xs={12} md={6}>
          <BreadcrumbWithTitleBottom />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default BreadcrumbsPlayground;
