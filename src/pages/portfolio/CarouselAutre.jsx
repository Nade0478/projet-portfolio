import React from "react";
import CarouselCaptureAutre from "../../component/CarouselCaptureAutre";

function importAll(r) {
  return r.keys().map((key) => ({
    name: key.replace("./", ""),
    file: r(key),
  }));
}

const captures = importAll(
  require.context(
    "../../assets/capture-autre",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

export default function CaptureAutre() {
  return (
    <div className="page-container">
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Captures de Autres
      </h1>

      <CarouselCaptureAutre captures={captures} />
    </div>
  );
}
