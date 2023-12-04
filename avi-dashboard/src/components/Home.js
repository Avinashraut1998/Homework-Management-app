import React, { useContext, useEffect } from "react";
import Navbar from "./Navbar";
import { Box, CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import AsideBar from "./AsideBar";
import axios from "axios";
import { MyContext } from "../MyContext";

const Home = () => {
  const { setUser } = useContext(MyContext);

  let drawerWidth = 240;

  const init = async () => {
    try {
      const response = await axios.get("http://localhost:8000/users/me", {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      const userData = response.data;
      setUser(userData.user);
    } catch (error) {
      console.log("error ", error);
    }
  };
  useEffect(() => {
    init();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbar drawerWidth={drawerWidth} />
        <AsideBar drawerWidth={drawerWidth} />
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3, mt: 6 }}
        >
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default Home;
