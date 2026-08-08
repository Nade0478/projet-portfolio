import React, { useState } from "react";

export default function CarouselCV({ cvs }) {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((index - 1 + cvs.length) % cvs.length);
  };

  const next = () => {
    setIndex((index + 1) % cvs.length);
  };

  return (
    <div className="cv-carousel">
      <h2>{cvs[index].name}</h2>

      <div className="cv-viewer">
        <embed
          src={cvs[index].file}
          type="application/pdf"
          width="100%"
          height="500px"
        />
      </div>

      <div className="cv-buttons">
        <button onClick={prev}>◀ Précédent</button>
        <a
          href={cvs[index].file}
          target="_blank"
          rel="noopener noreferrer"
          className="open-pdf"
        >
          Ouvrir le PDF
        </a>
        <button onClick={next}>Suivant ▶</button>
      </div>
    </div>
  );
}
