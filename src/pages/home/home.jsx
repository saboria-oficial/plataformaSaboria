import React, { useRef, useEffect } from 'react';
import '../../css/home.css';
// components
import Header from '../../components/Header';
import Footer from '../../components/Footer.jsx';
import NavbarIntolerancia from '../../components/NavbarIntolerancia.jsx';
import FormularioClientes from '../../components/FormularioClientes.jsx';
import Comentarios from '../../components/Comentarios.jsx';
import CardRestaurante from '../../components/CardRestaurante.jsx';

//import imagens
import imgRestaurante from '../../assets/img2/restauranteGenerico.avif';
import burguer from '../../assets/img2/burguerVegano.jpg';
import Carrosel from '../../components/Carrosel.jsx';
import Image1 from '../../assets/img2/carrossel.webp';
import Image2 from '../../assets/img2/carrosel2.webp';
import Image3 from '../../assets/img2/carrosel3.webp';
import ImgLogoTipoNutri  from '../../assets/img2/logotiponutriacess.webp'
// Import dos icones 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCow, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const scrollContainerRef1 = useRef(null);
  const scrollContainerRef2 = useRef(null);

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

    if (scrollContainer1 && scrollContainer2) {
      scrollContainer1.addEventListener('scroll', () => handleScroll(scrollContainer1));
      scrollContainer1.addEventListener('wheel', (evt) => handleWheel(evt, scrollContainer1));

      scrollContainer2.addEventListener('scroll', () => handleScroll(scrollContainer2));
      scrollContainer2.addEventListener('wheel', (evt) => handleWheel(evt, scrollContainer2));
    }

    return () => {
      if (scrollContainer1 && scrollContainer2) {
        scrollContainer1.removeEventListener('scroll', () => handleScroll(scrollContainer1));
        scrollContainer1.removeEventListener('wheel', (evt) => handleWheel(evt, scrollContainer1));

        scrollContainer2.removeEventListener('scroll', () => handleScroll(scrollContainer2));
        scrollContainer2.removeEventListener('wheel', (evt) => handleWheel(evt, scrollContainer2));
      }
    };
  }, []);

  return (
    <div>
      <Header />
      <Carrosel img1={Image1} img2={Image2} img3={Image3} />
      <div className='scrolar'>
        <NavbarIntolerancia />
      </div>
      <div className="titulos-home"><p>Restaurante 5 estrelas - <span>Livre de laticínios</span></p></div>
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
      <div className="titulos-home"><p>Pratos 5 estrelas - <span>Livre de laticínios</span></p></div>
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
      <div className='scrolar'>
        <Comentarios />
      </div>
      <FormularioClientes id="formulario-link"/>
      <div className='container-parcerias2' >
        <h2 className="title-parceria2">NOSSAS PARCERIAS</h2>
            <p className='line'></p></div>
            <div className="container-img-parceria" >
              <img src={ImgLogoTipoNutri} alt="logotipo" />
              <img src={ImgLogoTipoNutri} alt="logotipo" />
              <img src={ImgLogoTipoNutri} alt="logotipo" />
            </div>
      <Footer />
    </div>
  );
}

export default Home;