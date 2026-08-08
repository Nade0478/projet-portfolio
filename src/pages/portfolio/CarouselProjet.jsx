import React from "react";
import CarouselCaptureProjet from "../../component/CarouselCaptureProjet.jsx";

function importAll(r) {
  return r.keys().map((key) => ({
    name: key.replace("./", ""),
    file: r(key),
  }));
}

const captures = importAll(
  require.context(
    "../../assets/capture-projet",
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

      <CarouselCaptureProjet captures={captures} />
    </div>
  );
}
