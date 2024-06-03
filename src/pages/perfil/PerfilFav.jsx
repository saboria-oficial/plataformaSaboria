import React from "react";
import { Link } from "react-router-dom";
/* Components*/
import Header from "../../components/Header";
import Footer from "../../components/Footer.jsx";
import CardRestaurante from "../../components/CardRestaurante.jsx";
/*Import da imagens*/
import imgRestaurante from "../../assets/img2/restauranteGenerico.avif";
import cliente from '../../assets/img2/guri.jpg'
/* Import dos icones*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCow, faGear, faHeart, faMessage } from "@fortawesome/free-solid-svg-icons";

const PerfilFav = () => {
  return (
    <>
      <Header />
      <div className="containerPerfil">
        <div className="tituloPerfil">Perfil</div>
        <div className="detalhesPerfil">
          <div className="avatarPerfil">
            <img src={cliente} alt="cliente" />
            <div className="textoPerfil">
            <h5>Meu perfil</h5>
            <h2>Olá, João Gomes</h2>
            </div>
          </div>

          <div className="configPerfil">
            <Link className="linkPerfil" to="/perfilConfig"><h3><span><FontAwesomeIcon icon={faGear}/></span>Configurações da conta</h3></Link>
            <Link className="linkPerfil" to="/perfilFav"><h3><span><FontAwesomeIcon icon={faHeart}/></span>Favoritos</h3></Link>
            <Link className="linkPerfil" to="/Faq"><h3><span><FontAwesomeIcon icon={faMessage}/></span>FAQ</h3></Link>
          </div>
        </div>
        <div className="restaurantesPerfil">
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
      </div>
      <Footer />
    </>
  );
};

export default PerfilFav;
