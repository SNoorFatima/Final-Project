import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Box,
  Typography,
  Paper,
  Grid,
  Avatar,
  ListItemAvatar,
  Card,
  CardContent,
  CardHeader,
  Stack,
  ListItemButton
} from '@mui/material';
import { Inbox, Drafts, Photo, Work } from '@mui/icons-material';
import TotalRevenue from '../../Analytics/TotalRevenue';

const ListPlayground = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Paper sx={{ padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        List Playground
      </Typography>
      <Divider sx={{ mb: 2 }} />

      <Grid container spacing={3}>
        {/* Basic List */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader title="Basic" titleTypographyProps={{ fontSize: '14px' }} />
            <Divider />
            <CardContent>
              <List>
                <ListItem button>
                  <ListItemText primary="Sample Page" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Elements" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Page Layouts" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Nested List */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader title="Nested List" titleTypographyProps={{ fontSize: '14px' }} />
            <Divider />
            <CardContent>
              <List component="nav">
                <ListItem button>
                  <ListItemIcon>
                    <Inbox />
                  </ListItemIcon>
                  <ListItemText primary="1st Level with Icon" />
                </ListItem>
                <List component="div" disablePadding>
                  <ListItem button sx={{ pl: 4 }}>
                    <ListItemText primary="Nested List" />
                  </ListItem>
                  <ListItem button sx={{ pl: 4 }}>
                    <ListItemText primary="Nested List" />
                  </ListItem>
                </List>
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Selected List Item */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader title="Selected List Item" titleTypographyProps={{ fontSize: '14px' }} />
            <Divider />
            <CardContent>
              <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <List component="nav" aria-label="main mailbox folders">
                  <ListItemButton
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                  >
                    <ListItemIcon>
                      <Inbox />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                  </ListItemButton>
                  <ListItemButton
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                  >
                    <ListItemIcon>
                      <Drafts />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                  </ListItemButton>
                </List>
                <Divider />
                <List component="nav" aria-label="secondary mailbox folder">
                  <ListItemButton
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                  >
                    <ListItemText primary="Trash" />
                  </ListItemButton>
                  <ListItemButton
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}
                  >
                    <ListItemText primary="Spam" />
                  </ListItemButton>
                </List>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Disabled List Item */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader title="Disabled List Item" titleTypographyProps={{ fontSize: '14px' }} />
            <Divider />
            <CardContent>
              <List>
                <ListItem button>
                  <ListItemText primary="Chart" />
                </ListItem>
                <ListItem button disabled>
                  <ListItemText primary="Disabled Menu" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Page Layouts/Auth Pages" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Folder List */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader title="Folder List" titleTypographyProps={{ fontSize: '14px' }} />
            <Divider />
            <CardContent>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Photo />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Work />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Work" secondary="Jan 7, 2014" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* Custom Aligned List */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader title="Custom Aligned List" titleTypographyProps={{ fontSize: '14px' }} />
            <Divider />
           
             <TotalRevenue/>
           
          </Card>
        </Grid>

        {/* Scrollable List */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardHeader title="Scrollable List" titleTypographyProps={{ fontSize: '14px' }} />
            <Divider />
            <CardContent>
              <List sx={{ maxHeight: 200, overflow: 'auto' }}>
                {Array.from({ length: 10 }).map((_, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={`Item ${index + 1}`} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ListPlayground;
