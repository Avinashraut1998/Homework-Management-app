import React from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useContext } from "react";
import { MyContext } from "../MyContext";
import AccountBox from "@mui/icons-material/AccountBox";
import { useNavigate } from "react-router-dom";

const Navbar = ({ drawerWidth }) => {
  const { user } = useContext(MyContext);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const navigate = useNavigate();
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.setItem("token", null);
    navigate("/");
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}`,
          backgroundColor: "#2196F3",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "flex-end",
            gap: 1,
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <span style={{ marginRight: "10px" }}>
              Welcome {user?.username}
            </span>

            <NotificationsIcon />
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountBox />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
