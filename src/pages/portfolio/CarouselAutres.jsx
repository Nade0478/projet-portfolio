import React from "react";
import CarrouselCaptureAutres from "../../component/CarouselCaptureAutres.jsx";

function importAll(r) {
  return r.keys().map((key) => ({
    name: key.replace("./", ""),
    file: r(key),
  }));
}

const captures = importAll(
  require.context(
    "../../assets/capture-autres",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

export default function CaptureAutres() {
  return (
    <div className="page-container">
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Captures de Autres
      </h1>

      <CarrouselCaptureAutres captures={captures} />
    </div>
  );
}
