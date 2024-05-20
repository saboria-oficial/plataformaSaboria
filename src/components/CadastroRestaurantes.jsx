import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF} from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import imagemCadastro from '../assets/img2/CadastroRestaurante.svg'


 import '../css/cadastro.css'
const CadastroRestaurantes = () => {
  return (
    <div>
      <div class="container-cadastro">
    <div class="card-cadastro">
        <h2 class="title">Criar Conta</h2>
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
        <div>
            <p class="line"></p>
            <p>ou</p>
            <p class="line"></p>
        </div>
<a href="">
    <p>Cadastre-se</p>
</a>
        <form>
            <input type="text" placeholder="Nome do Estabelecimento" id="nome" name="nome" required/> 
            <select name="restricao" id="restricao" required>
                <option selected disabled>selecione as restrições que você atende</option>
                <option value="" >Laticinios</option>
                <option value="">Frutos do mar</option>
                <option value="">Amêndoas</option>
                <option value="">Ovo</option>
                 <option value="">Graões</option>
                <option value="">Trigo</option>
                <option value="">Soja</option>
            </select>
            <input type="text" placeholder="qual é a sua culinária" required/> 
            <input type="email" placeholder="email" required/>
            <input type="text" placeholder="cep" required/>
            <input type="tel" placeholder="telefone" required/>
            <input type="text" placeholder="cnpj" required/> 
            <input type="password" placeholder="senha" required/> 

            <input type="submit" id="cadastrar" value="Cadastrar"/> 
        </form>
      <a href="" className='mudarCor'>Login</a>
    </div>
<div class="card-cadastro-img">
    <img src={imagemCadastro} alt=""/>
</div>
   </div>
    </div>
  )
}

export default CadastroRestaurantes
