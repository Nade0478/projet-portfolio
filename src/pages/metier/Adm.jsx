import React from "react";
// import Menu from "../../component/basics/Menu";
// import Footer from "../../component/basics/Footer";
import SkillsTable from "../../component/SkillsTable";
//import "../../styles/home.css"; // à activer quand tu créeras le fichier

export default function Adm() {
  const sections = [
    {
      label: "Compétences",
      items: ["Pack Office", "Gestion d'agenda", "Standard téléphonique"],
    },
  ];

  return (
    <div className="page-container">
      {/* <Menu /> */}
      <h1>Assistante Administrative</h1>
      <SkillsTable title="Compétences" sections={sections} />
      {/* <Footer /> */}
    </div>
  );
}
