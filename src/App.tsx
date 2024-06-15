// src/App.tsx
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssBaseline, Box, ThemeProvider, Toolbar } from "@mui/material";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Users from "./pages/Users";
import { UserProvider } from "./context/UserContext";
import "./styles.css";
import theme from "./theme";

const drawerWidth = 240;

const App: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Router>
          <UserProvider>
            <Header toggleSidebar={handleDrawerToggle} />
            <Sidebar
              mobileOpen={mobileOpen}
              toggleSidebar={handleDrawerToggle}
              handledrawerClose={handleDrawerClose}
              handleDrawerTransitionEnd={handleDrawerTransitionEnd}
            />
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                margin:10,
              }}
            >
              <Toolbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
              </Routes>
            </Box>
          </UserProvider>
        </Router>
      </Box>
    </ThemeProvider>
  );
};

export default App;
