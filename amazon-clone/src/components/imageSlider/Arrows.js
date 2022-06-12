import React from "react";

export default function Arrows({ prevSlide, nextSlide }) {
  return (
    <div className="arrows">
      <div className="arrows__prev" onClick={prevSlide}>
        &#10094;
      </div>
      <div className="arrows__next" onClick={nextSlide}>
        &#10095;
      </div>
    </div>
  );
}
