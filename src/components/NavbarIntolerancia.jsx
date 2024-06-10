import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCow, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import imgRestaurante from '../assets/img2/restauranteGenerico.avif';
import burguer from '../assets/img2/burguerVegano.jpg';
import CardRestaurante from './CardRestaurante';

const NavbarIntolerancia = () => {
  const [activeLink, setActiveLink] = useState('Laticionios');
  const scrollContainerRef1 = useRef(null);
  const scrollContainerRef2 = useRef(null);

  const handleLinkClick = (intolerancia) => {
    setActiveLink(intolerancia);
  };

  const links = [
    'Amêndoas',
    'Glúten',
    'Laticínios',
    'Ovo',
    'Frutos do mar',
    'Soja'
  ];

  const handleScroll = (scrollContainer) => {
    scrollContainer.style.scrollBehavior = 'auto';
  };

  const handleWheel = (evt, scrollContainer) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = 'smooth';
  };

  const handleNextClick = (scrollContainer) => {
    scrollContainer.scrollLeft += 900;
    scrollContainer.style.scrollBehavior = 'smooth';
  };

  const handleBackClick = (scrollContainer) => {
    scrollContainer.scrollLeft -= 900;
  };

  useEffect(() => {
    const scrollContainer1 = scrollContainerRef1.current;
    const scrollContainer2 = scrollContainerRef2.current;

    const onScroll1 = () => handleScroll(scrollContainer1);
    const onWheel1 = (evt) => handleWheel(evt, scrollContainer1);
    const onScroll2 = () => handleScroll(scrollContainer2);
    const onWheel2 = (evt) => handleWheel(evt, scrollContainer2);

    if (scrollContainer1 && scrollContainer2) {
      scrollContainer1.addEventListener('scroll', onScroll1);
      scrollContainer1.addEventListener('wheel', onWheel1);

      scrollContainer2.addEventListener('scroll', onScroll2);
      scrollContainer2.addEventListener('wheel', onWheel2);
    }

    return () => {
      if (scrollContainer1 && scrollContainer2) {
        scrollContainer1.removeEventListener('scroll', onScroll1);
        scrollContainer1.removeEventListener('wheel', onWheel1);

        scrollContainer2.removeEventListener('scroll', onScroll2);
        scrollContainer2.removeEventListener('wheel', onWheel2);
      }
    };
  }, []);

  return (
    <section>
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
      <div className="titulos-home"><p>Restaurante 5 estrelas - <span>Livre de Laticínios</span></p></div>
      <div className="row-card-gallery">
        <div className="btnLeft" onClick={() => handleBackClick(scrollContainerRef1.current)}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </div>
        <div className="row-card" ref={scrollContainerRef1}>
          <CardRestaurante estrelas='5' intolerancia={<FontAwesomeIcon icon={faCow} />} img={imgRestaurante} />
          <CardRestaurante estrelas='5' intolerancia={<FontAwesomeIcon icon={faCow} />} img={imgRestaurante} />
          <CardRestaurante estrelas='5' intolerancia={<FontAwesomeIcon icon={faCow} />} img={imgRestaurante} />
          <CardRestaurante estrelas='5' intolerancia={<FontAwesomeIcon icon={faCow} />} img={imgRestaurante} />
          <CardRestaurante estrelas='5' intolerancia={<FontAwesomeIcon icon={faCow} />} img={imgRestaurante} />
          <CardRestaurante estrelas='5' intolerancia={<FontAwesomeIcon icon={faCow} />} img={imgRestaurante} />
          <CardRestaurante estrelas='5' intolerancia={<FontAwesomeIcon icon={faCow} />} img={imgRestaurante} />
          <CardRestaurante estrelas='5' intolerancia={<FontAwesomeIcon icon={faCow} />} img={imgRestaurante} />
          <CardRestaurante estrelas='5' intolerancia={<FontAwesomeIcon icon={faCow} />} img={imgRestaurante} />
          <CardRestaurante estrelas='5' intolerancia={<FontAwesomeIcon icon={faCow} />} img={imgRestaurante} />
        </div>
        <div className="btnRight" onClick={() => handleNextClick(scrollContainerRef1.current)}>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
      <div className="titulos-home"><p>Pratos 5 estrelas - <span>Livre de Laticínios</span></p></div>
      <div className="row-card-gallery">
        <div className="btnLeft" onClick={() => handleBackClick(scrollContainerRef2.current)}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </div>
        <div className="row-card" ref={scrollContainerRef2}>
          <CardRestaurante estrelas='5' intolerancia={<FontAwesomeIcon icon={faCow} />} img={burguer} />
          <CardRestaurante estrelas='5' intolerancia={<FontAwesomeIcon icon={faCow} />} img={burguer} />
          <CardRestaurante estrelas='5' intolerancia={<FontAwesomeIcon icon={faCow} />} img={burguer} />
          <CardRestaurante estrelas='5' intolerancia={<FontAwesomeIcon icon={faCow} />} img={burguer} />
          <CardRestaurante estrelas='5' intolerancia={<FontAwesomeIcon icon={faCow} />} img={burguer} />
          <CardRestaurante estrelas='5' intolerancia={<FontAwesomeIcon icon={faCow} />} img={burguer} />
          <CardRestaurante estrelas='5' intolerancia={<FontAwesomeIcon icon={faCow} />} img={burguer} />
          <CardRestaurante estrelas='5' intolerancia={<FontAwesomeIcon icon={faCow} />} img={burguer} />
          <CardRestaurante estrelas='5' intolerancia={<FontAwesomeIcon icon={faCow} />} img={burguer} />
          <CardRestaurante estrelas='5' intolerancia={<FontAwesomeIcon icon={faCow} />} img={burguer} />
        </div>
        <div className="btnRight" onClick={() => handleNextClick(scrollContainerRef2.current)}>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
    </section>
  );
};

export default NavbarIntolerancia;
