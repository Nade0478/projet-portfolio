import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CarouselCaptureTest({ captures }) {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((index - 1 + captures.length) % captures.length);
  };

  const next = () => {
    setIndex((index + 1) % captures.length);
  };

  return (
    <div className="cv-carousel">
      <h2>{captures[index].name}</h2>

      <div className="cv-viewer">
        <img
          src={captures[index].file}
          alt={captures[index].name}
          width="100%"
          style={{ maxHeight: "500px", objectFit: "contain" }}
        />
      </div>

      <div className="cv-buttons">
        <button onClick={prev}>◀ Précédent</button>

        <a
          href={captures[index].file}
          target="_blank"
          rel="noopener noreferrer"
          className="open-pdf"
        >
          Ouvrir l’image
        </a>

        <button onClick={next}>Suivant ▶</button>

        <Link to="/metier/test" className="open-pdf">
          Retour à la formation ISTQB
        </Link>
      </div>
    </div>
  );
}
