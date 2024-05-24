import React from 'react';
import '../../css/alterar.css'
import senha from '../../assets/img2/senha.svg'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
const Alterar = () => {
  return (
    <>
    <Header/>
    <div className="container-alterar">
    <div className="card-voltar-img">
        <img src={senha} alt="Senha" />
      </div>
        <div className="forms-container-alterar">
          <div className="alterar">
            <form action="#" className="email">
              <h2 className="title">Alterar senha!</h2>
              <p>Recomendado a criação de uma senha forte!</p>
                <h5>Nova senha</h5>
              <div className="input-field">
                <input type="text" placeholder="Digite sua nova Senha" required />
              </div>
              <div className="subtitle"><h5>Confirme senha</h5></div>
              <div className="input-field">
                <input type="text" placeholder="Confirme sua nova Senha" required />
              </div>
              <input type="submit" value="Alterar Senha" className="btn solid" />
              <div className="voltar">
             <Link to="/login">Voltar</Link>
              </div>
              <div className="voltar1">
                <a>Política de privacidade</a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
      </>
  );
};

export default Alterar;
