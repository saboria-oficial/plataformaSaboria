import React, { useRef, useEffect } from "react";
import "../../css/home.css";
// components
import Header from "../../components/Header";
import Footer from "../../components/Footer.jsx";
import NavbarIntolerancia from "../../components/NavbarIntolerancia.jsx";
import FormularioClientes from "../../components/FormularioClientes.jsx";
import Comentarios from "../../components/Comentarios.jsx";

//import imagens

import Carrosel from "../../components/Carrosel.jsx";
import Image1 from "../../assets/img2/carrossel.webp";
import Image2 from "../../assets/img2/carrosel2.webp";
import Image3 from "../../assets/img2/carrosel3.jpg";
import ImgLogoTipoLifeBand from "../../assets/img2/VARIANTE LOGOMARCA LIFEBAND.png";
import ImgLogoTipoNutri from "../../assets/img2/logotiponutriacess.webp";
// Import dos icones

const Home = () => {
  const scrollContainerRef1 = useRef(null);
  const scrollContainerRef2 = useRef(null);

  const handleScroll = (scrollContainer) => {
    scrollContainer.style.scrollBehavior = "auto";
  };

  const handleWheel = (evt, scrollContainer) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "smooth";
  };

  const handleNextClick = (scrollContainer) => {
    scrollContainer.scrollLeft += 900;
    scrollContainer.style.scrollBehavior = "smooth";
  };

  const handleBackClick = (scrollContainer) => {
    scrollContainer.scrollLeft -= 900;
  };

  useEffect(() => {
    const scrollContainer1 = scrollContainerRef1.current;
    const scrollContainer2 = scrollContainerRef2.current;

    if (scrollContainer1 && scrollContainer2) {
      scrollContainer1.addEventListener("scroll", () =>
        handleScroll(scrollContainer1)
      );
      scrollContainer1.addEventListener("wheel", (evt) =>
        handleWheel(evt, scrollContainer1)
      );

      scrollContainer2.addEventListener("scroll", () =>
        handleScroll(scrollContainer2)
      );
      scrollContainer2.addEventListener("wheel", (evt) =>
        handleWheel(evt, scrollContainer2)
      );
    }

    return () => {
      if (scrollContainer1 && scrollContainer2) {
        scrollContainer1.removeEventListener("scroll", () =>
          handleScroll(scrollContainer1)
        );
        scrollContainer1.removeEventListener("wheel", (evt) =>
          handleWheel(evt, scrollContainer1)
        );

        scrollContainer2.removeEventListener("scroll", () =>
          handleScroll(scrollContainer2)
        );
        scrollContainer2.removeEventListener("wheel", (evt) =>
          handleWheel(evt, scrollContainer2)
        );
      }
    };
  }, []);

  return (
    <div>
      <Header />
      <Carrosel img1={Image1} img2={Image2} img3={Image3} />
      <div className="scrolar">
        <NavbarIntolerancia />
      </div>

      <div className="scrolar">
        <Comentarios nome="DEPOIMENTOS" />
      </div>
      <FormularioClientes className="formulario-link" />
      <div className="container-parcerias2">
        <h2 className="title-parceria2">NOSSAS PARCERIAS</h2>
        <p className="line"></p>
      </div>
      <div className="container-img-parceria">
        <img src={ImgLogoTipoNutri} alt="logotipo" />
        <img src={ImgLogoTipoNutri} alt="logotipo" />
        <img src={ImgLogoTipoLifeBand} alt="logotipo" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
