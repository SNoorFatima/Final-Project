import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar";

import Navbar from "./components/nabvar";

import { Box } from "@mui/material";
import './App.css';

import { SidebarContextProvider } from "./SidebarContext";
import Dashboard from "./components/Dasboard/Dashboard";
import Analytics from "./components/Analytics/Analytics";

const App = () => {

  const [sideBarOpen, setSideBarOpen] = useState(true);

  const toggleSidebar = () => {
    console.log("yes")
    setSideBarOpen(prevState => !prevState);
  };

  return (
    <SidebarContextProvider>
      <Router>
        <Box >
          <Navbar toggleSidebarCall={toggleSidebar} />
          <Box>
            <Sidebar />
            <div style={{ marginLeft: !sideBarOpen ? "0px" : "270px", transition: "margin-left 0.3s", flexGrow: 1, padding: '16px', marginTop: '100px' }}>
              <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/Analytics" element={<Analytics />} />
              </Routes>
            </div>
          </Box>
        </Box>
      </Router>
    </SidebarContextProvider>
  );
};

export default App;