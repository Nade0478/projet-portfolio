import React from "react";
import "../../styles/Contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Professionnel</h1>

      <div className="contact-card">
        <h2 className="contact-name">Mme GAUTIER Nadège</h2>

        <p>
          <strong>Localisation :</strong> Sarthe (72)
        </p>
        <p>
          <strong>Mobilité :</strong> Télétravail ou départements limitrophes
        </p>

        <p>
          <strong>Email :</strong>{" "}
          <a href="mailto:nade04ge@gmail.com">nade04ge@gmail.com</a>
        </p>

        <p>
          <strong>Téléphone :</strong> 06.65.31.48.42
        </p>

        <p>
          <strong>Permis :</strong> Permis B + véhicule
        </p>

        <p>
          <strong>Linkdin :</strong>{" "}
          https://www.linkedin.com/in/nadège-gautier-8b0b3b301
        </p>
      </div>
    </div>
  );
}
