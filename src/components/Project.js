import React from 'react';
import { Github, Eye } from 'react-bootstrap-icons';

const Project = ({ project }) => {
    const {
        deployedLink,
        githubLink,
        title,
        imgName
    } = project;

    return (
        <div className='project'>
            <a href={deployedLink} rel='noreferrer' target='_blank'>
                <img src={require(`../assets/images/projects/${imgName}.JPG`)} alt='' className='project-img' />
            </a>
            <a className='project-link' href={deployedLink} rel='noreferrer' target='_blank'><Eye /> {title}</a>
                <a className='github-link' href={githubLink} rel='noreferrer' target='_blank'><Github /> Github</a>
        </div>
    );
}

export default Project;