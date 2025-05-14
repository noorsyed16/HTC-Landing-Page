import React, { useEffect, useState } from 'react';
import './Homepage.css'
import caseComp from '../images/caseComp.jpg';
import yellowBackground from '../images/yellowBackground.jpg';


function HeroSection() {
    
    return (
        <div className="hero-container">
          <div className="hero-left">
            <h1>Embrace. Empower. Excel.</h1>
            <h2>Haskayne Technology Club | Bridging Business and Technology at UCalgary</h2>
            <br></br>
            <button className = "joinButton" onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSe7N2NXK7PRbopuSBDGUwP4YKq2phMBWZ2NmM0qr1UKR_vu9A/viewform', '_blank')}>
            Join Our Team!
            </button>
          </div>
          <div className="hero-img">
            <img src= {caseComp} alt= "HTC Visual"/>
          </div>

        </div>
      );
    }

export default HeroSection;