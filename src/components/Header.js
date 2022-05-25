import React, { useState } from 'react';
import Navigation from './Navigation';

const Header = ({ setHomeSelected, setAboutSelected, homeSelected, aboutSelected }) => {
    const [ showMenu, setShowMenu ] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header>
            <div className={`menu-btn ${showMenu && 'close'}`} onClick={() => toggleMenu()}>
                <div className='btn-line'></div>
                <div className='btn-line'></div>
                <div className='btn-line'></div>
            </div>
            <Navigation 
            showMenu={showMenu} 
            setHomeSelected={setHomeSelected} 
            setAboutSelected={setAboutSelected} 
            homeSelected={homeSelected} 
            aboutSelected={aboutSelected}
            toggleMenu={toggleMenu} />
        </header>
    );
}

export default Header;