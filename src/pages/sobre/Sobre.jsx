import React from "react";
//css
import "../../css/sobre.css";
// components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Desenvolvedores from "../../components/desenvolvedores";

//imagens dos devs
import dev1 from '../../assets/img2/dev1.jpg'
import dev2 from '../../assets/img2/dev2.webp'
import dev3 from '../../assets/img2/dev3.jpg'
import dev4 from '../../assets/img2/dev4.jpg'
import dev5 from '../../assets/img2/dev5.jpg'
import dev6 from '../../assets/img2/dev6.jpg'
import dev7 from '../../assets/img2/dev7.jpg'
import dev8 from '../../assets/img2/dev8.webp'
// imagens
import logoVerde from '../../assets/img2/BackgroundLogotipoverde.webp'
import logoAmarelo from '../../assets/img2/Backgroundlogotipoamarelo.webp'
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

<Desenvolvedores nome="Yan Rodrigues" cargo="Scrum Master, Dev. Front-end" github="https://github.com/Yan-MR" linkedin="https://www.linkedin.com/in/yanmrodrigues/" img={dev2}/>

<Desenvolvedores nome="Samanta Gomes" cargo="Product Owner, Banco de Dados" github="https://github.com/Sasa-G" linkedin="https://www.linkedin.com/in/samanta-gomes8/" img={dev3}/>

<Desenvolvedores nome="Milena Dias" cargo="Banco de Dados" github="https://github.com/mdiasc" linkedin="https://www.linkedin.com/in/milenadiasdc/" img={dev4}/>

<Desenvolvedores nome="Fellype Oliveira" cargo="Financeiro, Full-Stack" github="https://github.com/1fellype" linkedin="https://www.linkedin.com/in/fellype-oliveira/" img={dev5}/>

<Desenvolvedores nome="João Gabriel" cargo="Dev. Back-end" github="https://github.com/joaoMallmann1" linkedin="https://www.linkedin.com/in/joaogabriel-/" img={dev6}/>

<Desenvolvedores nome="Leonardo Henrique" cargo="Dev. Back-end" github="https://github.com/Leonardo-Aparecido" linkedin="https://www.linkedin.com/in/leohen/" img={dev7}/>

<Desenvolvedores nome="Joaldo Santos" cargo="Dev. Back-end" github="https://github.com/JoaldoSanth" linkedin="https://www.linkedin.com/in/joaldo-santos-b173722b8/" img={dev8}/>
</div>
<div className="divisao2"></div>
<div className="identidadeVisual">IDENTIDADE VISUAL</div>
<div className="logoCompleta2">
        <img src={logoAmarelo} alt="logotipo verde" />
      </div>
<div class="tituloLogo">
        <div class="textoLogo"><h2>Fontes utilizadas</h2></div>
    </div>
<div class="fontesUtilizadas">
        <div class="coluna lato">
            <h2 class="amarelo">Lato</h2>
            <h3 class="vermelho">SUBTÍTULO</h3>
            <p>A SaborIA é uma plataforma de geolocalização que visa a inclusão de pessoas que possuem intolerância alimentar de forma simples</p>
            <div class="fontExemplo">
                <h4>Medium</h4>
                <p class="medium">ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz 1234567890@#$%&*</p>
            </div>
            <div class="fontExemplo">
                <h4>SemiBold</h4>
                <p class="semibold">ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz 1234567890@#$%&*</p>
            </div>
            <div class="fontExemplo">
                <h4>Bold</h4>
                <p class="bold">ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz 1234567890@#$%&*</p>
            </div>
        </div>
        <div class="coluna raleway">
            <h2 class="amarelo">Raleway</h2>
            <h3 class="vermelho">SUBTÍTULO</h3>
            <p>Com nossa plataforma, a vida de pessoas com restrição alimentar 'alergias e intolerâncias' é facilitada. Assim, você se sente seguro'a' ao comer seu prato favorito.</p>
            <div class="fontExemplo">
                <h4>Medium</h4>
                <p class="medium">ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz 1234567890@#$%&*</p>
            </div>
            <div class="fontExemplo">
                <h4>SemiBold</h4>
                <p class="semibold">ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz 1234567890@#$%&*</p>
            </div>
            <div class="fontExemplo">
                <h4>Bold</h4>
                <p class="bold">ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz 1234567890@#$%&*</p>
            </div>
        </div>
    </div>
      <div className="divisao"></div>
      <div className="sobre-icons title">
        <div className="tituloPaleta">Paleta de cores</div>
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
      <div class="tituloLogo">
        <div class="textoLogo"><h2>A logo da SaborIA</h2></div>
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
