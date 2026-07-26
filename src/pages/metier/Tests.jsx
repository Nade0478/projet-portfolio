import React from "react";
// import Menu from "../../component/basics/Menu";
// import Footer from "../../component/basics/Footer";
import SkillsTable from "../../component/SkillsTable";

export default function Tests() {
  const sections = [
    {
      label: "Langages",
      items: ["JavaScript", "PHP", "SQL", "HTML", "CSS"],
    },
    {
      label: "Frameworks & Outils",
      items: ["React", "Laravel", "Node.js", "MySQL", "GitHub"],
    },
    {
      label: "Méthodes",
      items: ["Agile", "Scrum", "Kanban"],
    },
    {
      label: "Projets",
      projects: [
        {
          name: "Portfolio React",
          description: "Site personnel moderne en React.",
          image: "/assets/captures/portfolio.png",
          link: "https://github.com/ton-projet",
        },
      ],
    },
  ];

  return (
    <div className="page-container">
      {/* <Menu /> */}

      <h1 className="page-title">Développement Web</h1>

      <SkillsTable title="Compétences & Projets" sections={sections} />

      {/* <Footer /> */}
    </div>
  );
}
