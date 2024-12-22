import React from 'react';


interface WorkExperienceItem {
  company: string;
  title: string;
  duration: string;
  responsibilities: string[];
}

interface WorkExperienceProps {
  experiences: WorkExperienceItem[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ experiences }) => {
  return (
    <section className='container'>
      <h2>Work</h2>
      {experiences.map((experience, index) => (
        <div key={index} style={{ marginBottom: '10px', position:'relative', paddingLeft:'20px' }}>
          <div style={{
                      position: 'absolute',
                      left: 0,
                      top: '10px',
                      height: '10px',
                      width: '10px',
                      borderRadius: '50%',
                      backgroundColor: '#F2C383'}}></div>
          <h3>{experience.company}</h3>
          <h4>{experience.title}</h4>
            <p><em>{experience.duration}</em></p>
          <ul>
            {experience.responsibilities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default WorkExperience;

export{}