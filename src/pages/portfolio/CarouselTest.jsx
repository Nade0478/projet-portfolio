import React from "react";
import CarouselCaptureTest from "../../component/CarouselCaptureTest.jsx";

function importAll(r) {
  return r.keys().map((key) => ({
    name: key.replace("./", ""),
    file: r(key),
  }));
}

const captures = importAll(
  require.context("../../assets/capture-test", false, /\.(png|jpe?g|svg)$/)
);

export default function CaptureTest() {
  return (
    <div className="page-container">
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Captures de Tests
      </h1>

      <CarouselCaptureTest captures={captures} />
    </div>
  );
}
