import React, { useState } from 'react';
import {
  AppBar,
  Divider,
  Paper,
  Tab,
  Tabs,
  Toolbar,
  Menu,
  MenuItem,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Navigation = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [anchorEl, setAnchorEl] = useState(null);
  const [activeTab, setActiveTab] = useState('/');
  const location = useLocation(); // Get current route

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (path) => {
    setAnchorEl(null);
    setActiveTab(path);
  };

  const menuItems = [
    { label: 'Profile', to: '/navigation/ProfileStyle' },
    { label: 'Personal Details', to: '/navigation/Personaldetails' },
    { label: 'My Account', to: '/navigation/AccountSettings' },
    { label: 'Change Password', to: '/navigation/ChangePassword' },
    { label: 'Settings', to: '/navigation/SettingsPage' },
  ];

  // Update activeTab based on the current location
  React.useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Paper>
        <AppBar position="static" sx={{ backgroundColor: 'white' }}>
          <Toolbar>
            {isMobile ? (
              <>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenuOpen}
                >
                  <MenuIcon sx={{ color: "#121961" }} />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={() => handleMenuClose('/')}
                >
                  {menuItems.map((item) => (
                    <MenuItem
                      key={item.label}
                      component={Link}
                      to={item.to}
                      selected={activeTab === item.to} // Highlight active item
                      onClick={() => handleMenuClose(item.to)}
                    >
                      {item.label}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <Tabs
                value={activeTab}
                textColor="inherit"
                onChange={(event, newValue) => setActiveTab(newValue)}
              >
                {menuItems.map((item) => (
                  <Tab
                    key={item.label}
                    label={item.label}
                    component={Link}
                    to={item.to}
                    value={item.to}
                    sx={{ color: 'rgb(18, 25, 38)' }}
                  />
                ))}
              </Tabs>
            )}
          </Toolbar>
        </AppBar>
      </Paper>
      <Divider />
    </>
  );
};

export default Navigation;
