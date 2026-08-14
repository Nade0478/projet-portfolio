import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Menu.css";

export default function Menu() {
  return (
    <nav className="menu">
      <ul className="menu-main">
        <li>
          <Link to="/">Accueil</Link>
        </li>

        <li className="menu-metier">
          <span>Métier</span>

          <ul className="submenu">
            <li>
              <Link to="/dev">Développement Web</Link>
            </li>
            <li>
              <Link to="/test">Test Logiciel</Link>
            </li>
            <li>
              <Link to="/cyber">Cybersécurité</Link>
            </li>
            <li>
              <Link to="/projet">Gestion de projet</Link>
            </li>
            <li>
              <Link to="/cons">Conseillère clientèle à distance</Link>
            </li>
            <li>
              <Link to="/adm">Secrétariat et administration</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

        <li>
          <Link to="/cv">CV</Link>
        </li>
      </ul>
    </nav>
  );
}
