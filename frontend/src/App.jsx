import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LearningPath from "./pages/LearningPath";
import ProtectedRoute from "./components/ProtectedRoute";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <>
      <Header user={user} setUser={setUser} />
      <Routes>
        {/* 👇 Login will open first */}
        <Route path="/" element={<Login onLogin={setUser} />} />

        <Route path="/signup" element={<Signup />} />
        
        {/* Optional: Move Home to /home if needed */}
        <Route path="/home" element={<Home />} />

        <Route
          path="/learning-path/:role"
          element={
            <ProtectedRoute user={user}>
              <LearningPath />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
