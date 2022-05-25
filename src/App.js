import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  const [homeSelected, setHomeSelected] = useState(true);
  const [aboutSelected, setAboutSelected] = useState(false);
  const [workSelected, setWorkSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div className='app-wrapper'>
      <Header 
      setHomeSelected={setHomeSelected} 
      setAboutSelected={setAboutSelected} 
      setWorkSelected={setWorkSelected}
      setContactSelected={setContactSelected}
      homeSelected={homeSelected} 
      aboutSelected={aboutSelected}
      workSelected={workSelected}
      contactSelected={contactSelected} />
      
      {homeSelected && <Home />}
      {aboutSelected && <About />}
      {workSelected && <Work />}
      {contactSelected && <Contact />}
    </div>
  );
}

export default App;
