import React from "react";
import CarouselCaptureCodeDeploiement from "../../component/CarouselCaptureCodeDeploiement";

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

export default function CaptureDeveloppement() {
  return (
    <div className="page-container">
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Captures de Développement
      </h1>

      <CarouselCaptureCodeDeploiement captures={captures} />
    </div>
  );
}
