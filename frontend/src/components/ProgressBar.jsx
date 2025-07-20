import React from "react";

const ProgressBar = ({ progress = 0 }) => {
  return (
    <div className="progress" style={{ height: "25px", backgroundColor: "#d0e2ff" }}>
      <div
        className="progress-bar bg-success"
        role="progressbar"
        style={{
          width: `${progress}%`,
          fontWeight: "bold",
          fontSize: "1rem",
          color: "#fff",
        }}
      >
        {progress.toFixed(0)}%
      </div>
    </div>
  );
};

export default ProgressBar;
