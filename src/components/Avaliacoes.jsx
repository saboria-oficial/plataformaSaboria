import React from 'react';
import '../css/avaliacoes.css'
import '../css/home.css'
import joaoKleber from '../assets/img2/joaoKleber.jpg'
import barreto from '../assets/img2/barreto.jpg'
import guri from '../assets/img2/guri.jpg'

const Avaliacao = ({ imagem, nome, idade, condicao, comentario, rating }) => {
  return (
    <div className="avaliacao-card">
      <div className="user-info">
        <img className="user-image" src={imagem} alt={nome} />
        <div>
          <div className="user-name">{nome}</div>
          <div className="user-age">{idade} anos, {condicao}</div>
        </div>
      </div>
      <div className="star-rating">⭐ {rating}</div>
      <p className="user-review">{comentario}</p>
    </div>
  );
};

const Avaliacoes = (props) => {
  return (
    <div className="avaliacoes-container">
      <h2 className="avaliacoes-header">{props.nome}</h2>
      <div className="avaliacoes-list">
       
        <Avaliacao
          imagem={joaoKleber}
          nome="João Kleber"
          idade={21}
          condicao="Intolerância a lactose"
          comentario="Antes dessa plataforma eu passava horas para achar um local que eu pudesse comer em segurança. Eu consigo economizar muito tempo hoje em dia."
          rating={5}
        />
        <Avaliacao
          imagem={guri}
          nome="Lucas Almeida"
          idade={18}
          condicao="Alergia a frutos do mar"
          comentario="Com certeza usarei o site novamente para descobrir novos lugares e recomendo para todos os meus amigos."
          rating={5}
        />
        <Avaliacao
          imagem={barreto}
          nome="Ana Pereira"
          idade={29}
          condicao="Alergia a glúten"
          comentario="Pude pesquisar restaurantes por tipo de alergia e localização o que facilitou muito a nossa escolha."
          rating={5}
        />
        <Avaliacao
          imagem={joaoKleber}
          nome="João Kleber"
          idade={21}
          condicao="Intolerância a lactose"
          comentario="Antes dessa plataforma eu passava horas para achar um local que eu pudesse comer em segurança. Eu consigo economizar muito tempo hoje em dia."
          rating={5}
        />
        <Avaliacao
          imagem={guri}
          nome="Lucas Almeida"
          idade={18}
          condicao="Alergia a frutos do mar"
          comentario="Com certeza usarei o site novamente para descobrir novos lugares e recomendo para todos os meus amigos."
          rating={5}
        />
        <Avaliacao
          imagem={barreto}
          nome="Ana Pereira"
          idade={29}
          condicao="Alergia a glúten"
          comentario="Pude pesquisar restaurantes por tipo de alergia e localização o que facilitou muito a nossa escolha."
          rating={5}
        />
      </div>
    </div>
  );
};

export default Avaliacoes;
