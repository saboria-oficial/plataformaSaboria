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
    <div className="container-cadastro fundo-restaurantes">
    <div className="card-cadastro-img">
  <img src={imagemCadastro} alt=""/>
</div>
  <div className="card-cadastro">
      <h2 className="title">Login!</h2>
     
      <form>

          <input type="email" placeholder="Email" required/>
          <input type="text" placeholder="Cnpj" required/> 
          <input type="password" placeholder="Senha" required/>
          <a className="links" href="/redefinir">Esqueceu sua senha?</a>
          <Link to="/PerfilRes"><input type="submit" id="loginRes" value="Entrar"/></Link> 
      </form>
    <Link to="/cadastroRes" className='mudarCor'>Criar Conta </Link>


    <p>Ou inscreva-se pelas redes sociais</p>

    <div className="icons-cadastro">
        
        
        
           
    <div className="icon-cadastro">
              <a href="">
                <FontAwesomeIcon
                  icon={faGoogle}
                  className="fa-google"
                />
              </a>
              <p>
                    <Link className="links" to="/login">Login para clientes</Link>
                  </p>
            </div>
      </div>
  </div>
 </div>
 <Footer/>
  </div>
  )
}

export default LoginRestaurantes
