import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Menu() {
  return (
    <nav className="menu-container">
      <div className="menu-inner">
        <Link to="/" className="menu-logo">
          <img src={logo} alt="logo" className="logo-img" />
        </Link>
      </div>
    </nav>
  );
}
