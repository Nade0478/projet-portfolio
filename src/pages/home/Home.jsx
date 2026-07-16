import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export default function Portfolio() {
  return (
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
        fiables, modernes et sécurisées. En reconversion professionnelle, je
        combine rigueur, créativité et sens de l’organisation pour mener à bien
        chaque mission.
      </p>

      <div className="portfolio-grid">
        <Link to="/dev" className="portfolio-card">
          <h3>Développement Web</h3>
          <p>React, Laravel, API, Front & Back</p>
        </Link>

        <Link to="/tests" className="portfolio-card">
          <h3>Tests Logiciels</h3>
          <p>ISTQB, QA, automatisation</p>
        </Link>

        <Link to="/projet" className="portfolio-card">
          <h3>Gestion de Projet</h3>
          <p>Organisation, planification, pilotage</p>
        </Link>

        <Link to="/cyber" className="portfolio-card">
          <h3>Cybersécurité</h3>
          <p>Analyse, prévention, bonnes pratiques</p>
        </Link>
      </div>
    </div>
  );
}
