import React from "react";
import CarouselCaptureCodeDeploiement from "../../component/CarouselCaptureCodeDeploiement.jsx";

function importAll(r) {
  return r.keys().map((key) => ({
    name: key.replace("./", ""),
    file: r(key),
  }));
}

const captures = importAll(
  require.context(
    "../../assets/capture-code-deploiement",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

export default function CaptureDeploiement() {
  return (
    <div className="page-container">
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Captures de Déploiement
      </h1>

      <CarouselCaptureCodeDeploiement captures={captures} />
    </div>
  );
}
