import React from 'react';

const Navigation = (props) => {
    const {
        showMenu,
        setHomeSelected,
        setAboutSelected,
        homeSelected,
        aboutSelected,
        toggleMenu
    } = props

    const displayHome = () => {
        setHomeSelected(true);
        setAboutSelected(false);
        toggleMenu();
    };

    const displayAbout = () => {
        setAboutSelected(true);
        setHomeSelected(false);
        toggleMenu();
    };

    return (
        <nav className={`menu ${showMenu && 'show'}`}>
            <div className={`menu-branding ${showMenu && 'show'}`}>
                <div className='portrait'></div>
            </div>
            <ul className={`nav-list ${showMenu && 'show'}`}>
                <li className={`nav-item ${showMenu && 'show'}`}>
                    <p 
                    className={`menu-link ${homeSelected && 'current'}`} 
                    onClick={() => displayHome()}
                    >
                        Home
                    </p>
                </li>
                <li className={`nav-item ${showMenu && 'show'}`}>
                    <p 
                    className={`menu-link ${aboutSelected && 'current'}`} 
                    onClick={() => displayAbout()}
                    >
                        About Me
                    </p>
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