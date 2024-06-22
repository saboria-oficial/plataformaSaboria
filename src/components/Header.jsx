import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/header.css";
import logo from "../assets/img2/logotipo-amarelo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faUser,
  faMagnifyingGlass,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

const Header = () => {
  const [showTranslate, setShowTranslate] = useState(false);

  useEffect(() => {
    if (showTranslate) {
      const addScript = () => {
        if (window.google) {
          const script = document.createElement("script");
          script.src =
            "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
          script.async = true;
          document.body.appendChild(script);
        } else {
          window.googleTranslateElementInit();
        }
      };

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: "pt" },
          "google_translate_element"
        );
      };

      addScript();
    }

    return () => {
      const translateElement = document.getElementById(
        "google_translate_element"
      );
      if (translateElement) {
        translateElement.innerHTML = "";
      }
    };
  }, [showTranslate]);

  const handleToggleTranslate = () => {
    setShowTranslate(!showTranslate);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
       <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Traduzir Idioma</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body  >
        <div id="google_translate_element"></div> 
        </Offcanvas.Body>
      </Offcanvas>
      {["xl"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className=" mb-3 "
          style={{ backgroundColor: "transparent" }}
        >
          <Container fluid>
            <Navbar.Brand href="#">
              <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
            
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                  className="navbar-brand"
                >
                  <img src={logo} alt="Logo" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <li className="nav-item">
                    <Link
                      to="/"
                      className="nav-link"
                      aria-current="page"
                    >
                      Início
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/sobre" className="nav-link">
                      Sobre
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Pesquisa" className="nav-link">
                      Restaurantes
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/planos" className="nav-link">
                      Planos
                    </Link>
                  </li>

                  <NavDropdown
                    title="Fale Conosco"
                  
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <Link to="/blog " className="dropdown-item">
                      Blog
                    </Link>
                    <Link to="/faq" className="dropdown-item">
                      FAQ
                    </Link>
                  </NavDropdown>
                </Nav>
               
               
            
                <div className="links-navbar">
                  <li className="icon-header dropdown">
                    <NavDropdown
                      className="icon-header"
                      title={<FontAwesomeIcon id="icon-header-user" icon={faUser} />}
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <Link to="/login" className="dropdown-item">
                        Login Clientes
                      </Link>
                      <Link to="/loginRes" className="dropdown-item">
                        Login Restaurantes
                      </Link>
                    </NavDropdown>
                  </li>
                  <div id="idiomas" className="title">
                    <button
                      className="btn-idioma"
                      onClick={handleToggleTranslate}
                    >
                      <FontAwesomeIcon icon={faLanguage} variant="primary" onClick={handleShow}/>
                    </button>
                  </div>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default Header;
