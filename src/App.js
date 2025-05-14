import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import About from './components/About';
import Events from './components/Events';
import OurTeam from './components/OurTeam';



function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path ="/" element={<Homepage />} />
            <Route path ="/About" element={<About />} />
            <Route path ="/Events" element={<Events />} />
            <Route path ="/OurTeam" element={<OurTeam />} />
        </Routes>
        </BrowserRouter>
        
      </div>
  );
}

export default App;

