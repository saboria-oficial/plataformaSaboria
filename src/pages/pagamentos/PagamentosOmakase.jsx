import React, { useState, useEffect, useRef } from "react";
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

  const [paid, setPaid] = useState(false);
  const [loaded, setLoaded] = useState(false);

  let paypalRef = useRef();

  const product = {
    price: 39.99,
    description: "Plano: Menu Omakasê",
  }

  useEffect(() => {
    const script = document.createElement("script");
    const id = "AQdNQQ111WhAEa4UAEgfeH9mf3hTMTAPlY59gPyBhjDWAd6pRpuDXrl0LV8rSUh9IhpQOFXN4Qcafz31"
    script.src = `https://www.paypal.com/sdk/js?currency=BRL&client-id=${id}`

    script.addEventListener("load", () => setLoaded(true));

    document.body.appendChild(script);

    if (loaded) {
      function loadButtonsAndLogicAboutPayment() {
        setTimeout(() => {
          window.paypal
          .Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [{
                  description: product.description,
                  amount: {
                    currency_code: "BRL",
                    value: product.price
                  }
                }
              ]
              });
            },
            onApprove: async (_,actions) => {
              const order = await actions.order.capture();

              setPaid(true);

              console.log(order);
            }
          })
          .render(paypalRef);
        })
      }
      loadButtonsAndLogicAboutPayment();
    }
  })
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
              Plano escolhido: <strong>Menu Omakasê</strong>
            </h3>
            <h3>
              Preço: <strong>R$39.99/Mês</strong>
            </h3>
            <p>Total de R${39.99 * 12}/Mês cobrados anualmente</p>
          </div>
          <img src={img} alt="" />
        </nav>
        <div className="cartoes">
          <img src={banco} alt="" />
        </div>
     

        <div className="pagamento-Paypal">
      {paid ? (
        <div>
          <h2>Parabéns você comprou o Plano!</h2>
        </div>
      ) : (
        <>
      <h2>Formas de Pagamento</h2>
        <div ref={v => (paypalRef = v)} className="btn-paypal"/>
        </>
      )}
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
