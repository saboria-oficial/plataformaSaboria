import React from "react";
//css
import "../../css/sobre.css";
// components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Desenvolvedores from "../../components/desenvolvedores";

import ODS from "../../components/CardODS"
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
import missao from '../../assets/img2/missao.webp'
import visao from '../../assets/img2/visao.webp'
import valores from '../../assets/img2/valores.webp'
import ODS2 from '../../assets/img2/ods2.svg'
import ODS3 from '../../assets/img2/ods3.svg'
import ODS12 from '../../assets/img2/ods12.svg'
//icones
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils} from '@fortawesome/free-solid-svg-icons';

const Sobre = () => {

  return (
    <div className="container-sobre">
      <Header />
    <div className="container-MVV">
    <div className="cardMVV missao">
      <div className="mvv-img">
        <img src={missao}/>
      </div>
      <div className="mvv-content ">
        <h2>MISSÃO</h2>
        <p>
        Geolocalizar restaurantes para assim oferecermos uma experiencia inclusiva e segura, com diversidade, garantindo a sastisfação dos clientes</p>
      </div>
    </div> 

    <div className="cardMVV visao">
      <div className="mvv-img">
        <img src={visao}/>
      </div>
      <div className="mvv-content ">
        <h2>VISÃO</h2>
        <p>Conectamos clientes com restrições alimentares a restaurantes seguros e deliciosos.</p>
      </div>
    </div>

    <div className="cardMVV valores">
      <div className="mvv-img">
        <img src={valores}/>
      </div>
      <div className="mvv-content ">
        <h2>VALORES</h2>
        <p>Respeito, integridade, inclusão, segurança e transparência.</p>
      </div>
    </div>
    </div>
    <div className="desenvolvedores">
                <h2>DESENVOLVEDORES</h2>
            </div>
<div className="container-dev"><Desenvolvedores nome="Carlos Bonfim" cargo="Dev. Front-end, Designer" github="https://github.com/Carlos-bonfim26" linkedin="https://www.linkedin.com/in/carlosbonfim26/" img={dev1}/>

<Desenvolvedores nome="Yan Rodrigues" cargo="Scrum Master, Dev. Front-end, Designer" github="https://github.com/Yan-MR" linkedin="https://www.linkedin.com/in/yanmrodrigues/" img={dev2}/>

<Desenvolvedores nome="Samanta Gomes" cargo="Product Owner, Banco de Dados, UI/UX Designer" github="https://github.com/Sasa-G" linkedin="https://www.linkedin.com/in/samanta-gomes8/" img={dev3}/>

<Desenvolvedores nome="Milena Dias" cargo="Banco de Dados" github="https://github.com/mdiasc" linkedin="https://www.linkedin.com/in/milenadiasdc/" img={dev4}/>

<Desenvolvedores nome="Fellype Oliveira" cargo="Financeiro, Back-end" github="https://github.com/1fellype" linkedin="https://www.linkedin.com/in/fellype-oliveira/" img={dev5}/>

<Desenvolvedores nome="João Gabriel" cargo="Designer" github="https://github.com/joaoMallmann1" linkedin="https://www.linkedin.com/in/joaogabriel-/" img={dev6}/>

<Desenvolvedores nome="Leonardo Henrique" cargo="Dev. Back-end" github="https://github.com/Leonardo-Aparecido" linkedin="https://www.linkedin.com/in/leohen/" img={dev7}/>

<Desenvolvedores nome="Joaldo Santos" cargo="Dev. Back-end, UI/UX Designer" github="https://github.com/JoaldoSanth" linkedin="https://www.linkedin.com/in/joaldo-santos-b173722b8/" img={dev8}/>
</div>
<div className="containerODS">
            <div className="headerODS">
                <h2>OBJETIVO DE DESENVOLVIMENTO SUSTENTÁVEL</h2>
            </div>
            <div className="contentODS">
                <ODS
                    descricao="ODS 2 - Fome Zero e Agricultura Sustentável: Ao proporcionar meios para que pessoas com restrições alimentares encontrem comida adequada com mais facilidade, o projeto contribui indiretamente para o combate à fome e promove uma abordagem mais sustentável na produção e distribuição de alimentos."
                    backgroundColor="#f2cc8f"
                    imagemODS={ODS2}
                />
                <ODS
                    descricao="ODS 3 - Saúde e Bem-Estar: O projeto visa facilitar a vida das pessoas com restrições alimentares, garantindo que elas tenham acesso a alimentos seguros e adequados às suas necessidades, o que está diretamente ligado à promoção da saúde e do bem-estar."
                    backgroundColor="#c5e1a5"
                    imagemODS={ODS3}
                />
                <ODS
                    descricao="ODS 12 - Consumo e Produção Responsáveis: Ao ajudar as pessoas a fazerem escolhas alimentares mais conscientes e seguras, o projeto promove o consumo responsável e incentiva práticas mais sustentáveis na indústria alimentícia."
                    backgroundColor="#f2cc8f"
                    imagemODS={ODS12}
                />
            </div>
        </div>
<div className="divisao2">
  <h2>IDENTIDADE VISUAL</h2>
</div>

<div className="logoCompleta2">
        <img src={logoAmarelo} alt="logotipo verde" />
      </div>
<div className="tituloLogo">
      <h2>Fontes Utilizadas</h2>
    </div>
<div className="fontesUtilizadas">
        <div className="coluna lato">
            <h2 className="amarelo">Lato</h2>
            <h3 className="vermelho">SUBTÍTULO</h3>
            <p>A SaborIA é uma plataforma de geolocalização que visa a inclusão de pessoas que possuem intolerância alimentar de forma simples</p>
            <div className="fontExemplo medium">
                <h4>Medium</h4>
                <p>ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz 1234567890@#$%&*</p>
            </div>
            <div className="fontExemplo semibold">
                <h4>SemiBold</h4>
                <p >ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz 1234567890@#$%&*</p>
            </div>
            <div className="fontExemplo bold">
                <h4>Bold</h4>
                <p>ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz 1234567890@#$%&*</p>
            </div>
        </div>
        <div className="coluna raleway">
            <h2 className="amarelo">Raleway</h2>
            <h3 className="vermelho">SUBTÍTULO</h3>
            <p>Com nossa plataforma, a vida de pessoas com restrição alimentar 'alergias e intolerâncias' é facilitada. Assim, você se sente seguro ao comer seu prato favorito.</p>
            <div className="fontExempl mediumo">
                <h4>Medium</h4>
                <p>ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz 1234567890@#$%&*</p>
            </div>
            <div className="fontExemplo semibold">
                <h4>SemiBold</h4>
                <p>ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz 1234567890@#$%&*</p>
            </div>
            <div className="fontExemplo bold">
                <h4>Bold</h4>
                <p>ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz 1234567890@#$%&*</p>
            </div>
        </div>
    </div>
      <div className="divisao"></div>
      <div className="tituloPaleta title">Paleta de cores</div>
      <div className="sobre-icons ">
       
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
      <div className="tituloLogo">
        <div className="textoLogo"><h2>A logotipo da Sabor.IA</h2></div>
    </div>
      <div className="logoSignificado">
        <div>
            <img id="Sabor" src={Sabor} alt="sabor" />
            <h2>Representa o sabor da comida</h2>
        </div>
        <h3>+</h3>
        <div>
            <img id="IA" src={IA} alt="IA" />
            <h2>Iniciais de Inclusão Alimentar"</h2>
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