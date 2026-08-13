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
        "Indépendance du test",
        "Compétences essentielles du testeur",
      ],
    },
    {
      label: "Tester tout au long du cycle de vie",
      items: [
        "Tests dans les cycles de développement (Agile, V-Model, DevOps)",
        "Bonnes pratiques universelles de test",
        "Approches pilotées par les tests (TDD, ATDD, BDD)",
        "Approche shift-left",
        "Rétrospectives et amélioration continue",
        "Tests de maintenance",
        "Tests de confirmation et régression",
        "Niveaux de test (unitaire, intégration, système, acceptation)",
        "Types de tests (fonctionnel, non fonctionnel, structurel)",
      ],
    },
    {
      label: "Test statique",
      items: [
        "Revue de documents",
        "Feedback précoce",
        "Types de revues (informelle, walkthrough, inspection)",
        "Processus de revue",
        "Tests statiques vs dynamiques",
        "Rôles et responsabilités en revue",
        "Valeur du test statique",
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
        "Techniques basées sur l’expérience",
        "Test exploratoire",
        "Rédaction de user stories",
        "Critères d’acceptation",
        "ATDD",
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
        "Probabilité × impact",
        "Actions en réponse aux risques",
        "Métriques de test",
        "Rapports de test",
        "Communication de l’avancement",
        "Gestion des défauts",
        "Rédaction de rapports d’anomalies",
        "Gestion de configuration",
      ],
    },
    {
      label: "Outils de test",
      items: [
        "Types d’outils de test",
        "Outils de gestion de tests",
        "Outils d’analyse statique",
        "Outils d’automatisation",
        "Outils de performance",
        "Cartographie des outils",
        "Avantages et risques de l’automatisation",
        "Étude de rentabilité de l’automatisation",
      ],
    },
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">
        Certification ISTQB – Formation de Testeur Certifié Niveau Fondation
      </h1>

      <div className="certificate-intro">
        <h2>Certificat en 2024 – M2i Formation</h2>

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
