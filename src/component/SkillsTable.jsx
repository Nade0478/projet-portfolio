import React from "react";
import { Link } from "react-router-dom";
import "../styles/SkillsTable.css";

function ProjectLink({ link }) {
  if (!link) {
    return null;
  }

  const isExternal = link.indexOf("http") === 0;

  if (isExternal) {
    return (
      <a href={link} target="_blank" rel="noreferrer" className="project-link">
        Voir le projet
      </a>
    );
  }

  return (
    <Link to={link} className="project-link">
      Voir le projet
    </Link>
  );
}

export default function SkillsTable({ title, sections }) {
  return (
    <div className="skills-table">
      <h2 className="skills-title">{title}</h2>

      {sections.map((section, index) => (
        <div key={index} className="skills-section">
          <h3 className="skills-section-title">{section.label}</h3>

          {section.items && (
            <ul className="skills-list">
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}

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

                  <ProjectLink link={projet.link} />
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
