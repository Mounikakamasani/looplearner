import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:7000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "Login failed");
      return;
    }

    // ✅ Save user info locally
localStorage.setItem("user", JSON.stringify(data.user));
localStorage.setItem("userId", data.user._id); // ✅ Save just the user ID for progress tracking
onLogin(data.user);


    // Redirect after login
    const redirectPath = sessionStorage.getItem("redirectAfterLogin") || "/home";
    sessionStorage.removeItem("redirectAfterLogin");

    setTimeout(() => {
      navigate(redirectPath);
    }, 100);
  } catch (error) {
    console.error("Login error:", error);
    alert("Something went wrong. Please try again.");
  }
};

  return (
    <div
      className="d-flex align-items-center justify-content-center min-vh-100"
      style={{ backgroundColor: "#E3F2FD" }}
    >
      <div className="text-center" style={{ maxWidth: "600px", width: "100%" }}>
        {/* Welcome Message */}
        <div className="mb-4">
          <h2 className="fw-bold text-dark">Welcome Coders Coders 👋</h2>
          <p className="lead text-secondary">
            If you are a Computer Science student searching for the right guidance, you’re in the right place.
            <br />
            <strong className="text-dark">
              Please login to begin your journey. Let's learn and grow together!
            </strong>
          </p>
        </div>

        {/* Login Card */}
        <div
          className="card shadow p-4 mx-auto"
          style={{
            backgroundColor: "#6a1b9a",
            color: "#fff",
            maxWidth: "400px",
            width: "100%",
            borderRadius: "10px",
          }}
        >
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
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
              Login
            </button>

            <p className="mt-3 text-center text-light">
              Don't have an account?{" "}
              <Link to="/signup" className="fw-bold text-warning text-decoration-none">
                Sign up here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
