import React from "react";
//css
import "../../css/sobre.css";
// components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Desenvolvedores from "../../components/desenvolvedores";

//imagens dos devs
import dev1 from '../../assets/img2/dev1.jpg'
// imagens
import logoVerde from '../../assets/img2/BackgroundLogotipoverde.webp'
import Sabor from '../../assets/img2/saborLogo.webp'
import IA from '../../assets/img2/IALogo.webp'
import Pin from '../../assets/img2/PinLogo.webp'
import Prato from '../../assets/img2/pratoLogo.webp'
//icones
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils} from '@fortawesome/free-solid-svg-icons';
const Sobre = () => {
  return (
    <div className="container-sobre">
      <Header />
<div className="container-dev"><Desenvolvedores nome="Carlos Bonfim" cargo="Dev. Front-end" github="https://github.com/Carlos-bonfim26" linkedin="https://www.linkedin.com/in/carlosbonfim26/" img={dev1}/>

<Desenvolvedores nome="Carlos Bonfim" cargo="Dev. Front-end" github="https://github.com/Carlos-bonfim26" linkedin="https://www.linkedin.com/in/carlosbonfim26/" img={dev1}/>

<Desenvolvedores nome="Carlos Bonfim" cargo="Dev. Front-end" github="https://github.com/Carlos-bonfim26" linkedin="https://www.linkedin.com/in/carlosbonfim26/" img={dev1}/>

<Desenvolvedores nome="Carlos Bonfim" cargo="Dev. Front-end" github="https://github.com/Carlos-bonfim26" linkedin="https://www.linkedin.com/in/carlosbonfim26/" img={dev1}/>
</div>
      <div className="sobre-icons title">
        <div>
         <FontAwesomeIcon icon={faUtensils} className="icon-sobre" color="var(--vermelho)"/>
          <h3>#990000</h3>
        </div>
        <div>
         <FontAwesomeIcon icon={faUtensils} className="icon-sobre "color="var(--cinza)" />
          <h3>#4B4A4A</h3>
        </div>
        <div>
         <FontAwesomeIcon icon={faUtensils} className="icon-sobre" color="var(--amarelo)"/>
          <h3>#FFCA2E</h3>
        </div>
        <div>
         <FontAwesomeIcon icon={faUtensils} className="icon-sobre" color="var(--amarelo2)"/>
          <h3>#FFE086</h3>
        </div>
        <div>
         <FontAwesomeIcon icon={faUtensils} className="icon-sobre" color="var(--verde)"/>
          <h3>#8CD673</h3>
        </div>
        <div>
         <FontAwesomeIcon icon={faUtensils} className="icon-sobre" color="var(--verde-claro)"/>
          <h3>#CDF3A8</h3>
        </div>
      </div>
      <div className="logoTitulo">
        <h2>A LOGO DA SABORIA</h2>
      </div>
      <div className="logoSignificado">
        <div>
            <img id="Sabor" src={Sabor} alt="sabor" />
            <h2>Representa o sabor da comida</h2>
        </div>
        <h3>+</h3>
        <div>
            <img id="IA" src={IA} alt="IA" />
            <h2>Iniciais de Inclusão Alimentar</h2>
        </div>
        <h3>+</h3>
        <div>
            <img id="Pin" src={Pin} alt="Pin" />
            <h2>Localização dos estabelecimentos</h2>
        </div>
        <h3>+</h3>
        <div>
            <img src={Prato} alt="Prato" />
            <h2>Respresenta a alimentação</h2>
        </div>
      </div>
      <div className="logoCompleta">
        <img src={logoVerde} alt="logotipo verde" />
      </div>
      <Footer />
    </div>
  );
};

export default Sobre;
