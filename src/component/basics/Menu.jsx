import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Menu() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="menu-container">
      <div className="menu-inner">
        {/* LOGO */}
        <Link to="/" className="menu-logo">
          <img src={logo} alt="logo" className="logo-img" />
        </Link>

        {/* Mobile menu icon */}
        <div className="menu-mobile">
          <button className="menu-toggle" onClick={() => setToggle(!toggle)}>
            ☰
          </button>

          {/* Mobile panel WITHOUT links */}
          {toggle && (
            <div className="menu-mobile-panel">
              <button className="menu-close" onClick={() => setToggle(false)}>
                ✕
              </button>

              {/* Ici tu peux ajouter autre chose si tu veux */}
              <div className="menu-mobile-empty">
                {/* Rien pour l’instant */}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
