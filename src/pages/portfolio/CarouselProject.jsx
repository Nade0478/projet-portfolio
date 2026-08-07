import React from "react";
import CarrouselCaptureProject from "../../component/CarouselCaptureProject.jsx";

function importAll(r) {
  return r.keys().map((key) => ({
    name: key.replace("./", ""),
    file: r(key),
  }));
}

const captures = importAll(
  require.context(
    "../../assets/capture-project",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

export default function CaptureProject() {
  return (
    <div className="page-container">
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Captures de Projet
      </h1>

      <CarrouselCaptureProject captures={captures} />
    </div>
  );
}
