import React from "react";
import SkillsTable3 from "../../component/SkillsTable3";

export default function Test() {
  const sections = [
    {
      label: "Fondamentaux des tests",
      items: [
        "Objectifs du test logiciel",
        "Différence entre test et débogage",
        "Relation entre tests et assurance qualité",
        "Défauts, erreurs, défaillances",
        "Les 7 principes fondamentaux du test",
        "Activités de test et testware",
        "Traçabilité et rôles dans le test",
      ],
    },
    {
      label: "Tester tout au long du cycle de vie",
      items: [
        "Tests dans les cycles de développement",
        "Approche DevOps et impact sur les tests",
        "Approche shift-left",
        "Tests de maintenance",
        "Tests de confirmation et régression",
        "Niveaux et types de tests",
      ],
    },
    {
      label: "Test statique",
      items: [
        "Revue de documents",
        "Feedback précoce",
        "Types de revues",
        "Processus de revue",
        "Tests statiques vs dynamiques",
        "Rôles et responsabilités en revue",
      ],
    },
    {
      label: "Analyse et conception des tests",
      items: [
        "Techniques boîte noire",
        "Partitions d’équivalence",
        "Analyse des valeurs limites",
        "Tables de décision",
        "Transitions d’état",
        "Techniques boîte blanche",
        "Test des instructions et branches",
        "Test exploratoire",
        "ATDD",
        "Critères d’acceptation",
      ],
    },
    {
      label: "Gestion des activités de test",
      items: [
        "Plan de test",
        "Critères d’entrée et sortie",
        "Estimation de l’effort de test",
        "Priorisation des cas de test",
        "Pyramide des tests",
        "Quadrants du test",
        "Analyse des risques produit et projet",
        "Rapports de test",
        "Gestion des défauts",
        "Gestion de configuration",
      ],
    },
    {
      label: "Outils de test",
      items: [
        "Outils de gestion de tickets",
        "Outils de documentation",
        "Automatisation des tests",
        "Cartographie des outils",
        "Étude de rentabilité de l’automatisation",
      ],
    },
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">
        Certification ISTQB – Testeur Certifié Niveau Fondation
      </h1>

      <div className="certificate-intro">
        <h2>Certificat obtenu en 2024 – M2i Formation</h2>

        <p className="certificate-description">
          Cette certification internationale valide ma maîtrise des fondamentaux
          du test logiciel selon le standard ISTQB Foundation Level V4.0. Elle
          atteste de mes compétences en conception, exécution, documentation et
          analyse des tests, ainsi que de ma capacité à contribuer efficacement
          à la qualité logicielle au sein d’une équipe de développement.
        </p>

        <h3>Compétences acquises</h3>
        <ul className="certificate-skills">
          <li>Maîtrise des 7 principes fondamentaux du test logiciel</li>
          <li>
            Conception de cas de test (boîte noire, boîte blanche, exploratoire)
          </li>
          <li>Analyse des risques produit et projet</li>
          <li>Planification des tests, critères d’entrée/sortie, métriques</li>
          <li>Tests statiques : revues, feedback, analyse de documents</li>
          <li>
            Tests dynamiques : exécution, suivi, documentation des défauts
          </li>
          <li>
            Techniques ISTQB : partitions d’équivalence, valeurs limites, tables
            de décision
          </li>
          <li>Gestion des défauts et rédaction de rapports d’anomalies</li>
          <li>
            Utilisation d’outils professionnels (Jira, Squash TM, Selenium,
            Xray…)
          </li>
        </ul>

        <h3>Résumé du programme</h3>
        <p className="certificate-summary">
          La formation ISTQB Niveau Fondation couvre les fondamentaux du métier
          de testeur logiciel : niveaux et types de tests, test statique,
          techniques de conception, gestion des activités de test, outils de
          test et préparation à l’examen. Elle inclut des exercices pratiques,
          des QCM, des revues, des analyses de risques et un examen blanc
          complet.
        </p>
      </div>

      <SkillsTable3 title="Compétences ISTQB" sections={sections} />
    </div>
  );
}
