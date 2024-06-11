import React from 'react';
import '../css/comentarios.css'
import '../css/home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import npc1 from '../assets/img2/npc1.jpg'
import npc2 from '../assets/img2/npc2.jpg'
import npc3 from '../assets/img2/npc3.avif'
import npc4 from '../assets/img2/npc4.jpg'
import npc5 from '../assets/img2/npc5.jpg'
import npc6 from '../assets/img2/npc6.avif'
import { useTranslation } from "react-i18next";

const Comentario = ({ imagem, nome, idade, condicao, comentario, rating }) => {
  const{i18n} = useTranslation();

  const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
  };
  const {t} = useTranslation(); {t("")}
  return (
    <div className="comentario-card">
      <div className="user-info">
        <img className="user-image" src={imagem} alt={nome} />
        <div>
          <div className="user-name">{nome}</div>
          <div className="user-age">{idade} 20 {t("Anos")}, {condicao}</div>
        </div>
      </div>
      <div className="star-rating">{rating}<FontAwesomeIcon className="starD" icon={faStar}/></div>
      <p className="user-review">{comentario}</p>
    </div>
  );
};

const Comentarios = (props) => {

  const{i18n} = useTranslation();

  const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
  };
  const {t} = useTranslation(); {t("")}


  return (
    <div className="comentarios-container">
      <h2 className="comentarios-header">{props.nome}</h2>
      <div className="comentarios-list">
       
        <Comentario
          imagem={npc1}
          nome="João Kleber"
          condicao={t("Intolerância a lactose")}
          comentario={t("Antes dessa plataforma eu passava horas para achar um local que eu pudesse comer em segurança. Eu consigo economizar muito tempo hoje em dia.")}
          rating={5}
        />
        <Comentario
          imagem={npc3}
          nome="Lucas Almeida"
          condicao={t("Alergia a frutos do mar")}
          comentario={t("Com certeza usarei o site novamente para descobrir novos lugares e recomendo para todos os meus amigos.")}
          rating={5}
        />
        <Comentario
          imagem={npc2}
          nome="Ana Pereira"
          condicao={t("Alergia a glúten")}
          comentario={t("Pude pesquisar restaurantes por tipo de alergia e localização o que facilitou muito a nossa escolha.")}
          rating={4}
        />
          <Comentario
          imagem={npc4}
          nome="Fernanda Lima"
          condicao= {t("Alergia a nozes")}
          comentario= {t("Finalmente posso sair para comer sem medo. Recomendo a todos que tenham restrições alimentares.")}
          rating={5}
        />
        <Comentario
          imagem={npc6}
          nome="Ricardo Martins"
          condicao="Diabetes"
          comentario={t("A plataforma oferece ótimas opções de restaurantes que atendem minhas necessidades dietéticas específicas. Isso tem sido uma grande ajuda.")}
          rating={4}
        />
        <Comentario
          imagem={npc5}
          nome="Ana Pereira"
          condicao={t("Alergia a glúten")}
          comentario={t("Pude pesquisar restaurantes por tipo de alergia e localização o que facilitou muito a nossa escolha.")}
          rating={5}
        />
      </div>

    </div>
  );
};

export default Comentarios;