require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const connectDB = require("./db/index.js");

const User = require("./model/user.model.js");
const { authenticateJwt } = require("./authenticate.js");

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

const SECRET = "S3CR3T";

app.post("/users/signup", async (req, res) => {
  // logic to sign up user
  const { username, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    res.status(403).json({ message: "User already exists" });
  } else {
    const newUser = new User({ username, email, password });
    await newUser.save();
    const token = jwt.sign(
      {
        user: {
          username: newUser.username,
          email: newUser.email,
        },
        role: "user",
      },
      SECRET,
      {
        expiresIn: "1h",
      }
    );
    
    res.json({ message: "User created successfully", token });
  }
});

app.post("/users/signin", async (req, res) => {
  // logic to log in user
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (user) {
    const token = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
        },
        role: "user",
      },
      SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.json({ message: "Logged in successfully", token });
  } else {
    res.status(403).json({ message: "Invalid email or password" });
  }
});

app.get("/users/me", authenticateJwt, async (req, res) => {
  res.json({
    user: req.user.user,
  });
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log("Server running on port : ", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log("MongoDB Connection failed !!  ", error);
  });

module.exports = app;
