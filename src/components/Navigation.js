import React from 'react';

const Navigation = ({ showMenu }) => {
    return (
        <nav className={`menu ${showMenu && 'show'}`}>
            <div className={`menu-branding ${showMenu && 'show'}`}>
                <div className='portrait'></div>
            </div>
            <ul className={`nav-list ${showMenu && 'show'}`}>
                <li className={`nav-item ${showMenu && 'show'}`}>
                    <p className='menu-link current'>Home</p>
                </li>
                <li className={`nav-item ${showMenu && 'show'}`}>
                    <p className='menu-link'>About Me</p>
                </li>
                <li className={`nav-item ${showMenu && 'show'}`}>
                    <p className='menu-link'>My Work</p>
                </li>
                <li className={`nav-item ${showMenu && 'show'}`}>
                    <p className='menu-link'>Contact Me</p>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;