import React from 'react';
import './Header.css';
import logo from '../images/logo.jpg';

function Header() {
    return (
        <div>
            <header style={{ maxHeight: '75px' }}>
                <div className="logoName">
                    <a href="/">
                        <img src={logo} alt="HTC Logo" />
                    </a>
                    <a href="/">
                        <h1>Haskayne Technology Club</h1>
                    </a>
                </div>

                <div className="nav">
                    <a href="/">Home</a>
                    <a href="/#about">About</a>
                    <a href="/Events">Events</a>
                    <a href="/OurTeam">Our Team</a>
                    <button className = "join-button" onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSe7N2NXK7PRbopuSBDGUwP4YKq2phMBWZ2NmM0qr1UKR_vu9A/viewform', '_blank')}>
                    Join</button>
                </div>
            </header>
        </div>
    );
}

export default Header;
