import React from "react";
import CarouselCaptureSecurity from "../../component/CarouselCaptureSecurity.jsx";

function importAll(r) {
  return r.keys().map((key) => ({
    name: key.replace("./", ""),
    file: r(key),
  }));
}

const captures = importAll(
  require.context("../../assets/capture-security", false, /\.(png|jpe?g|svg)$/)
);

export default function CaptureSecurity() {
  return (
    <div className="page-container">
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Captures de Cybersécurité
      </h1>

      <CarouselCaptureSecurity captures={captures} />
    </div>
  );
}
