import { Link } from "react-router-dom";
import "../../styles/Menu.css";

export default function Menu() {
  return (
    <nav className="menu">
      {/* Liens principaux */}
      <ul className="menu-main">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        {/* Sous-menu métier */}
        <li className="menu-metier">
          <span>Métier</span>

          <ul className="submenu">
            <li>
              <Link to="/dev">Développement</Link>
            </li>
            <li>
              <Link to="/tests">Tests</Link>
            </li>
            <li>
              <Link to="/projet">Gestion de Projet</Link>
            </li>
            <li>
              <Link to="/cyber">Cybersécurité</Link>
            </li>
            <li>
              <Link to="/adm">Administration</Link>
            </li>
            <li>
              <Link to="/cons">Conseil Client</Link>
            </li>
            <li>
              <Link to="/div">Méthodes</Link>
            </li>
            <li>
              <Link to="/uix">Conception</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/cv">CV</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
      </ul>
    </nav>
  );
}
