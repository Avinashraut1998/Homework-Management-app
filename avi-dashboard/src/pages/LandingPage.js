import React from "react";
import LoginCard from "../components/LoginCard";

const LandingPage = () => {
  return (
    <div
      style={{
        height: "100vh",
        background:
          "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoginCard />
    </div>
  );
};

export default LandingPage;
