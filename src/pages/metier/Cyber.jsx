import React from "react";

export default function Cyber() {
  // ================================
  // FORMATION GOOGLE CYBERSÉCURITÉ (2026 – en cours)
  // ================================
  const courses = [
    {
      title: "Les outils du métier : Linux et SQL",
      hours: "23 heures",
      learn: [
        "Expliquer la relation entre systèmes d'exploitation, applications et matériel",
        "Comparer interface graphique et interface en ligne de commande",
        "Naviguer et gérer le système de fichiers avec Bash",
        "Utiliser SQL pour extraire des informations d'une base de données",
      ],
      skills: [
        "Commandes Linux",
        "Linux",
        "Systèmes d'exploitation",
        "Bash",
        "Gestion des fichiers",
        "SQL",
        "Systèmes de fichiers",
        "Authentifications",
        "Bases de données relationnelles",
        "Autorisation (informatique)",
        "Bases de données",
        "Administration Linux",
        "Shell Unix",
        "Gestion des bases de données",
        "Langages de requête",
        "Comptes d'utilisateurs",
        "Interface de ligne de commande",
      ],
    },

    {
      title: "Actifs, menaces et vulnérabilités",
      hours: "19 heures",
      learn: [
        "Classer les actifs",
        "Analyser une surface d'attaque pour identifier les risques",
        "Identifier les menaces : ingénierie sociale, malwares, exploits",
        "Résumer le processus de modélisation des menaces",
      ],
      skills: [
        "Gestion de la vulnérabilité",
        "Modélisation de la menace",
        "Autorisation (informatique)",
        "Gestion des menaces",
        "Sécurité des données",
        "Évaluations de la vulnérabilité",
        "Cybersécurité",
        "Contrôles de sécurité",
        "Protection contre les logiciels malveillants",
        "Détection des menaces",
        "Cadre de gestion des risques",
        "Risque cybernétique",
        "Stratégie de cybersécurité",
        "Cryptographie",
        "Gestion des données",
        "Authentifications",
        "Sensibilisation à la sécurité",
        "Renseignements sur les cybermenaces",
        "Cadre ATT&CK de MITRE",
        "Gestion des identités et des accès",
      ],
    },

    {
      title: "Sonnez l’alarme : Détection et réaction",
      hours: "17 heures",
      learn: [
        "Identifier les étapes pour contenir, éradiquer et récupérer un incident",
        "Analyser les paquets réseau",
        "Comprendre la syntaxe des signatures IDS/NIDS",
        "Effectuer des requêtes SIEM pour enquêter sur un événement",
      ],
      skills: [
        "Réponse aux incidents",
        "Détection et prévention des intrusions",
        "SIEM",
        "Splunk",
        "Analyse du réseau",
        "Protocoles réseau",
        "TCP/IP",
        "Contrôle continu",
        "Surveillance du réseau",
        "Gestion des incidents de sécurité informatique",
        "Surveillance des événements",
        "Langages de requête",
        "Gestion des incidents",
        "Renseignements sur les cybermenaces",
        "Détection des menaces",
        "Sécurité des réseaux",
        "Gestion des documents",
        "Détection des points finaux et réponse (EDR)",
        "Contrôles de sécurité",
      ],
    },

    {
      title: "Automatiser les tâches de cybersécurité avec Python",
      hours: "25 heures",
      learn: [
        "Expliquer comment Python est utilisé en cybersécurité",
        "Créer des fonctions Python définies par l'utilisateur",
        "Utiliser des expressions régulières pour extraire des informations",
        "S'entraîner à déboguer du code",
      ],
      skills: [
        "Programmation Python",
        "Fichier E/S",
        "Débogage",
        "Algorithmes",
        "Principes de programmation",
        "Cybersécurité",
        "Automatisation",
        "Programmation informatique",
        "Gestion des fichiers",
        "Automatisation IT",
        "Développement du programme",
        "Maintenabilité",
        "Importation/exportation de données",
      ],
    },

    {
      title: "Se préparer aux emplois en cybersécurité",
      hours: "11 heures",
      learn: [
        "Déterminer quand et comment faire remonter un incident",
        "S'engager auprès de la communauté cybersécurité",
        "Postuler à des emplois et préparer les entretiens",
        "Utiliser l’IA pour améliorer ses compétences",
      ],
      skills: [
        "Gestion des incidents",
        "Sensibilisation à la sécurité",
        "Sécurité des données",
        "Communication technique",
        "Réponse aux incidents",
        "Workflows d'IA",
        "Cybersécurité",
        "Renseignements sur les cybermenaces",
        "Éthique des données",
        "Gestion de la sécurité",
        "Gestion des incidents de sécurité informatique",
        "Intelligence artificielle",
      ],
    },
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">
        Formation Google – Cybersécurité (2026 – en cours)
      </h1>

      <div className="certificate-intro">
        <p className="certificate-description">
          Formation professionnelle débutée en janvier 2026 et toujours en
          cours. Ce parcours Google prépare aux métiers de la cybersécurité en
          couvrant les fondamentaux, les outils, les réseaux, la réponse aux
          incidents, l’automatisation Python et la préparation au marché de
          l’emploi.
        </p>

        <h3>Objectifs de la formation</h3>
        <ul className="certificate-skills">
          <li>Comprendre les bases de la cybersécurité</li>
          <li>Analyser les menaces, risques et vulnérabilités</li>
          <li>Maîtriser Linux, Bash, SQL et les outils SIEM</li>
          <li>Détecter et répondre aux incidents de sécurité</li>
          <li>Automatiser des tâches avec Python</li>
          <li>Développer une posture professionnelle en cybersécurité</li>
        </ul>
      </div>

      {/* Affichage des cours */}
      {courses.map((course, index) => (
        <div key={index} className="certificate-intro">
          <h2>{course.title}</h2>
          <p className="course-info">
            Cours {index + 4} • {course.hours}
          </p>

          <h3>Ce que vous apprendrez</h3>
          <ul className="certificate-skills">
            {course.learn.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h3>Compétences acquises</h3>
          <ul className="certificate-skills">
            {course.skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
