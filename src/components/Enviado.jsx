import React from 'react';
import { Link } from 'react-router-dom';

const Enviado = () => {
  return (
    <>
    <div className="container-com">
        <div className="form-container-com">
              <h2 className="titleCom">Comentário enviado</h2>
              <div className="comImage">
                <img src={check} className='image' alt="check" />
              </div>
              <h3 className="SubtitleCom"></h3>
              <Link  to="/"><input type="submit" value="Voltar" className="btn solid" /></Link>
              <div className="voltar1Com">
                <a href="#">Política de privacidade</a>
              </div>
        </div>
      </div>
      </>
  );
};

export default Enviado;