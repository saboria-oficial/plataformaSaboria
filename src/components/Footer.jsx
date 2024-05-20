import React from 'react'

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
          <h2 class="title">O sabor da inclusão alimentar</h2>
        </div>
        <div class="card-footer">
          <ul>
            <p>Menu</p>
            <a href="">
              <li>Início</li>
            </a>
            <a href="">
              <li>Sobre</li>
            </a>
            <a href="">
              <li>Restaurantes</li>
            </a>
          </ul>
        </div>
        <div class="card-footer">
          <ul>
            <a href="">
              <a href="">
                <li>Localização</li>
              </a>
            </a>
            <a href="">
              <a href="">
                <li>Fale conosco</li>
              </a>
            </a>
            <a href="">
              <a href="">
                <li>Login</li>
              </a>
            </a>
            <a href="">
              <li>FAQ</li>
            </a>
          </ul>
        </div>
        <div class="card-footer">
          <p>ENTRE EM CONTATO</p>
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
        &copy; Saboria &bull; Todos Direitos Reservados &bull; Versão v1.000
      </p>
    </footer>
    </div>
  )
}

export default Footer
