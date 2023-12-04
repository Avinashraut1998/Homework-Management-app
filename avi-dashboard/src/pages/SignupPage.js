import React from "react";
import SignupCard from "../components/SignupCard";

const SignupPage = () => {
  return (
    <div>
      <div
        style={{
          height: "100vh",
          background:
            "url('https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SignupCard />
      </div>
    </div>
  );
};

export default SignupPage;
