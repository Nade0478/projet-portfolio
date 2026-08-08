import React from "react";
import CarouselCV from "../../component/CarouselCV";
import "../../styles/Pages.css";

// Fonction pour importer automatiquement tous les fichiers PDF du dossier
function importAll(r) {
  return r.keys().map((key) => ({
    name: key.replace("./", "").replace(".pdf", ""),
    file: r(key),
  }));
}

// On récupère tous les CV du dossier assets/cv
const cvs = importAll(require.context("../../assets/cv", false, /\.pdf$/));

export default function CV() {
  return (
    <div className="page-container">
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Mes CV Professionnels
      </h1>

      <CarouselCV cvs={cvs} />
    </div>
  );
}
