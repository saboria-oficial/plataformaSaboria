import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import imagemCadastro from '../../assets/img2/CadastroRestaurante.svg'
import { Link } from 'react-router-dom';  
import Header from '../../components/Header';
import Footer from '../../components/Footer';
 import '../../css/cadastro.css'
const CadastroRestaurantes = () => {
  return (
    <div>
        <Header/>
      <div className="container-cadastro fundo-restaurantes">
    <div className="card-cadastro">
        <h2 className="title">Criar Conta</h2>
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
        <div className="linhaOU">
            <p className="line"></p>
            <p>ou</p>
            <p className="line"></p>
        </div>
    <p>Cadastre-se</p>

        <form>
            <input type="text" placeholder="Nome do Estabelecimento" id="nome" name="nome" required/> 
            <input type="text" placeholder="Qual é a sua culinária" required/> 
            <input type="email" placeholder="Email" required/>
            <input type="text" placeholder="Cep" required/>
            <input type="tel" placeholder="Telefone" required/>
            <input type="text" placeholder="CNPJ" required/> 
            <input type="password" placeholder="Senha" required/> 
            <div className="alergias">
            <p>
                Quais restrições seu restaurante atende?
              </p>
           
              <ul>
                  <li>
                    <input type="checkbox" name="Laticinios" id="Laticinios" />
                    <label htmlFor="Laticinios">Laticínios</label>
                  </li>
                  <li>
                    <input type="checkbox" name="FrutosDoMar" id="FrutosDoMar" />
                    <label htmlFor="FrutosDoMar">Frutos do mar</label>
                  </li>
                  <li>
                    <input type="checkbox" name="Amendoas" id="Amendoas" />
                    <label htmlFor="Amendoas">Amêndoas</label>
                  </li>
                  <li>
                    <input type="checkbox" name="Ovo" id="Ovo" />
                    <label htmlFor="Ovo">Ovo</label>
                  </li>
                  <li>
                    <input type="checkbox" name="Graos" id="Graos" />
                    <label htmlFor="Graos">Grãos</label>
                  </li>
                  <li>
                    <input type="checkbox" name="Trigo" id="Trigo" />
                    <label htmlFor="Trigo">Trigo</label>
                  </li>
                  <li>
                    <input type="checkbox" name="Soja" id="Soja" />
                    <label htmlFor="Soja">Soja</label>
                  </li>
                  <li>
                    <input type="checkbox" name="Soja" id="Soja" />
                    <label htmlFor="Soja">Não tenho / outros</label>
                  </li>
              </ul>
            </div>

            <input type="submit" id="cadastrarRes" value="Cadastrar"/> 
        </form>
      <Link to="/loginRes" className="link">Login</Link>
    </div>
<div className="card-cadastro-img">
    <img src={imagemCadastro} alt=""/>
</div>
   </div>
   <Footer/>
    </div>
  )
}

export default CadastroRestaurantes
