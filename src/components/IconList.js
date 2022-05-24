import React from 'react';
import { Github, Instagram, Linkedin } from 'react-bootstrap-icons';

const IconList = () => {
    return (
        <div id='icons'>
            <a href='https://github.com/JaxonAdams' rel='noreferrer' target='_blank' className='nav-link'>
                <Github className='icon-link' />
            </a>
            <a href='https://www.instagram.com/jj_adams01/' rel='noreferrer' target='_blank' className='nav-link'>
                <Instagram className='icon-link' />
            </a>
            <a href='https://www.linkedin.com/in/jaxon-adams-ba5743229' rel='noreferrer' target='_blank' className='nav-link'>
                <Linkedin className='icon-link' />
            </a>
        </div>
    );
}

export default IconList;