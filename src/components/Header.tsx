import React from 'react';

interface HeaderProps {
  name: string;
  contactInfo: {
    phone: string;
    location: string;
    email: string;
  };
}


const Header: React.FC<HeaderProps> = ({ name, contactInfo }) => {
  return (
    // <header>
    //     <h1>{name}</h1>
    //     <nav>
    //         <a href="#about">About me</a>
    //         <a href="#resume">Resume</a>
    //         <a href="#work">Work</a>
    //         <a href="#get-in-touch" style={{ backgroundColor: 'orangered', color: 'white', padding: '10px 15px', textDecoration: 'none', borderRadius: '5px'}}>Get in touch!</a>
    //     </nav>
    // </header>


    <header className='container'>
      <h1>{name}</h1>
      <p>{contactInfo.phone} | {contactInfo.location} | {contactInfo.email}</p>
    </header>
  );
};

export default Header;

export {}