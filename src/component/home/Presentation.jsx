import React from "react";
import "../../styles/Styles.css";

export default function Presentation() {
  return (
    <div className="Presentation-container">
      <h2 className="Presentation-title">
        Développeuse Web • Testeuse Logicielle • Assistante Cheffe de Projet
      </h2>
      <h3 className="Presentation-container">
        Un Profil Polyvalent et Orienté Qualité
      </h3>

      <div className="Presentation-grid">
        {/* PRESENTATION */}
        <div className="Presentation-card">
          <div className="Presentation-box">
            {/* <h2>
            Développeuse Web • Testeuse Logicielle • Assistante Cheffe de Projet
          </h2> */}

            <h4>
              Passionnée par le développement web, les tests logiciels et la
              gestion de projet, j’accompagne les entreprises dans la création
              de solutions fiables, modernes et sécurisées. En reconversion
              professionnelle, je combine rigueur, créativité et sens de
              l’organisation pour mener à bien chaque mission.
            </h4>

            <h4>
              Après plusieurs années d’expérience dans des secteurs variés -
              énergies renouvelables, assurances, traitement de l’eau,
              formation, santé et administratif - ainsi que plus de cinq ans en
              tant qu’entrepreneuse, j’ai développé une véritable polyvalence et
              une capacité d’adaptation à des environnements professionnels très
              différents. Ces expériences m’ont permis d’acquérir une rigueur
              solide, une organisation efficace et une aisance naturelle à gérer
              des missions diverses, souvent simultanées. Forte de ce parcours
              riche et multidisciplinaire, j’ai décidé d’opérer une reconversion
              professionnelle vers les métiers du développement et du test
              logiciel, afin de travailler enfin dans un domaine qui me
              passionne réellement. Aujourd’hui, je mets à profit ma curiosité,
              ma capacité d’apprentissage rapide et mon sens de la qualité pour
              devenir développeuse full stack et testeuse certifiée ISTQB, avec
              l’ambition de créer des solutions fiables, utiles et pensées pour
              les utilisateurs.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
