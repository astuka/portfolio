import React from 'react';

interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  gpa?: string;
}

interface EducationProps {
  educations: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ educations }) => {
    return (
        <section className='container'>
            <h2>Education</h2>
            {educations.map((education, index) => (
                <div key={index} style={{marginBottom: '10px', position: 'relative', paddingLeft: '20px'}}>
                    <div style={{
                    position: 'absolute',
                    left: 0,
                    top: '10px',
                    height: '10px',
                    width: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#F2C383'}}></div>
                    <h3>{education.institution}</h3>
                    <h4>{education.degree}</h4>
                    <p><em>{education.duration}</em></p>
                    {education.gpa && <p>GPA: {education.gpa}</p>}
                </div>
            ))}
        </section>
    );
};

export default Education;