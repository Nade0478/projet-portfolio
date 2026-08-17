import React from "react";
import { Link } from "react-router-dom";
import "../styles/Style.css";
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
          Développeuse Web • Testeuse Logicielle • Assistante Cheffe de Projet
        </h2>

        <p className="portfolio-presentation">
          Passionnée par le développement web, les tests logiciels et la gestion
          de projet, j’accompagne les entreprises dans la création de solutions
          fiables, modernes et sécurisées.
        </p>

        <div className="portfolio-grid">{/* tes liens */}</div>
      </div>
    </div>
  );
}
