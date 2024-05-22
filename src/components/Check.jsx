import React from 'react';
import '../css/check.css'
import check from '../assets/img2/check.webp'

const Check = () => {
  return (
    <>
    <div className="container-check">
        <div className="form-container-check">
              <h2 className="title">Senha redefinida com sucesso!</h2>
              <div className="check">
                <img src={check} className='image' alt="check" />
              </div>
              <input type="submit" value="Voltar para login" className="btn solid" />
              <div className="voltar1">
                <a href="#">Política de privacidade</a>
              </div>
        </div>
      </div>
      </>
  );
};

export default Check;