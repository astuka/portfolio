import React from 'react';
import './styles/main.scss';
import Header from './components/Header';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Footer from './components/Footer';

const App: React.FC = () => {
    const headerData = {
        name: 'Jacob Robinson',
        contactInfo: {
            phone: '[Phone hidden]',
            location: '[Address hidden]',
            email: 'jrobins855@gmail.com',
        },
    };

    const workExperiences = [
        {
            company: 'JBR Holdings',
            title: 'Managing Partner',
            duration: 'June 2020 - Present',
            responsibilities: [
                'Built a company from scratch with six figure budget, focusing on the intersection of art and technology',
                'Created custom AI models using Llama 2 and Stable Diffusion for use in concept art and drafting',
                'Created media website which gained ~2mil impressions and ~20k reads in the course of 18 months',
            ],
        },
        {
            company: 'VMware',
            title: 'Solutions Engineer',
            duration: 'July 2021 - August 2023',
            responsibilities: [
                'As SLED (2023): Technically validated roughly ~$4mil in state and local government opportunities per quarter. Focus on public cloud (Azure/AWS/GCP), multi-cloud management, Kubernetes',
                'As Commercial (2021/22): Technically validated ~$3mil in Closed-Won deals, with skill set including compute/storage/network virtualization, Azure, AWS, Kubernetes, Next-Gen Antivirus, ML/AI, and End User Computing',
            ],
        },
        {
            company: 'VMware',
            title: 'Strategy Intern',
            duration: 'May 2020 - August 2020',
            responsibilities: [
                'Conducted data analysis using PowerBI/Tableau to find new opportunities in the ~$70mil partner pipeline',
            ],
        },
        {
            company: 'Arizona State University',
            title: 'SIM Fund - As Analyst (2019/20)',
            duration: 'August 2019 - May 2021',
            responsibilities: [
                'Helped create a custom trading algorithm in Python, using pandas/numpy/Bloomberg API, based on the strategy of theoretical default options',
            ],
        },
        {
          company: 'Arizona State University',
          title: 'SIM Fund - As Portfolio Manager (2020/21)',
          duration: 'August 2019 - May 2021',
          responsibilities: [
            'Managed two teams, supervising their trading strategies as they invested ~$1mil of the university endowment'
          ]
        },
        {
            company: 'Arizona State University',
            title: 'Community Action Grant Chair',
            duration: 'August 2018 - May 2020',
            responsibilities: [
                'Performed due diligence and analysis on 500+ startups and nonprofits applying to ~$150k worth of university grants',
            ],
        },
    ];

    const educations = [
        {
          institution: 'Arizona State University – Barrett, The Honors College',
          degree: 'Bachelor of Science, Honors Finance/Economics (minor Psychology)',
          duration: 'Class of 2021',
          gpa: 'GPA 3.86/4.0',
        },
        {
            institution: 'Stanford University',
            degree: 'Summer Session, Psychology & Product Management',
            duration: 'Summer 2019'
        }
    ];

  return (
    <div> 
    <Header {...headerData} />
      <div className='main-content'>
        <div className='left-col'>
        <WorkExperience experiences={workExperiences} />
          <Education educations={educations} />
          
        </div>
      </div>
      <Footer/>
      </div>
    
    // <div>
    //   <Header {...headerData} />
    //   <WorkExperience experiences={workExperiences} />
    //   <Education educations={educations} />
    //   <Footer />
    // </div>
  );
};

export default App;