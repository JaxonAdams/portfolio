import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';

function App() {
  const [homeSelected, setHomeSelected] = useState(true);
  const [aboutSelected, setAboutSelected] = useState(false);

  return (
    <div className='app-wrapper'>
      <Header 
      setHomeSelected={setHomeSelected} 
      setAboutSelected={setAboutSelected} 
      homeSelected={homeSelected} 
      aboutSelected={aboutSelected} />
      
      {homeSelected && <Home />}
      {aboutSelected && <About />}
    </div>
  );
}

export default App;
