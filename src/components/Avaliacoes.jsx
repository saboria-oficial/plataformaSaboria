import React from 'react';
import '../css/avaliacoes.css'
import '../css/home.css'
import npc1 from '../assets/img2/npc1.jpg'
import npc2 from '../assets/img2/npc2.jpg'
import npc3 from '../assets/img2/npc3.avif'
import npc4 from '../assets/img2/npc4.jpg'
import npc5 from '../assets/img2/npc5.jpg'
import npc6 from '../assets/img2/npc6.avif'

const Avaliacao = ({ imagem, nome, idade, condicao, comentario, rating }) => {
  return (
    <div className="avaliacao-card">
      <div className="user-info">
        <img className="user-image" src={imagem} alt={nome} />
        <div>
          <div className="user-name">{nome}</div>
          <div className="user-age">{idade} Anos, {condicao}</div>
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
          imagem={npc1}
          nome="João Kleber"
          condicao="Intolerância a lactose"
          comentario="Antes dessa plataforma eu passava horas para achar um local que eu pudesse comer em segurança. Eu consigo economizar muito tempo hoje em dia."
          rating={5}
        />
        <Avaliacao
          imagem={npc3}
          nome="Lucas Almeida"
          condicao="Alergia a frutos do mar"
          comentario="Com certeza usarei o site novamente para descobrir novos lugares e recomendo para todos os meus amigos."
          rating={5}
        />
        <Avaliacao
          imagem={npc2}
          nome="Ana Pereira"
          condicao="Alergia a glúten"
          comentario="Pude pesquisar restaurantes por tipo de alergia e localização o que facilitou muito a nossa escolha."
          rating={4}
        />
          <Avaliacao
          imagem={npc4}
          nome="Fernanda Lima"
          condicao= "Alergia a nozes"
          comentario= "Finalmente posso sair para comer sem medo. Recomendo a todos que tenham restrições alimentares."
          rating={5}
        />
        <Avaliacao
          imagem={npc6}
          nome="Ricardo Martins"
          condicao="Diabetes"
          comentario="A plataforma oferece ótimas opções de restaurantes que atendem minhas necessidades dietéticas específicas. Isso tem sido uma grande ajuda."
          rating={4}
        />
        <Avaliacao
          imagem={npc5}
          nome="Ana Pereira"
          condicao="Alergia a glúten"
          comentario="Pude pesquisar restaurantes por tipo de alergia e localização o que facilitou muito a nossa escolha."
          rating={5}
        />
      </div>
    </div>
  );
};

export default Avaliacoes;
