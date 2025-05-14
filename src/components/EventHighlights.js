import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EventHighlights.css';
import caseCompetition from '../images/caseCompetition.jpg';
import stemNight from '../images/stemNight.jpg';
import insustryNight from '../images/industryNight.jpg'; 
import yellowBackground from '../images/yellowBackground.jpg'; 

function EventHighlights() {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const navigate = useNavigate();

  const events = [
    {
      title: "HTC’s First-Ever Case Competition x Hackathon",
      description: "Mar 1, 2025, HTC brought together 15 teams & 60 participants for an intensive data analytics challenge! With @keyera_corp & @amazonwebservices , participants explored Amazon QuickSight, tackling real-world energy sector problems & building business intelligence dashboards to optimize operations.",
      backgroundImage: caseCompetition,
    },
    {
      title: "AI Technology Industry Night",
      description: "Thank you to everyone who joined us for the AI Technology Industry Night! It was an incredible evening filled with learning, networking, and exploring the future of AI. From engaging presentations to insightful discussions, we couldn’t have asked for a better way to kick off the semester",
      backgroundImage: insustryNight,
    },
    {
      title: "Women In Stem Night",
      description: "The HTC team would like to sincerely thank everyone who made our Women in STEM Night one to remember! We saw many new connections being created and heard engaging conversations throughout the evening. A special thank you to @uofc_wib for collaborating with us to bring this event to life!",
      backgroundImage: stemNight, 
    },
  ];

  function nextEvent() {
    setCurrentEventIndex((prevIndex) => (prevIndex + 1) % events.length);
  }

  function prevEvent() {
    setCurrentEventIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
  }

  const handleLearnMoreClick = () => {
    navigate('/Events'); // Navigate to the Events page when button is clicked
  };

  const currentEvent = events[currentEventIndex];

  return (
    <div className = 'eventsBackground'>
        <h1 className='eventHighlights'>Event Highlights</h1>
    <div className="carousel-container">
      {/* Left side with the image */}
      <div
        className="carousel-image"
        style={{ backgroundImage: `url(${currentEvent.backgroundImage})` }}/>

      <div
        className="carousel-text"
        style={{ backgroundImage: `url(${yellowBackground})` }}>
        <div className="event-textbox">
          <h2>{currentEvent.title}</h2>
          <br></br>
          <p>{currentEvent.description}</p>
          <button className = "moreButton" onClick={handleLearnMoreClick}>Learn More</button>
        </div>

      </div>
      <button className="arrow left" onClick={prevEvent}>{"<"}</button>
      <button className="arrow right" onClick={nextEvent}>{">"}</button>
    </div>
    </div>
  );
}

export default EventHighlights;
