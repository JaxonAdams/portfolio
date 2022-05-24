import React, { useState } from 'react';

const Header = () => {
    const [ showMenu, setShowMenu ] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className={`menu-btn ${showMenu && 'close'}`} onClick={() => toggleMenu()}>
            <div className='btn-line'></div>
            <div className='btn-line'></div>
            <div className='btn-line'></div>
        </div>
    );
}

export default Header;