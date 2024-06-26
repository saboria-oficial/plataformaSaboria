import React from 'react'
import { Link } from 'react-router-dom';
import logoPreta from '../assets/img2/logotipo-preto.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF} from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '../css/footer.css'

const Footer = () => {

  return (
    <div>
       <footer>
      <section id="container-footer">
        <div className="card-footer">
          <img src={logoPreta} alt="logotipo da saboria preta" />
          <h2 className="title">O Sabor da Inclusão Alimentar</h2>
        </div>
        <div className="card-footer">
          <ul>
            <Link to='/'>
              <li>Início</li>
            </Link>
            <Link to='/sobre' >
              <li>Sobre</li>
            </Link>
            <Link to='/restaurantes'>
              <li>Restaurantes</li>
            </Link>
          </ul>
        </div>
        <div className="card-footer">
          <ul>
              <Link to='/parcerias' >
                <li>Parcerias</li>
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
        <div className="card-footer">
          <p>Entre em Contato</p>
          <a href="tel:1140028922">(11) 4002-8922</a>
          <a href="mailto:saboriaoficial@gmail.com">saboriaoficial@gmail.com</a>
        </div>
      </section>
      <div className="icons-footer">
        <div className="icon-footer">
        <a href="https://www.instagram.com/saboria_oficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank'>
            <FontAwesomeIcon icon={faInstagram}/>
        </a>
        </div>
        <div className="icon-footer">
        <a href="https://x.com/saboria_oficial" target='_blank'>
            <FontAwesomeIcon icon={faTwitter}/>
        </a>
        </div>
        <div className="icon-footer">
        <a href="https://www.linkedin.com/company/saboria/?viewAsMember=true" target='_blank'>
            <FontAwesomeIcon icon={faLinkedinIn}/>
        </a>
        </div>
      </div>
      <p>Termos de uso | <a href="https://drive.google.com/file/d/1fQ8velUtEhwiytfnyM37Oq8e1M8vnauQ/view?usp=sharing" id='politicadePriv' target='_blank'>Políticas de privacidade</a></p>
      <p>
        &copy; Saboria &bull; "Todos Direitos Reservados &bull; Versão v1
      </p>
    </footer>
    </div>
  )
}

export default Footer
