import React from "react";
import CarrouselCaptureTests from "./CarouselTests.jsx";

function importAll(r) {
  return r.keys().map((key) => ({
    name: key.replace("./", ""),
    file: r(key),
  }));
}

const captures = importAll(
  require.context("../../assets/capture-tests", false, /\.(png|jpe?g|svg)$/)
);

export default function CaptureTests() {
  return (
    <div className="page-container">
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Captures de Tests
      </h1>

      <CarrouselCaptureTests captures={captures} />
    </div>
  );
}
