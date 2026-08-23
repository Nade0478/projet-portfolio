import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Style.css";
import backgroundImage from "../../assets/fond-ecran-portfolio.png";

export default function Portfolioh() {
  const captures = [
    { name: "Conception", link: "/portfolio/capture-conception" },
    { name: "Développement", link: "/portfolio/capture-code-deploiement" },
    { name: "Tests", link: "/portfolio/capture-test" },
    { name: "Cybersécurité", link: "/portfolio/capture-security" },
    { name: "Projet", link: "/portfolio/capture-projet" },
    { name: "Autres", link: "/portfolio/capture-autre" },
  ];

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
          de projet, j'accompagne les entreprises dans la création de solutions
          fiables, modernes et sécurisées.
        </p>

        <div className="portfolio-grid">
          {captures.map((capture, i) => (
            <Link key={i} to={capture.link} className="portfolio-card">
              {capture.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
