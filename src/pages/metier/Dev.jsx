import React from "react";
import SkillsTable from "../../component/SkillsTable";
import "../../styles/Styles.css";

export default function Dev() {
  // -----------------------------
  // SECTIONS BAC+2 STUDI
  // -----------------------------
  const sectionsStudi = [
    {
      label: "Langages",
      items: ["JavaScript", "PHP", "SQL", "HTML", "CSS"],
    },
    {
      label: "Frameworks et Outils",
      items: [
        "React",
        "Laravel",
        "Symfony (notions)",
        "Node.js",
        "MySQL",
        "GitHub",
      ],
    },
    {
      label: "Méthodes",
      items: ["Agile", "Scrum", "Kanban"],
    },
    {
      label: "Projets",
      projects: [
        {
          link: "https://github.com/Nade0478/Ecoride-projet",
        },
      ],
    },
  ];

  // -----------------------------
  // SECTIONS CDA ARINFO
  // -----------------------------
  const sectionsCDA = [
    {
      label: "Développement Back-end",
      items: ["PHP", "Laravel", "Symfony", "POO", "Architecture MVC"],
    },
    {
      label: "Développement Front-end",
      items: ["JavaScript", "React", "HTML", "CSS"],
    },
    {
      label: "Conception et Architecture",
      items: ["UML", "Merise", "Modélisation", "Conception d'applications"],
    },
    {
      label: "Bases de données",
      items: ["SQL", "MySQL", "Conception de schémas"],
    },
    {
      label: "Outils et DevOps",
      items: ["Git", "GitHub", "Docker", "CI/CD"],
    },
    {
      label: "Méthodes",
      items: ["Agile", "Scrum", "Kanban"],
    },
    {
      label: "Projets",
      projects: [
        {
          name: "Application Laravel",
          description: "Application CRUD complète avec authentification.",
          link: "https://github.com/Nade0478",
        },
      ],
    },
  ];

  return (
    <div className="page-container">
      {/* TITRE PRINCIPAL */}
      <h1 className="page-title">Développement Web – Diplômes et Compétences</h1>

      {/* SOUS-TITRE : LES 2 DIPLÔMES */}
      <h2 className="page-subtitle">
        {/* Bac+3/4 Concepteur Développeur d’Applications (Arinfo) — obtenu en 2025 */}
      </h2>

      {/* ----------------------------- */}
      {/* BLOC BAC+2 STUDI */}
      {/* ----------------------------- */}
      <div className="certificate-intro">
        {/* <h2>Bac+2 Développeur Web Full Stack – Studi (2021–2026)</h2> */}

        <p className="certificate-description">
          Ce diplôme Bac+2 m’a permis d’acquérir une base solide en
          développement front-end et back-end, en conception d’applications, en
          gestion de projet Agile, ainsi qu’en bonnes pratiques de qualité
          logicielle. Il constitue le socle de mes compétences techniques
          actuelles et de mon évolution vers les métiers du numérique.
        </p>

        <h3>Compétences acquises</h3>
        <ul className="certificate-skills">
          <li>Développement front-end : HTML, CSS, JavaScript</li>
          <li>Développement back-end : PHP, Laravel, Symfony (notions)</li>
          <li>Développement d’applications avec React</li>
          <li>Bases de données : SQL, MySQL</li>
          <li>Conception UML, architecture logicielle</li>
          <li>Création de sites web dynamiques et responsives</li>
          <li>Git, GitHub, Docker, CI/CD</li>
          <li>Gestion de projet Agile : Scrum, Kanban</li>
          <li>Analyse des besoins, rédaction de spécifications</li>
        </ul>

        <h3>Résumé du parcours</h3>
        <p className="certificate-summary">
          Le programme couvre l’ensemble des compétences nécessaires au métier
          de développeur web full stack : conception, développement front-end et
          back-end, gestion de bases de données, intégration continue, tests,
          documentation, gestion de projet Agile et réalisation de projets
          concrets.
        </p>
      </div>

      {/* TABLEAU DES COMPÉTENCES STUDI */}
      <SkillsTable
        title="Compétences et Projets – Bac+2 Studi"
        sections={sectionsStudi}
      />

      {/* ----------------------------- */}
      {/* BLOC CDA ARINFO */}
      {/* ----------------------------- */}
      <div className="certificate-intro">
        <h2>Concepteur Développeur d’Applications – Arinfo (2024–2025)</h2>

        <p className="certificate-description">
          Cette formation Bac+3/4, suivie chez Arinfo, m’a permis de renforcer
          mes compétences en développement avancé, en architecture logicielle,
          en conception d’applications, en gestion de projet Agile et en
          développement full stack. Elle m’a apporté une vision plus complète du
          cycle de vie logiciel et une expertise plus poussée en développement.
        </p>

        <h3>Compétences acquises</h3>
        <ul className="certificate-skills">
          <li>Développement avancé : PHP, Laravel, Symfony</li>
          <li>Développement front-end : JavaScript, React</li>
          <li>Conception UML, architecture MVC</li>
          <li>Gestion de bases de données SQL</li>
          <li>Docker, CI/CD, Git, GitHub</li>
          <li>Gestion de projet Agile : Scrum, Kanban</li>
          <li>Analyse des besoins, rédaction de spécifications</li>
          <li>Création d’applications complètes (front + back)</li>
        </ul>

        <h3>Résumé du programme</h3>
        <p className="certificate-summary">
          Le programme CDA couvre la conception, le développement, les tests, la
          documentation, l’architecture logicielle, les bases de données, les
          frameworks modernes, les outils DevOps et la réalisation de projets
          professionnels.
        </p>
      </div>

      {/* TABLEAU DES COMPÉTENCES CDA */}
      <SkillsTable
        title="Compétences et Projets – CDA Arinfo"
        sections={sectionsCDA}
      />
    </div>
  );
}
