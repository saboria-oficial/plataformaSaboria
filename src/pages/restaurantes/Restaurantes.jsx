import React from "react";
//components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardRestaurante from "../../components/CardRestaurante.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCow,
  faAngleLeft,
  faCircleArrowLeft,
  faCircleArrowRight
} from "@fortawesome/free-solid-svg-icons";
//imagens
import burguer from '../../assets/img2/burguerVegano.jpg';
import imgRestaurante from "../../assets/img2/restauranteGenerico.avif";
//css
import "../../css/restaurantes.css";
const Restaurantes = () => {
  return (
    <div>
      <Header />
      <div className="container-restaurantes">
      <button className="restaurante-back"><FontAwesomeIcon icon={faAngleLeft}/></button>
        <h2>RESTAURANTES</h2>
        <div className="container2-restaurantes">
          <CardRestaurante
            estrelas="5"
            intolerancia={<FontAwesomeIcon icon={faCow} />}
            img={imgRestaurante}
          />
          <CardRestaurante
            estrelas="5"
            intolerancia={<FontAwesomeIcon icon={faCow} />}
            img={imgRestaurante}
          />
          <CardRestaurante
            estrelas="5"
            intolerancia={<FontAwesomeIcon icon={faCow} />}
            img={imgRestaurante}
          />
          <CardRestaurante
            estrelas="5"
            intolerancia={<FontAwesomeIcon icon={faCow} />}
            img={imgRestaurante}
          />
          <CardRestaurante
            estrelas="5"
            intolerancia={<FontAwesomeIcon icon={faCow} />}
            img={imgRestaurante}
          />

          <CardRestaurante
            estrelas="5"
            intolerancia={<FontAwesomeIcon icon={faCow} />}
            img={imgRestaurante}
          />
          <CardRestaurante
            estrelas="5"
            intolerancia={<FontAwesomeIcon icon={faCow} />}
            img={imgRestaurante}
          />
          <CardRestaurante
            estrelas="5"
            intolerancia={<FontAwesomeIcon icon={faCow} />}
            img={imgRestaurante}
          />
          <CardRestaurante
            estrelas="5"
            intolerancia={<FontAwesomeIcon icon={faCow} />}
            img={imgRestaurante}
          />
          <CardRestaurante
            estrelas="5"
            intolerancia={<FontAwesomeIcon icon={faCow} />}
            img={imgRestaurante}
          />
        </div>
        <div className="restaurante-arrow">
            <button><FontAwesomeIcon icon={faCircleArrowLeft}/></button>
            <button><FontAwesomeIcon icon={faCircleArrowRight}/></button>
        </div>
        <h2>Pratos sem leite mais visitados</h2>
        <div className="container2-restaurantes">
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
        <div className="restaurante-arrow">
            <button><FontAwesomeIcon icon={faCircleArrowLeft}/></button>
            <button><FontAwesomeIcon icon={faCircleArrowRight}/></button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Restaurantes;
