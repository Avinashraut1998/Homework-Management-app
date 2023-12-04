import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { MyContext } from "./MyContext";
import { useState } from "react";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import SignupPage from "./pages/SignupPage";
import LandingPage from "./pages/LandingPage";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <MyContext.Provider value={{ user, setUser }}>
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/home" element={<Home />}>
              <Route index element={<Navigate to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="settings" element={<Settings />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
        </div>
      </MyContext.Provider>
    </>
  );
}

export default App;
