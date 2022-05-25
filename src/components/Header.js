import React, { useState } from 'react';
import Navigation from './Navigation';

const Header = (props) => {
    const {
        setHomeSelected, 
        setAboutSelected,
        setWorkSelected, 
        homeSelected, 
        aboutSelected,
        workSelected
    } = props;

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
            setWorkSelected={setWorkSelected} 
            homeSelected={homeSelected} 
            aboutSelected={aboutSelected}
            workSelected={workSelected}
            toggleMenu={toggleMenu} />
        </header>
    );
}

export default Header;