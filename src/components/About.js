import React, { useState } from 'react';
import './Homepage.css';

function MainSection() {

    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    

    return (
        <div className = "aboutBackground">
            <br></br>
            <br></br>

            <h1 className = "aboutHTC"> About HTC </h1>

            <br></br>
            <br></br>
            <div className = "aboutContainer">

            <div className = "aboutInfoBox" onMouseEnter={() => setIsHovered1(true)} onMouseLeave={() => setIsHovered1(false)}>
                <h1>A Student Run <br></br> Organization</h1>
                {isHovered1 && (
                <p>The HTC is a student organization that provides an inclusive community where technology enthusiasts gain access to resources and opportunities</p>
                )}
            </div>

            <div className = "aboutInfoBox" onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)}>
                <h1> Events, Workshops, and Competitions</h1>
                {isHovered2 && (
                <p>We host events throughout the year for students to nurture their careers and make valuable connections within the industry.</p>
                )}
            </div>

            <div className = "aboutInfoBox" onMouseEnter={() => setIsHovered3(true)} onMouseLeave={() => setIsHovered3(false)}>
                <h1>Support for Career Paths and Opportunities</h1>
                {isHovered3 && (
                <p>Whether seeking guidance on career paths or exploring opportunities within this concentration, our platform supports students every step of the way</p>
                )}
            </div>
            </div>

        </div>
    );
}

export default MainSection;