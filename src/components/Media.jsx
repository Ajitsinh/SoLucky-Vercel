import React, { useState } from "react";
import './Media.css';
import Footer from './Footer';
import EmbeddedContent from "./EmbeddedContent";

const Media = () => {
    return(
        <div className="media-page">
            <div className="video-text-container">
            <video autoPlay loop muted playsInline>
                <source src="../Assets/Media/text-video.mp4" type="video/mp4" />
            </video>
            <div className="text-box-media">
                <h1 className="media-header-text">MEDIA</h1>
            </div>
            </div>



            <div className="media-info-container">
                <div className="media-info-title">
                    our creative evolution
                </div>
                <div className="media-paragraph-text">
                    At <i>solucky</i>, our team's creativity shines through captivating editorial content.
                    Every few months, we release a magazine issue featuring three to four main photoshoots,
                    showcasing artistic flair & countless hours of dedication to an eccentric theme. From 
                    our early days to now, our media reflects a growing community driven by collaboration,
                    creativity, & storytelling. Explore photos, videos, & highlights from our magazine issues,
                    events, & collaborations, capturing the evolution of our brand.
                </div>
            </div>

           <div className="macbook-interact-container">
                <div className="interact-text-wrapper">
                    <img className="media-arrow-svg" src="../Assets/Media/interact-text-arrow.svg" />
                </div>

                <div className="macbook-image-wrapper">
                    <img className="macbook-image" src="../Assets/Media/macbook.svg" />
                    <div className="laptop-screen-frame">
                        <div className="embedded-frame-wrapper">
                            <EmbeddedContent />
                        </div>
                    </div>
                </div>
            </div>

            <div className="small-screen-interact-container">
                <div className="alt-interact-text-wrapper">
                    <img className="alt-media-arrow-svg" src="../Assets/Media/alt-interact-text-arrow.svg" />
                </div>
                <div className="magazine-photoshoot-container">
                    <div className="magazine-card">
                        <img src="../Assets/Media/sample-thumb.png" alt="Photoshoot Cover" className="magazine-thumbnail" />
                        <div className="magazine-title">Photoshoot Title</div>
                        <div className="magazine-issue">issue #4</div>
                    </div>
                    <div className="magazine-card">
                        <img src="../Assets/Media/sample-thumb.png" alt="Photoshoot Cover" className="magazine-thumbnail" />
                        <div className="magazine-title">Photoshoot Title</div>
                        <div className="magazine-issue">issue #4</div>
                    </div>
                    <div className="magazine-card">
                        <img src="../Assets/Media/sample-thumb.png" alt="Photoshoot Cover" className="magazine-thumbnail" />
                        <div className="magazine-title">Photoshoot Title</div>
                        <div className="magazine-issue">issue #4</div>
                    </div>
                    <div className="magazine-card">
                        <img src="../Assets/Media/sample-thumb.png" alt="Photoshoot Cover" className="magazine-thumbnail" />
                        <div className="magazine-title">Photoshoot Title</div>
                        <div className="magazine-issue">issue #4</div>
                    </div>
                    <div className="magazine-card">
                        <img src="../Assets/Media/sample-thumb.png" alt="Photoshoot Cover" className="magazine-thumbnail" />
                        <div className="magazine-title">Photoshoot Title</div>
                        <div className="magazine-issue">issue #4</div>
                    </div>
                    <div className="magazine-card">
                        <img src="../Assets/Media/sample-thumb.png" alt="Photoshoot Cover" className="magazine-thumbnail" />
                        <div className="magazine-title">Photoshoot Title</div>
                        <div className="magazine-issue">issue #4</div>
                    </div>
                    <div className="magazine-card">
                        <img src="../Assets/Media/sample-thumb.png" alt="Photoshoot Cover" className="magazine-thumbnail" />
                        <div className="magazine-title">Photoshoot Title</div>
                        <div className="magazine-issue">issue #4</div>
                    </div>
                    
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Media