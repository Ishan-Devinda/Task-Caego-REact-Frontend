import React from "react";
import aircargo from '../Access/air-cargo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <div className="newsletter">
                <form action="">
                    <div className="newsletter-grid">
                        <div className="newsletter-title">
                            <p>
                                <strong>Weekly Newsletter</strong>
                            </p>
                        </div>
                        <div className="newsletter-input">
                            <input type="email" id="newsletterEmail" placeholder="Enter your email" />
                        </div>
                        <div className="newsletter-button">
                            <button type="submit">Subscribe</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="footer-content">
                <div className="footer-section">
                    <h2>About Us</h2>
                    <ul>
                        <li><a href="#">- - - - - - - - - - -</a></li>
                        <li><a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit</a></li>
                        <li><a href="#">| (+94)11 434 7575</a></li>
                        <li><a href="#">| 42 Liya, Colombo 00600</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2>Latest News</h2>
                    <ul>
                        <li><a href="#">- - - - - - - - -</a></li>
                        <li><a href="#">>Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br/><br/>   5 Minutes Ago</a></li>
                        <li><a href="#">>Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br/><br/>   5 Minutes Ago</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2>Customer Services</h2>
                    <ul>
                        <li><a href="#">- - - - - - - - - -</a></li>
                        <li><a href="#">Support Forums</a></li>
                        <li><a href="#">Communication</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Rules & Conditions</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2>Customer Services</h2>
                    
                    <div className="social-links">
                    <a href="#"><img src={aircargo} className="aircargo" alt="Twitter" /></a>
                    <a href="#"><img src={aircargo} className="aircargo" alt="Facebook" /></a>
                    <a href="#"><img src={aircargo} className="aircargo" alt="Instagram" /></a>
                        
                    </div>
                    <div className="social-links">
                    <a href="#"><img src={aircargo} className="aircargo" alt="Twitter" /></a>
                    <a href="#"><img src={aircargo} className="aircargo" alt="Facebook" /></a>
                    <a href="#"><img src={aircargo} className="aircargo" alt="Instagram" /></a>
                    
                        
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <h2>Copyright © 2024 <a href="#">Ishan Devinda™</a> | All Rights Reserved.</h2>
                <div className="footer-social">

                        <a href="#"><img src="images/img_twitter.png" alt="Twitter" /></a>
                        <a href="#"><img src="images/img_facebook.png" alt="Facebook" /></a>
                        <a href="#"><img src="images/img_instagram.png" alt="Instagram" /></a>
                        <a href="#"><img src="images/img_twitter.png" alt="Twitter" /></a>
                        <a href="#"><img src="images/img_facebook.png" alt="Facebook" /></a>
                        <a href="#"><img src="images/img_instagram.png" alt="Instagram" /></a>
                    
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
