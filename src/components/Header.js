import React, { useState } from 'react';
import Navigation from './Navigation';

const Header = () => {
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
            <Navigation showMenu={showMenu} />
        </header>
    );
}

export default Header;