import React, { useState } from "react";
import { useParams } from "react-router-dom";
import juniorModules from "../data/juniorModules";
import JuniorModule from "../components/JuniorModule";
import SeniorModule from "../components/SeniorModule";
import seniorModules from "../data/seniorModules";
import ProgressBar from "../components/ProgressBar"; // new import

function LearningPath() {
  const { role } = useParams();
  const [progress, setProgress] = useState(0); // percentage progress (0 - 100)

  return (
    <div
      className="container-fluid py-5"
      style={{
        backgroundColor: "#E3F2FD",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <div className="row justify-content-center text-center mb-4">
        <div className="col-12 col-md-10 col-lg-8">
          <h2 className="fw-bold" style={{ fontSize: "2.5rem", color: "black" }}>
            {role === "junior" ? "Junior Learner Path" : "Senior Learner Path"}
          </h2>
          <p className="mt-3" style={{ color: "#3F4E5E" }}>
            Explore your learning modules below!
            <br />
            <em className="text-muted" style={{ color: "blue" }}>
              Doing something is better than doing nothing
            </em>
            <br />
            <strong style={{ color: "#009688" }}>Start this from today onwards!!</strong>
          </p>

          {/* 🟢 Progress bar here */}
          <div className="my-4">
            <ProgressBar progress={progress} />
          </div>
        </div>
      </div>

      {role === "junior" && <JuniorModule modules={juniorModules} setProgress={setProgress} />}
      {role === "senior" && <SeniorModule modules={seniorModules} setProgress={setProgress} />}
    </div>
  );
}

export default LearningPath;
