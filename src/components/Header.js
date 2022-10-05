import React, { useState, useEffect } from 'react';
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

    // disable page scrolling when menu is open
    useEffect(() => {
        const homePage = document.querySelector('#home');
        const aboutPage = document.querySelector('#about');
        const workPage = document.querySelector('#work');
        const contactPage = document.querySelector('#contact');

        if (showMenu) {
            // disable scroll by adding 'noscroll' class to each page
            homeSelected && homePage.classList.add('noscroll');
            aboutSelected && aboutPage.classList.add('noscroll');
            workSelected && workPage.classList.add('noscroll');
            contactSelected && contactPage.classList.add('noscroll');
        } else {
            // enable scroll by removing 'noscroll' class to each page
            homeSelected && homePage.classList.remove('noscroll');
            aboutSelected && aboutPage.classList.remove('noscroll');
            workSelected && workPage.classList.remove('noscroll');
            contactSelected && contactPage.classList.remove('noscroll');
        };
    }, [showMenu, homeSelected, aboutSelected, workSelected, contactSelected]);

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
