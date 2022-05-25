import React from 'react';

const Navigation = (props) => {
    const {
        showMenu,
        setHomeSelected,
        setAboutSelected,
        setWorkSelected,
        homeSelected,
        aboutSelected,
        workSelected,
        toggleMenu
    } = props

    const displayHome = () => {
        setHomeSelected(true);
        setAboutSelected(false);
        setWorkSelected(false);
        toggleMenu();
    };

    const displayAbout = () => {
        setAboutSelected(true);
        setHomeSelected(false);
        setWorkSelected(false);
        toggleMenu();
    };

    const displayWork = () => {
        setWorkSelected(true);
        setHomeSelected(false);
        setAboutSelected(false);
        toggleMenu();
    }

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
                    <p 
                    className={`menu-link ${workSelected && 'current'}`}
                    onClick={() => displayWork()}
                    >
                        My Work
                    </p>
                </li>
                <li className={`nav-item ${showMenu && 'show'}`}>
                    <p className='menu-link'>Contact Me</p>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;