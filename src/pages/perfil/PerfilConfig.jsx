import React, { useState, useEffect } from "react";
import axios from "axios";
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
  const [usuario, setUsuario] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsuario = async () => {
      const user = localStorage.getItem('user');

      console.log(user)
      if (user) {
        try {
          const response = await axios.get(`https://localhost:7097/api/Usuario/${user}`);
          console.log(response.data)

          setUsuario(response.data);
        } catch (err) {
          setError('Erro ao buscar dados do Usuario.');
          console.error(err);
        }
      } else {
        setError('CNPJ não encontrado no localStorage.');
      }
    };

    fetchUsuario();
  }, []);

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
            <div className="config-text">
              <p>Meu perfil</p>
              {usuario && (
              <div>
                <h2>Olá, {usuario.nome}</h2>
              </div>
            ) }
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
          {usuario && (
            <form action="">
              <input
                type="text"
                placeholder="Nome"
                id="nomeCliente"
                name="nome"
                value={usuario.nome}
              />
              <div className="input-special">
              
                <input
                  type="email"
                  placeholder="Email"
                  id="emailCliente"
                  name="email"
                  value={usuario.email}
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
                  value={usuario.telefone}
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
                value={usuario.restricao}
              />
            </form>
          )}
        </div>
        {/* <button type="submit" className="btn-perfil-config">Alterar Dados</button> */}
      </div>
      <Footer />
    </div>
  );
};

export default PerfilConfig;
