import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  
import '../css/header.css';
import logo from '../assets/img2/logotipo-amarelo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faUser } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = () => {


  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link to='/' className="navbar-brand">
              <img src={logo} alt="logotipo amarelo da Saboria" />
            </Link>
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
                <Link to='/' className="navbar-brand">
                  <img src={logo} alt="logotipo amarelo da Saboria" />
                </Link>
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
                    <Link to='/' className="nav-link active" aria-current="page">
                      Início
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/sobre' className="nav-link">
                      Sobre
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/Restaurantes' className="nav-link">
                      Restaurantes
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/planos' className="nav-link">
                      Planos
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      to='/'
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Fale Conosco
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/ " className="dropdown-item">
                          Formulário
                        </Link>
                      </li>
                      <li>
                        <Link to='/faq' className="dropdown-item">
                          FAQ
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                <form className="form-inline">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Busque pratos"
                    aria-label="Search"
                  />
                  <Link to="/Pesquisa"><button type="button" id="btn-search">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button></Link>

                </form>
                <div className="links-navbar">
                <li className="icon-header dropdown">
                    <Link
                      to='/'
                      className="icon-header "
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                     <FontAwesomeIcon icon={faUser} />
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to='/login' className="dropdown-item">
                          Login Clientes
                        </Link>
                      </li>
                      <li>
                        <Link to='/loginRes' className="dropdown-item">
                          Login Restaurantes
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <a id="dark-mode" className="icon-header"> 
                    <FontAwesomeIcon icon={faMoon}  />
                  </a>
                  <a id="clear-mode" className="icon-header">
                    <FontAwesomeIcon icon={faSun} />
                  </a>
                  <a id="idiomas" className="title">
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
