// src/components/About.jsx
import React, {useState} from 'react';
import Footer from './Footer';
import Gallery from './Gallery';
import './About.css';

const aboutImages = [
  "/Assets/Galleries/Event-gallery/diwali-event/DSC03534.JPG",
  "/Assets/Galleries/Event-gallery/diwali-event/DSC03554.JPG",
  "/Assets/Galleries/Event-gallery/diwali-event/DSC03534.JPG",
  "/Assets/Galleries/Event-gallery/diwali-event/DSC03554.JPG",
  "/Assets/Galleries/Event-gallery/diwali-event/DSC03534.JPG",
  "/Assets/Galleries/Event-gallery/diwali-event/DSC03554.JPG",
  "/Assets/Galleries/Event-gallery/diwali-event/DSC03534.JPG",
  "/Assets/Galleries/Event-gallery/diwali-event/DSC03554.JPG",
];


const About = () => {
  const [openGallery, setOpenGallery] = useState(false);

  return (
    <>
    <div className="about-page">
      <div className='about-section-wrapper'>
        <div className='founder-section'>
          <div className='message-container' id='founder-message'>
                <h1 className='text-pt-serif'>From the Founder</h1>
                <p className='paragraph-message'>
                Sanjana Solanki, a Bay Area native & 2024 Business Administration
                graduate from San Jose State University, created <i>solucky</i> as a creative
                outlet. Her passions for fashion, film, organization, decoration, & 
                makeup, along with her South Asian heritage, consistently shape the 
                brand’s unique vision. Hobbies like thrifting, decorating, & photography 
                inspired her to create <i>solucky</i>, allowing her to showcase these interests
                & collaborate with some of the most dedicated & hardworking people she
                has ever met.
                </p>
          </div>
        </div>

        <div className='brand-section'>
          <div className='message-container' id='brand-message'>
                <h1 className='text-pt-serif'>The Brand</h1>
                <p className='paragraph-message'>
                Founded by Sanjana in August 2020, the brand draws its name from a cherished 
                childhood memory. Inspired by her father's endearing reference to their family
                as "so-lucky," the name "<i>solucky</i>" was chosen to reflect a personal connection
                & resonate as a catchy, memorable brand identity.
                </p>
          </div> 
        </div>

        <div className='camera-section'>
          <div className='camera-container'>
          <button className="camera-button" onClick={() => setOpenGallery(true)}>
            <img src="../Assets/About/camera-image.png" alt="open gallery" className='camera-picture'/>
          </button>
            {openGallery && (
              <Gallery
                title="Behind the Scenes"
                date="last updated may 2025"
                images={aboutImages}
                onClose={() => setOpenGallery(false)}
              />
            )}
            <img src='../Assets/About/camera-caption.svg' alt='click to interact ->' className='camera-caption'></img>
          </div>
        </div>

        <div className='story-section'>
          <div className='message-container' id='story-message'>
                <h1 className='text-pt-serif'>Our Story</h1>
                <p className='paragraph-message'>
                Initially envisioned as a blog to share the Founder’s creative passions with
                loved ones, <i>solucky</i> took an unexpected turn just before its launch. Collaborating
                with close friends to offer limited-time items, the brand swiftly transformed into
                the multi-dimensional creative force it is today.
                </p>
          </div>
        </div>
        <div className='signoff-message'>
            <p>- Founder of solucky, Sanjana Solanki</p>
          </div> 
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;
