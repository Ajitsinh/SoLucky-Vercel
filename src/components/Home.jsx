import React, { useState, useEffect } from "react";
import './Home.css'
import sep from "./src-assets/four-leaf-clover.png";
import Footer from "./Footer";
import Flipbook from "./Flipbook";
import { Link } from "react-router-dom";


const labels = [
    "TIMELESS",
    "LUCKY",
    "WOC OWNED",
    "PASSIONATE",
    "BAY AREA",
    "AUTHENTIC",
    "CREATIVE",
  ];

const Home = () =>{
    const loop = [...labels, ...labels];

    const videoOptions = [
        "../Assets/Home/home_video1.mp4",
        "../Assets/Home/home_video2.mp4",
    ];

    const randomVideo = videoOptions[Math.floor(Math.random() * videoOptions.length)];

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.body.classList.toggle("loading", loading);
    }, [loading]);
    return (
        <>
              {loading && (
                    <div className="loading-overlay">
                    <video
                        className="loading-video"
                        src="/Assets/Home/loading-screen.mp4"
                        autoPlay
                        muted
                        playsInline
                        onEnded={() => setLoading(false)}
                    />
                    </div>
                )}
        
            <div className="home-page" style={{ visibility: loading ? "hidden" : "visible" }}>
            {/* ——— Hero (full-section video) ——— */}
                <section className="hero-section-home">
                    <div className="hero-image-wrapper">
                        <img
                        src="../Assets/Home/hero-image.svg"
                        alt="hero"
                        className="hero-bg-image"
                        />
                        <div className="tv-video-overlay">
                        <video
                            src={randomVideo}
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                        </div>
                    </div>
                </section>


                <section className="strip-section">
                    <div className="strip-container">
                    <div className="strip-content">
                        {loop.map((word, i) => (
                        <React.Fragment key={i}>
                            <span className="strip-text-item">{word}</span>
                            <img
                            src={sep}
                            alt=""
                            className="strip-separator"
                            />
                        </React.Fragment>
                        ))}
                    </div>
                    </div>
                </section>
        
                <section className="whats-new-section">
                    <div className="whats-new-left">
                        <h2 className="whats-new-title">what’s new</h2>
                        <p className="whats-new-subtitle">
                            with <i>solucky?</i>
                        </p>
                        <p className="whats-new-tagline">the creative brand</p>
                    </div>
                    <div className="whats-new-right">
                    <p className='paragraph-message-home'>
                        Welcome to our website – take your time to browse around. We’ve got
                        lots of exciting stuff coming up, so keep an eye out for
                        announcements, events, new inventory/merch, & more as we continue
                        to grow our brand.
                    </p>
                    <p className='paragraph-message-home'>
                        “Our talented & devoted contributors team just released issue #25
                        – Winter 2025, themed ‘Clocked In’, a powerful tribute to trendy
                        corporate culture through the lens of Women’s History Month &
                        Black History Month. With an all-female cast & an extra focus on
                        Black women, this issue showcases the creativity of the modern
                        working women – capturing power dressing, leadership, & the bold
                        new era of corporate fashion (including the non-HR friendly).”
                    </p>
                    </div>
                </section>

                <section className="cards-section">
                    <Link to="/shop" className="card-link-wrapper">
                        <div className="card">
                            <div className="card-inner">
                            <div className="card-face card-back">
                                <img src="../Assets/Home/card-back-1.png" alt="card back 1" />
                            </div>
                            <div className="card-face card-front">
                                <img src="../Assets/Home/card-front-1.png" alt="card front 1" />
                            </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/magazine" className="card-link-wrapper">
                        <div className="card">
                            <div className="card-inner">
                                <div className="card-face card-back">
                                    <img src="../Assets/Home/card-back-1.png" alt="card back 1" />
                                </div>
                                <div className="card-face card-front">
                                    <img src="../Assets/Home/card-front-2.png" alt="card front 1" />
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/media" className="card-link-wrapper">
                        <div className="card">
                            <div className="card-inner">
                                <div className="card-face card-back">
                                    <img src="../Assets/Home/card-back-1.png" alt="card back 1" />
                                </div>
                                <div className="card-face card-front">
                                    <img src="../Assets/Home/card-front-3.png" alt="card front 1" />
                                </div>
                            </div>
                        </div>
                    </Link>    
                    <Link to="/collabs" className="card-link-wrapper">        
                        <div className="card">
                            <div className="card-inner">
                                <div className="card-face card-back">
                                    <img src="../Assets/Home/card-back-1.png" alt="card back 1" />
                                </div>
                                <div className="card-face card-front">
                                    <img src="../Assets/Home/card-front-4.png" alt="card front 1" />
                                </div>
                            </div>
                        </div>
                    </Link>    
                    <Link to="/events" className="card-link-wrapper">
                        <div className="card">
                            <div className="card-inner">
                                <div className="card-face card-back">
                                    <img src="../Assets/Home/card-back-1.png" alt="card back 1" />
                                </div>
                                <div className="card-face card-front">
                                    <img src="../Assets/Home/card-front-5.png" alt="card front 1" />
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/team" className="card-link-wrapper">
                        <div className="card">
                            <div className="card-inner">
                                <div className="card-face card-back">
                                    <img src="../Assets/Home/card-back-1.png" alt="card back 1" />
                                </div>
                                <div className="card-face card-front">
                                    <img src="../Assets/Home/card-front-6.png" alt="card front 1" />
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/about" className="card-link-wrapper">
                        <div className="card">
                            <div className="card-inner">
                                <div className="card-face card-back">
                                    <img src="../Assets/Home/card-back-1.png" alt="card back 1" />
                                </div>
                                <div className="card-face card-front">
                                    <img src="../Assets/Home/card-front-7.png" alt="card front 1" />
                                </div>
                            </div>
                        </div>
                    </Link>    
                </section>

                <section className="flipbook-section">
                    <div className='flipbook-arrow-container'>
                        <img src='../Assets/Home/issue-number-pointer.svg' className='arrow-image-1' alt='newest-issue-below'></img>
                        <img src='../Assets/Home/click2read-pointer.svg' className='arrow-image-1' alt='flip-to-read' ></img>
                    </div>
                    <div className='flipbook-canvas'>
                        <Flipbook />
                    </div>
                </section>

                <section className='spotify-playlist-section'>
                    <div className='playlist-container'>
                        <div className='spotify-pointer-container'>
                            <img src='../Assets/Home/spotify-pointer.svg' className='arrow-image-2' alt='exlpore spotify' ></img>   
                        </div>
                        <iframe
                            style={{ borderRadius: '12px' }}
                            src="https://open.spotify.com/embed/playlist/3qZK3tcLI27PBDhsnwX5uM?utm_source=generator"
                            width="100%"
                            height="540"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        />
                    </div>
                </section>
                <Footer/>
            </div>
        </>
      );
}

export default Home;