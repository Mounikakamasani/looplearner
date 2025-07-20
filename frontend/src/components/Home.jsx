import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const navigate = useNavigate();

  // ✅ Handles redirection based on login status
  const goToPath = (role) => {
    const isLoggedIn = localStorage.getItem("user");

    if (!isLoggedIn) {
      sessionStorage.setItem("redirectAfterLogin", `/learning-path/${role}`);
      navigate("/login");
    } else {
      navigate(`/learning-path/${role}`);
    }
  };

  return (
    <div
      className="container-fluid d-flex flex-column justify-content-center align-items-center min-vh-100 text-center"
      style={{ backgroundColor: "#E3F2FD" }}
    >
      <div className="mb-4">
        <h1 className="display-4 text-dark mb-2">Hello coders coders 👋</h1>
        <h2 className="text-secondary mb-4">
          Don’t demotivate. I am here to guide you. Keep going consistently.
          <br />
          <strong className="text-dark">Choose Your Learning Path</strong>
        </h2>
      </div>

      <div className="row w-100 justify-content-center gap-3">
        <div
          className="col-10 col-md-4 p-4 rounded shadow custom-card"
          onClick={() => goToPath("junior")}
          style={{
            cursor: "pointer",
            background: "blue",
            color: "#fff",
            transition: "transform 0.3s, box-shadow 0.3s",
          }}
        >
          <h3 className="fw-bold">Junior Learner</h3>
          <p>For 1st & 2nd year CSE students</p>
        </div>

        <div
          className="col-10 col-md-4 p-4 rounded shadow custom-card"
          onClick={() => goToPath("senior")}
          style={{
            cursor: "pointer",
            background: "purple",
            color: "#fff",
            transition: "transform 0.3s, box-shadow 0.3s",
          }}
        >
          <h3 className="fw-bold">Senior Learner</h3>
          <p>For 3rd & 4th year CSE students</p>
        </div>
      </div>

      <style>{`
        .custom-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 16px rgba(0,0,0,0.15);
        }
      `}</style>
    </div>
  );
}

export default Home;
