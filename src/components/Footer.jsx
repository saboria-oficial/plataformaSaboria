import React from 'react'
import { Link } from 'react-router-dom';
import logoPreta from '../assets/img2/logotipo-preto.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF} from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import '../css/footer.css'
const Footer = () => {
  return (
    <div>
       <footer>
      <section id="container-footer">
        <div class="card-footer">
          <img src={logoPreta} alt="logotipo da saboria preta" />
          <h2 class="title">O Sabor da Inclusão Alimentar</h2>
        </div>
        <div class="card-footer">
          <ul>
            <p>Menu</p>
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
        <div class="card-footer">
          <ul>
           
              <Link to='/localiza'>
                <li>Localização</li>
              </Link>
         
           
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
        <div class="card-footer">
          <p>Entre em Contato</p>
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
      <p>Termos de uso | Políticas de privacidade</p>
      <p>
        &copy; Saboria &bull; Todos Direitos Reservados &bull; Versão v1
      </p>
    </footer>
    </div>
  )
}

export default Footer
