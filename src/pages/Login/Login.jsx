import React from "react";
import "../../css/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import {

  faGoogle,

} from "@fortawesome/free-brands-svg-icons";
import imagemCadastro from "../../assets/img2/cadastro.svg";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import { Link } from "react-router-dom";


const Login = () => {

  return (
    <section>
      <Header />
      <div className="container-login">
      <div className="card-cadastro-img">
          <img src={imagemCadastro} />
        </div>
          <div className="forms-container">
              <form action="#" className="sign-in-form">
                <h2 className="title">Login</h2>
                <div className="input-field">
                  <FontAwesomeIcon icon={faUser} className="icone-login"/>
                  <input type="text" placeholder={"Usuário"} required />
                </div>
                <div className="input-field">
                  <FontAwesomeIcon icon={faLock} className="icone-login"/>
                  <input type="password" placeholder="Senha" required />
                </div>
                <Link className="link" to="/redefinir">Esqueceu sua senha?</Link>
                <Link to="/perfilFav"><input type="submit" value="Entrar" className="btn solid" /></Link>
                <p className="social-text">
                  Ou faça login com suas redes sociais
                </p>
                <div className="icons-cadastro">
                
            <div className="icon-cadastro">
              <a href="">
                <FontAwesomeIcon
                  icon={faGoogle}
                  className="fa-google"
                />
              </a>
            </div>
                </div>
                <div className="cadastro">
                  <p>
                    <Link className="link" to="/cadastro">Cadastrar-se</Link>
                  </p>
                  <p>
                    <Link className="link" to="/loginRes">Login para restaurantes</Link>
                  </p>
                </div>
              </form>
          </div>
      </div>
      <Footer />
    </section>
  );
};

export default Login;
