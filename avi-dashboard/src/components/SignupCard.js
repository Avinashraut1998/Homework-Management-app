import React, { useState } from "react";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const SignupCard = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/users/signup", {
        username: name,
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
          Create an Account
        </Typography>
        <form onSubmit={handleForm}>
          <TextField
            fullWidth
            margin="normal"
            required
            id="name"
            label="Name"
            variant="outlined"
            autoComplete="name"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            fullWidth
            margin="normal"
            required
            id="email"
            label="Email Address"
            variant="outlined"
            autoComplete="email"
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
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: "20px" }}
          >
            Sign Up
          </Button>
        </form>

        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ marginTop: "10px" }}
        >
          Already have an account?{" "}
          <NavLink to="/" color="primary" style={{ textDecoration: "none" }}>
            Login
          </NavLink>
        </Typography>
      </Card>
    </Box>
  );
};

export default SignupCard;
