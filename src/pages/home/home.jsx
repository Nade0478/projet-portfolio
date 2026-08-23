import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Home.css";
import Presentation from "../../component/home/Presentation";

export default function home() {
  return (
    <div className="portfolio-container">
      <img
        src="/photoPourLinkdin.jpg"
        alt="Nadège Gautier"
        className="portfolio-photo"
      />

      {/* --- REMPLACEMENT PAR TON COMPONENT --- */}
      <Presentation />

      <div className="portfolio-grid">
        <Link to="/metier/dev" className="portfolio-card1">
          <h3>Développement Web</h3>
          <p>React, Laravel, API, Front et Back</p>
        </Link>

        <Link to="/metier/test" className="portfolio-card3">
          <h3>Testeur ISTQB</h3>
          <p>Tests fonctionnels et automatisations</p>
        </Link>

        <Link to="/metier/projet" className="portfolio-card4">
          <h3>Gestion de Projet</h3>
          <p>Organisation, planification, pilotage</p>
        </Link>

        <Link to="/metier/cyber" className="portfolio-card5">
          <h3>Cybersécurité</h3>
          <p>Analyse, prévention, bonnes pratiques</p>
        </Link>

        <Link to="/metier/adm" className="portfolio-card6">
          <h3>Assistante Administrative</h3>
          <p>Pack Office, gestion d'agenda, traitement de dossiers</p>
        </Link>

        <Link to="/metier/cons" className="portfolio-card7">
          <h3>Conseillère clientèle à distance</h3>
          <p>Gestion des demandes, prise de rendez-vous, SAV</p>
        </Link>

        <Link to="/metier/div" className="portfolio-card2">
          <h3>Divers</h3>
          <p>Anglais, autres compétences</p>
        </Link>
      </div>
    </div>
  );
}
