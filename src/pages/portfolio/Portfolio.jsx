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
        link: "/capture-conception",
      },
      {
        name: "Captures de développement",
        link: "/capture-developpement",
      },
      {
        name: "Captures des tests",
        link: "/capture-test",
      },
      {
        name: "Captures cybersécurité",
        link: "/capture-security",
      },
      {
        name: "Captures de projet",
        link: "/capture-projet",
      },
      {
        name: "Captures autres",
        link: "/capture-autre",
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
