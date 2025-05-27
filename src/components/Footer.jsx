import React from "react";
import { useLocation } from 'react-router-dom';
import './Footer.css';

const Footer = () =>{
    const { pathname } = useLocation();
    // list all the paths you want in dark-red:
    const redBgRoutes = ['/', '/media', '/events', '/team'];

    const bg = redBgRoutes.includes(pathname) ? '#3C0000' : '#030303';
    return(
        <div className="footer" style={{ backgroundColor: bg }}>
        <div className="footer-card num1">
          <p className="footer-card-title">EXPLORE</p>
          
          <div className="explore-links-container">
            <div className="left-links">
              <a className="explore-links" href="/">home</a>
              <a className="explore-links" href="/shop">shop</a>
              <a className="explore-links" href="/magazine">magazine</a>
              <a className="explore-links" href="/media">media</a>
            </div>

            <div className="right-links">
              <a className="explore-links" href="/collabs">collabs</a>
              <a className="explore-links" href="/events">events</a>
              <a className="explore-links" href="/team">team</a>
              <a className="explore-links" href="/about">about</a>
            </div>
          </div>
        
        </div>
        <div className="footer-card num2">
          <p className="footer-card-title">JOIN OUR TEAM</p>
          <a className="join-team-links" href="https://forms.gle/Gbc2KMMVCzecwB699">become a <i>solucky contributor</i></a>
          <a className="join-team-links" href="https://forms.gle/AdGu8PdoKstWsGnGA">become a <i>solucky model</i></a>
        </div>

        <div className="footer-card num3">
          <p className="footer-card-title">GET IN TOUCH</p>
          <div className="touch-link-container">
            <div className="logo-links-div">
              <a href="https://www.instagram.com/solucky.life?igsh=MzRlODBiNWFlZA==">
                <img src="Assets/Shop/insta-shop-link.png" alt='insta-logo'></img>
              </a>

              <a href="https://open.spotify.com/user/31zbsn67nxwfcxajfkbojydl2cpm?si=kcVeQRGcTnqTc7rcrqEIUw">
                <img src="Assets/Shop/spotify-link.png"alt='spotify-logo'></img>
              </a>

              <a href="https://www.linkedin.com/company/solucky/">
                <img src="Assets/Shop/linkedin-link.png" alt='linkedin-logo'></img>
              </a>

              <a href="https://pin.it/FScEd8DBk">
                <img src="Assets/Shop/pinterest-link.png" alt='pinterest-logo'></img>
              </a>

              <a href="https://www.tiktok.com/@solucky.life?_t=8o1sAdoenj0&_r=1">
                <img src="Assets/Shop/tiktok-link.png" alt='tiktok-logo'></img>
              </a>
            </div>

            <a className="email-link"
              href="mailto:solucky.contact@gmail.com">
              solucky.contact@gmail.com
            </a>

            <a className="join-team-links" href="https://docs.google.com/forms/d/e/1FAIpQLSfmkJhfxa21u6Ra73YU7w1e-ue28Lu_aCw-9ra_geHn6Ibn3g/viewform">
            subscribe to <i>solucky</i> magazine
            </a>

          </div>
        </div>

        <div className="footer-card num4">
          <p className="footer-card-title">ACKNOWLEDGEMENTS</p>
          <div className="acknowledgement-container">
            <p className="position-name"><span className="bold-position">Product & UX/UI Designer:</span> Shayna Trivedi</p>
            <p className="position-name"><span className="bold-position">Fullstack Web Developer:</span> Taj Sharma</p>
            <p className="position-name"><span className="bold-position">Brand & Creative Director:</span> Sanjana Solanki</p>
            <p className="position-name"><span className="bold-position">Brand Advisors:</span> Shayari Saha & Amani Chowdhury</p>
          </div>
        </div>

      </div>
    )
}

export default Footer;