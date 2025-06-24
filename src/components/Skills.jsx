import React from 'react';
import './Skills.css';

const skills = [
  'React',
  'Node.js',
  'JavaScript',
  'TypeScript',
  'HTML5 & CSS3',
  'Tailwind CSS',
  'MongoDB',
  'Express.js',
  'Redux',
  'Git & GitHub',
  'REST APIs',
  'Framer Motion',
];

const Skills = () => {
  return (
    <section id="skills" className="skills container section">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-tag">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;