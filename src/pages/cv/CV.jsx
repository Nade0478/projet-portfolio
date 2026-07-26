import React from "react";
import CarrouselCV from "../../component/CarrouselCV";

// Import des PDF
// import CvDev from "../../assets/cv/cv-developpeur-cda.pdf";
// import CvTest from "../../assets/cv/cv-testeur-istqb.pdf";
import CvChefProjet from "../../assets/cv/cv-chef-projet.pdf";
// import CvArch from "../../assets/cv/cv-architecture-application.pdf";

import "../../styles/Pages.css";

export default function CV() {
  const cvs = [
    // { name: "CV Développeuse / CDA", file: CvDev },
    // { name: "CV Testeur ISTQB", file: CvTest },
    { name: "CV Cheffe de Projet IA", file: CvChefProjet },
    // { name: "CV Architecture & Application", file: CvArch },
  ];

  return (
    <div className="page-container">


      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Mes CV Professionnels
      </h1>

      <CarrouselCV cvs={cvs} />

    </div>
  );
}
