import React, {useState} from 'react';
import './Collabs.css';
import Footer from './Footer';
import Gallery from './Gallery';

const teamBTS_Images = [
    "/Assets/Galleries/Event-gallery/diwali-event/DSC03534.JPG",
    "/Assets/Galleries/Event-gallery/diwali-event/DSC03554.JPG",
    "/Assets/Galleries/Event-gallery/diwali-event/DSC03534.JPG",
    "/Assets/Galleries/Event-gallery/diwali-event/DSC03554.JPG",
    "/Assets/Galleries/Event-gallery/diwali-event/DSC03534.JPG",
    "/Assets/Galleries/Event-gallery/diwali-event/DSC03554.JPG",
    "/Assets/Galleries/Event-gallery/diwali-event/DSC03534.JPG",
    "/Assets/Galleries/Event-gallery/diwali-event/DSC03554.JPG",
  ];

const Collabs = () =>{
    const [openGallery, setOpenGallery] = useState(false);

    return(
        <div className="collabs-page">
            <div className="top-section">
                <div className="content-container-div">
                    <div className="top-content-wrapper">
                        <div className="create-image-container">
                            <img className="svg-bracelet-tablet" alt="bracelet" src="../Assets/Collabs/bracelet-tablet.svg"></img>
                            <img className="svg-image" alt="create-with-solucky" src="../Assets/Collabs/create-image.svg"></img>
                            <img className="svg-bracelet" alt="bracelet" src="../Assets/Collabs/bracelet.svg"></img>
                        </div>
                        <div className="collab-paragraph-container">
                            <div className="collab-para-text">
                                A <b>collaboration</b> with <i>solucky</i> creates a <b>seamless partnership </b>
                                between your business & our creative brand. Simply send us 
                                your products, & our team of experts including models, 
                                production crew, & creative directors will take care of the
                                rest. After the shoot(s), we’ll return your products along
                                with high-quality content that you can freely use across 
                                your social media platforms.
                            </div>
                            <div className="collab-para-text">
                                Additionally, this content will be featured on our social 
                                media channels & website, expanding your reach & boosting 
                                engagement. <b>All that we ask</b> in return is that you credit our 
                                brand & team, along with our collaboration title. If desired, 
                                we’re happy to collaborate on the creative direction, ensuring 
                                <b> a vision both parties love</b>.
                            </div>
                            <div className="collab-para-text">
                                Email <b>solucky.contact@gmail.com</b> to collab with us!
                            </div>
                            <div className="mobile-tag-container">
                                <img className="bracelet-tag" alt="tag" src="../Assets/Collabs/collab-tag-1.svg"></img>
                                <img className="bracelet-tag" alt="tag" src="../Assets/Collabs/collab-tag-2.svg"></img>
                                <img className="bracelet-tag" alt="tag" src="../Assets/Collabs/collab-tag-3.svg"></img>
                                <img className="bracelet-tag" alt="tag" src="../Assets/Collabs/collab-tag-4.svg"></img>
                                <img className="bracelet-tag" alt="tag" src="../Assets/Collabs/collab-tag-5.svg"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bottom-section">
                <div className="view-archive-text-container">
                    <img className="view-archive-svg" src="../Assets/Collabs/view-archive-text.svg"></img>
                </div>
                <div className="horizontal-scroll-section-collab">

                    <div className="collab-container">
                        <div className="hover-section-collab">
                            <img
                            className="collab-image"
                            src="../Assets/Collabs/collab-19.png"
                            alt="merazine"
                            />
                            <button
                            type="button"
                            className="collab-button"
                            onClick={() => setOpenGallery(true)}
                            >
                            view
                            </button>
                            {openGallery && (
                                <Gallery
                                title="Merazine"
                                date="last updated may 2025"
                                images={teamBTS_Images}
                                onClose={() => setOpenGallery(false)}
                                />
                            )}
                        </div>
                        <div className="collab-caption">merazine</div>
                    </div>

                    <div className="collab-container">
                        <div className="hover-section-collab">
                            <img
                            className="collab-image"
                            src="../Assets/Collabs/collab-20.png"
                            alt="classic loot"
                            />
                            <button
                            type="button"
                            className="collab-button"
                            onClick={() => setOpenGallery(true)}
                            >
                            view
                            </button>
                            {openGallery && (
                                <Gallery
                                title="Classic Loot"
                                date="last updated may 2025"
                                images={teamBTS_Images}
                                onClose={() => setOpenGallery(false)}
                                />
                            )}
                        </div>
                        <div className="collab-caption">classic loot</div>
                    </div>

                    <div className="collab-container">
                        <div className="hover-section-collab">
                            <img
                            className="collab-image"
                            src="../Assets/Collabs/collab-21.png"
                            alt="the chai room"
                            />
                            <button
                            type="button"
                            className="collab-button"
                            onClick={() => setOpenGallery(true)}
                            >
                            view
                            </button>
                            {openGallery && (
                                <Gallery
                                title="The Chai Room"
                                date="last updated may 2025"
                                images={teamBTS_Images}
                                onClose={() => setOpenGallery(false)}
                                />
                            )}
                        </div>
                        <div className="collab-caption">the chai room</div>
                    </div>

                    <div className="collab-container">
                        <div className="hover-section-collab">
                            <img
                            className="collab-image"
                            src="../Assets/Collabs/collab-1.png"
                            alt="snap choreography"
                            />
                            <button
                            type="button"
                            className="collab-button"
                            onClick={() => setOpenGallery(true)}
                            >
                            view
                            </button>
                            {openGallery && (
                                <Gallery
                                title="Snap Choreography"
                                date="last updated may 2025"
                                images={teamBTS_Images}
                                onClose={() => setOpenGallery(false)}
                                />
                            )}
                        </div>
                        <div className="collab-caption">snap choreography</div>
                    </div>

                    <div className="collab-container">
                        <div className="hover-section-collab">
                            <img
                            className="collab-image"
                            src="../Assets/Collabs/collab-2.png"
                            alt="tarana"
                            />
                            <button
                            type="button"
                            className="collab-button"
                            onClick={() => setOpenGallery(true)}
                            >
                            view
                            </button>
                            {openGallery && (
                                <Gallery
                                title="Tarana"
                                date="last updated may 2025"
                                images={teamBTS_Images}
                                onClose={() => setOpenGallery(false)}
                                />
                            )}
                        </div>
                        <div className="collab-caption">tarana</div>
                    </div>

                    <div className="collab-container">
                        <div className="hover-section-collab">
                            <img
                            className="collab-image"
                            src="../Assets/Collabs/collab-3.png"
                            alt="tarana"
                            />
                            <button
                            type="button"
                            className="collab-button"
                            onClick={() => setOpenGallery(true)}
                            >
                            view
                            </button>
                            {openGallery && (
                                <Gallery
                                title="Mehendi by Smriti"
                                date="last updated may 2025"
                                images={teamBTS_Images}
                                onClose={() => setOpenGallery(false)}
                                />
                            )}
                        </div>
                        <div className="collab-caption">mehendi by smriti</div>
                    </div>

                    
                    <div className="collab-container">
                        <div className="hover-section-collab">
                            <img
                            className="collab-image"
                            src="../Assets/Collabs/collab-4.png"
                            alt="palam-collective"
                            />
                            <button
                            type="button"
                            className="collab-button"
                            onClick={() => setOpenGallery(true)}
                            >
                            view
                            </button>
                            {openGallery && (
                                <Gallery
                                title="Palam-Collective"
                                date="last updated may 2025"
                                images={teamBTS_Images}
                                onClose={() => setOpenGallery(false)}
                                />
                            )}
                        </div>
                        <div className="collab-caption">palam-collective</div>
                    </div>


                    <div className="collab-container">
                        <div className="hover-section-collab">
                            <img
                            className="collab-image"
                            src="../Assets/Collabs/collab-5.png"
                            alt="kaju studios"
                            />
                            <button
                            type="button"
                            className="collab-button"
                            onClick={() => setOpenGallery(true)}
                            >
                            view
                            </button>
                            {openGallery && (
                                <Gallery
                                title="Kaju Studios"
                                date="last updated may 2025"
                                images={teamBTS_Images}
                                onClose={() => setOpenGallery(false)}
                                />
                            )}
                        </div>
                        <div className="collab-caption">kaju studios</div>
                    </div>

                    <div className="collab-container">
                        <div className="hover-section-collab">
                            <img
                            className="collab-image"
                            src="../Assets/Collabs/collab-6.png"
                            alt="holly"
                            />
                            <button
                            type="button"
                            className="collab-button"
                            onClick={() => setOpenGallery(true)}
                            >
                            view
                            </button>
                            {openGallery && (
                                <Gallery
                                title="Holly"
                                date="last updated may 2025"
                                images={teamBTS_Images}
                                onClose={() => setOpenGallery(false)}
                                />
                            )}
                        </div>
                        <div className="collab-caption">holly</div>
                    </div>

                    <div className="collab-container">
                        <div className="hover-section-collab">
                            <img
                            className="collab-image"
                            src="../Assets/Collabs/collab-7.png"
                            alt="pearlescent x reya"
                            />
                            <button
                            type="button"
                            className="collab-button"
                            onClick={() => setOpenGallery(true)}
                            >
                            view
                            </button>
                            {openGallery && (
                                <Gallery
                                title="Pearlescent x Reya"
                                date="last updated may 2025"
                                images={teamBTS_Images}
                                onClose={() => setOpenGallery(false)}
                                />
                            )}
                        </div>
                        <div className="collab-caption">pearlescent x reya</div>
                    </div>

                    <div className="collab-container">
                        <div className="hover-section-collab">
                            <img
                            className="collab-image"
                            src="../Assets/Collabs/collab-8.png"
                            alt="stax co."
                            />
                            <button
                            type="button"
                            className="collab-button"
                            onClick={() => setOpenGallery(true)}
                            >
                            view
                            </button>
                            {openGallery && (
                                <Gallery
                                title="Stax Co. (podcast)"
                                date="last updated may 2025"
                                images={teamBTS_Images}
                                onClose={() => setOpenGallery(false)}
                                />
                            )}
                        </div>
                        <div className="collab-caption">stax co. (podcast)</div>
                    </div>

                    <div className="collab-container">
                        <div className="hover-section-collab">
                            <img
                            className="collab-image"
                            src="../Assets/Collabs/collab-9.png"
                            alt="stax co. (event)"
                            />
                            <button
                            type="button"
                            className="collab-button"
                            onClick={() => setOpenGallery(true)}
                            >
                            view
                            </button>
                            {openGallery && (
                                <Gallery
                                title="Stax Co. (event)"
                                date="last updated may 2025"
                                images={teamBTS_Images}
                                onClose={() => setOpenGallery(false)}
                                />
                            )}
                        </div>
                        <div className="collab-caption">stax co. (event)</div>
                    </div>

                    <div className="collab-container">
                        <div className="hover-section-collab">
                            <img
                            className="collab-image"
                            src="../Assets/Collabs/collab-10.png"
                            alt="evolve with fashion"
                            />
                            <button
                            type="button"
                            className="collab-button"
                            onClick={() => setOpenGallery(true)}
                            >
                            view
                            </button>
                            {openGallery && (
                                <Gallery
                                title="Evolve with Fashion"
                                date="last updated may 2025"
                                images={teamBTS_Images}
                                onClose={() => setOpenGallery(false)}
                                />
                            )}
                        </div>
                        <div className="collab-caption">evolve with fashion</div>
                    </div>

                
                    <div className="collab-container">
                        <div className="hover-section-collab">
                            <img
                            className="collab-image"
                            src="../Assets/Collabs/collab-11.png"
                            alt="casino bleu"
                            />
                            <button
                            type="button"
                            className="collab-button"
                            onClick={() => setOpenGallery(true)}
                            >
                            view
                            </button>
                            {openGallery && (
                                <Gallery
                                title="Casino Bleu"
                                date="last updated may 2025"
                                images={teamBTS_Images}
                                onClose={() => setOpenGallery(false)}
                                />
                            )}
                        </div>
                        <div className="collab-caption">casino bleu</div>
                    </div>

                    <div className="collab-container">
                        <div className="hover-section-collab">
                            <img
                            className="collab-image"
                            src="../Assets/Collabs/collab-12.png"
                            alt="too many thoughts"
                            />
                            <button
                            type="button"
                            className="collab-button"
                            onClick={() => setOpenGallery(true)}
                            >
                            view
                            </button>
                            {openGallery && (
                                <Gallery
                                title="Too Many Thoughts"
                                date="last updated may 2025"
                                images={teamBTS_Images}
                                onClose={() => setOpenGallery(false)}
                                />
                            )}
                        </div>
                        <div className="collab-caption">too many thoughts</div>
                    </div>

                    <div className="collab-container">
                        <div className="hover-section-collab">
                            <img
                            className="collab-image"
                            src="../Assets/Collabs/collab-13.png"
                            alt="fridays are for..."
                            />
                            <button
                            type="button"
                            className="collab-button"
                            onClick={() => setOpenGallery(true)}
                            >
                            view
                            </button>
                            {openGallery && (
                                <Gallery
                                title="Fridays are for..."
                                date="last updated may 2025"
                                images={teamBTS_Images}
                                onClose={() => setOpenGallery(false)}
                                />
                            )}
                        </div>
                        <div className="collab-caption">fridays are for...</div>
                    </div>

                    <div className="collab-container">
                        <div className="hover-section-collab">
                            <img
                            className="collab-image"
                            src="../Assets/Collabs/collab-14.png"
                            alt="sweetener"
                            />
                            <button
                            type="button"
                            className="collab-button"
                            onClick={() => setOpenGallery(true)}
                            >
                            view
                            </button>
                            {openGallery && (
                                <Gallery
                                title="Sweetener"
                                date="last updated may 2025"
                                images={teamBTS_Images}
                                onClose={() => setOpenGallery(false)}
                                />
                            )}
                        </div>
                        <div className="collab-caption">sweetener</div>
                    </div>

                    <div className="collab-container">
                        <div className="hover-section-collab">
                            <img
                            className="collab-image"
                            src="../Assets/Collabs/collab-15.png"
                            alt="t & a"
                            />
                            <button
                            type="button"
                            className="collab-button"
                            onClick={() => setOpenGallery(true)}
                            >
                            view
                            </button>
                            {openGallery && (
                                <Gallery
                                title="T & A"
                                date="last updated may 2025"
                                images={teamBTS_Images}
                                onClose={() => setOpenGallery(false)}
                                />
                            )}
                        </div>
                        <div className="collab-caption">t & a</div>
                    </div>

                    <div className="collab-container">
                        <div className="hover-section-collab">
                            <img
                            className="collab-image"
                            src="../Assets/Collabs/collab-16.png"
                            alt="hayeon"
                            />
                            <button
                            type="button"
                            className="collab-button"
                            onClick={() => setOpenGallery(true)}
                            >
                            view
                            </button>
                            {openGallery && (
                                <Gallery
                                title="Hayeon"
                                date="last updated may 2025"
                                images={teamBTS_Images}
                                onClose={() => setOpenGallery(false)}
                                />
                            )}
                        </div>
                        <div className="collab-caption">hayeon</div>
                    </div>

                    <div className="collab-container">
                        <div className="hover-section-collab">
                            <img
                            className="collab-image"
                            src="../Assets/Collabs/collab-17.png"
                            alt="k & a"
                            />
                            <button
                            type="button"
                            className="collab-button"
                            onClick={() => setOpenGallery(true)}
                            >
                            view
                            </button>
                            {openGallery && (
                                <Gallery
                                title="k & a"
                                date="last updated may 2025"
                                images={teamBTS_Images}
                                onClose={() => setOpenGallery(false)}
                                />
                            )}
                        </div>
                        <div className="collab-caption">k & a</div>
                    </div>

                    <div className="collab-container">
                        <div className="hover-section-collab">
                            <img
                            className="collab-image"
                            src="../Assets/Collabs/collab-18.png"
                            alt="chrsl"
                            />
                            <button
                            type="button"
                            className="collab-button"
                            onClick={() => setOpenGallery(true)}
                            >
                            view
                            </button>
                            {openGallery && (
                                <Gallery
                                title="Chrsl"
                                date="last updated may 2025"
                                images={teamBTS_Images}
                                onClose={() => setOpenGallery(false)}
                                />
                            )}
                        </div>
                        <div className="collab-caption">chrsl</div>
                    </div>

                </div>
            </div>

        <Footer/>
        </div>
    )
}

export default Collabs
