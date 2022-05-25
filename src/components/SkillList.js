import React from 'react';

const SkillList = ({ listedSkills }) => {
    const { type, title, skills } = listedSkills;

    return (
        <div className={`${type}`}>
            <h3 className='skill-header'>{title}</h3>
            <ul className='skill-list'>
                {skills.map(skill => (
                    <li className='skill-item' key={skill}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}

export default SkillList;