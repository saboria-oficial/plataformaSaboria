import React from 'react';
import '../css/alterar.css'
import senha from '../assets/img2/senha.svg'
const Alterar = () => {
  return (
    <>
    <div className="container-alterar">
        <div className="forms-container-alterar">
          <div className="alterar">
            <form action="#" className="email">
              <h2 className="title">Alterar senha!</h2>
              <p>Recomendado a criação de uma senha forte!</p>
              <div className="subtitle h51">
                <h5>Nova senha</h5>
              </div>
              <div className="input-field">
                <input type="text" placeholder="Digite sua nova Senha" required />
              </div>
              <div className="subtitle"><h5>Confirme senha</h5></div>
              <div className="input-field">
                
                <input type="text" placeholder="Confirme sua nova Senha" required />
              </div>
              <input type="submit" value="Alterar Senha" className="btn solid" />
              <div className="voltar">
                <a href="#">Voltar</a>
              </div>
              <div className="voltar1">
                <a href="#">Política de privacidade</a>
              </div>
            </form>
          </div>
        </div>
      <div className="card-voltar-img">
        <img src={senha} alt="Senha" />
      </div>
      </div>
      </>
  );
};

export default Alterar;
