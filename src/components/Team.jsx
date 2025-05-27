import React, {useState} from 'react';
import Footer from './Footer';
import './Team.css'
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

const Team = () =>{
    const [openGallery, setOpenGallery] = useState(false);

    const scrollLeft = (sectionClass) => {
        const container = document.querySelector(`.${sectionClass}`);
        container.scrollBy({ left: -300, behavior: 'smooth' });
    };
      
    const scrollRight = (sectionClass) => {
    const container = document.querySelector(`.${sectionClass}`);
    container.scrollBy({ left: 300, behavior: 'smooth' });
    };

    return(
        <div className="team-page">
            <section class="hero-section">
                    <p class="volunteer-text">
                        Our volunteers dedicate their time & efforts to shaping the brand into 
                        what is today, contributing their unique talents & fresh perspectives.
                        In return they build portfolios, refine their skills, & grow professionally
                        while becoming part of a supportive community that celebreates creativity
                        & collaboration. 
                    </p>
                    <img src="../Assets/Team/shoes.png" class="shoe-image" alt="shoe" />

                    <div class="shoe-caption">
                        <img src="../Assets/Team/team-arrow.svg" class="arrow-icon" />
                    </div>

                    <div className="hero-title-container">
                        <h1 class="hero-heading">
                            the
                        </h1>
                        <h1 class="hero-heading">
                            <i>solucky</i>
                        </h1>
                        <h1 class="hero-heading">
                            experience
                        </h1>   
                    </div>
                    
                    <div className="button-container">
                        <p class="caption-text button-caption">a great team starts with the right fit.</p>
                        <div className="buttons-wrapper">
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe81g9uPNPingKHngREZ5MpHuUFtI-zXEeOLqVayNIC6Ba2Sg/viewform">
                                <button type="button" className="team-button button1">
                                    <p className="apply-textbox centered-p-bai-jamjuree" id="contributer-text"><i>solucky contributor</i> application</p>
                                    <img className="team-button-arrow" src="../Assets/Icons/shop-arrow.png" alt="arrow"></img>
                                </button>
                            </a>

                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfZog6msmIUc8K_dc2SsmXIWx7oEGcV4E1PE9WHw0KxKNjEwg/viewform">
                                <button type="button" className="team-button button2">
                                    <p className="apply-textbox centered-p-bai-jamjuree" id="model-text" ><i>solucky model</i> application</p>
                                    <img className="team-button-arrow" src="../Assets/Icons/shop-arrow.png" alt="arrow"></img>
                                </button>
                            </a>

                            <button type="button" className="team-button button3" onClick={() => setOpenGallery(true)}>
                                <p className="apply-textbox centered-p-bai-jamjuree" id="view-bts-text">view BTS photos</p>
                            </button>
                            {openGallery && (
                                <Gallery
                                title="BTS ✹"
                                date="last updated may 2025"
                                images={teamBTS_Images}
                                onClose={() => setOpenGallery(false)}
                                />
                            )}
                        </div>
                    </div>
                    

            </section>

            <section className="team-members">
                <div className="main-team-card">         
                    <div className="team-category" id="first-insta-section">
                            <p className="caption-text instagram-caption">
                            *click on any team member's photo to visit their Instagram
                            </p>
                            <h3 className="team-position-title">Brand Operations</h3>
                            <div className="scroll-buttons">
                                <button className="scroll-left" onClick={() => scrollLeft('brand-operations')}>
                                    <img src="/Assets/Icons/chevron-left.png" alt="arrow-left" style={{ width: '16px', height: '16px' }}></img>
                                </button>
                                <button className="scroll-right" onClick={() => scrollRight('brand-operations')}>
                                    <img src="/Assets/Icons/chevron-right.png" alt="arrow-right" style={{ width: '16px', height: '16px' }}></img>
                                </button>
                            </div>
                            <div className="team-horizontal-scroll-section brand-operations">

                            <a
                                href="https://www.instagram.com/sanjana.solankii?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                            > 
                                    <div className="post-header">
                                        <div className="post-left-group">
                                            <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                            <p className="post-account-name">solucky.life</p>
                                        </div>
                                        <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                    </div>
                                    <img className='post-image' src='../Assets/Team/Team-Pictures/SanjanaSolanki.png' alt='founder-image'></img>

                                    <div className="post-bottom-div">
                                        <div className="post-icons">
                                            <div className="post-icons-left-group">
                                                <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                                <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                                <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                            </div>
                                            <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                        </div>
                                
                                        <div className="post-text">
                                            <p>
                                            <span className="post-account-name">
                                                solucky.life </span> 
                                                MEET SANJANA SOLANKI (she/her) 🦚 
                                                <span className="specific-position">The Founder</span> 
                                            </p>
                                        </div>
                                        
                                    </div>
                                </a>

                                <a
                                href="https://www.instagram.com/shay.yna?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                    <div className="post-header">
                                        <div className="post-left-group">
                                            <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                            <p className="post-account-name">solucky.life</p>
                                        </div>
                                        <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                    </div>
                                    <img className='post-image' src='../Assets/Team/Team-Pictures/ShaynaTrivedi.png' alt='founder-image'></img>

                                    <div className="post-bottom-div">
                                        <div className="post-icons">
                                            <div className="post-icons-left-group">
                                                <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                                <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                                <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                            </div>
                                            <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                        </div>
                                
                                        <div className="post-text">
                                            <p>
                                            <span className="post-account-name">
                                                solucky.life </span> 
                                                MEET SHAYNA TRIVEDI (she/her) 💘 
                                                <span className="specific-position">Product & UX/UI Designer</span> 
                                            </p>
                                        </div>
                                        
                                    </div>
                                </a>

                                <a
                                href="https://www.instagram.com/taj.5harma/"
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                    <div className="post-header">
                                        <div className="post-left-group">
                                            <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                            <p className="post-account-name">solucky.life</p>
                                        </div>
                                        <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                    </div>
                                    <img className='post-image' src='../Assets/Team/Team-Pictures/TajSharma.png' alt='founder-image'></img>

                                    <div className="post-bottom-div">
                                        <div className="post-icons">
                                            <div className="post-icons-left-group">
                                                <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                                <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                                <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                            </div>
                                            <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                        </div>
                                
                                        <div className="post-text">
                                            <p>
                                            <span className="post-account-name">
                                                solucky.life </span> 
                                                MEET TAJ SHARMA (he/him) 🏹
                                                <span className="specific-position">Fullstack Web Developer</span> 
                                            </p>
                                        </div>
                                        
                                    </div>
                                </a>


                                <a
                                href="https://www.instagram.com/amanichowchow?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                    <div className="post-header">
                                        <div className="post-left-group">
                                            <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                            <p className="post-account-name">solucky.life</p>
                                        </div>
                                        <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                    </div>
                                    <img className='post-image' src='../Assets/Team/Team-Pictures/AmaniChowdhury.png' alt='founder-image'></img>

                                    <div className="post-bottom-div">
                                        <div className="post-icons">
                                            <div className="post-icons-left-group">
                                                <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                                <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                                <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                            </div>
                                            <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                        </div>
                                
                                        <div className="post-text">
                                            <p>
                                            <span className="post-account-name">
                                                solucky.life </span> 
                                                MEET AMANI CHOWDHURY (she/her) 🐬
                                                <span className="specific-position">Brand Advisor</span> 
                                            </p>
                                        </div>
                                        
                                    </div>
                                </a>


                                <a
                                href="https://www.instagram.com/ananyadutta05?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                    <div className="post-header">
                                        <div className="post-left-group">
                                            <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                            <p className="post-account-name">solucky.life</p>
                                        </div>
                                        <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                    </div>
                                    <img className='post-image' src='../Assets/Team/Team-Pictures/AnanyaDutta.png' alt='founder-image'></img>

                                    <div className="post-bottom-div">
                                        <div className="post-icons">
                                            <div className="post-icons-left-group">
                                                <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                                <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                                <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                            </div>
                                            <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                        </div>
                                
                                        <div className="post-text">
                                            <p>
                                            <span className="post-account-name">
                                                solucky.life </span> 
                                                MEET ANANYA DUTTA (she/her) ❣️
                                                <span className="specific-position">Consultant</span> 
                                            </p>
                                        </div>
                                        
                                    </div>
                                </a>

                                <a
                                href="https://www.instagram.com/henrycocopine?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                    <div className="post-header">
                                        <div className="post-left-group">
                                            <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                            <p className="post-account-name">solucky.life</p>
                                        </div>
                                        <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                    </div>
                                    <img className='post-image' src='../Assets/Team/Team-Pictures/HenryPham.png' alt='founder-image'></img>

                                    <div className="post-bottom-div">
                                        <div className="post-icons">
                                            <div className="post-icons-left-group">
                                                <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                                <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                                <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                            </div>
                                            <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                        </div>
                                
                                        <div className="post-text">
                                            <p>
                                            <span className="post-account-name">
                                                solucky.life </span> 
                                                MEET HENRY PHAM (he/him) 🩵
                                                <span className="specific-position">Financial Advisor</span> 
                                            </p>
                                        </div>
                                        
                                    </div>
                                </a>

                                <a
                                href="https://www.instagram.com/nate.yishak?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                    <div className="post-header">
                                        <div className="post-left-group">
                                            <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                            <p className="post-account-name">solucky.life</p>
                                        </div>
                                        <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                    </div>
                                    <img className='post-image' src='../Assets/Team/Team-Pictures/NatnaielYishak.png' alt='founder-image'></img>

                                    <div className="post-bottom-div">
                                        <div className="post-icons">
                                            <div className="post-icons-left-group">
                                                <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                                <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                                <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                            </div>
                                            <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                        </div>
                                
                                        <div className="post-text">
                                            <p>
                                            <span className="post-account-name">
                                                solucky.life </span> 
                                                MEET NATNAIEL YISHAK (he/him) 🕶️
                                                <span className="specific-position">Brand Outreach</span> 
                                            </p>
                                        </div>
                                        
                                    </div>
                                </a>

                                <a
                                href="https://www.instagram.com/anujaapandit?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                    <div className="post-header">
                                        <div className="post-left-group">
                                            <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                            <p className="post-account-name">solucky.life</p>
                                        </div>
                                        <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                    </div>
                                    <img className='post-image' src='../Assets/Team/Team-Pictures/AnujaPandit.png' alt='founder-image'></img>

                                    <div className="post-bottom-div">
                                        <div className="post-icons">
                                            <div className="post-icons-left-group">
                                                <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                                <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                                <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                            </div>
                                            <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                        </div>
                                
                                        <div className="post-text">
                                            <p>
                                            <span className="post-account-name">
                                                solucky.life </span> 
                                                MEET ANJUA PANDIT (she/her) 👡
                                                <span className="specific-position">Brand Outreach</span> 
                                            </p>
                                        </div>
                                        
                                    </div>
                                </a>
                        </div>
                    </div>

                    <div className="team-category">
                            <h3 className="team-position-title">Production</h3>
                            <div className="scroll-buttons">
                                <button className="scroll-left" onClick={() => scrollLeft('production')}>
                                    <img src="/Assets/Icons/chevron-left.png" alt="arrow-left" style={{ width: '16px', height: '16px' }}></img>
                                </button>
                                <button className="scroll-right" onClick={() => scrollRight('production')}>
                                    <img src="/Assets/Icons/chevron-right.png" alt="arrow-right" style={{ width: '16px', height: '16px' }}></img>
                                </button>
                            </div>
                            <div className="team-horizontal-scroll-section production">
                            
                            <a
                            href="https://www.instagram.com/amruthagururaj?igsh=NTc4MTIwNjQ2YQ=="
                            className="post-div"
                            target="_blank"
                            rel="noopener noreferrer"
                                > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/AmruthaGururaja.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET AMRUTHA GURURAJA (she/her) 🦚
                                            <span className="specific-position">Videographer + Multimedia Editor</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                            href="https://www.instagram.com/f3julian?igsh=NTc4MTIwNjQ2YQ=="
                            className="post-div"
                            target="_blank"
                            rel="noopener noreferrer"
                            > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/JulianCaballero.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET JULIAN CABALLERO (he/him) 🌿
                                            <span className="specific-position">Photographer + Videographer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/arpithasun?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/ArpithaSundarajan.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET ARPITHA SUNDARAJAN (she/her) 🌹
                                            <span className="specific-position">Photographer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/salvat13rra?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/RocioSalvatierra.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET ROCIO SALVATIERRA (they/them) ☀️
                                            <span className="specific-position">Photographer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/vaibhavi.i?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/VaibhaviJhawar.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET VAIBHAVI JHAWAR (she/her) 🪷
                                            <span className="specific-position">Photographer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>


                            <a
                                href="https://www.instagram.com/olivia_kinoshita?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/OliviaKinoshita.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET OLIVIA KINOSHITA (she/her) 🌱
                                            <span className="specific-position">Videographer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/jahnavimanchenella?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/JJManchenella.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET JJ MANCHENELLA (she/her) 🍃
                                            <span className="specific-position">Stylist</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/veda.gott?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/VedaGott.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET VEDA GOTT (she/her) 👓
                                            <span className="specific-position">Stylist</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/perseph0nee._?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/DonyaMirzazadeh.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET Donya Mirzazadeh (she/her) 🌟
                                            <span className="specific-position">Stylist</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/saajaysingh?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/SaajaySingh.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET SAAJAY SINGH (he/him) 🕷️
                                            <span className="specific-position">Stylist</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/samratghost?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/SamratGhosh.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET SAMRAT GHOSH (he/him) 🍯
                                            <span className="specific-position">BTS Videographer/Photographer + Photoshoot Assistant</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/radhikabhavsarr?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/RadhikaBhavasr.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET RADHIKA BHAVASR (she/her) 💋
                                            <span className="specific-position">Photoshoot Assistant</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/babangahunia?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/BabanGahunia.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET BABAN GAHUNIA (she/her) 🍓
                                            <span className="specific-position">Photoshoot Assistant</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/haz_oor?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/HazoorAnand.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET HAZOOR ANAND (he/him) 🖤
                                            <span className="specific-position">Photo Editor</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/henrycocopine?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/HenryPham.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET HENRY PHAM (he/him) 🩵
                                            <span className="specific-position">Multimedia Editor</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="team-category" id="social-media-category">
                        <h3 className="team-position-title">Social media</h3>
                        <div className="team-horizontal-scroll-section no-scroll">

                            <a
                                href="https://www.instagram.com/radhikabhavsarr?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/RadhikaBhavasr.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET RADHIKA BHAVASR (she/her) 💋
                                            <span className="specific-position">Social Media Strategist</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/sana.kamboh?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/SanaKamboh.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET SANA KAMBOH (she/her) 🌸
                                            <span className="specific-position">Pinterest Manager</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/mikaila.bramlette?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/MikailaBramlette.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET MIKAILA BRAMLETTE (she/her) 🏠
                                            <span className="specific-position">Spotify Manager</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                        </div>
                    </div>

                    <div className="team-category">
                        <h3 className="team-position-title">Magazine Publishing</h3>
                        <div className="scroll-buttons">
                            <button className="scroll-left" onClick={() => scrollLeft('magazine-publishing')}>
                                <img src="/Assets/Icons/chevron-left.png" alt="arrow-left" style={{ width: '16px', height: '16px' }}></img>
                            </button>
                            <button className="scroll-right" onClick={() => scrollRight('magazine-publishing')}>
                                <img src="/Assets/Icons/chevron-right.png" alt="arrow-right" style={{ width: '16px', height: '16px' }}></img>
                            </button>
                        </div>
                        <div className="team-horizontal-scroll-section magazine-publishing">

                             <a
                                href="https://www.instagram.com/aarruushi?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/AarushiSharma.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET AARUSHI SHARMA (she/her) 🪴 
                                            <span className="specific-position">Magazine Designer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/haz_oor?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/HazoorAnand.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET HAZOOR ANAND (he/him) 🖤
                                            <span className="specific-position">Magazine Designer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/mikaila.bramlette?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/MikailaBramlette.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET MIKAILA BRAMLETTE (she/her) 🏠
                                            <span className="specific-position"><i> Small Business Spotlight + Spotify Playlist </i>Columinst</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>


                            <a
                                href="https://www.instagram.com/henrycocopine?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/HenryPham.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET HENRY PHAM (he/him) 🩵
                                            <span className="specific-position"><i>For The Community</i> Columnist</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/inikamehra?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/InikaMehra.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET INIKA MEHRA (she/her) 🎀
                                            <span className="specific-position">Filler-In Writer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/sraav.a?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/SraavyaApuri.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET SRAAVYA APURI (she/her) ♠️
                                            <span className="specific-position">Filler-In Writer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/safabasravi?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/SafaBasravi.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET SAFA BASRAVI (she/her) 🧸
                                            <span className="specific-position">Filler-In Writer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                        </div>
                    </div>

                    <div className="team-category">
                            <h3 className="team-position-title">Aesthetic Photographers</h3>
                            <div className="scroll-buttons">
                                <button className="scroll-left" onClick={() => scrollLeft('aesthetic-photographers')}>
                                    <img src="/Assets/Icons/chevron-left.png" alt="arrow-left" style={{ width: '16px', height: '16px' }}></img>
                                </button>
                                <button className="scroll-right" onClick={() => scrollRight('aesthetic-photographers')}>
                                    <img src="/Assets/Icons/chevron-right.png" alt="arrow-right" style={{ width: '16px', height: '16px' }}></img>
                                </button>
                            </div>
                            <div className="team-horizontal-scroll-section aesthetic-photographers">

                            <a
                                href="https://www.instagram.com/ssanjanaah?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/SanjanaDadi.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET SANJANA DADI (she/her) 🦋
                                            <span className="specific-position">Aesthetic Photographer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/natalie.getz?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/NatalieGetz.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET NATALIE GETZ (she/her) 🪷 
                                            <span className="specific-position">Aesthetic Photographer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/heenabainss?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/HeenaBains.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET HEENA BAINS (she/her) 🥂
                                            <span className="specific-position">Aesthetic Photographer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/aarruushi?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/AarushiSharma.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET AARUSHI SHARMA (she/her) 🪴
                                            <span className="specific-position">Aesthetic Photographer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/niya.maudgalya?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/NiyaMaudgalya.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET NIYA MAUDGALYA (she/her) 🌞
                                            <span className="specific-position">Aesthetic Photographer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/chinmayiiii_b?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/ChinmayiBolisetty.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET CHINMAYI BOLISETTY (she/her) 🌃
                                            <span className="specific-position">Aesthetic Photographer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                            <a
                                href="https://www.instagram.com/sindulce._?igsh=NTc4MTIwNjQ2YQ=="
                                className="post-div"
                                target="_blank"
                                rel="noopener noreferrer"
                                 > 
                                <div className="post-header">
                                    <div className="post-left-group">
                                        <img className="solucky-icon" src="../Assets/Icons/soluckyicon-team.png"></img>
                                        <p className="post-account-name">solucky.life</p>
                                    </div>
                                    <img className="more-icon" src='../Assets/Team/Post-Assets/MoreIcon.png'></img>
                                </div>
                                <img className='post-image' src='../Assets/Team/Team-Pictures/CynOros.png' alt='founder-image'></img>

                                <div className="post-bottom-div">
                                    <div className="post-icons">
                                        <div className="post-icons-left-group">
                                            <img className="like-icon" src='../Assets/Team/Post-Assets/Like.png'></img>
                                            <img className="comment-icon" src='../Assets/Team/Post-Assets/Comment.png'></img>
                                            <img className="share-icon" src='../Assets/Team/Post-Assets/Message.png'></img>
                                        </div>
                                        <img className="save-icon" src='../Assets/Team/Post-Assets/Save.png'></img>
                                    </div>
                            
                                    <div className="post-text">
                                        <p>
                                        <span className="post-account-name">
                                            solucky.life </span> 
                                            MEET CYN OROS (they/them) 🐆
                                            <span className="specific-position">Aesthetic Photographer</span> 
                                        </p>
                                    </div>
                                    
                                </div>
                            </a>

                        </div>
                    </div>
                    
                </div>
            </section>

            <Footer/>
        </div>
    );
}

export default Team