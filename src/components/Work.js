import React from 'react';
import Project from './Project';

const Work = () => {
    const projectOne = {
        deployedLink: 'https://gd-fitness.vercel.app/',
        githubLink: 'https://github.com/JaxonAdams/gd-aerobics',
        title: 'Gotta Dance Punch Pass',
        imgName: 'gd-aerobics'
    };

    const projectTwo = {
        deployedLink: 'https://angler-logbook.vercel.app',
        githubLink: 'https://github.com/JaxonAdams/angler-logbook',
        title: "WIP Angler's Logbook",
        imgName: 'angler-logbook'
    };
    
    const projectThree = {
        deployedLink: 'https://jaxon-planner.herokuapp.com',
        githubLink: 'https://github.com/JaxonAdams/musical-octo-potato',
        title: 'Personal Planner',
        imgName: 'planner'
    };
    
    const projectFour = {
        deployedLink: 'https://jaxon-tech-blog.herokuapp.com',
        githubLink: 'https://github.com/JaxonAdams/blog',
        title: 'Tech Blog',
        imgName: 'blog'
    };

    const projectFive = {
        deployedLink: 'https://paige-babyshower.herokuapp.com',
        githubLink: 'https://github.com/JaxonAdams/miniature-invention',
        title: 'Baby Shower',
        imgName: 'paige-babyshower'
    };

    const projectSix = {
        deployedLink: 'https://jadams-fishinglog.herokuapp.com',
        githubLink: 'https://github.com/JaxonAdams/fishing-log',
        title: 'Fishing Log',
        imgName: 'fishing-log'
    };

    // const projectSix = {
    //     deployedLink: 'https://bloc-goose-09649.herokuapp.com',
    //     githubLink: 'https://github.com/emalie/devinitely-opinionated',
    //     title: 'DEVinitely Opinionated',
    //     imgName: 'devinitely-opinionated'
    // };

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
