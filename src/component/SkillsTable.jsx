import React from "react";
import "../styles/SkillsTable.css";

export default function SkillsTable({ title, sections }) {
  return (
    <div className="skills-table">
      <h2 className="skills-title">{title}</h2>

      {sections.map((section, index) => (
        <div key={index} className="skills-section">
          <h3 className="skills-section-title">{section.label}</h3>

          {/* Liste simple */}
          {section.items && (
            <ul className="skills-list">
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}

          {/* Projets */}
          {section.projets && (
            <div className="projets-grid">
              {section.projets.map((projet, i) => (
                <div key={i} className="projet-card">
                  {projet.image && (
                    <img
                      src={projet.image}
                      alt={projet.name}
                      className="projet-image"
                    />
                  )}

                  <h4>{projet.name}</h4>
                  <p>{projet.description}</p>

                  {projet.link && (
                    <a
                      href={projet.link}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
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
