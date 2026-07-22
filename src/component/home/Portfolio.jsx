import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import backgroundImage from "../../assets/fond-ecran-portfolio.png";

export default function Portfolio() {
  return (
    <div
      className="font-ecran"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="portfolio-container">
        <img
          src="/photoPourLinkdin.jpg"
          alt="Nadège Gautier"
          className="portfolio-photo"
        />

        <h1 className="portfolio-name">Nadège Gautier</h1>

        <h2 className="portfolio-job">
          Développeuse Web • Testeuse Logicielle • Future Cheffe de Projet
        </h2>

        <p className="portfolio-presentation">
          Passionnée par le développement web, les tests logiciels et la gestion
          de projet, j’accompagne les entreprises dans la création de solutions
          fiables, modernes et sécurisées.
        </p>

        <div className="portfolio-grid">
          <Link to="/dev" className="portfolio-card1">
            <h3>Développement Web</h3>
            <p>React, Laravel, API, Front et Back</p>
          </Link>

          <Link to="/tests" className="portfolio-card3">
            <h3>Testeur ISTQB</h3>
            <p>Tests fonctionnelles et automatisations</p>
          </Link>

          <Link to="/projet" className="portfolio-card4">
            <h3>Gestion de Projet</h3>
            <p>Organisation, planification, pilotage</p>
          </Link>

          <Link to="/cyber" className="portfolio-card5">
            <h3>Cybersécurité</h3>
            <p>Analyse, prévention, bonnes pratiques</p>
          </Link>

          <Link to="/adm" className="portfolio-card6">
            <h3>Assistante Administrative</h3>
            <p>
              Pack Office, Gestion d'agenda, Standard, traitement de dossier
              administratif
            </p>
          </Link>

          <Link to="/cons" className="portfolio-card7">
            <h3>Conseillère clientèle à distance</h3>
            <p>Gestion de demande client, prise de rendez-vous , SAV</p>
          </Link>

          <Link to="/div" className="portfolio-card2">
            <h3>Méthode et Language</h3>
            <p>Agile, Scrum, Leen</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
