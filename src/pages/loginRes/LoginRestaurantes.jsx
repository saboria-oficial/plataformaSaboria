import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF} from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import imagemCadastro from '../../assets/img2/CadastroRestaurante.svg'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../css/cadastro.css'
import { Link } from 'react-router-dom';
const LoginRestaurantes = () => {
  return (
    <div>
      <Header/>
    <div class="container-cadastro">
    <div class="card-cadastro-img">
  <img src={imagemCadastro} alt=""/>
</div>
  <div class="card-cadastro">
      <h2 class="title">Login!</h2>
     
      <form>

          <input type="email" placeholder="email" required/>
          <input type="text" placeholder="cnpj" required/> 
          <input type="password" placeholder="senha" required/> 

          <input type="submit" id="cadastrar" value="Cadastrar"/> 
      </form>
    <Link to="/cadastroRes" className='mudarCor'>Criar Conta </Link>


    <p>ou inscreva-se pelas redes sociais</p>

    <div class="icons-cadastro">
        
          <div class="icon-cadastro">
              <a href=""><FontAwesomeIcon icon={faFacebookF} className='fa-facebook-f fa-brands'/></a>
          </div>
          <div class="icon-cadastro">
          <a href=""><FontAwesomeIcon icon={faInstagram} className='fa-instagram fa-brands'/></a>
          </div>
          <div class="icon-cadastro">
          <a href=""><FontAwesomeIcon icon={faGoogle} className='fa-google fa-brands'/></a>
          </div>
          <div class="icon-cadastro">
              <a href=""><FontAwesomeIcon icon={faGithub}  className='fa-github fa-brands'/></a>
          </div>
      </div>


  </div>
 </div>
 <Footer/>
  </div>
  )
}

export default LoginRestaurantes