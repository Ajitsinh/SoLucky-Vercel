// src/components/Events.jsx

import React, { useState, useEffect } from "react";
import "./Events.css";
import Footer from "./Footer";
import Gallery from "./Gallery";

const stripPhrases = [
    "From SF to LA & NYC: Broadening Our Events in 2025 ✈️",
    "Get Lucky: St. Patty's Celebration 2025 🍀",
    "Celebrate With Us: Our 5th Anniversary 🥂",
    "Paint the Town: Holi 2025 🌈",
    "Jingle & Mingle: Christmas Party 2025 🎄",
  ];

const galleryData = {
  "the-chai-room": {
    title: "The Chai Room",
    date: "AUGUST 25ᵗʰ 2023",
    description:
      "The celebration of solucky’s fourth anniversary as a creative brand took place at an unforgettable Boiler Room event in collaboration with Casino Bleu. On Friday, 8/25, the event brought together a lively crowd for a night of dancing and drinks near the University of California, Berkeley.",
    images: [
      "/Assets/Galleries/Event-gallery/4th-anni/000057060001.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060003.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060004.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060005.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060007.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060008.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060009.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060010.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060011.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060013.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060014.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060015.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060017.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060018.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060019.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060020.JPG",
    ],
  },

  "4th-anni": {
    title: "4TH ANNIVERSARY",
    date: "AUGUST 25ᵗʰ 2023",
    description:
      "The celebration of solucky’s fourth anniversary as a creative brand took place at an unforgettable Boiler Room event in collaboration with Casino Bleu. On Friday, 8/25, the event brought together a lively crowd for a night of dancing and drinks near the University of California, Berkeley.",
    images: [
      "/Assets/Galleries/Event-gallery/4th-anni/000057060001.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060003.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060004.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060005.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060007.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060008.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060009.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060010.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060011.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060013.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060014.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060015.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060017.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060018.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060019.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060020.JPG",
    ],
  },

  "diwali-event": {
    title: "DIWALI CELEBRATION",
    date: "NOVEMBER 12ᵗʰ 2023",
    description: "A colorful evening of lights, lanterns, and community.",
    images: [
      "/Assets/Galleries/Event-gallery/diwali-event/DSC03366.JPG",
      "/Assets/Galleries/Event-gallery/diwali-event/DSC03385.JPG",
      "/Assets/Galleries/Event-gallery/diwali-event/DSC03389.JPG",
      "/Assets/Galleries/Event-gallery/diwali-event/DSC03396.JPG",
      "/Assets/Galleries/Event-gallery/diwali-event/DSC03455.JPG",
      "/Assets/Galleries/Event-gallery/diwali-event/DSC03458.JPG",
      "/Assets/Galleries/Event-gallery/diwali-event/DSC03474.JPG",
      "/Assets/Galleries/Event-gallery/diwali-event/DSC03478.JPG",
      "/Assets/Galleries/Event-gallery/diwali-event/DSC03482.JPG",
      "/Assets/Galleries/Event-gallery/diwali-event/DSC03485.JPG",
      "/Assets/Galleries/Event-gallery/diwali-event/DSC03507.JPG",
      "/Assets/Galleries/Event-gallery/diwali-event/DSC03510.JPG",
      "/Assets/Galleries/Event-gallery/diwali-event/DSC03514.JPG",
      "/Assets/Galleries/Event-gallery/diwali-event/DSC03515.JPG",
      "/Assets/Galleries/Event-gallery/diwali-event/DSC03518.JPG",
      "/Assets/Galleries/Event-gallery/diwali-event/DSC03520.JPG",
      "/Assets/Galleries/Event-gallery/diwali-event/DSC03527.JPG",
      "/Assets/Galleries/Event-gallery/diwali-event/DSC03530.JPG",
      "/Assets/Galleries/Event-gallery/diwali-event/DSC03531.JPG",
      "/Assets/Galleries/Event-gallery/diwali-event/DSC03534.JPG",
      "/Assets/Galleries/Event-gallery/diwali-event/DSC03554.JPG",
    ],
  },

  "halloween-event": {
    title: "HALLOWEEN SPOOK",
    date: "OCTOBER 31ˢᵗ 2023",
    description: "Costumes, candy, and a dash of mischief!",
    images: [
      "/Assets/Galleries/Event-gallery/4th-anni/000057060001.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060003.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060004.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060005.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060007.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060008.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060009.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060010.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060011.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060013.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060014.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060015.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060017.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060018.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060019.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060020.JPG",
    ],
  },

  "3rd-anni": {
    title: "3RD ANNIVERSARY",
    date: "AUGUST 25ᵗʰ 2022",
    description: "Our third-year celebration at the Boiler Room.",
    images: [
      "/Assets/Galleries/Event-gallery/4th-anni/000057060001.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060003.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060004.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060005.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060007.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060008.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060009.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060010.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060011.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060013.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060014.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060015.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060017.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060018.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060019.JPG",
      "/Assets/Galleries/Event-gallery/4th-anni/000057060020.JPG",
    ],
  },

  "clothing-tour": {
    title: "CLOTHING TOUR",
    date: "MAY 14ᵗʰ 2023",
    description: "A pop-up tour of local fashion boutiques.",
    images: [
      "/Assets/Galleries/Event-gallery/clothing-tour/IMG_0001.JPG",
      "/Assets/Galleries/Event-gallery/clothing-tour/IMG_0003.JPG",
      "/Assets/Galleries/Event-gallery/clothing-tour/IMG_0005.JPG",
      "/Assets/Galleries/Event-gallery/clothing-tour/IMG_0010.JPG",
      "/Assets/Galleries/Event-gallery/clothing-tour/IMG_0021.JPG",
      "/Assets/Galleries/Event-gallery/clothing-tour/IMG_8438.JPG",
      "/Assets/Galleries/Event-gallery/clothing-tour/IMG_8440.JPG",
      "/Assets/Galleries/Event-gallery/clothing-tour/IMG_8442.JPG",
      "/Assets/Galleries/Event-gallery/clothing-tour/IMG_8443.JPG",
      "/Assets/Galleries/Event-gallery/clothing-tour/IMG_8446.JPG",
      "/Assets/Galleries/Event-gallery/clothing-tour/IMG_8447.JPG",
      "/Assets/Galleries/Event-gallery/clothing-tour/IMG_8448.JPG",
      "/Assets/Galleries/Event-gallery/clothing-tour/IMG_8449.JPG",
      "/Assets/Galleries/Event-gallery/clothing-tour/IMG_8450.JPG",
      "/Assets/Galleries/Event-gallery/clothing-tour/IMG_8451.JPG",
      "/Assets/Galleries/Event-gallery/clothing-tour/IMG_8453.JPG",
      "/Assets/Galleries/Event-gallery/clothing-tour/IMG_8454.JPG",
      "/Assets/Galleries/Event-gallery/clothing-tour/IMG_8459.JPG",
      "/Assets/Galleries/Event-gallery/clothing-tour/IMG_8461.JPG",
    ],
  },
};


const Events = () => {
  const [openGalleryKey, setOpenGalleryKey] = useState(null);
  const [stripIndex, setStripIndex] = useState(0);
  const data = openGalleryKey ? galleryData[openGalleryKey] : null;

  useEffect(() => {
      const id = setInterval(() => {
        setStripIndex(i => (i + 1) % stripPhrases.length);
      }, 4000);                // change every 4 seconds
      return () => clearInterval(id);
    }, []);

  return (
    <div className="events-page">
      {/* Landing and intro sections */}
      <section className="landing-section">
        <div className="iphone-paragraph-container">
          <div className="iphone-container">
            <img src="../Assets/Events/stay-tuned2.svg" className="stay-tuned-alt" alt="stay tuned"/>
            <img src="../Assets/Events/iphone.png" className="iphone-pic" alt="iphone"/>
          </div>

          <div className="para-text-container">
            <img className="the-art-of-text" src="../Assets/Events/theartof-text.png"alt="the art of"/>
            <p className="events-header-text">connection</p>
            <p className="events-para-text">
              Our brand thrives on bringing creative energy to life through events
              & pop-up shops that foster community connections. From our
              anniversary parties to holiday celebrations, each gathering
              highlights culture, collaboration, & artistry.
            </p>
            <p className="events-para-text">
              Moving forward, plan to expand our events with casual picnics,
              cultural celebrations, immersive experiences, & more. We aim to
              unite people in fresh & impactful ways, crafting memorable moments
              beyond the pages of our magazine.
            </p>
            <img className="stay-tuned-text" src="../Assets/Events/stay-tuned-text.svg" alt="stay tuned" />
          </div>
        </div>
      </section>

      {/* Separator strip */}
      <section className="moving-strip">
        <p className="strip-text">{stripPhrases[stripIndex]}</p>
      </section>

      <section className="events-media-mobile-container">
        <img src="../Assets/Events/events-media-tablet-text.svg" className="events-media-tablet-text"></img>
      </section>

      {/* Events thumbnails */}
      <section className="events-section">
        {Object.keys(galleryData).map((key) => (
          <div className="hover-section" key={key}>
            <img
              src={`../Assets/Events/${key}.png`}
              className="event-picture"
              alt={key}
            />
            <button
              type="button"
              className="gallery-button"
              onClick={() => setOpenGalleryKey(key)}
            >
              <p className="event-button-text">view</p>
            </button>
          </div>
        ))}
      </section>

      {/* Gallery modal */}
      {openGalleryKey && (
        <Gallery
          images={data.images}
          title={data.title}
          date={data.date}
          description={data.description}
          onClose={() => setOpenGalleryKey(null)}
      />
      )}

      <Footer />
    </div>
  );
};

export default Events;
