import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavbarIntolerancia = () => {
  const [activeLink, setActiveLink] = useState('Laticionios');

  const handleLinkClick = (intolerancia) => {
    setActiveLink(intolerancia);
  };

  const links = [
    'Amêndoas',
    'Glutén',
    'Laticionios',
    'ovo',
    'frutos do mar',
    'soja'
  ];

  return (
    
         
    <nav className='nav-intolerancia'>
      {links.map((intolerancia) => (
        <Link
          key={intolerancia}
          className={`nav-link-intolerancia ${activeLink === intolerancia ? 'into-active' : ''}`}
          onClick={() => handleLinkClick(intolerancia)}
        >
          {intolerancia}
        </Link>
      ))}
    </nav>
  
   
  );
};

export default NavbarIntolerancia;