import React from "react";
import SkillsTable from "../../component/SkillsTable";
import "../../styles/Home.css";

export default function Cons() {
  // -----------------------------
  // SECTIONS AFPA – CONSEILLÈRE CLIENTÈLE À DISTANCE (2016)
  // -----------------------------
  const sectionsAfpa = [
    {
      label: "Compétences validées",
      items: [
        "Relation clientèle à distance (téléphone, mail, chat)",
        "Gestion des demandes et réclamations",
        "Traitement administratif des dossiers clients",
        "Communication professionnelle à distance",
        "Gestion des appels entrants et sortants",
        "Respect des procédures et consignes qualité",
      ],
    },
    {
      label: "Compétences transversales",
      items: [
        "Écoute active et reformulation",
        "Gestion du stress",
        "Adaptabilité aux situations variées",
        "Empathie et sens du service",
        "Organisation et autonomie",
        "Résolution de problèmes",
      ],
    },
    {
      label: "Outils maîtrisés",
      items: [
        "Téléphonie professionnelle / VoIP",
        "Systèmes de ticketing",
        "CRM (notions)",
        "Suite Office (Word, Excel, Outlook)",
        "Messagerie interne et outils collaboratifs",
      ],
    },
    {
      label: "Domaines abordés",
      items: [
        "Techniques de communication à distance",
        "Gestion documentaire et suivi client",
        "Traitement des litiges",
        "Qualité de service et satisfaction client",
        "Organisation du travail à distance",
      ],
    },
  ];

  return (
    <div className="page-container">
      {/* TITRE PRINCIPAL */}
      <h1 className="page-title">
        AFPA – VAE Niveau 5 : Conseillère Clientèle à Distance (2016)
      </h1>

      {/* INTRO */}
      <div className="certificate-intro">
        <p className="certificate-description">
          Titre professionnel validé en 2016 par la voie de la VAE au sein de
          l’AFPA de Rennes. Ce diplôme de niveau 5 atteste de compétences
          solides en relation clientèle à distance, gestion administrative,
          communication professionnelle et traitement des demandes. Il constitue
          une base essentielle pour les métiers du support client, des centres
          de contact et de la relation client multicanale.
        </p>

        <h3>Missions associées au titre</h3>
        <ul className="certificate-skills">
          <li>Gérer les appels entrants et sortants</li>
          <li>Analyser les demandes et proposer des solutions adaptées</li>
          <li>Traiter les réclamations et litiges à distance</li>
          <li>Assurer le suivi administratif des dossiers clients</li>
          <li>Garantir la satisfaction et la fidélisation client</li>
        </ul>

        <h3>Résumé du titre</h3>
        <p className="certificate-summary">
          Ce titre professionnel de niveau 5 valide des compétences
          opérationnelles en relation client à distance. Il permet d’occuper des
          postes tels que conseillère clientèle à distance, téléconseillère,
          chargée de clientèle, assistante administrative ou opératrice de
          centre de contact. La VAE atteste d’une expérience professionnelle
          reconnue et valorisée par un diplôme officiel.
        </p>
      </div>

      {/* TABLEAU DES COMPÉTENCES */}
      <SkillsTable
        title="Compétences – Conseillère Clientèle à Distance (AFPA VAE 2016)"
        sections={sectionsAfpa}
      />
    </div>
  );
}
