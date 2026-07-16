import React from "react";

export default function Portfolio() {
  const projects = [
    {
      title: "EcoRide",
      description:
        "Application React + Laravel pour la gestion de trajets écoresponsables.",
      tech: ["React", "Laravel", "API REST"],
    },
    {
      title: "Vite et Gourmand",
      description:
        "Site vitrine réalisé avec React, maquettes Figma et déploiement Netlify.",
      tech: ["React", "Figma", "Netlify"],
    },
    {
      title: "Rando-Ouest",
      description: "Application de randonnées avec filtres, cartes et API.",
      tech: ["React", "API", "UI/UX"],
    },
  ];

  return (
    <div className="portfolio">
      {" "}
      <h1>Mes Projets</h1>{" "}
      <div className="projects">
        {" "}
        {projects.map((p, index) => (
          <div key={index} className="project-card">
            {" "}
            <h2>{p.title}</h2> <p>{p.description}</p>{" "}
            <p>
              <strong>Technos :</strong> {p.tech.join(", ")}
            </p>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </div>
  );
}
