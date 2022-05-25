import React from 'react';
import Project from './Project';

const Work = () => {
    const projectOne = {
        deployedLink: 'https://jaxon-tech-blog.herokuapp.com',
        githubLink: 'https://github.com/JaxonAdams/blog',
        title: 'Tech Blog',
        imgName: 'blog'
    };

    return (
        <div id='work'>
            <h1 className='lg-heading'>My <span className='secondary-text'>Work</span></h1>
            <h2 className='sm-heading'>Web Applications and Projects</h2>
            <div className='projects'>
                <Project project={projectOne} />
            </div>
        </div>
    );
}

export default Work;