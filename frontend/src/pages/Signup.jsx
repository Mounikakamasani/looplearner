import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:7000/api/auth/signup", {

      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "Signup failed. Try again.");
      return;
    }

    alert("Signup successful! Redirecting to login...");
    navigate("/"); // Redirect to login
  } catch (error) {
    console.error("Signup error:", error);
    alert("Something went wrong. Please try again later.");
  }
};

  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center min-vh-100"
      style={{ backgroundColor: "#E3F2FD" }}
    >
      {/* Welcome Message */}
      <div className="text-center mb-4" style={{ maxWidth: "600px" }}>
        <h2 className="fw-bold text-dark">Welcome Coders Coders </h2>
        <p className="lead text-secondary">
          Please sign up here to <strong className="text-dark">learn and grow</strong> with our platform.
        </p>
      </div>

      {/* Signup Card */}
      <div
        className="card shadow p-4 text-white"
        style={{
          backgroundColor: "#6a1b9a",
          maxWidth: "400px",
          width: "100%",
          borderRadius: "10px",
        }}
      >
        <h3 className="text-center mb-4">Sign Up</h3>
        <form onSubmit={handleSignup}>
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input
              type="text"
              className="form-control"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ border: "1px solid #fff" }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ border: "1px solid #fff" }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input
              type="password"
              className="form-control"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ border: "1px solid #fff" }}
            />
          </div>
          <button type="submit" className="btn btn-light w-100 fw-bold">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
