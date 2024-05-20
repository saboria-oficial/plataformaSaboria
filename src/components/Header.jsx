import React from 'react';
import '../css/header.css';
import logo from '../assets/img2/logotipo-amarelo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="logotipo amarelo da Saboria" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <a className="navbar-brand" href="#">
                  <img src={logo} alt="logotipo amarelo da Saboria" />
                </a>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="">
                      Ínicio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      Sobre
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      Restaurantes
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#planos">
                      Planos
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Fale Conosco
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#forms">
                          Formulário
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          FAQ
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <form className="form-inline">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="busque pratos"
                    aria-label="Search"
                  />
                  <button type="button" id="btn-search">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
                </form>
               <div className="links-navbar">
                  <a href="./html/cadastro.html" id="perfil" className="icon-header">
                    <FontAwesomeIcon icon={faUser} />
                  </a>
                  <a href="" id="dark-mode" className="icon-header">
                    <FontAwesomeIcon icon={faMoon} />
                  </a>
                  <a href="" id="clear-mode" className="icon-header">
                    <FontAwesomeIcon icon={faSun} />
                  </a>
                  <a href="" id="idiomas" className="title">
                    PT | EN
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
