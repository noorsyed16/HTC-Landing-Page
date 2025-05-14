import React from 'react';
import './Footer.css';
import logo from '../images/logo.jpg';
import instaIcon from '../images/instagram.webp';      
import linkedinIcon from '../images/linkedin.svg';  

function Footer() {
    return (
        <footer>
            <div className="socials">
                <a href="https://www.instagram.com/htc_ucalgary/" target="_blank">
                    <img src={instaIcon} alt="Instagram" />
                </a>
                <a href="https://www.linkedin.com/company/haskayne-technology-club/" target="_blank">
                    <img src={linkedinIcon} alt="LinkedIn" />
                </a>
            </div>
            <button className = "join-button" onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSe7N2NXK7PRbopuSBDGUwP4YKq2phMBWZ2NmM0qr1UKR_vu9A/viewform', '_blank')}>
            Join The Mailing List</button>
            <img src={logo} alt="Logo" />
            <p>
                Haskayne School of Business<br />
                University of Calgary<br />
                2500 University Dr NW<br />
                Calgary, AB T2N 1N4
            </p>
        </footer>
    );
}

export default Footer;
