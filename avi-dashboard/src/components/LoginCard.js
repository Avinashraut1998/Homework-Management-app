import React, { useState } from "react";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/users/signin", {
        email: email,
        password: password,
      });
      const token = response.data.token;
      localStorage.setItem("token", token);
      navigate("/home");
    } catch (error) {
      console.log(error, "");
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Card
        sx={{
          width: "350px",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h4"
          color="primary"
          textAlign="center"
          marginBottom="20px"
        >
          Account Login
        </Typography>
        <form onSubmit={handleForm}>
          <TextField
            fullWidth
            margin="normal"
            required
            id="email"
            label="Email Address"
            variant="outlined"
            autoComplete="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            required
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: "20px" }}
          >
            Login
          </Button>
        </form>

        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ marginTop: "10px" }}
        >
          Don't have an account?{" "}
          <NavLink
            to="/signup"
            color="primary"
            style={{ textDecoration: "none" }}
          >
            Sign Up
          </NavLink>
        </Typography>
      </Card>
    </Box>
  );
};

export default LoginCard;
