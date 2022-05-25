import React from 'react';

const Navigation = (props) => {
    const {
        showMenu,
        setHomeSelected,
        setAboutSelected,
        setWorkSelected,
        setContactSelected,
        homeSelected,
        aboutSelected,
        workSelected,
        contactSelected,
        toggleMenu
    } = props

    const displayHome = () => {
        setHomeSelected(true);
        setAboutSelected(false);
        setWorkSelected(false);
        setContactSelected(false);
        toggleMenu();
    };

    const displayAbout = () => {
        setAboutSelected(true);
        setHomeSelected(false);
        setWorkSelected(false);
        setContactSelected(false);
        toggleMenu();
    };

    const displayWork = () => {
        setWorkSelected(true);
        setHomeSelected(false);
        setAboutSelected(false);
        setContactSelected(false);
        toggleMenu();
    };

    const displayContact = () => {
        setContactSelected(true);
        setHomeSelected(false);
        setAboutSelected(false);
        setWorkSelected(false);
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
                    <p 
                    className={`menu-link ${workSelected && 'current'}`}
                    onClick={() => displayWork()}
                    >
                        My Work
                    </p>
                </li>
                <li className={`nav-item ${showMenu && 'show'}`}>
                    <p 
                    className={`menu-link ${contactSelected && 'current'}`}
                    onClick={() => displayContact()}
                    >
                        Contact Me
                    </p>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;