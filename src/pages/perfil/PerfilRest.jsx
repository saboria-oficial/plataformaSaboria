import React from "react";
import SideBar from "../../components/SideBar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Pizzaria from "../../assets/img2/logoPizzaGenerico.jpg";
// icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faCircle
} from "@fortawesome/free-solid-svg-icons";
import {
  faClock
} from "@fortawesome/free-regular-svg-icons";


const PerfilRest = () => {
  return (
    <>
      <Header />
      <div className="containerResPerfilS">
        <div className="SideBar">
          <SideBar />
        </div>
        <div className="containerResPerfil">
          <div className="tituloResPerfil">
            <h2>INÍCIO</h2>
          </div>
          <div className="localResPerfil">
            <div className="info-perfil">
              <img src={Pizzaria} alt="Restaurante" />
              <div className="descriResPerfil">
                <h2>Sabor Celestial</h2>
                <h3>Rua dos Gusmões, 338, Santa Efigênia</h3>
                <h4>Onde os Sabores Alcançam as Estrelas!</h4>
                <h5><FontAwesomeIcon id="clock" icon={faClock}/> Aberto de acordo com o horário de funcionamento</h5>
              </div>
            </div>
            <div className="EditResPerfil">
              <h2><FontAwesomeIcon icon={faPen}/> EDITAR NOME E DESCRIÇÃO</h2>
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
            <h3><FontAwesomeIcon id="circle" icon={faCircle}/>Frutos do mar</h3>
            <h3><FontAwesomeIcon id="circle" icon={faCircle}/>Glúten</h3>
            <h3><FontAwesomeIcon id="circle" icon={faCircle}/>Castanha</h3>
            <h3><FontAwesomeIcon id="circle" icon={faCircle}/>Lactose</h3>
            <h3><FontAwesomeIcon id="circle" icon={faCircle}/>Laticínios</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PerfilRest;
