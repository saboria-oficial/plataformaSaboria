import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
/* Components*/
import Header from "../../components/Header";
import Footer from "../../components/Footer.jsx";
import CardRestaurante from "../../components/CardRestaurante.jsx";
/*Import da imagens*/
import logo7 from '../../assets/img2/logo7.jpg'
import logo8 from '../../assets/img2/logo8.jpg'
import logo9 from '../../assets/img2/logo9.avif'
import logo10 from '../../assets/img2/logo10.jpg'
import logo11 from '../../assets/img2/logo11.avif'
import cliente from '../../assets/img2/guri.jpg'
/* Import dos icones*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCow, faGear, faHeart, faMessage, faUserCircle } from "@fortawesome/free-solid-svg-icons";

const PerfilFav = () => {
  const [favorito, setFavorito]= useState(true);
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

  return (
    <>
      <Header />
      <div className="containerPerfil">
        <div className="tituloPerfil">Perfil</div>
        <div className="detalhesPerfil">
          <div className="avatarPerfil">
          <FontAwesomeIcon icon={faUserCircle} id="user-icon"/>
            <div className="textoPerfil">
            <h5>Meu perfil</h5>
            {usuario && (
              <div>
                <h2>Olá, {usuario.nome}</h2>
              </div>
            )}
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
            img={logo7}
          />
          <CardRestaurante
            estrelas="5"
            intolerancia={<FontAwesomeIcon icon={faCow} />}
            img={logo8}
          />
          <CardRestaurante
            estrelas="5"
            intolerancia={<FontAwesomeIcon icon={faCow} />}
            img={logo9}
          />
          <CardRestaurante
            estrelas="5"
            intolerancia={<FontAwesomeIcon icon={faCow} />}
            img={logo10}
          />
          <CardRestaurante
            estrelas="5"
            intolerancia={<FontAwesomeIcon icon={faCow} />}
            img={logo11}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PerfilFav;
