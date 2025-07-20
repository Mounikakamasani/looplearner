import React, { useState, useEffect } from "react";
import { FaYoutube } from "react-icons/fa";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import "./SeniorModule.css";

function SeniorModule({ modules, setProgress }) {
  const [open, setOpen] = useState({});
  const [checked, setChecked] = useState({});

  const toggle = (idx) => {
    setOpen((prevOpen) => (prevOpen[idx] ? {} : { [idx]: true }));
  };

  const toggleCheck = (key) => {
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Progress calculation: only count problem checkboxes
  useEffect(() => {
    let total = 0;
    let done = 0;

    modules.forEach((mod, i) => {
      mod.topics?.forEach((t, j) => {
        t.problems?.forEach((_, k) => {
          total += 1;
          if (checked[`${i}-${j}-${k}`]) done += 1;
        });
      });
    });

    const percent = total > 0 ? (done / total) * 100 : 0;
    if (setProgress) setProgress(percent);
  }, [checked, modules, setProgress]);

  return (
    <div className="container py-5" style={{ backgroundColor: "purple", minHeight: "100vh" }}>
      <div className="row justify-content-center g-4">
        {modules.map((mod, i) => (
          <div
            key={i}
            className="card shadow mb-4"
            style={{ maxWidth: "1140px", width: "100%", margin: "0 auto" }}
          >
            <div
              className="card-header d-flex justify-content-between align-items-center"
              style={{
                fontSize: "1.8rem",
                background: "#f1f8ff",
                cursor: "pointer",
                color: "purple",
                fontWeight: "bold",
              }}
              onClick={() => toggle(i)}
            >
              {mod.title}
              {open[i] ? <FiChevronDown /> : <FiChevronRight />}
            </div>

            {open[i] && (
              <div className="card-body bg-white">
                {/* Topics */}
                {mod.topics?.length > 0 && (
                  <ul className="list-unstyled">
                    {mod.topics.map((t, j) => {
                      const problems = t.problems || [];

                      return (
                        <li key={j} className="mb-3">
                          <div className="fw-semibold ms-2 mb-2" style={{ fontSize: "1.5rem", color: "#333" }}>
                             {t.name}
                          </div>

                          <ul className="ms-4">
                            {problems.map((p, k) => {
                              const probKey = `${i}-${j}-${k}`;
                              return (
                                <li
                                  key={k}
                                  className="d-flex align-items-center gap-2 mb-1"
                                  style={{ fontSize: "1rem" }}
                                >
                                  <input
                                    type="checkbox"
                                    className="form-check-input"
                                    checked={checked[probKey] || false}
                                    onChange={() => toggleCheck(probKey)}
                                  />
                                  {p.label && (
                                    <a
                                      href={p.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-primary fw-semibold text-decoration-none"
                                    >
                                      🔗 {p.label}
                                    </a>
                                  )}
                                  {p.youtube && (
                                    <a
                                      href={p.youtube}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-danger ms-2"
                                    >
                                      <FaYoutube className="me-1" />
                                      <span>Tutorial</span>
                                    </a>
                                  )}
                                </li>
                              );
                            })}
                          </ul>
                        </li>
                      );
                    })}
                  </ul>
                )}

                {/* Resources */}
                {mod.resources?.length > 0 && (
                  <div className="mt-4">
                    <h6 className="fw-bold text-warning" style={{ fontSize: "1.8rem" }}>
                      Resources:
                    </h6>
                    <ul className="list-unstyled ms-3">
                      {mod.resources.map((r, idx) => (
                        <li key={idx} className="mb-1" style={{ fontSize: "1.5rem" }}>
                          {r.type === "YouTube" && <FaYoutube className="text-danger me-1" />}
                          <a
                            href={r.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-dark text-decoration-none fw-semibold"
                          >
                            {r.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Projects */}
                {mod.projects?.length > 0 && (
                  <div className="mt-4">
                    <h6 className="fw-bold text-danger" style={{ fontSize: "1.8rem" }}>
                      Suggested Projects:
                    </h6>
                    <ul className="list-unstyled ms-3">
                      {mod.projects.map((p, idx) => (
                        <li key={idx} className="text-dark fw-medium" style={{ fontSize: "1rem" }}>
                           {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}

        {/* 💡 Motivational Tip */}
        <div className="col-12 col-md-10 col-lg-8">
          <div className="alert alert-info text-center mt-4" style={{ fontSize: "1rem" }}>
            💡 <strong>Tip:</strong> Try solving at least one coding problem daily on
            <a
              href="https://leetcode.com"
              className="mx-1 text-decoration-none fw-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              LeetCode
            </a>
            ,
            <a
              href="https://www.geeksforgeeks.org/"
              className="mx-1 text-decoration-none fw-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              GFG
            </a>
            , or
            <a
              href="https://www.codechef.com/"
              className="mx-1 text-decoration-none fw-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              CodeChef
            </a>{" "}
            based on what you've learned in today's module!
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeniorModule;
