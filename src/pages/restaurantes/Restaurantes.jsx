import React from "react";
//components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
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
import pizzaria1 from '../../assets/img2/logoPizzaGenerico.jpg'
import sorveteria1 from '../../assets/img2/logo_le-botteghe-di-leonardo1.webp'

import logo1 from '../../assets/img2/logo_minimalista_sorvetes.webp';
import logo2 from '../../assets/img2/logo_le-botteghe-di-leonardo1.webp';
import logo3 from '../../assets/img2/logo_veganeriaStuzzi.webp';
import logo4 from '../../assets/img2/logo_premiumIcecream.webp';
import logo5 from '../../assets/img2/logoPizzaGenerico.jpg'

import logo6 from '../../assets/img2/logo6.jpg'
import logo7 from '../../assets/img2/logo7.jpg'
import logo8 from '../../assets/img2/logo8.jpg'
import logo9 from '../../assets/img2/logo9.avif'
import logo10 from '../../assets/img2/logo10.jpg'
import logo11 from '../../assets/img2/logo11.avif'
//comidas
import sorvete1 from '../../assets/img2/crunch_belga.webp';
import sorvete2 from '../../assets/img2/crunch_chocolate.webp';
import sorvete3 from '../../assets/img2/pistache.webp';
import sorvete4 from '../../assets/img2/degustacao.webp';
import pizza1 from "../../assets/img2/pizza1.jpg";
import pizza2 from "../../assets/img2/pizza2.avif";
import pizza3 from "../../assets/img2/pizza3.jpg";
import pizza4 from "../../assets/img2/carrosel3.jpg";
import pao1 from "../../assets/img2/pao1.jpg";
import pao2 from "../../assets/img2/pao2.jpg";
import pao3 from "../../assets/img2/pao3.jpg";
import pao4 from "../../assets/img2/pao4.jpg";
import burguer1 from "../../assets/img2/burguer1.jpg";
import burguer2 from "../../assets/img2/burguer2.avif";
import burguer3 from "../../assets/img2/burguer3.jpg";
import burguer4 from "../../assets/img2/burguer4.jpg";
import bolo1 from "../../assets/img2/bolo1.jpg";
import bolo2 from "../../assets/img2/bolo2.jpg";
import bolo3 from "../../assets/img2/bolo3.jpg";
import bolo4 from "../../assets/img2/bolo4.jpg";
import peixe1 from "../../assets/img2/peixe1.jpg";
import peixe2 from "../../assets/img2/peixe2.jpg";
import peixe3 from "../../assets/img2/peixe3.jpg";
import peixe4 from "../../assets/img2/peixe4.jpg";
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
          <Link to="/PaginaRestaurante">
          <CardRestaurante
            estrelas="5"
            intolerancia={<FontAwesomeIcon icon={faCow} />}
            img={pizzaria1}
          />
          </Link>
          <Link to="/PagRestaurantePremium">
          <CardRestaurante
            estrelas="5"
            intolerancia={<FontAwesomeIcon icon={faCow} />}
            img={sorveteria1}
          />
          </Link>
          <CardRestaurante
            estrelas="5"
            intolerancia={<FontAwesomeIcon icon={faCow} />}
            img={logo1}
          />
          <CardRestaurante
            estrelas="5"
            intolerancia={<FontAwesomeIcon icon={faCow} />}
            img={logo11}
          />
          <CardRestaurante
            estrelas="5"
            intolerancia={<FontAwesomeIcon icon={faCow} />}
            img={logo3}
          />

          <CardRestaurante
            estrelas="5"
            intolerancia={<FontAwesomeIcon icon={faCow} />}
            img={logo6}
          />
          <CardRestaurante
            estrelas="5"
            intolerancia={<FontAwesomeIcon icon={faCow} />}
            img={logo10}
          />
          <CardRestaurante
            estrelas="5"
            intolerancia={<FontAwesomeIcon icon={faCow} />}
            img={logo9}
          />
          <CardRestaurante
            estrelas="5"
            intolerancia={<FontAwesomeIcon icon={faCow} />}
            img={logo7}
          />
          <CardRestaurante
            estrelas="5"
            intolerancia={<FontAwesomeIcon icon={faCow} />}
            img={logo8}
          />
        </div>
        <div className="restaurante-arrow">
            <button><FontAwesomeIcon icon={faCircleArrowLeft}/></button>
            <button><FontAwesomeIcon icon={faCircleArrowRight}/></button>
        </div>
        <h2>Pratos sem leite mais visitados</h2>
        <div className="container2-restaurantes">
        <CardRestaurante estrelas='5' intolerancia={<FontAwesomeIcon icon={faCow} />} img={burguer} />
          <CardRestaurante estrelas='5' intolerancia={<FontAwesomeIcon icon={faCow} />} img={pizza1} />
          <CardRestaurante estrelas='5' intolerancia={<FontAwesomeIcon icon={faCow} />} img={peixe2} />
          <CardRestaurante estrelas='5' intolerancia={<FontAwesomeIcon icon={faCow} />} img={burguer4} />
          <CardRestaurante estrelas='5' intolerancia={<FontAwesomeIcon icon={faCow} />} img={sorvete3} />

          <CardRestaurante estrelas='4' intolerancia={<FontAwesomeIcon icon={faCow} />} img={burguer2} />
          <CardRestaurante estrelas='5' intolerancia={<FontAwesomeIcon icon={faCow} />} img={pao1} />
          <CardRestaurante estrelas='5' intolerancia={<FontAwesomeIcon icon={faCow} />} img={sorvete1} />
          <CardRestaurante estrelas='3.2' intolerancia={<FontAwesomeIcon icon={faCow} />} img={bolo2} />
          <CardRestaurante estrelas='5' intolerancia={<FontAwesomeIcon icon={faCow} />} img={pizza3} />
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
