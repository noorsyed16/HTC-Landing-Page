import React from 'react';
import Header from './Header';
import Footer from './Footer';
import EventHighlights from './EventHighlights';

function Events(){
    return(
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Header />
            <h1>This will be the page with information on past and upcoming events</h1>
            <EventHighlights />
            <Footer />
        </div>
    );
}

export default Events;