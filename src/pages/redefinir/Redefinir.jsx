import React from "react";
import "../../css/redefinir.css";
import senha from "../../assets/img2/senha.svg";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import { Link } from "react-router-dom";
const Redefinir = () => {
  return (
    <>
      <Header />
      <div className="container-redefinir">
        <div className="card-voltar-img">
          <img src={senha} alt="Senha" />
        </div>
        <div className="redefinir">
          <form action="#" className="email">
            <h2 className="title">Redefinir senha!</h2>
            <p>
              Informe seu E-mail e enviaremos um link para a recuperação da sua
              senha{" "}
            </p>
            <div className="input-field">
              <input type="text" placeholder="Email" required />
            </div>
            <Link className="linkin" to="/alterar"><input type="submit" value="Enviar" className="btn-redefinir"/></Link>
            <div className="voltar">
              <Link to="/login" className="link">
                Voltar
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Redefinir;
