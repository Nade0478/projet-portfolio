import React from "react";
import "../styles/SkillsTable3.css";

export default function SkillsTable2({ title, sections }) {
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
          {section.projects && (
            <div className="projects-grid">
              {section.projects.map((project, i) => (
                <div key={i} className="project-card">
                  <h4>{project.name}</h4>
                  <p>{project.description}</p>

                  {/* IMAGE */}
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.name}
                      className="project-image"
                    />
                  )}

                  {/* VIDEO */}
                  {project.video && (
                    <video
                      src={project.video}
                      controls
                      className="project-video"
                    />
                  )}

                  {/* LIEN */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
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
