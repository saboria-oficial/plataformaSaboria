import React from 'react'
import { Link } from 'react-router-dom';
import logoPreta from '../assets/img2/logotipo-preto.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF} from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '../css/footer.css'
import { useTranslation } from "react-i18next";
const Footer = () => {

  const{i18n} = useTranslation();

  const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
  };
  const {t} = useTranslation(); 

  
  return (
    <div>
       <footer>
      <section id="container-footer">
        <div class="card-footer">
          <img src={logoPreta} alt="logotipo da saboria preta" />
          <h2 class="title">{t("O Sabor da Inclusão Alimentar")}</h2>
        </div>
        <div class="card-footer">
          <ul>
            <p>Menu</p> 
            <Link to='/'>
              <li>{t("Início")}</li>
            </Link>
            <Link to='/sobre' >
              <li>{t("Sobre")}</li>
            </Link>
            <Link to='/restaurantes'>
              <li>{t("Restaurantes")}</li>
            </Link>
          </ul>
        </div>
        <div class="card-footer">
          <ul>
           
              <Link to='/localiza'>
                <li>{t("Localização")}</li>
              </Link>
         
           
              <Link to='/parcerias' >
                <li>{t("Parcerias")}</li>
              </Link>
           
 
              <li className="dropdown">
                    <Link
                      to='/'
                      className=""
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                    Login
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
        
            <Link to='/blog'>
              <li>Blog</li>
            </Link>
          </ul>
        </div>
        <div class="card-footer">
          <p>{t("Entre em Contato")}</p>
          <a href="tel:1140028922">(11) 4002-8922</a>
          <a href="mailto:saboriaoficial@gmail.com">saboriaoficial@gmail.com</a>
        </div>
      </section>
      <div class="icons-footer">
        <div class="icon-footer">
          <a href="">
            <FontAwesomeIcon icon={faFacebookF}/>
          </a>
        </div>
        <div class="icon-footer">
        <a href="">
            <FontAwesomeIcon icon={faInstagram}/>
        </a>
        </div>
        <div class="icon-footer">
        <a href="">
            <FontAwesomeIcon icon={faGoogle}/>
        </a>
        </div>
        <div class="icon-footer">
        <a href="">
            <FontAwesomeIcon icon={faLinkedinIn}/>
        </a>
        </div>
      </div>
      <p>{t("Termos de uso | Políticas de privacidade")}</p>
      <p>
        &copy; Saboria &bull; {t("Todos Direitos Reservados")} &bull; {t("Versão v1")}
      </p>
    </footer>
    </div>
  )
}

export default Footer
