import React from "react";
import "../styles/SkillsTable.css"

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
          {section.projects && (
            <div className="projects-grid">
              {section.projects.map((project, i) => (
                <div key={i} className="project-card">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.name}
                      className="project-image"
                    />
                  )}

                  <h4>{project.name}</h4>
                  <p>{project.description}</p>

                  {project.link && (
                    <a
                      href={project.link}
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