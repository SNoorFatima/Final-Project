// src/components/ProfileSidebar.js
import React from "react";
import {
  Box,
  Typography,
  TextField,
  Card,
  Button,
  Switch,
  Divider,
  IconButton,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Badge,
} from "@mui/material";
import {
  Settings as SettingsIcon,
  Logout as LogoutIcon,
  AccountBox as AccountBoxIcon,
  Notifications as NotificationsIcon,
  Close,
} from "@mui/icons-material";

const ProfileSidebar = ({ onClose }) => {
  return (
    <Box
      sx={{
        width: 300,
        padding: 2,
        backgroundColor: "white",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        // height: "100vh",
        position: "fixed",
        top: 0,
        right: 0,
        zIndex: 1200,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
        <Avatar
          src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          sx={{ width: 56, height: 56, marginRight: 2 }}
        />
        <Box>
          <Typography variant="h6">Good Morning, JWT User</Typography>
          <Typography variant="body2">Project Admin</Typography>
        </Box>
      </Box>

      <TextField
        fullWidth
        variant="outlined"
        size="small"
        placeholder="Search profile options"
        InputProps={{
          startAdornment: <SettingsIcon sx={{ marginRight: 1 }} />,
        }}
        sx={{ marginBottom: 2 }}
      />

      <Card
        sx={{
          backgroundColor: "#FFF5E5",
          padding: 2,
          borderRadius: 2,
          marginBottom: 2,
        }}
      >
        <Typography variant="subtitle1">Upgrade your plan</Typography>
        <Typography variant="body2">
          70% discount for 1 year's subscriptions.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: 1 }}
        >
          Go Premium
        </Button>
      </Card>

      <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
        <Typography variant="body2">Start DND Mode</Typography>
        <Switch defaultChecked />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: 2 }}>
        <Typography variant="body2">Allow Notifications</Typography>
        <Switch />
      </Box>

      <Divider sx={{ marginY: 2 }} />

      <List>
        <ListItem button>
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText primary="Account settings" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <Badge badgeContent={2} color="secondary">
              <NotificationsIcon />
            </Badge>
          </ListItemIcon>
          <ListItemText primary="Social Profile" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>

      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
        }}
      >
        <Close />
      </IconButton>
    </Box>
  );
};

export default ProfileSidebar;
