import React from "react";
import SkillsTable from "../../component/SkillsTable";

export default function Projet() {
  const sections = [
    {
      label: "Fondements de la gestion de projet",
      items: ["Gestion de projet"],
    },
    {
      label: "Lancement de projet",
      items: [
        "Analyse des parties prenantes",
        "Fixation des objectifs",
        "Documentation du projet",
        "Gestion du champ d'application",
        "Objectifs SMART",
        "Cycle de vie de la gestion de projet",
        "Analyse coûts-avantages",
        "Gestion des parties prenantes",
      ],
    },
    {
      label: "Planification de projet",
      items: [
        "Jalons",
        "Marchés publics",
        "Atténuation des risques",
        "Planification de la communication",
        "Gestion des documents",
        "Gestion du budget",
        "Gestion des risques",
        "Estimation des coûts",
        "Réflexion stratégique",
        "Calendriers des projets",
        "Gestion des coûts",
        "Cadre de gestion des risques",
      ],
    },
    {
      label: "Exécution du projet",
      items: [
        "Gestion de la qualité",
        "Renforcement de l'esprit d'équipe",
        "Gestion des risques",
        "Clôture du projet",
        "Leadership d'équipe",
        "Gestion d'équipe",
        "Récit de données",
        "Assurance qualité",
        "Contrôle des projets",
        "Suivi des questions",
        "Mise en œuvre du projet",
        "Évaluation de la qualité",
        "Logiciel de gestion de projet",
        "Coordination du projet",
        "Réflexion stratégique",
      ],
    },
    {
      label: "Gestion de projet agile",
      items: [
        "Scrum : rôles, artefacts, événements",
        "Feuilles de route produit",
        "Backlog",
        "Rétrospectives",
        "Planification de sprint",
        "Développement logiciel agile",
        "Méthodologie Agile",
        "Priorisation",
        "Renforcement d’équipe",
        "Exigences produit",
      ],
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
      {/* TITRE PRINCIPAL */}
      <h1 className="page-title">
        Certificat Professionnel Gestion de Projet Google
      </h1>

      {/* SECTION INTRO CERTIFICAT */}
      <div className="certificate-intro">
        <h2>Certificat obtenu le 31/12/2026</h2>

        <p className="certificate-description">
          Ce certificat Google Career Certificate m’a permis d’acquérir une
          maîtrise complète des fondamentaux de la gestion de projet, incluant
          les méthodologies traditionnelles et Agile, la communication
          stratégique, la gestion des risques, la coordination d’équipe et la
          création d’artefacts professionnels.
        </p>

        <h3>Compétences acquises</h3>
        <ul className="certificate-skills">
          <li>Gestion de projet (traditionnelle et Agile)</li>
          <li>Scrum : rôles, artefacts, événements</li>
          <li>Analyse des parties prenantes</li>
          <li>Planification, budget, estimation des coûts</li>
          <li>Gestion des risques et atténuation</li>
          <li>Documentation de projet et communication</li>
          <li>Leadership, dynamique d’équipe et résolution de problèmes</li>
          <li>Utilisation d’outils professionnels (Jira, Sheets, Docs…)</li>
        </ul>

        <h3>Résumé du programme</h3>
        <p className="certificate-summary">
          Le programme comprend plus de 140 heures de formation, des projets
          pratiques, des simulations réelles, et prépare aux certifications du
          PMI telles que le CAPM®. Il couvre le lancement, la planification,
          l’exécution, la clôture et la gestion Agile des projets.
        </p>
      </div>

      {/* TABLEAU DES COMPÉTENCES */}
      <SkillsTable title="Compétences et Projets" sections={sections} />
    </div>
  );
}
