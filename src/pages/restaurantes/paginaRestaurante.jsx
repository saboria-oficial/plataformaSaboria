import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../../css/restaurantes.css'
//icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMotorcycle,
  faArrowUpRightFromSquare,
  faMoneyCheckDollar,
  faCow,
  faWheatAwnCircleExclamation, 
  faCaretDown
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
//components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Carrosel from "../../components/Carrosel";
import Avaliacoes from "../../components/Avaliacoes";
//imagens
import logoPizzaria1 from '../../assets/img2/logoPizzaGenerico.jpg';
import pizza1 from "../../assets/img2/pizza1.jpg";
import pizza2 from "../../assets/img2/pizza2.avif";
import pizza3 from "../../assets/img2/pizza3.jpg";
const PaginaRestaurante = () => {
  const [cor, setCor] = useState("");
  const [status, setStatus] = useState("");
  useEffect(() => {
    //função para mostrar se o restaurante está aberto ou fechado
    const horaAtual = new Date().getHours();

    if (horaAtual >= 15 && horaAtual < 24) {
      setCor("green"); // aberto
      setStatus("Aberto");
    } else {
      setCor("red"); // fechado
      setStatus("Fechado");
    }
  }, []);
  return (
    <div>
      <Header />
      <div className="pagina-res">
        <Carrosel img1={pizza2} img2={pizza1} img3={pizza3} />
        <div className="card-carrosel">
          <h2>PIZZARIA ARPA</h2>

          <h3>Promoções as sextas</h3>

          <h4>Pizza boa é aqui</h4>
        </div>
        <div className="pag-perfil-res">
          <img src={logoPizzaria1} alt="" />

          <div>
            <h2>Bom Recheio</h2>
            <div className="links-res">
              <div>
                <p id="horario" style={{ color: cor }}>
                  <FontAwesomeIcon icon={faClock} /> {status}
                </p>
                <p>Abre às 15h fecha às 00:00</p>
              </div>
              <Link className="link-res">
                <span>
                  <FontAwesomeIcon icon={faMotorcycle} />
                </span>{" "}
                Entrega
              </Link>

              <Link className="link-res">
                <span>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </span>{" "}
                Site
              </Link>

              <Link className="link-res">
                <span>
                  <FontAwesomeIcon icon={faMoneyCheckDollar} />
                </span>{" "}
                Forma de Pagamento
              </Link>
            </div>
          </div>
        </div>
        <div className="perfil-res-content">
          <div className="info-perfil-clientes">
            <div>
              <h3>Intolerâncias que atendemos</h3>
              <div className="alergias-atendidas"> 
                  <p>
                    <span>
                      <FontAwesomeIcon icon={faWheatAwnCircleExclamation} />
                    </span>{" "}
                    Zero Glúten
                  </p>
                  <p>
                    <span>
                      <FontAwesomeIcon icon={faCow} />
                    </span>{" "}
                    Zero Lactose
                  </p>
              </div>
            </div>
            <div>
              <h3>Informações extras</h3>
              <div className="menu-info-res">
                  <li className="nav-item dropdown">
                    <Link
                      to="/"
                      className="link-res"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    > <span><FontAwesomeIcon icon={faCaretDown}/></span>
                     Facilidades
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/ " className="dropdown-item">
                        Bar no local
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="dropdown-item">
                        Banheiros
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="dropdown-item">
                        Wifi grátis
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      to="/"
                      className="link-res"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    > <span><FontAwesomeIcon icon={faCaretDown}/></span>
                     Opções do Menu
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/ " className="dropdown-item">
                        Almoço
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="dropdown-item">
                          Jantar
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="dropdown-item">
                          Sobremesa
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="dropdown-item">
                          Café
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      to="/"
                      className="link-res"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    > <span><FontAwesomeIcon icon={faCaretDown}/></span>
                    Acessibilidade
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/ " className="dropdown-item">
                        Estacionamento acessível para cadeiras de rodas
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="dropdown-item">
                        Entrada acessível para cadeiras de rodas
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="dropdown-item">
                        Assentos acessíveis para cadeiras de rodas
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="dropdown-item">
                        Banheiro acessível para cadeira de rodas
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      to="/"
                      className="link-res"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    > <span><FontAwesomeIcon icon={faCaretDown}/></span>
                Crianças
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/ " className="dropdown-item">
                        Bom para crianças
                        </Link>
                      </li>
                      <li>
                        <Link to="/faq" className="dropdown-item">
                          Cadeiras altas
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown">
                    <Link
                      to="/"
                      className="link-res"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    > <span><FontAwesomeIcon icon={faCaretDown}/></span>
                     Estacionamento
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/ " className="dropdown-item">
                        Estacionamento gratuito de vários andares
                        </Link>
                      </li>
                      <li>
                        <Link to="/faq" className="dropdown-item">
                        Um pouco difícil encontrar um espaço
                        </Link>
                      </li>
                    </ul>
                  </li>
              </div>
            </div>
          </div>
          <div className="mapa">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.886980133689!2d-46.68826732578852!3d-23.53656706067958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce57e61081ae79%3A0x14b9d5d0126b395b!2sPastelaria%20Marquesa%20Brasileira!5e0!3m2!1spt-BR!2sbr!4v1717302890020!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <p>Avenida Professor Afonso Bovero, n: 1168, bairro: Pómpeia, São Paulo-sp</p>
            </div>
        </div>
        <div className='scrolar'>
        <Avaliacoes nome="AVALIAÇÕES"/>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaginaRestaurante;
