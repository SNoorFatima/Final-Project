import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import CloseIcon from '@mui/icons-material/Close';
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import { styled } from "@mui/material/styles";
import { Avatar, useMediaQuery, useTheme } from "@mui/material";
import { useSidebar } from "../SidebarContext";
import ProfileSidebar from "./Profile";
import logo from "../logo.png";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useThemeContext } from './ThemeContext'; 
import { margin } from "@mui/system";

const Navbar = ({ toggleSidebarCall }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [profileSidebarOpen, setProfileSidebarOpen] = useState(false);
  const { toggleSidebar } = useSidebar();
  const theme = useTheme();
  const isMediumOrSmaller = useMediaQuery(theme.breakpoints.down("md"));
  const { mode, toggleTheme } = useThemeContext();

  const Search = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    position: "relative",
    height: "2.5rem",
    color: "#364152",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#f8fafc",
    "&:hover": {
      border: "1.5px solid black",
    },
    "&:active": {
      border: "2px solid blue",
    },
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      width: "22rem",
    },
  }));

  const toggleSideBarHelper = () => {
    toggleSidebarCall();
    toggleSidebar();
  }

  const iconStyles = {
    backgroundColor: "#ede7f6",
    color: "#5e35b1",
    borderRadius: "25%",
    "&:hover": {
      backgroundColor: "#5e35b1",
      color: "#ede7f6",
    },
    height: "34px",
    width: "34px",
    margin:'10px'
  };

  const handleSearchOpen = () => {
    setSearchOpen(true);
  };

  const handleSearchClose = () => {
    setSearchOpen(false);
  };

  const handleProfileSidebarOpen = () => {
    setProfileSidebarOpen(true);
  };

  const handleProfileSidebarClose = () => {
    setProfileSidebarOpen(false);
  };

  return (
    <>
      {!searchOpen ? (
        <AppBar
          position="fixed"
          top='0'
          sx={{ backgroundColor: "white", color: "black", boxShadow: "none", zIndex: "2" }}
        >
          <Toolbar
            sx={{
              paddingTop: "1rem",
              paddingBottom: "1rem",
            }}
          >
            {!isMediumOrSmaller && (
              <Box sx={{ display: "flex", alignItems: "center", width: "200px" }}>
                <img
                  src={logo}
                  alt="Berry Logo"
                  style={{ width: 30, height: 30, marginRight: 10 }}
                />
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ color: "black", fontWeight: "bold" }}
                >
                  BERRY
                </Typography>
              </Box>
            )}

            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={iconStyles}
              onClick={toggleSideBarHelper}
            >
              <MenuIcon />
            </IconButton>
            {!isMediumOrSmaller && (
              <Search>
                <IconButton color="inherit">
                  <SearchIcon />
                </IconButton>
                <StyledInputBase placeholder="Search" />
                <IconButton color="inherit" sx={iconStyles}>
                  <TuneIcon />
                </IconButton>
              </Search>
            )}
            {isMediumOrSmaller && (
              <IconButton color="inherit" onClick={handleSearchOpen} sx={iconStyles}>
                <SearchIcon />
              </IconButton>
            )}
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton color="inherit" sx={iconStyles}>
                <Badge badgeContent={4} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                color="inherit"
                sx={iconStyles}
                onClick={toggleTheme} 
              >
                {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
              </IconButton>
              <Box
                sx={{
                  height: "48px",
                  width: "90px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#e8eaf6",
                  borderRadius: "27px",
                  padding: "0 5px",
                  ml: 2,
                  color: "#2196f3",
                  "&:hover": {
                    borderColor: "#2196f3",
                    color: "#e3f2fd",
                    backgroundColor: "#2196f3",
                  },
                }}
              >
                <Avatar
                  sx={{ height: 30, width: 30 }}
                  alt="Remy Sharp"
                  src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                />
                <IconButton color="inherit" onClick={handleProfileSidebarOpen}>
                  <SettingsIcon />
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      ) : (
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: "white",
            color: "black",
            boxShadow: "none",
            top: 0,
            left: 0,
            right: 0,
            zIndex: theme.zIndex.drawer + 1,
          }}
        >
          <Toolbar
            sx={{
              borderBottom: "1px solid #e0e0e0",
              paddingTop: "1rem",
              paddingBottom: "1rem",
            }}
          >
            <Search>
              <IconButton color="inherit">
                <SearchIcon />
              </IconButton>
              <StyledInputBase placeholder="Search" />
              <IconButton color="inherit" sx={iconStyles}>
                <TuneIcon />
              </IconButton>
              <IconButton color="inherit" onClick={handleSearchClose} sx={iconStyles}>
                <CloseIcon />
              </IconButton>
            </Search>
          </Toolbar>
        </AppBar>
      )}
      {profileSidebarOpen && <ProfileSidebar onClose={handleProfileSidebarClose} />}
    </>
  );
};

export default Navbar;
