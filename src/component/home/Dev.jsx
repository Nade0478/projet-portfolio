import React from "react";
import "../styles/Dev.css";

export default function Dev() {
  return (
    <div className="dev-container">
      <h1 className="dev-title">Compétences Développement & Tech</h1>

      <div className="dev-grid">
        {/* HARD SKILLS */}
        <div className="dev-card">
          <h2>Hard Skills</h2>

          <h3>Intelligence Artificielle & Data (bases)</h3>
          <ul>
            <li>Modélisation prédictive (notions)</li>
            <li>Documentation des processus IA</li>
            <li>Analyse de données (bases)</li>
          </ul>

          <h3>Développement & No-Code</h3>
          <ul>
            <li>HTML, CSS, JavaScript, PHP, Laravel, Symfony, React</li>
            <li>CI/CD avec Docker</li>
            <li>Tests unitaires</li>
            <li>Création de sites web</li>
            <li>Outils no-code (notions)</li>
          </ul>

          <h3>Tests & Qualité</h3>
          <ul>
            <li>Méthodologie ISTQB</li>
            <li>Rédaction de cas de tests</li>
            <li>Exécution et suivi d’anomalies</li>
            <li>Vérification du comportement attendu</li>
          </ul>

          <h3>Cybersécurité</h3>
          <ul>
            <li>Sensibilisation aux risques</li>
            <li>Bonnes pratiques de sécurisation</li>
            <li>Analyse de vulnérabilités (bases)</li>
          </ul>

          <h3>Gestion de Projet</h3>
          <ul>
            <li>Méthodes agiles</li>
            <li>Analyse des besoins utilisateurs</li>
            <li>Organisation, priorisation</li>
            <li>Suivi de projet & reporting</li>
          </ul>
        </div>

        {/* SOFT SKILLS */}
        <div className="dev-card">
          <h2>Soft Skills</h2>
          <ul>
            <li>Communication claire</li>
            <li>Rigueur & sens du détail</li>
            <li>Créativité & innovation</li>
            <li>Adaptabilité & curiosité</li>
            <li>Travail en équipe</li>
            <li>Autonomie & responsabilités</li>
            <li>Apprentissage rapide</li>
            <li>Esprit analytique</li>
            <li>Empathie</li>
            <li>Organisation</li>
            <li>Polyvalence</li>
          </ul>
        </div>

        {/* OUTILS */}
        <div className="dev-card">
          <h2>Outils</h2>

          <h3>Développement & Web</h3>
          <ul>
            <li>Git, Github, VS Code</li>
            <li>Docker (CI/CD)</li>
            <li>Composer, NPM</li>
            <li>MySQL</li>
            <li>XAMPP, WAMP</li>
          </ul>

          <h3>Tests & Qualité</h3>
          <ul>
            <li>Jira, Trello</li>
            <li>Notion, Google Docs</li>
            <li>Squash TM</li>
            <li>Selenium</li>
          </ul>

          <h3>Gestion de Projet</h3>
          <ul>
            <li>Trello, Jira, Notion</li>
            <li>Excel / Google Sheets</li>
            <li>Outils Agile</li>
            <li>Reporting</li>
          </ul>

          <h3>IA & No-Code</h3>
          <ul>
            <li>Asana, Miro, Lucidchart</li>
            <li>Automatisation</li>
          </ul>

          <h3>Cybersécurité</h3>
          <ul>
            <li>Sensibilisation</li>
            <li>Analyse de vulnérabilités (bases)</li>
            <li>Bonnes pratiques</li>
          </ul>
        </div>

        {/* LANGAGES */}
        <div className="dev-card">
          <h2>Langages Informatiques</h2>

          <h3>Front-end</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>

          <h3>Back-end</h3>
          <ul>
            <li>PHP</li>
            <li>Java (notions)</li>
            <li>Python (notions)</li>
            <li>SQL</li>
          </ul>

          <h3>Frameworks Back-end</h3>
          <ul>
            <li>Laravel</li>
            <li>Symfony</li>
          </ul>

          <h3>Frameworks Front-end</h3>
          <ul>
            <li>React</li>
          </ul>

          <h3>Autres compétences</h3>
          <ul>
            <li>Diagrammes UML</li>
            <li>Conception d’applications</li>
            <li>Tests unitaires</li>
            <li>SEO</li>
            <li>Maquettage (wireframe, maquette)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
