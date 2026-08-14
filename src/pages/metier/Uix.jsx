import React from "react";
import SkillsTable from "../../component/SkillsTable";
import "../../styles/Styles.css";

export default function Uix() {
  // -----------------------------
  // SECTIONS UX/UI et CONCEPTION
  // -----------------------------
  const sections = [
    {
      label: "Conception d’application",
      items: [
        "Analyse des besoins utilisateurs",
        "Rédaction de spécifications fonctionnelles",
        "Création de parcours utilisateurs (User Flow)",
        "Architecture de l’information",
        "Conception de prototypes interactifs",
      ],
    },
    {
      label: "UX/UI Design",
      items: [
        "Création de wireframes",
        "Création de maquettes haute fidélité",
        "Design system",
        "Création de personas",
        "Tests utilisateurs",
        "Accessibilité numérique (RGAA – notions)",
      ],
    },
    {
      label: "Outils de conception",
      items: [
        "Figma (maquettes, prototypes, personas)",
        "Miro (idéation, mindmap, user flow)",
        "Canva (supports visuels)",
        "Outils collaboratifs (Google Workspace, Notion)",
      ],
    },
    {
      label: "Modélisation et Architecture",
      items: [
        "Diagrammes UML (cas d’utilisation, classes, séquence)",
        "Modélisation fonctionnelle",
        "Organisation des composants",
        "Documentation technique",
      ],
    },
    {
      label: "Projets UX/UI",
      projects: [
        {
          name: "Persona – Parent débordé",
          link: "https://www.figma.com/make/O2x2Wuv91Z7gwX64UMmhbp/Cr%C3%A9er-un-persona-parent-d%C3%A9bord%C3%A9?p=f&t=dKxXfQo2dXN1MdKw-0",
        },
        {
          name: "Maquette Figma – Prototype",
          link: "https://www.figma.com/design/GusJr7bqiMlMZOxqi1BFtH/Untitled?node-id=1-4454&t=k0k5J2HwLSkvfJZt-0",
        },
      ],
    },
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">UX/UI et Conception d’Application</h1>

      <div className="certificate-intro">
        <p className="certificate-description">
          Cette page présente mes compétences en conception d’application,
          design UX/UI, modélisation et création de maquettes. Je maîtrise les
          outils de conception modernes tels que Figma et Miro, ainsi que les
          méthodes de modélisation UML et les bonnes pratiques d’accessibilité
          numérique (RGAA).
        </p>

        <h3>Ce que je réalise</h3>
        <ul className="certificate-skills">
          <li>Création de maquettes et prototypes interactifs</li>
          <li>Conception de wireframes et parcours utilisateurs</li>
          <li>Production de personas et études utilisateurs</li>
          <li>Modélisation UML pour structurer les applications</li>
          <li>Organisation de workshops sur Miro</li>
          <li>Respect des bonnes pratiques d’accessibilité (RGAA)</li>
        </ul>

        <h3>Résumé</h3>
        <p className="certificate-summary">
          Je conçois des interfaces intuitives, accessibles et centrées
          utilisateur. Grâce à Figma, Miro et UML, je structure les projets
          depuis l’analyse des besoins jusqu’au prototype final. Mon approche
          combine design, ergonomie, architecture et collaboration.
        </p>
      </div>

      <SkillsTable title="Compétences et Projets UX/UI" sections={sections} />
    </div>
  );
}
