import React from "react";
import "../../css/pagamentos.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
//img
import img from "../../assets/img2/imgPagamentos.svg";
import banco1 from "../../assets/img2/banco1.jpg";
import banco2 from "../../assets/img2/banco2.png";
import banco3 from "../../assets/img2/banco3.webp";
import banco4 from "../../assets/img2/banco4.webp";
import banco5 from "../../assets/img2/banco5.jpg";
import banco6 from "../../assets/img2/banco6.png";
import banco7 from "../../assets/img2/banco7.png";
//icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Pagamentos = () => {
  return (
    <div>
      <Header></Header>
      <div className="container-plano">
        <Link className="back" to="/">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
        <h2>Resumo da Comanda</h2>
        <nav className="nav-pagamentos">
          <div>
            <h3>
              Plano escolhido: <strong>Menu Principal</strong>
            </h3>
            <h3>
              Preço: <strong>R$19.99/Mês</strong>
            </h3>
            <p>Total de R${19.99 * 12}/Mês cobrados anualmente</p>
          </div>
          <img src={img} alt="" />
        </nav>
        <div className="cartoes">
          <img src={banco1} alt="" />
          <img src={banco2} alt="" />
          <img src={banco3} alt="" />
          <img src={banco4} alt="" />
          <img src={banco5} alt="" />
          <img src={banco6} alt="" />
          <img src={banco7} alt="" />
        </div>
        <div className="btn-cartao">
          <button className="ativo">Crédito</button>
          <button>Débito</button>
          <button>Pix</button>
        </div>
        <div className="funcoes-cartao">
        <button className="comprarPlano">Comprar Agora!</button>
        </div>
        <div className="seguranca-pagamentos">
            
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Pagamentos;
