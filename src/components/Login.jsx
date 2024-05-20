import React from 'react';
import '../css/login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faMoon } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import imagemCadastro from '../assets/img2/cadastro.svg'

const Login = () => {
  return (
    <div className="container">
      <div className="background">
        <div className="pt-en">
          <h2><FontAwesomeIcon icon={faMoon} />PT  |  EN</h2>
        </div>
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Login</h2>
              <div className="input-field">
                <FontAwesomeIcon icon={faUser} />
                <input type="text" placeholder="usuário" required />
              </div>
              <div className="input-field">
                <FontAwesomeIcon icon={faLock} />
                <input type="password" placeholder="Senha" required />
              </div>
              <input type="submit" value="Entrar" className="btn solid" />
              <p className="social-text">Ou faça login com suas redes sociais</p>
              <div className="icons">
                <div className="icon">
                  <a href="#"><FontAwesomeIcon icon={faFacebookF} className="fa-brands fa-facebook-f facebook-icon" /></a>
                </div>
                <div className="icon">
                  <a href="#"><FontAwesomeIcon icon={faInstagram} className="fa-brands fa-instagram instagram-icon" /></a>
                </div>
                <div className="icon">
                  <a href="#"><FontAwesomeIcon icon={faGoogle} className="fa-brands fa-google google-icon" /></a>
                </div>
                <div className="icon">
                  <a href="#"><FontAwesomeIcon icon={faLinkedinIn} className="fa-brands fa-linkedin-in linkedin-icon" /></a>
                </div>
              </div>
              <div className="cadastro">
                <a href="#">Cadastrar-se</a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="card-cadastro-img">
        <img src={imagemCadastro}/>
      </div>
    </div>
  );
};

export default Login;