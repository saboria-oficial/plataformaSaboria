import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import imgRestaurante from '../assets/img2/restauranteGenerico.avif';
import burguer from '../assets/img2/burguerVegano.jpg';
import CardRestaurante from './CardRestaurante';
// imagens de marcação
import bolo3 from "../assets/img2/bolo3.jpg";
import bolo4 from "../assets/img2/bolo4.jpg";
import pizza4 from "../assets/img2/carrosel3.jpg";
import sorvete4 from '../assets/img2/degustacao.webp';
import burguer1 from "../assets/img2/burguer1.jpg";

import logo1 from '../assets/img2/logo_minimalista_sorvetes.webp';
import logo2 from '../assets/img2/logo_le-botteghe-di-leonardo1.webp';
import logo3 from '../assets/img2/logo_veganeriaStuzzi.webp';
import logo4 from '../assets/img2/logo_premiumIcecream.webp';
import logo5 from '../assets/img2/logoPizzaGenerico.jpg'
const NavbarIntolerancia = () => {
  const [activeLink, setActiveLink] = useState('Laticínios');
  const scrollContainerRef1 = useRef(null);
  const scrollContainerRef2 = useRef(null);
//vetorização do conteudo dos card restaurntes
  const restaurantes = [
    { nome: 'Restaurante A', ingredientes: ['ovo'], img: logo1, imgcomida:bolo3 },
    { nome: 'Restaurante B', ingredientes: ['gluten'], img: logo2, imgcomida:burguer1 },
    { nome: 'Restaurante C', ingredientes: ['ovo'], img: logo3, imgcomida:bolo4 },
    { nome: 'Restaurante D', ingredientes: ['leite'], img: logo4, imgcomida: pizza4},
    { nome: 'Restaurante E', ingredientes: [], img: logo5, imgcomida:sorvete4 }
  ];

  const handleLinkClick = (intolerancia) => {
    setActiveLink(intolerancia);
  };

  const links = [
    "Amêndoas",
    'Glúten',
    'Laticínios',
    'Ovo',
    'Frutos do mar',
    'Soja'
  ];
//filtro de alergias da navbar de intolerncias
  const filteredRestaurants = activeLink === 'none' ? restaurantes : restaurantes.filter(restaurant => !restaurant.ingredientes.includes(activeLink.toLowerCase()));
// scrool
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
      <div className="titulos-home"><p>Restaurante 5 estrelas - <span>Livre de {activeLink}</span></p></div>
      <div className="row-card-gallery">
        <div className="btnLeft" onClick={() => handleBackClick(scrollContainerRef1.current)}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </div>
        <div className="row-card" ref={scrollContainerRef1}>
          {filteredRestaurants.map((restaurant, index) => (
            <CardRestaurante
              key={index}
              estrelas='5'
              img={restaurant.img}
              nome={restaurant.nome}
            />
          ))}
        </div>
        <div className="btnRight" onClick={() => handleNextClick(scrollContainerRef1.current)}>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
      <div className="titulos-home"><p>Pratos 5 estrelas - <span>Livre de {activeLink}</span></p></div>
      <div className="row-card-gallery">
        <div className="btnLeft" onClick={() => handleBackClick(scrollContainerRef2.current)}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </div>
        <div className="row-card" ref={scrollContainerRef2}>
          {filteredRestaurants.map((restaurant, index) => (
            <CardRestaurante
              key={index}
              estrelas='5'
              img={restaurant.imgcomida}
              nome={restaurant.nome}
            />
          ))}
        </div>
        <div className="btnRight" onClick={() => handleNextClick(scrollContainerRef2.current)}>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
    </section>
  );
};

export default NavbarIntolerancia;