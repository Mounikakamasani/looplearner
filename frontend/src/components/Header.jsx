import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

function Header() {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 30px",
        backgroundColor: "white",
        borderBottom: "1px solid #E0E0E0",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        width: "1700px",
        boxSizing: "border-box",
      }}
    >
     
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
       
        <span
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "#2C3E50",
            whiteSpace: "nowrap",
          }}
        >
           <img
          src={logo}
          alt="LoopLearner Logo"
          style={{ width: "50px", height: "48px", objectFit: "contain", borderRadius: "8px" }}
        />
          LoopLearner
        </span>
      </div>

      
      
    </header>
  );
}

export default Header;
