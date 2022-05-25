import React from 'react';
import Project from './Project';

const Work = () => {
    const projectOne = {
        deployedLink: 'https://jaxon-tech-blog.herokuapp.com',
        githubLink: 'https://github.com/JaxonAdams/blog',
        title: 'Tech Blog',
        imgName: 'blog'
    };

    const projectTwo = {
        deployedLink: 'https://jadams-fishinglog.herokuapp.com',
        githubLink: 'https://github.com/JaxonAdams/fishing-log',
        title: 'Fishing Log',
        imgName: 'fishing-log'
    };

    const projectThree = {
        deployedLink: 'https://betterthanstack.herokuapp.com',
        githubLink: 'https://github.com/JaxonAdams/better-than-stack',
        title: 'Coding Forum',
        imgName: 'better-than-stack'
    };

    const projectFour = {
        deployedLink: 'https://desolate-river-93042.herokuapp.com',
        githubLink: 'https://github.com/JaxonAdams/budget-pwa',
        title: 'Budget Tracker',
        imgName: 'budget-pwa'
    };

    const projectFive = {
        deployedLink: 'https://jaxonadams.github.io/advice-generator',
        githubLink: 'https://github.com/JaxonAdams/advice-generator',
        title: 'Advice Generator',
        imgName: 'advice-generator'
    };

    const projectSix = {
        deployedLink: 'https://jaxonadams.github.io/git-it-done',
        githubLink: 'https://github.com/JaxonAdams/git-it-done',
        title: 'Git It Done',
        imgName: 'git-it-done'
    };

    const projectSeven = {
        deployedLink: 'https://jaxonadams.github.io/taskmaster-pro',
        githubLink: 'https://github.com/JaxonAdams/taskmaster-pro',
        title: 'Task Tracker',
        imgName: 'taskmaster-pro'
    };

    const projectEight = {
        deployedLink: 'https://jaxonadams.github.io/run-buddy',
        githubLink: 'https://github.com/JaxonAdams/run-buddy',
        title: 'Run Buddy',
        imgName: 'run-buddy'
    };

    return (
        <div id='work'>
            <h1 className='lg-heading'>My <span className='secondary-text'>Work</span></h1>
            <h2 className='sm-heading'>Web Applications and Projects</h2>
            <div className='projects'>
                <Project project={projectOne} />
                <Project project={projectTwo} />
                <Project project={projectThree} />
                <Project project={projectFour} />
                <Project project={projectFive} />
                <Project project={projectSix} />
                <Project project={projectSeven} />
                <Project project={projectEight} />
            </div>
        </div>
    );
}

export default Work;