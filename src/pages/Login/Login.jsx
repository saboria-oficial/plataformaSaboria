import React from "react";
import "../../css/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faGoogle,
  faGithub,
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
                  <input type="text" placeholder="usuário" required />
                </div>
                <div className="input-field">
                  <FontAwesomeIcon icon={faLock} className="icone-login"/>
                  <input type="password" placeholder="Senha" required />
                </div>
                <Link className="link" to="/redefinir">esqueceu sua senha?</Link>
                <input type="submit" value="Entrar" className="btn solid" />
                <p className="social-text">
                  Ou faça login com suas redes sociais
                </p>
                <div class="icons-cadastro">
                  <div class="icon-cadastro">
                    <a href="">
                      <FontAwesomeIcon
                        icon={faFacebookF}
                        className="fa-facebook-f fa-brands"
                      />
                    </a>
                  </div>
                  <div class="icon-cadastro">
                    <a href="">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="fa-instagram fa-brands"
                      />
                    </a>
                  </div>
                  <div class="icon-cadastro">
                    <a href="">
                      <FontAwesomeIcon
                        icon={faGoogle}
                        className="fa-google fa-brands"
                      />
                    </a>
                  </div>
                  <div class="icon-cadastro">
                    <a href="">
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="fa-github fa-brands"
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
