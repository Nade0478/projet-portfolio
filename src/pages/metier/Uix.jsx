import React from "react";
// import Menu from "../../component/basics/Menu";
// import Footer from "../../component/basics/Footer";
import SkillsTable from "../../component/SkillsTable";

export default function Uix() {
  const sections = [
    {
      label: "Langages",
      items: ["JavaScript", "PHP", "SQL", "HTML", "CSS"],
    },
    {
      label: "Frameworks et Outils",
      items: ["Figma", "Laravel", "Node.js", "MySQL", "GitHub"],
    },
    {
      label: "Méthodes",
      items: ["Agile", "Scrum", "Kanban"],
    },
    {
      label: "Projets",
      projects: [
        {
          link: "https://www.figma.com/make/O2x2Wuv91Z7gwX64UMmhbp/Cr%C3%A9er-un-persona-parent-d%C3%A9bord%C3%A9?p=f&t=dKxXfQo2dXN1MdKw-0",
          link: "https://www.figma.com/design/GusJr7bqiMlMZOxqi1BFtH/Untitled?node-id=1-4454&t=k0k5J2HwLSkvfJZt-0",
        }
      ],
    },
  ];

  return (
    <div className="page-container">
      {/* <Menu /> */}

      <h1 className="page-title">Développement Web</h1>

      <SkillsTable title="Compétences et Projets" sections={sections} />

      {/* <Footer /> */}
    </div>
  );
}
