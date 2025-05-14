import React from 'react';
import Header from './Header';
import Footer from './Footer';


function OurTeam(){
    return(
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Header />
            <h1>This will be the page with information about the team</h1>
            <Footer />
        </div>
    );
}

export default OurTeam;