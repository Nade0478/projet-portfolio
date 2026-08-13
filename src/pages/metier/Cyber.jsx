import React from "react";
import SkillsTable from "../../component/SkillsTable";

export default function Dev() {
  // -----------------------------
  // SECTIONS AFPA – VAE NIVEAU 5 (2016)
  // -----------------------------
  const sectionsAfpa = [
    {
      label: "Compétences validées",
      items: [
        "Accueil et relation clientèle",
        "Gestion administrative des dossiers",
        "Traitement des demandes et réclamations",
        "Organisation et planification des activités",
        "Communication professionnelle orale et écrite",
        "Respect des procédures et consignes",
      ],
    },
    {
      label: "Compétences transversales",
      items: [
        "Gestion du stress",
        "Adaptabilité aux situations variées",
        "Travail en équipe",
        "Autonomie et prise d’initiative",
        "Rigueur et sens du service",
      ],
    },
    {
      label: "Outils maîtrisés",
      items: [
        "Suite Office (Word, Excel, Outlook)",
        "Téléphonie professionnelle",
        "Messagerie interne",
        "Outils de gestion administrative",
      ],
    },
    {
      label: "Domaines abordés",
      items: [
        "Techniques de communication",
        "Relation client",
        "Gestion documentaire",
        "Organisation du travail",
        "Qualité de service",
      ],
    },
  ];

  return (
    <div className="page-container">
      {/* TITRE PRINCIPAL */}
      <h1 className="page-title">
        Formation AFPA – VAE Niveau 5 (2016)
      </h1>

      {/* INTRO */}
      <div className="certificate-intro">
        <p className="certificate-description">
          Titre professionnel validé en 2016 par la voie de la VAE au sein de
          l’AFPA de Rennes. Ce diplôme de niveau 5 atteste de compétences solides
          en relation clientèle, gestion administrative, communication
          professionnelle et organisation du travail. Il constitue une base
          essentielle pour les métiers du service, de l’accueil, de la gestion
          et du support client.
        </p>

        <h3>Missions associées au titre</h3>
        <ul className="certificate-skills">
          <li>Accueillir, informer et orienter les usagers ou clients</li>
          <li>Traiter les demandes, réclamations et dossiers administratifs</li>
          <li>Assurer la communication interne et externe</li>
          <li>Organiser et planifier les activités quotidiennes</li>
          <li>Garantir la qualité du service rendu</li>
        </ul>

        <h3>Résumé du titre</h3>
        <p className="certificate-summary">
          Ce titre professionnel de niveau 5 valide des compétences opérationnelles
          en gestion administrative et relation clientèle. Il permet d’occuper des
          postes tels que assistante administrative, conseillère clientèle,
          chargée d’accueil ou employée administrative polyvalente. La VAE atteste
          d’une expérience professionnelle reconnue et valorisée par un diplôme
          officiel.
        </p>
      </div>

      {/* TABLEAU DES COMPÉTENCES */}
      <SkillsTable
        title="Compétences – AFPA VAE Niveau 5"
        sections={sectionsAfpa}
      />
    </div>
  );
}
