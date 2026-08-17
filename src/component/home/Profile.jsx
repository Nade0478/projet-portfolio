import React from "react";

export default function Profile() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <img
        src="/photoPourLinkdin.jpg"
        alt="Nadège GAUTIER"
        style={{
          width: "200px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
        }}
      />
      <h1 style={{ marginTop: "50px" }}>Nadège GAUTIER</h1>
    </div>
  );
}
