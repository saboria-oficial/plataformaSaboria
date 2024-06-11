import React, { useState } from "react";
import "../../css/pagamentos.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
//img
import img from "../../assets/img2/imgPagamentos.svg";
import banco from "../../assets/img2/bancos.webp";
import imgSeguranca from "../../assets/img2/segurancapagamentos.webp";
//icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const Pagamentos = () => {
  const [paymentType, setPaymentType] = useState("credito");

  const handlePaymentTypeChange = (type) => {
    setPaymentType(type);
  };

  return (
    <div>
      <Header />
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
          <img src={banco} alt="" />
        </div>
        <div className="btn-cartao">
          <button
            className={paymentType === "credito" ? "ativo" : ""}
            onClick={() => handlePaymentTypeChange("credito")}
          >
            Crédito
          </button>
          <button
            className={paymentType === "debito" ? "ativo" : ""}
            onClick={() => handlePaymentTypeChange("debito")}
          >
            Débito
          </button>
        </div>
        <div className={`form-pagamento ${paymentType === "credito" ? "show" : ""}`}>
          <input type="text" placeholder="Número do Cartão" id="num-cartao"/>
          <input type="text" placeholder="Bandeira" id="bandeira"/>
          <div className="info-banco">
            <div>
              <select name="" id="">
                <option value="" disabled>
                  Mês
                </option>
                <option value="">Janeiro</option>
                <option value="">Fevereiro</option>
                <option value="">Março</option>
                <option value="">Abril</option>
                <option value="">Maio</option>
                <option value="">Junho</option>
                <option value="">Julho</option>
                <option value="">Agosto</option>
                <option value="">Setembro</option>
                <option value="">Outubro</option>
                <option value="">Novembro</option>
                <option value="">Dezembro</option>
              </select>
              <input type="number" placeholder="Ano" />
            </div>
            <input type="number" placeholder="Cod do Cartão" />
          </div>
          <select name="" id="parcelas">
            <option value="" disabled>
              Parcelas
            </option>
            <option value="">1x vez</option>
            <option value="">2x vez</option>
            <option value="">3x vez</option>
            <option value="">4x vez</option>
            <option value="">5x vez</option>
            <option value="">6x vez</option>
          </select>

          <p>
            Suas informações serão coletadas de acordo com a política de
            privacidade da <Link>Saboria</Link>
          </p>

          <div className="termos">
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">
                Quero receber notificações sobre novidades e notícias da Sabor.IA
                por email e WhatsApp
              </label>
            </div>
         
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">
              Concordo com os termos
              </label>
            </div>
          </div>
        </div>

        <div className={`form-pagamento ${paymentType === "debito" ? "show" : ""}`}>
          <input type="text" placeholder="Número do Cartão" id="num-cartao"/>
          <input type="text" placeholder="Bandeira" id="bandeira"/>
          <div className="info-banco">
            <div>
              <select name="" id="">
                <option value="" disabled>
                  Mês
                </option>
                <option value="">Janeiro</option>
                <option value="">Fevereiro</option>
                <option value="">Março</option>
                <option value="">Abril</option>
                <option value="">Maio</option>
                <option value="">Junho</option>
                <option value="">Julho</option>
                <option value="">Agosto</option>
                <option value="">Setembro</option>
                <option value="">Outubro</option>
                <option value="">Novembro</option>
                <option value="">Dezembro</option>
              </select>
              <input type="number" placeholder="Ano" />
            </div>
            <input type="number" placeholder="Cod do Cartão" />
          </div>

          <p>
            Suas informações serão coletadas de acordo com a política de
            privacidade da <Link>Saboria</Link>
          </p>

          <div className="termos">
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">
                Quero receber notificações sobre novidades e notícias da Sabor.IA
                por email e WhatsApp
              </label>
            </div>
         
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">
              Concordo com os termos
              </label>
            </div>
          </div>
        </div>

        <div className="funcoes-cartao">
          <button className="comprarPlano">Comprar Agora!</button>
        </div>
        <div className="seguranca-pagamentos">
          <img src={imgSeguranca} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pagamentos;
