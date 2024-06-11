import React, { useState } from "react";
import "../../css/perfilFav.css";
import { Link } from "react-router-dom";
//img
import cliente from "../../assets/img2/guri.jpg";

//components
import Header from "../../components/Header";
import Footer from "../../components/Footer";

//icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faHeart,
  faMessage,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

const PerfilConfig = () => {
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  const toggleSenhaVisivel = (event) => {
    event.preventDefault();
    setSenhaVisivel(!senhaVisivel);
  };

  return (
    <div>
      <Header />
      <div className="container-config">
        <h2>Perfil</h2>
        <div className="config-perfil">
          <div className="client-config-info">
            <img src={cliente} alt="foto cliente" />
            <div className="config-text">
              <p>Meu perfil</p>
              <h2>Olá, João Lucas</h2>
            </div>
          </div>
          {/* <div className="menu-config">
            <Link to="/perfilConfig">
              <p>
                <span>
                  <FontAwesomeIcon icon={faGear} />
                </span>
                Configurações da Conta
              </p>
            </Link>
            <Link to="/perfilFav">
              <p>
                <span>
                  <FontAwesomeIcon icon={faHeart} />
                </span>
                Favoritos
              </p>
            </Link>
            <Link to="/Faq">
              <p>
                <span>
                  <FontAwesomeIcon icon={faMessage} />
                </span>
                Faq
              </p>
            </Link>
          </div> */}
          <div className="configPerfil2">
            <Link className="linkPerfil" to="/perfilConfig"><h3><span><FontAwesomeIcon icon={faGear}/></span>Configurações da conta</h3></Link>
            <Link className="linkPerfil" to="/perfilFav"><h3><span><FontAwesomeIcon icon={faHeart}/></span>Favoritos</h3></Link>
            <Link className="linkPerfil" to="/Faq"><h3><span><FontAwesomeIcon icon={faMessage}/></span>FAQ</h3></Link>
          </div>
        </div>
        <div className="container-form-config">
          <h2>Informações da conta</h2>
          <form action="">
            <input
              type="text"
              placeholder="Nome"
              id="nomeCliente"
              name="nome"
            />
            <input
              type="text"
              placeholder="Sobrenome"
              id="sobrenomeCliente"
              name="sobrenome"
            />
            <div className="input-special">
              <input
                type="email"
                placeholder="Email"
                id="emailCliente"
                name="email"
              />
              <button>
                <FontAwesomeIcon icon={faLock} />
              </button>
            </div>
            <div className="input-special">
              <input
                type="tel"
                placeholder="Telefone"
                id="telefoneCliente"
                name="telefone"
              />
              <button>
                <FontAwesomeIcon icon={faLock} />
              </button>
            </div>
            <input
              type="text"
              placeholder="Restrição alimentar"
              id="restricaoCliente"
              name="restricao"
            />
            <div className="form-genero">
              <label htmlFor="generoCliente">Gênero</label>
              <div className="opcoesGenero">
                <div>
                  <input
                    type="radio"
                    name="generoCliente"
                    id="femininoCliente"
                  />
                  <label>Mulher</label>
                </div>
                <div>
                  <input type="radio" name="generoCliente" id="mulherCliente" />
                  <label>Homem</label>
                </div>
                <div>
                  <input type="radio" name="generoCliente" id="outroCliente" />
                  <label>Prefiro não informar</label>
                </div>
              </div>
            </div>
            <div className="input-special">
              <input
                type={senhaVisivel ? "text" : "password"}
                placeholder="Senha"
                id="senhaCliente"
                name="senha"
              />
              <button onClick={toggleSenhaVisivel} type="button">
                <FontAwesomeIcon icon={senhaVisivel ? faEyeSlash : faEye} />
              </button>
              <button>
                <FontAwesomeIcon icon={faLock} />
              </button>
            </div>
           
          </form>
        
        </div>
        <button type="submit" className="btn-perfil-config">Alterar Dados</button>
      </div>
      <Footer />
    </div>
  );
};

export default PerfilConfig;
