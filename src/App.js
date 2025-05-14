import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import About from './components/About';
import Events from './components/Events';
import OurTeam from './components/OurTeam';

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/OurTeam" element={<OurTeam />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
