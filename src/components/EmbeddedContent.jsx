import React from "react";
import "./EmbeddedContent.css";

const photoshoots = Array.from({ length: 8 }).map((_, i) => ({
  title: "Photoshoot Title",
  issue: "#4",
  thumbnail: "../Assets/Media/sample-thumb.png", // replace with actual path
}));

const EmbeddedContent = () => {
  return (
    <div className="embedded-container">
      <h1 className="embedded-title">Albums</h1>
      <h2 className="embedded-subtitle">Magazine Photoshoots</h2>

      <div className="grid-wrapper">
        {photoshoots.map((item, index) => (
          <div key={index} className="photo-card">
            <img src={item.thumbnail} alt={item.title} className="photo-thumb" />
            <div className="photo-title">{item.title}</div>
            <div className="photo-issue">issue {item.issue}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmbeddedContent;
