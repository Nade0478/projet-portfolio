import React from "react";
import "../../styles/home.css";

export default function Contact() {
  return (
    <div className="container">
      <div className="form-container contact-card">
        <h2 className="form-section-title">Contact Professionnel</h2>

        <div className="contact-info">
          <p>
            <strong>Nom :</strong> Mme GAUTIER Nadège
          </p>
          <p>
            <strong>Localisation :</strong> Sarthe (72)
          </p>
          <p>
            <strong>Mobilité :</strong> Télétravail ou départements limitrophes
          </p>
          <p>
            <strong>Email :</strong>
            <a href="mailto:nade04ge@gmail.com">nade04ge@gmail.com</a>
          </p>
          <p>
            <strong>Téléphone :</strong> 06.65.31.48.42
          </p>
          <p>
            <strong>Permis :</strong> Permis B + véhicule
          </p>
        </div>
      </div>
    </div>
  );
}
