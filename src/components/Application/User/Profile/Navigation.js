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
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Navigation = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { label: 'Profile', to: '/Profilestyle' },
    { label: 'Personal Details', to: '/Personaldetails' },
    { label: 'My Account', to: '/AccountSettings' },
    { label: 'Change Password', to: '/ChangePassword' },
    { label: 'Settings', to: '/SettingsPage' },
  ];

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
                  <MenuIcon  sx={{color:"#121961"}}/>
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  {menuItems.map((item) => (
                    <MenuItem
                      key={item.label}
                      component={Link}
                      to={item.to}
                      onClick={handleMenuClose}
                    >
                      {item.label}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <Tabs value={false} textColor="inherit">
                {menuItems.map((item) => (
                  <Tab
                    key={item.label}
                    label={item.label}
                    component={Link}
                    to={item.to}
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
