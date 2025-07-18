import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import '../styles/footer.css';

function Footer() {
    return (
        <footer id="footer">
            <div id="footer-top">
                <a aria-label="go back to home" href="">
                    <img className="logo-img" loading="lazy" decoding="async" src="./public/logo.png" alt="logo" />
                </a>
                <div className="links">
                    <a className="footer-link" href=""><p>Home</p></a>
                    <a className="footer-link" href=""><p>Sobre nós</p></a>
                    <a className="footer-link" href=""><p>Contato</p></a>
                </div>
            </div>
            <div className="line"></div>
            <div id="footer-bottom">
                <div id="social-medias">
                    <a href="https://www.facebook.com" aria-label="Facebook" className="social-medias">
                        <FaFacebook className="facebook-icon" />
                    </a>
                    <a href="https://www.instagram.com" aria-label="Instagram" className="social-medias">
                        <FaInstagram className="instagram-icon" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;