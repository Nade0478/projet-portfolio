import React from "react";
import { Link } from "react-router-dom";
import SkillsTable from "../../component/SkillsTable";

export default function Cons() {
  const sections = [
    {
      label: "Projets",
      projects: [
        {
          name: "Application Laravel",
          description: "CRUD complet avec authentification.",
          // image: "/assets/captures/laravel-app.png",
          video: "/assets/videos/laravel-demo.mp4",
          link: "https://github.com/Nade0478",
        },
        {
          name: "Projet React",
          description: "Interface moderne en React.",
          // image: "/assets/captures/react-app.png",
          link: "https://github.com/Nade0478",
        },
      ],
    },
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Développement Web</h1>

      <SkillsTable title="Compétences et Projets" sections={sections} />

      {/* --- Boutons pour accéder aux carousels --- */}
      <div
        className="capture-buttons"
        style={{ marginTop: "80px", textAlign: "center" }}
      >
        <Link to="/capture-conception">
          <button className="btn-capture">Voir captures de conception</button>
        </Link>

        <Link to="/capture-deploiement">
          <button className="btn-capture" style={{ marginLeft: "15px" }}>
            Voir captures de déploiement
          </button>
        </Link>

        <Link to="/capture-test">
          <button className="btn-capture" style={{ marginLeft: "15px" }}>
            Voir captures de tests
          </button>
        </Link>

        <Link to="/capture-security">
          <button className="btn-capture" style={{ marginLeft: "15px" }}>
            Voir captures cybersecurité
          </button>
        </Link>

        <Link to="/capture-projet">
          <button className="btn-capture" style={{ marginLeft: "15px" }}>
            Voir captures de Projet
          </button>
        </Link>

        <Link to="/capture-autre">
          <button className="btn-capture" style={{ marginLeft: "15px" }}>
            Voir captures de autres
          </button>
        </Link>
      </div>
    </div>
  );
}
