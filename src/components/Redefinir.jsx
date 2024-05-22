import React from 'react';
import '../css/redefinir.css'
import senha from '../assets/img2/senha.svg'
const Redefinir = () => {
  return (
    <>
    <div className="container-redefinir">
        <div className="forms-container-redefinir">
          <div className="redefinir">
            <form action="#" className="email">
              <h2 className="title">Redefinir senha!</h2>
              <p>Informe seu E-mail e enviaremos um link para a recuperação da sua senha </p>
              <div className="input-field">
                <input type="text" placeholder="Email" required />
              </div>
              <input type="submit" value="Enviar" className="btn solid" />
              <div className="voltar">
                <a href="#">Voltar</a>
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

export default Redefinir;
