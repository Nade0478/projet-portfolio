import React from "react";
import CarouselCaptureConception from "../../component/CarouselCaptureConception.jsx";

function importAll(r) {
  return r.keys().map((key) => ({
    name: key.replace("./", ""),
    file: r(key),
  }));
}

const captures = importAll(
  require.context(
    "../../assets/capture-conception",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

export default function CaptureConception() {
  return (
    <div className="page-container">
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Captures de Conception
      </h1>

      <CarouselCaptureConception captures={captures} />
    </div>
  );
}
