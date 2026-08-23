import React from "react";
import { Link } from "react-router-dom";
import SkillsTable from "../../component/SkillsTable";

export default function Cons() {
const sections = [
  {
    label: "Projets",
    projets: [
      {
        name: "Projets",
        description:
          "CRUD complet avec authentification et Interface moderne en React.",
        link: "https://github.com/Nade0478",
      },
    ],
  },

  {
    label: "Captures",
    projets: [
      {
        name: "Captures de conception",
        link: "/portfolio/CarouselConception",
      },
      {
        name: "Captures de développement",
        link: "/portfolio/CarouselDeploiement",
      },
      {
        name: "Captures des tests",
        link: "/portfolio/CarouselTest",
      },
      {
        name: "Captures cybersécurité",
        link: "/portfolio/CarouselSecurity",
      },
      {
        name: "Captures de projet",
        link: "/portfolio/CarouselProjet",
      },
      {
        name: "Captures autres",
        link: "/portfolio/CarouselAutre",
      },
    ],
  },
];
  return (
    <div className="page-container">
      <h1 className="page-title">Développement Web</h1>

      <SkillsTable title="Compétences et Projets" sections={sections} />
    </div>
  );
}
