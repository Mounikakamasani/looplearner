import React, { useState, useEffect } from "react";
import { FaYoutube } from "react-icons/fa";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import ProgressBar from "./ProgressBar"; 
import "./JuniorModule.css";
function JuniorModule({ modules, setProgress}) {
  const [checked, setChecked] = useState({});
  const [selectedLanguage, setSelectedLanguage] = useState("Python");
  const [openModules, setOpenModules] = useState({});

  const toggleCheck = (key) => {
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleModuleOpen = (moduleIndex) => {
    setOpenModules((prev) => {
      if (prev[moduleIndex]) return {};
      return { [moduleIndex]: true };
    });
  };

  
  useEffect(() => {
    let total = 0;
    let done = 0;

    modules.forEach((mod, i) => {
      const topicsArray = Array.isArray(mod.topics)
        ? mod.topics
        : mod.topics?.[selectedLanguage] || [];

      topicsArray.forEach((t, j) => {
        if (mod.title === "Programming Fundamentals") {
          const topicKey = `topic-${i}-${selectedLanguage}-${j}`;
          total += 1;
          if (checked[topicKey]) done += 1;
        }

        t.problems?.forEach((_, k) => {
          const probKey = `${i}-${selectedLanguage}-${j}-${k}`;
          total += 1;
          if (checked[probKey]) done += 1;
        });
      });
    });

    const percent = total > 0 ? (done / total) * 100 : 0;
    if (setProgress) setProgress(percent);
  }, [checked, modules, selectedLanguage, setProgress]);
  

  const typeIcons = {
    YouTube: "YouTube",
    Practice: "Practice",
    Docs: "Docs",
  };

  return (
    <div className="container py-5" style={{ backgroundColor: "blue", minHeight: "100vh" }}>
      <div className="row justify-content-center g-4">
        

        {modules.map((module, moduleIndex) => {
          const groupedResources = module.resources?.reduce((acc, res) => {
            acc[res.type] = acc[res.type] || [];
            acc[res.type].push(res);
            return acc;
          }, {}) || {};

          const topicsArray = Array.isArray(module.topics)
            ? module.topics
            : module.topics?.[selectedLanguage] || [];

          const isOpen = openModules[moduleIndex];

          return (
            <div key={moduleIndex} className="col-12">
              <div
                className="card custom-card shadow-sm p-4"
                style={{
                  backgroundColor: "#E3F2FD",
                  borderColor: "#E1BEE7",
                  fontSize: "1.7rem",
                  color: "#37474F",
                  maxWidth: "1000px",
                  margin: "0 auto",
                }}
              >
                <div
                  className="card-header fw-bold d-flex justify-content-between align-items-center"
                  onClick={() => toggleModuleOpen(moduleIndex)}
                  style={{
                    cursor: "pointer",
                    fontSize: "1.5rem",
                    color: "#5E35B1",
                    borderBottom: "1px solid #E1BEE7",
                    backgroundColor: "transparent",
                  }}
                >
                  {module.title}
                  <span>{isOpen ? <FiChevronDown size={22} /> : <FiChevronRight size={22} />}</span>
                </div>

                {isOpen && (
                  <div className="card-body mt-3">
                    {module.languageOptions && (
                      <div className="mb-3">
                        <label className="form-label" style={{ color: "#37474F" }}>
                          Choose Language:
                        </label>
                        <select
                          className="form-select mt-1"
                          value={selectedLanguage}
                          onChange={(e) => setSelectedLanguage(e.target.value)}
                          style={{
                            backgroundColor: "#FFF3E0",
                            color: "#37474F",
                            borderColor: "#FFB74D",
                          }}
                        >
                          {module.languageOptions.map((lang) => (
                            <option key={lang} value={lang}>
                              {lang}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}

                    <p className="fw-bold" style={{ color: "#FFB74D" }}>Topics:</p>
                    <ul className="list-unstyled">
                      {topicsArray.map((topic, topicIndex) => {
                        const baseKey = `${moduleIndex}-${selectedLanguage}-${topicIndex}`;
                        const topicCheckboxKey = `topic-${baseKey}`;
                        const problems = topic.problems || [];

                        return (
                          <li key={topicIndex} className="mb-2">
                            {module.title === "Programming Fundamentals" ? (
                              <div className="form-check mb-1 ms-2">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id={topicCheckboxKey}
                                  checked={checked[topicCheckboxKey] || false}
                                  onChange={() => toggleCheck(topicCheckboxKey)}
                                />
                                <label
                                  className="form-check-label ms-2"
                                  htmlFor={topicCheckboxKey}
                                  style={{ fontWeight: "500" }}
                                >
                                  {topic.name}
                                </label>
                              </div>
                            ) : (
                              <div className="ms-2 mb-2" style={{ fontWeight: "500" }}>
                                {topic.name}
                              </div>
                            )}

                            {problems.length > 0 && (
                              <ul className="ps-4 mt-1">
                                {problems.map((prob, i) => {
                                  const probKey = `${baseKey}-${i}`;
                                  return (
                                    <li key={i} className="d-flex align-items-center gap-2 mb-1">
                                      <input
                                        type="checkbox"
                                        className="form-check-input"
                                        checked={checked[probKey] || false}
                                        style={{ accentColor: "#81C784" }}
                                        onChange={() => toggleCheck(probKey)}
                                      />
                                      <a
                                        href={prob.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                          color: "#039BE5",
                                          fontWeight: "500",
                                          textDecoration: "none",
                                        }}
                                      >
                                        🔗 {prob.label}
                                      </a>
                                      {prob.difficulty && (
                                        <span style={{ color: "#757575" }}>({prob.difficulty})</span>
                                      )}
                                    </li>
                                  );
                                })}
                              </ul>
                            )}
                          </li>
                        );
                      })}
                    </ul>

                    {module.resources && (
                      <>
                        <p className="fw-bold mt-3" style={{ color: "#FFB74D" }}>Resources:</p>
                        {Object.entries(groupedResources).map(([type, items]) => (
                          <div key={type} className="mt-2">
                            <div className="fw-bold d-flex align-items-center" style={{ color: "#8E24AA" }}>
                              {type === "YouTube" && <FaYoutube className="me-2 text-danger" />}
                              {typeIcons[type] || type}
                            </div>
                            <ul className="list-unstyled ps-3 mt-1">
                              {items.map((res, i) => (
                                <li key={i} className="d-flex align-items-center gap-2 mb-1">
                                  {type === "YouTube" ? (
                                    <FaYoutube className="text-danger" />
                                  ) : (
                                    <span style={{ color: "#999" }}>•</span>
                                  )}
                                  <a
                                    href={res.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                      color: "#37474F",
                                      fontWeight: "500",
                                      textDecoration: "none",
                                    }}
                                  >
                                    {res.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </>
                    )}

                    {module.projects && (
                      <>
                        <p className="fw-bold mt-4" style={{ color: "#FFB74D" }}>Projects:</p>
                        <ul className="ps-3 mt-1">
                          {module.projects.map((proj, i) => (
                            <li key={i} className="mb-1" style={{ color: "#37474F", fontWeight: "500" }}>
                              {proj}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* 💡 Daily Practice Tip at the bottom */}
        <div className="col-12 col-md-10 col-lg-8 mt-5">
          <div className="alert alert-info text-center" style={{ fontSize: "1rem" }}>
            💡 <strong>Tip:</strong> Try solving one coding problem daily on
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
            based on the topics you've covered today
          </div>
        </div>
      </div>
    </div>
  );
}

export default JuniorModule;
