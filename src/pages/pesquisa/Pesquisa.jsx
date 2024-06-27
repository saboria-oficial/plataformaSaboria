import React, { useState, useEffect } from "react";
import "../../css/pesquisa.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faFilter } from "@fortawesome/free-solid-svg-icons";

// Imagens
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
const Pesquisa = () => {
  const [search, setSearch] = useState("");
  const [visivel, setVisivel] = useState(false);
  const [distance, setDistance] = useState(0);
  const [filters, setFilters] = useState({
    Lactose: false,
    FrutosDoMar: false,
    Gluten: false,
    Amendoas: false,
    Trigo: false,
    Ovos: false,
  });
  const [data] = useState([
    {
      logo: logo1,
      name: "CorpFit Gelato",
      nicho:"Sorvete",
      rating: 4.6,
      distance: 18,
      hours: "Aberto até 00h",
      images: [sorvete1, sorvete2, sorvete3, sorvete4],
      intolerances: ["Lactose", "Amendoas"],
    },
    {
      logo: logo2,
      name: "Le Botteghe Di Leonardo",
      nicho:"Sorvete",
      rating: 4.2,
      distance: 16,
      hours: "Aberto até 20h",
      images: [sorvete1, sorvete2, sorvete3, sorvete4],
      intolerances: ["Lactose", "Amendoas"],
      link: "/PagRestaurantePremium"
    },
    {
      logo: logo3,
      name: "Veganeria Stuzzi",
      nicho:"Sorvete",
      rating: 4.1,
      distance: 17,
      hours: "Abre às 13h",
      images: [sorvete1, sorvete2, sorvete3, sorvete4],
      intolerances: ["Lactose", "Amendoas"],
    },
    {
      logo: logo4,
      name: "Sorveteria Soroko",
      nicho:"Sorvete",
      rating: 4.4,
      distance: 14,
      hours: "Aberto até 23h",
      images: [sorvete1, sorvete2, sorvete3, sorvete4],
      intolerances: ["Lactose", "Amendoas"]
    },
    {
      logo: logo5,
      name: "Bom Recheio",
      nicho:"Pizza",
      rating: 5,
      distance: 14,
      hours: "Aberto até 02h",
      images: [pizza1, pizza2, pizza3, pizza4],
      intolerances: ["Lactose", "Trigo", "Gluten"],
      link: "/PaginaRestaurante"
    },
    {
      logo: logo6,
      name: "Padaria Pão do João",
      nicho:"Pão café",
      rating: 5,
      distance: 14,
      hours: "Aberto até 22h",
      images: [pao1, pao2, pao3, pao4],
      intolerances: ["Lactose", "Trigo", "Gluten"],
    },
    {
      logo: logo7,
      name: "Bakkes Bakery",
      nicho:"Pão café",
      rating: 5,
      distance: 14,
      hours: "Aberto até 21h",
      images: [pao1, pao2, pao3, pao4],
      intolerances: ["Lactose", "Gluten"],
    },
    {
      logo: logo8,
      name: "Pizza Daora",
      nicho:"Pizza",
      rating: 5,
      distance: 14,
      hours: "Aberto até 23h",
      images: [pizza1, pizza2, pizza3, pizza4],
      intolerances: ["Lactose", "Gluten", "Trigo"],
    },
    {
      logo: logo9,
      name: "Delicious Burguer",
      nicho:"Hamburguer",
      rating: 5,
      distance: 14,
      hours: "Aberto até 00h",
      images: [burguer1, burguer2, burguer3, burguer4],
      intolerances: ["Lactose", "Gluten", "Trigo"],
    },
    {
      logo: logo10,
      name: "Bolinho Gostoso",
      nicho:"Bolo",
      rating: 5,
      distance: 14,
      hours: "Aberto até 00h",
      images: [bolo1, bolo2, bolo3, bolo4],
      intolerances: ["Lactose", "Gluten", "Ovos"],
    },
    {
      logo: logo11,
      name: "Quiosque Navegando",
      nicho:"Camarão peixe",
      rating: 5,
      distance: 14,
      hours: "Aberto até 00h",
      images: [peixe1, peixe2, peixe3, peixe4],
      intolerances: ["FrutosDoMar"],
    },
  ]);

  const applyFilters = () => {
    const filtered = data.filter((restaurant) => {
      const intolerances = restaurant.intolerances || [];
      if (filters.Lactose && !intolerances.includes('Lactose')) return false;
      if (filters.FrutosDoMar && !intolerances.includes('FrutosDoMar')) return false;
      if (filters.Gluten && !intolerances.includes('Gluten')) return false;
      if (filters.Amendoas && !intolerances.includes('Amendoas')) return false;
      if (filters.Trigo && !intolerances.includes('Trigo')) return false;
      if (filters.Ovos && !intolerances.includes('Ovos')) return false;
      return true;
    });

    return filtered.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.nicho.toLowerCase().includes(search.toLowerCase())
    );
  };

  const restaurantes = applyFilters();

  useEffect(() => {
    const into = document.getElementById('into');
    const setinha = document.getElementById('setinha');

    if (visivel) {
      into.style.display = 'flex';
      setinha.style.transform = 'rotate(-180deg)';
    } else {
      into.style.display = 'none';
      setinha.style.transform = 'rotate(0deg)';
    }
  }, [visivel]);

  const toggleVisibilidade = () => {
    setVisivel(!visivel);
  };

  const handleDistanceChange = (event) => {
    setDistance(event.target.value);
  };

  const handleFilterChange = (event) => {
    const { name, checked } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  return (
    <>
      <Header />
      <div className="containerPesquisa">
       
        <div className="main-content">
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
          >
            <FontAwesomeIcon icon={faFilter} />
          </button>
          <h2 id="filtrarpesq">Filtros</h2>
          <div
            className="offcanvas offcanvas-start"
            data-bs-scroll="true"
            data-bs-backdrop="false"
            tabIndex="-1"
            id="offcanvasScrolling"
            aria-labelledby="offcanvasScrollingLabel"
          >
            <div className="offcanvas-header">
              <aside className="filters">
                <div className="sort">
                  <label>Ordenar por:</label>
                </div>
                <div className="sort">
                  <label onClick={toggleVisibilidade}>
                    Intolerâncias: <FontAwesomeIcon icon={faAngleDown} id="setinha" />
                  </label>
                  <form id="into">
                    <div>
                      <input
                        type="checkbox"
                        name="Lactose"
                        id="Lactose"
                        onChange={handleFilterChange}
                      />
                      <label htmlFor="Lactose">Lactose</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name="FrutosDoMar"
                        id="FrutosDoMar"
                        onChange={handleFilterChange}
                      />
                      <label htmlFor="FrutosDoMar">Frutos do mar</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name="Gluten"
                        id="Gluten"
                        onChange={handleFilterChange}
                      />
                      <label htmlFor="Gluten">Glúten</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name="Amendoas"
                        id="Amendoas"
                        onChange={handleFilterChange}
                      />
                      <label htmlFor="Amendoas">Amendoas</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name="Trigo"
                        id="Trigo"
                        onChange={handleFilterChange}
                      />
                      <label htmlFor="Trigo">Trigo</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name="Ovos"
                        id="Ovos"
                        onChange={handleFilterChange}
                      />
                      <label htmlFor="Ovos">Ovos</label>
                    </div>
                  </form>
                </div>
              </aside>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body"></div>
          </div>
          <div className="results">
            <div className="container-search">
              <div>
                <h2>Faça sua busca</h2>
                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Buscar restaurantes"
                  className="search-res"
                />
              </div>
            </div>
            {restaurantes.map((item, index) => (
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
                    <img key={imgIndex} src={src} alt={`${item.name} ${imgIndex}`} />
                  ))}
                </div>
                <Link to={item.link} className="view-store">
                  Ver loja
                </Link>
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