import React from 'react';
import { Tabs, Tab, Box, Typography, Card, CardContent, CardHeader, Divider, Grid } from '@mui/material';
import { Person, People, Photo, PhotoLibrary } from '@mui/icons-material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const BasicTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card>
      <CardHeader title="Basic Tabs" titleTypographyProps={{ fontSize: '14px' }} />
      <Divider />
      <CardContent>
        <Box sx={{ width: '100%' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Profile" />
            <Tab label="Followers" />
            <Tab label="Friends" />
            <Tab label="Gallery" />
          </Tabs>
          <TabPanel value={value} index={0}>
            Profile Content
          </TabPanel>
          <TabPanel value={value} index={1}>
            Followers Content
          </TabPanel>
          <TabPanel value={value} index={2}>
            Friends Content
          </TabPanel>
          <TabPanel value={value} index={3}>
            Gallery Content
          </TabPanel>
        </Box>
      </CardContent>
    </Card>
  );
};

const ColorTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card>
      <CardHeader title="Color Tabs" titleTypographyProps={{ fontSize: '14px' }} />
      <Divider />
      <CardContent>
        <Box sx={{ width: '100%' }}>
          <Tabs value={value} onChange={handleChange} aria-label="color tabs example">
            <Tab label="Profile" />
            <Tab label="Followers" />
            <Tab label="Friends" />
            <Tab label="Gallery" />
          </Tabs>
          <TabPanel value={value} index={0}>
            Profile Content
          </TabPanel>
          <TabPanel value={value} index={1}>
            Followers Content
          </TabPanel>
          <TabPanel value={value} index={2}>
            Friends Content
          </TabPanel>
          <TabPanel value={value} index={3}>
            Gallery Content
          </TabPanel>
        </Box>
      </CardContent>
    </Card>
  );
};

const IconTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card>
      <CardHeader title="Icon Tabs" titleTypographyProps={{ fontSize: '14px' }} />
      <Divider />
      <CardContent>
        <Box sx={{ width: '100%' }}>
          <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
            <Tab icon={<Person />} label="Profile" />
            <Tab icon={<People />} label="Followers" />
            <Tab icon={<Photo />} label="Friends" />
            <Tab icon={<PhotoLibrary />} label="Gallery" />
          </Tabs>
          <TabPanel value={value} index={0}>
            Profile Content
          </TabPanel>
          <TabPanel value={value} index={1}>
            Followers Content
          </TabPanel>
          <TabPanel value={value} index={2}>
            Friends Content
          </TabPanel>
          <TabPanel value={value} index={3}>
            Gallery Content
          </TabPanel>
        </Box>
      </CardContent>
    </Card>
  );
};

const DisabledTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card>
      <CardHeader title="Disabled Tabs" titleTypographyProps={{ fontSize: '14px' }} />
      <Divider />
      <CardContent>
        <Box sx={{ width: '100%' }}>
          <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
            <Tab label="Profile" />
            <Tab label="Followers" disabled />
            <Tab label="Friends" />
            <Tab label="Gallery" disabled />
          </Tabs>
          <TabPanel value={value} index={0}>
            Profile Content
          </TabPanel>
          <TabPanel value={value} index={2}>
            Friends Content
          </TabPanel>
        </Box>
      </CardContent>
    </Card>
  );
};

const VerticalTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card>
      <CardHeader title="Vertical Tabs" titleTypographyProps={{ fontSize: '14px' }} />
      <Divider />
      <CardContent>
        <Box sx={{ flexGrow: 1, display: 'flex' }}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: 'divider' }}
          >
            <Tab label="User Profile" />
            <Tab label="Billing" />
            <Tab label="Payment" />
            <Tab label="Change Password" />
          </Tabs>
          <TabPanel value={value} index={0}>
            User Profile Content
          </TabPanel>
          <TabPanel value={value} index={1}>
            Billing Content
          </TabPanel>
          <TabPanel value={value} index={2}>
            Payment Content
          </TabPanel>
          <TabPanel value={value} index={3}>
            Change Password Content
          </TabPanel>
        </Box>
      </CardContent>
    </Card>
  );
};

const TabsPlayground = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <BasicTabs />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ColorTabs />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <IconTabs />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <DisabledTabs />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <VerticalTabs />
      </Grid>
    </Grid>
  );
};

export default TabsPlayground;
