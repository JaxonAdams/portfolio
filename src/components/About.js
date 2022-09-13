import React from 'react';
import SkillList from './SkillList';

const About = () => {
    const frontEndSkills = {
        type: 'front-end',
        title: 'Front End Skills',
        skills: [
            'React',
            'Handlebars.js and other templating engines',
            'JQuery, Bootstrap, and other libraries',
            'AJAX, Fetch API, and DOM manipulation',
            'Webpack'
        ]
    };

    const backEndSkills = {
        type: 'back-end',
        title: 'Back End Skills',
        skills: [
            'Node.js and NPM',
            'Express.js and building APIs',
            'SQL and Relational Databases',
            'Sequelize and other ORMs',
            'NoSQL, specifically MongoDB and Mongoose'
        ]
    };

    const fullStackSkills = {
        type: 'other-skills',
        title: 'Other Skills',
        skills: [
            'TDD and OOP',
            'Progressive Web Applications',
            'Passion for web/software development',
            'Familiar with MVC',
            'Always moving forward!'
        ]
    };

    return (
        <div id='about'>
            <h1 className='lg-heading'>About <span className='secondary-text'>Me</span></h1>
            <h2 className='sm-heading'>Always Learning</h2>
            <div className='bio'>
                <div className='bio-portrait'></div>
                <p className='my-bio'>
                    I am a full stack developer located in Eagle Mountain, Utah. I have many front and back end skills, and enjoy working with a full stack. I firmly believe there is no problem that cannot be solved. I am always working to learn new technologies and skills; I am not intimidated by the skills I don't yet possess, and my growth mindset is my greatest asset.
                </p>
                <SkillList listedSkills={frontEndSkills} />
                <SkillList listedSkills={backEndSkills} />
                <SkillList listedSkills={fullStackSkills} />
            </div>
        </div>
    );
}

export default About;