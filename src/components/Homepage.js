import React from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './About'
import HeroSection from './HeroSection'
import Mission from './Mission';
import EventHighlights from './EventHighlights';

function Homepage(){
    return(
        <div style={{ display: 'flex', flexDirection: 'column', margin: '10px'}}>
            <Header />
            <HeroSection />
            <div id="about">
                <About />
            </div>
            <Mission />
            <EventHighlights />
            <Footer />
        </div>
    );
}

export default Homepage;