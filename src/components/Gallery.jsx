import React, { useState } from "react";
import "./Gallery.css";

export default function Gallery({
  title,
  date,
  description,
  images,
  onClose,
}) {
  const [index, setIndex] = useState(0);
  const total = images.length;

  // helper to wrap around
  const prevSlide = () => setIndex((i) => (i - 1 + total) % total);
  const nextSlide = () => setIndex((i) => (i + 1) % total);

  // pick the next three indices
  const thumbs = [1, 2, 3].map((off) => (index + off) % total);

  return (
    <div className="gallery-overlay">
      <div className="gallery-container">

        {/* left sidebar */}
        <div className="gallery-sidebar">
          <button className="thumb-nav gallery-buttons" onClick={prevSlide}>
            <img src="../Assets/Galleries/arrow-up.svg" alt="<-" className="back-button-gallery back-next"></img>
          </button>
          {thumbs.map((ti) => (
            <img
              key={ti}
              className="gallery-thumb"
              src={images[ti]}
              alt={`thumb ${ti + 1}`}
              onClick={() => setIndex(ti)}
            />
          ))}
          <button className="thumb-nav gallery-buttons" onClick={nextSlide}>
          <img src="../Assets/Galleries/arrow-down.svg" alt="<-" className="back-button-gallery back-previous"></img>
          </button>
        </div>

        {/* main panel */}
        <div className="gallery-main">
          <div className="gallery-header">
            <div className="gallery-wrapper-top">
              <div className="gallery-title">
                <button className="gallery-close gallery-buttons" onClick={onClose}>
                  <img src="../Assets/Galleries/arrow-back.svg" alt="<-" className="back-button-gallery"></img>
                </button>
                {title}
                <img className="gallery-icon-svg" src="../Assets/Galleries/gallery-seperator.svg"></img>
              </div>
              <div className="gallery-date">{date}</div>
            </div>
            <div className="gallery-wrapper-bottom">
              {description && (
                <p className="gallery-description">{description}</p>
              )}   
            </div>
          </div>

          <div className="gallery-content">
            <img
              className="gallery-image"
              src={images[index]}
              alt={`slide ${index + 1}`}
            />
          </div>

          <div className="gallery-counter">
            {index + 1} / {total}
          </div>
        </div>
      </div>
    </div>
  );
}
