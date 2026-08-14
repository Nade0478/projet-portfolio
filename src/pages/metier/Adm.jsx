import React from "react";
import SkillsTable from "../../component/SkillsTable";
import "../../styles/Home.css";


export default function Adm() {
  const sections = [
    {
      label: "Compétences administratives",
      items: [
        "Pack Office (Word, Excel, Outlook)",
        "Accueil physique et téléphonique",
        "Gestion d'agenda et plannings",
        "Standard téléphonique",
        "Rédaction de courriers",
        "Classement et archivage",
        "Gestion de dossiers",
        "Relation client",
      ],
    },
    {
      label: "Outils",
      items: ["Word", "Excel", "Outlook", "Google Workspace"],
    },
    {
      label: "Soft Skills",
      items: [
        "Organisation",
        "Polyvalence",
        "Discrétion",
        "Communication écrite et orale",
        "Gestion du stress",
        "Priorisation",
      ],
    },
  ];

  return (
    <div className="page-container">
      {/* TITRE PRINCIPAL */}
      <h1 className="page-title">
        Assistante Administrative – Expérience et Compétences
      </h1>

      {/* SECTION INTRO */}
      <div className="certificate-intro">
        <h2>Profil Professionnel</h2>

        <p className="certificate-description">
          Forte de plus de 15 ans d’expérience en secrétariat, gestion
          administrative, accueil et relation client, j’ai développé une
          polyvalence solide, une grande rigueur, une excellente organisation et
          une maîtrise avancée des outils bureautiques. Ces compétences
          constituent un socle essentiel dans ma reconversion vers les métiers
          du numérique.
        </p>
      </div>

      {/* ----------------------------- */}
      {/* EXPÉRIENCE PROFESSIONNELLE */}
      {/* ----------------------------- */}
      <div className="certificate-intro">
        <h2>Expérience Professionnelle</h2>

        <ul className="certificate-skills">
          <li>
            <strong>
              Secrétaire Administrative – Mandataire Judiciaire Privé
              (2022–2023)
            </strong>
            <br />
            Gestion de dossiers sensibles, rédaction de courriers, coordination
            avec les parties prenantes, traitement de données confidentielles.
          </li>

          <li>
            <strong>
              Télésecrétaire / Standardiste – Micro‑entrepreneure (2018–2023)
            </strong>
            <br />
            Gestion d’appels, organisation de plannings, prise de rendez-vous,
            assistance administrative externalisée.
          </li>

          <li>
            <strong>Conseillère Clientèle – Teleperformance (2022–2023)</strong>
            <br />
            Gestion des appels entrants, résolution de problèmes, communication
            claire et professionnelle.
          </li>

          <li>
            <strong>
              Assistante Administrative – Diverses entreprises (1999–2018)
            </strong>
            <br />
            Accueil, saisie, vérification de documents, gestion du courrier,
            devis, factures, rapprochements bancaires.
          </li>

          <li>
            <strong>Missions courtes et intérim (2000–2024)</strong>
            <br />
            DDT, Conseil Général, Chambre d’Agriculture, Mondial Assistance,
            Maison Claudie (ophtalmologie), Éducation Nationale, GML La
            Charmille, Marché Plus, centres d’appels.
          </li>
        </ul>
      </div>

      {/* ----------------------------- */}
      {/* FORMATIONS ADMINISTRATIVES */}
      {/* ----------------------------- */}
      <div className="certificate-intro">
        <h2>Diplômes et Formations Administratives</h2>

        <ul className="certificate-skills">
          <li>
            <strong>
              Titre Professionnel Conseillère Relation à Distance – AFPA (2016)
            </strong>
          </li>
          <li>
            <strong>
              Bac+2 Assistante de Gestion – CNAM (2007–2009, non validé)
            </strong>
          </li>
          <li>
            <strong>DAEU A – Université du Maine (2004–2006)</strong>
          </li>
          <li>
            <strong>CAP Sérigraphie (2000)</strong>
          </li>
          <li>
            <strong>BEP Comptabilité (1998)</strong>
          </li>
          <li>
            <strong>BEP Secrétariat (1997)</strong>
          </li>
        </ul>
      </div>

      {/* ----------------------------- */}
      {/* COMPÉTENCES TRANSFÉRABLES */}
      {/* ----------------------------- */}
      <div className="certificate-intro">
        <h2>Compétences Transférables</h2>

        <ul className="certificate-skills">
          <li>Organisation, gestion des priorités</li>
          <li>Rigueur, précision, sens du détail</li>
          <li>Analyse des besoins et compréhension métier</li>
          <li>Documentation, rédaction, structuration de l’information</li>
          <li>Communication claire avec les équipes et les utilisateurs</li>
          <li>Résolution de problèmes et esprit logique</li>
        </ul>
      </div>

      {/* ----------------------------- */}
      {/* TABLEAU DES COMPÉTENCES */}
      {/* ----------------------------- */}
      <SkillsTable title="Compétences Administratives" sections={sections} />
    </div>
  );
}
