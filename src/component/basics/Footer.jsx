import React from "react";
import { Link } from "react-router-dom"; 
import "../../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2026. All rights reserved.</p>

      <ul className="footer-links">
        {/* LinkedIn */}
        <li>
          <a
            href="https://www.linkedin.com/in/nadège-gautier-8b0b3b301"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* icône */}
            Linkedin
          </a>
        </li>

        {/* GitHub */}
        <li>
          <a
            href="https://github.com/Nade0478"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </li>

        {/* Figma */}
        <li>
          <a
            href="https://www.figma.com/design/GusJr7bqiMlMZOxqi1BFtH"
            target="_blank"
            rel="noopener noreferrer"
          >
            Figma
          </a>
        </li>

        {/* Contact */}
        <li>
          <p>Mme GAUTIER Nadège</p>
          <p>Tél. : 06.65.31.48.42</p>
          <p>Mail : nade04ge@gmail.com</p>

          {/* LIEN REACT ROUTER */}
          <Link to="/contact" className="footer-contact-link">
            Contact
          </Link>
        </li>
      </ul>
    </footer>
  );
}
