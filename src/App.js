import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';

function App() {
  const [homeSelected, setHomeSelected] = useState(true);
  const [aboutSelected, setAboutSelected] = useState(false);
  const [workSelected, setWorkSelected] = useState(false);

  return (
    <div className='app-wrapper'>
      <Header 
      setHomeSelected={setHomeSelected} 
      setAboutSelected={setAboutSelected} 
      setWorkSelected={setWorkSelected}
      homeSelected={homeSelected} 
      aboutSelected={aboutSelected}
      workSelected={workSelected} />
      
      {homeSelected && <Home />}
      {aboutSelected && <About />}
      {workSelected && <Work />}
    </div>
  );
}

export default App;
