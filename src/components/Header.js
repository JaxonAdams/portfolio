import React, { useState } from 'react';
import Navigation from './Navigation';

const Header = (props) => {
    const {
        setHomeSelected, 
        setAboutSelected,
        setWorkSelected,
        setContactSelected, 
        homeSelected, 
        aboutSelected,
        workSelected,
        contactSelected
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
            setContactSelected={setContactSelected} 
            homeSelected={homeSelected} 
            aboutSelected={aboutSelected}
            workSelected={workSelected}
            contactSelected={contactSelected}
            toggleMenu={toggleMenu} />
        </header>
    );
}

export default Header;