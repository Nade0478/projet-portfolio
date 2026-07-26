import React from "react";
import "../../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2023 Company Name. All rights reserved.</p>

      <ul className="footer-links">
        <li>
          <a href="#linkdin">Linkedin</a>
        </li>
        <li>
          <a href="#github">Github</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </footer>
  );
}
