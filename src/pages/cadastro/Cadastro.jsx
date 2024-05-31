import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import imagemCadastro from "../../assets/img2/cadastro.svg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../css/cadastro.css";
const Cadastro = () => {
  return (
    <div>
      <Header />
      <div class="container-cadastro">
        <div class="card-cadastro">
          <h2 class="title">Criar Conta</h2>
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
          <div>
            <p class="line"></p>
            <p>ou</p>
            <p class="line"></p>
          </div>
          <p>Cadastre-se</p>
          <form>
            <input
              type="text"
              placeholder="Nome completo"
              id="nome"
              name="nome"
              required
            />
            <input type="email" placeholder="email" required />
            <input type="number" placeholder="cep" required />
            <input type="tel" placeholder="telefone" required />
            <input type="password" placeholder="senha" required />
            <div className="alergias">
              <label htmlFor="">
                Quais restrições alimentares você possuí?
              </label>
           
              <div>
                  <input type="checkbox" name="Laticinios" id="Laticinios" />
                  <label htmlFor="Laticinios">Laticinios</label>
                  <input type="checkbox" name="FrutosDoMar" id="FrutosDoMar" />
                  <label htmlFor="FrutosDoMar">Frutos do mar</label>
                  <input type="checkbox" name="Amendoas" id="Amendoas" />
                  <label htmlFor="Amendoas">Amêndoas</label>
                  <input type="checkbox" name="Ovo" id="Ovo" />
                  <label htmlFor="Ovo">Ovo</label>
                  <input type="checkbox" name="Graos" id="Graos" />
                  <label htmlFor="Graos">Grãos</label>
                  <input type="checkbox" name="Trigo" id="Trigo" />
                  <label htmlFor="Trigo">Trigo</label>
                  <input type="checkbox" name="Soja" id="Soja" />
                  <label htmlFor="Soja">Soja</label>
              </div>
            </div>

            <input type="submit" id="cadastrar" value="Cadastrar" />
          </form>
          <Link to="/Login" className="mudarCor">
            Login
          </Link>
        </div>
        <div class="card-cadastro-img">
          <img src={imagemCadastro} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cadastro;