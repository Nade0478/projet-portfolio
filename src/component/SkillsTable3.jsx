import React from "react";
import "../styles/SkillsTable3.css";

export default function SkillsTable3({ title, sections }) {
  return (
    <div className="skills-table">
      <h2 className="skills-title">{title}</h2>

      {sections.map((section, index) => (
        <div key={index} className="skills-section">
          <h3 className="skills-label">{section.label}</h3>

          {/* LISTE DES COMPÉTENCES */}
          {section.items && (
            <ul className="skills-list">
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}

          {/* LISTE DES PROJETS */}
          {section.projets && (
            <div className="projet-grid">
              {section.projets.map((projet, i) => (
                <div key={i} className="project-card">
                  <h4>{projet.name}</h4>
                  <p>{projet.description}</p>

                  {/* IMAGE */}
                  {projet.image && (
                    <img
                      src={projet.image}
                      alt={projet.name}
                      className="projet-image"
                    />
                  )}

                  {/* VIDEO */}
                  {projet.video && (
                    <video
                      src={projet.video}
                      controls
                      className="projet-video"
                    />
                  )}

                  {/* LIEN */}
                  {projet.link && (
                    <a
                      href={projet.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projet-link"
                    >
                      Voir le projet
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
