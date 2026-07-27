import React from "react";
import "../../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2023 Company Name. All rights reserved.</p>

      <ul className="footer-links">
        <li>
          <a
            href="https://www.linkedin.com/in/nadège-gautier-8b0b3b301"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </li>

        <li>
          <a
            href="https://github.com/Nade0478"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>

        <li>
          <a href="/contact">Contact</a>
          
        </li>
      </ul>
    </footer>
  );
}
