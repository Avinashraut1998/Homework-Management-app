import React from "react";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PersonIcon from "@mui/icons-material/Person";
import DashboardIcon from "@mui/icons-material/Dashboard";

const AsideBar = ({ drawerWidth }) => {
  let navigate = useNavigate();

  const listItems = [
    {
      name: "User Dashboard",
      icon: <DashboardIcon />,
      path: "/home/dashboard",
    },
    {
      name: "Profile",
      icon: <AccountBoxIcon />,
      path: "/home/profile",
    },
    {
      name: "Settings",
      icon: <PersonIcon />,
      path: "/home/settings",
    },
  ];

  return (
    <Drawer
      PaperProps={{
        sx: {
          color: "#fff",
          backgroundColor: "#F5F5F5",
        },
      }}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar style={{ backgroundColor: "#2196F3", color: "#fff" }}>
        <DashboardIcon style={{ marginRight: "8px" }} />
        <Typography variant="h6" noWrap>
          Dashboard
        </Typography>
      </Toolbar>
      <Divider />
      <List style={{ color: "#2196F3" }}>
        {listItems.map((item) => (
          <ListItem key={item?.name} disablePadding>
            <ListItemButton onClick={() => navigate(item?.path)}>
              <ListItemIcon>{item?.icon}</ListItemIcon>
              <ListItemText primary={item?.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default AsideBar;
