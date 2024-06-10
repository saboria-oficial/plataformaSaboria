import React from "react";
import SideBar from "../../components/SideBar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Pizzaria from "../../assets/img2/logoPizzaGenerico.jpg";
// icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faCircle,
  faStar,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import logoPizzaria1 from "../../assets/img2/logoPizzaGenerico.jpg";
import "../../css/perfilFav.css";
const PerfilRest = () => {
  return (
    <>
      <Header />
      <div className="containerResPerfilS">
        <div className="SideBar">
          <SideBar img={logoPizzaria1} nomeRestaurante="Bom Recheio" />
        </div>
        <div className="containerResPerfil">
          <div className="tituloResPerfil">
            <h2>INÍCIO</h2>
          </div>
          <div className="localResPerfil">
            <div className="info-perfil">
              <img src={Pizzaria} alt="Restaurante" />
              <div className="descriResPerfil">
                <h2>Bom Recheio</h2>
                <h3>Rua dos Gusmões, 338, Santa Efigênia</h3>
                <h3>Onde os Sabores Alcançam as Estrelas!</h3>
                <h3>
                  <FontAwesomeIcon id="clock" icon={faClock} /> Aberto de acordo
                  com o horário de funcionamento
                </h3>
              </div>
            </div>
            <div className="EditResPerfil">
              <h2>
                <FontAwesomeIcon icon={faPen} /> EDITAR NOME E DESCRIÇÃO
              </h2>
            </div>
          </div>
          <div className="localResPerfil">
            <div className="info-perfil2">
              <div className="horaResPerfil">
                <h2>STATUS DO RESTAURANTE:</h2>
                <button>FECHAR</button>
                <div className="horarioResPerfil">
                  <div className="abreRes">
                    <h4>ABERTO</h4>
                    <h4>FECHADO</h4>
                  </div>
                  <div className="abreRes2">
                    <h5>19:00</h5>
                    <h5>00:00</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="intoleranciasResPerfil">
              <h2>INTOLERÂNCIAS</h2>
              <h3>
                <FontAwesomeIcon className="circle" icon={faCircle} />
                Frutos do mar
              </h3>
              <h3>
                <FontAwesomeIcon className="circle" icon={faCircle} />
                Glúten
              </h3>
              <h3>
                <FontAwesomeIcon className="circle" icon={faCircle} />
                Castanha
              </h3>
              <h3>
                <FontAwesomeIcon className="circle" icon={faCircle} />
                Lactose
              </h3>
              <h3>
                <FontAwesomeIcon className="circle" icon={faCircle} />
                Laticínios
              </h3>
            </div>
          </div>
          <div className="localResPerfil ">
            <div className="intoleranciasResPerfil">
              <h4>Média Geral</h4>
              <h2 className="num-avaliacao">4,5</h2>
              <span>
                {" "}
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStar} />{" "}
                <FontAwesomeIcon icon={faStarHalfStroke} />
              </span>
              <p>50 Avaliações</p>
            </div>
            <div className="text-avaliacao-perfil">
              <h3>A AVALIAÇÃO MÉDIA!</h3>
              <p>
                O serviço foi excelente. Os garçons eram atenciosos e
                prestativos, e o chefe até veio à nossa mesa para se certificar
                de que estávamos satisfeitos.
              </p>
            </div>
          </div>
          <div className="conteiner2-cards">
            <div className="card-perfilRest">
              <h2>Acompanhamento</h2>
              <p>
                avaliação <span>10</span>
              </p>
              <p>
                pessoas acessarem <span>500</span>
              </p>
              <p>
                curtiram <span>130</span>
              </p>
            </div>
            <div className="card-perfilRest">
              <h2>Algo mais?</h2>
              <button>Quero mudar plano</button>
              <button>alterar cardápio</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PerfilRest;
