import React, { useState, useEffect } from "react";
import "../../css/pesquisa.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faFilter, faArrowLeft} from "@fortawesome/free-solid-svg-icons";

//imagem
import sorvete1 from '../../assets/img2/crunch_belga.webp'
import sorvete2 from '../../assets/img2/crunch_chocolate.webp'
import sorvete3 from '../../assets/img2/pistache.webp'
import sorvete4 from '../../assets/img2/degustacao.webp'

import logo1 from '../../assets/img2/logo_minimalista_sorvetes.webp'
import logo2 from '../../assets/img2/logo_le-botteghe-di-leonardo1.webp'
import logo3 from '../../assets/img2/logo_veganeriaStuzzi.webp'
import logo4 from '../../assets/img2/logo_premiumIcecream.webp'
const Pesquisa = () => {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    let into = document.getElementById('into');
    let setinha = document.getElementById('setinha');
    
    if (visivel) {
      into.style.display = 'flex';
      setinha.style.transform = "rotate(-180deg)"
      
    } else {
      into.style.display = 'none';
      setinha.style.transform = "rotate(0deg)"
    }
    
  }, [visivel]);

  const toggleVisibilidade = () => {
  
    setVisivel(!visivel);
  };
 

  
  

  const [distance, setDistance] = useState(0);
  const [data, setData] = useState([
    {
      logo: logo1,
      name: "CorpFit Gelato",
      rating: 4.6,
      distance: 18,
      hours: "Aberto até 00h",
      images: [
       sorvete1, sorvete2, sorvete3, sorvete4
      ],
    },
    {
      logo: logo2,
      name: "Le Botteghe Di Leonardo",
      rating: 4.2,
      distance: 16,
      hours: "Aberto até 20h",
      images: [
        sorvete1, sorvete2, sorvete3, sorvete4
       ],
    },
    {
      logo: logo3,
      name: "Veganeria Stuzzi",
      rating: 4.1,
      distance: 17,
      hours: "Abre às 13h",
      images: [
        sorvete1, sorvete2, sorvete3, sorvete4
       ],
    },
    {
      logo: logo4,
      name: "Sorveteria Soroko",
      rating: 4.4,
      distance: 14,
      hours: "Aberto até 23h",
      images: [
        sorvete1, sorvete2, sorvete3, sorvete4
       ],
    },
  ]);

  const handleDistanceChange = (event) => {
    setDistance(event.target.value);
  };

  return (
    <>
      <Header />
      <div className="containerPesquisa">
        <h2 className="resultadoP">
          Resultados para: <span className="highlight">"Sorvete"</span>
        </h2>
      
        <div className="main-content">
      
          <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><FontAwesomeIcon icon={faFilter}/></button>

<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div class="offcanvas-header">
  

        <aside className="filters">
            <div className="sort">
              <label>Ordenar por:</label>
              <select>
                <option value="popular">Mais populares</option>
                <option value="recommended">Recomendados</option>
                <option value="super">Super restaurantes</option>
              </select>
            </div>
            <div className="distance">
              <label>Distância:</label>
              <input
                type="range"
                min="0"
                max="25"
                step="1"
                onChange={handleDistanceChange}
              />
              <span id="distance-value">{distance}km</span>
            </div>
            <div className="sort">
              <label onClick={toggleVisibilidade}>Intolerâncias: <FontAwesomeIcon icon={faAngleDown} id="setinha"/></label>
              <form id="into">

                <div>
                  <input type="checkbox" name="Lactose" id="Lactose" />
                  <label htmlFor="Lactose">Lactose</label>
                </div>
                <div>
                  <input type="checkbox" name="FrutosDoMar" id="FrutosDoMar" />
                  <label htmlFor="FrutosDoMar">Frutos do mar</label>
                </div>
                <div>
                  <input type="checkbox" name="Gluten" id="Gluten" />
                  <label htmlFor="Gluten">Glúten</label>
                </div>
                <div>
                  <input type="checkbox" name="Amendoas" id="Amendoas" />
                  <label htmlFor="Amendoas">Amendoas</label>
                </div>
                <div>
                  <input type="checkbox" name="Trigo" id="Trigo" />
                  <label htmlFor="Trigo">Trigo</label>
                </div>
              </form>
            </div>
            <div className="btn-filtrar">
              <Link to="/"><button>Filtrar</button></Link>
            </div>
          </aside>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
   
  </div>
</div>
          <div className="results">
            {data.map((item, index) => (
              <div className="result-item" key={index}>
                <div className="perfil-result">
                  <img src={item.logo} alt="" className="result-logo" />
                  <h2>{item.name}</h2>
                </div>
                <div className="info">
                  <span className="star">{item.rating} ★</span>
                  <span>{item.distance}km</span>
                  <span>{item.hours}</span>
                </div>
                <div className="images">
                  {item.images.map((src, imgIndex) => (
                    <img
                      key={imgIndex}
                      src={src}
                      alt={`${item.name} ${imgIndex}`}
                    />
                  ))}
                </div>
                <a href="#" className="view-store">
                  Ver loja
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pesquisa;
