
import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Hidden,
  Toolbar,
  Divider,
  Box,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";

import ListItemLink from "./ListItemLink";

import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';

import { Link, NavLink } from "react-router-dom";

const drawerWidth = 240;

interface SidebarProps {
  mobileOpen: boolean;
  toggleSidebar: () => void;
  handledrawerClose: () => void;
  handleDrawerTransitionEnd: () => void;
}



const Sidebar: React.FC<SidebarProps> = ({
  mobileOpen,
  toggleSidebar,
  handledrawerClose,
  handleDrawerTransitionEnd,
}) => {
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
      <ListItemLink
          to="/"
          primary="Home"
          icon={<HomeIcon />}
        />
       <ListItemLink
          to="/users"
          primary="Users"
          icon={<PersonIcon />}
    
        />
      </List>
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handledrawerClose}
        onTransitionEnd={handleDrawerTransitionEnd}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
