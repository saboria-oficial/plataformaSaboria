import React, { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "../../components/SideBar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faCircle,
  faStar,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import indisponivel from '../../assets/img2/fotoIndisponivel.jpg';
import "../../css/perfilFav.css";

const PerfilRest = () => {
  const [restaurante, setRestaurante] = useState(null);
  const [error, setError] = useState(null);
  const [endereco, setEndereco] = useState(null);
  const [imagemRestaurante, setImagemRestaurante] = useState(null);

  useEffect(() => {
    const fetchRestaurante = async () => {
      const user = JSON.parse(localStorage.getItem('res'));
      if (user) {
        try {
          const response = await axios.get(`https://localhost:7097/api/Restaurante/${user}`);
          console.log('Dados do restaurante:', response.data); // Log dos dados do restaurante
          setRestaurante(response.data);

          // Busca o endereço via CEP
          const enderecoCompleto = await buscarEnderecoViaCEP(response.data.cep);
          setEndereco(enderecoCompleto);

          // Requisição para obter a imagem do restaurante
          const imagemResponse = await axios.get(`https://localhost:7097/api/Restaurante/${user}/imagem`);
          console.log('URL da imagem:', imagemResponse.data.imagemUrl); // Log da URL da imagem
          setImagemRestaurante(imagemResponse.data.imagemUrl); // Supondo que o backend retorna um campo ImagemUrl
          
        } catch (err) {
          setError('Erro ao buscar dados do restaurante.');
          console.error(err);
        }
      } else {
        setError('CNPJ não encontrado no localStorage.');
      }
    };

    fetchRestaurante();
  }, []);

  const buscarEnderecoViaCEP = async (cep) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if (!response.ok) {
        throw new Error('Erro ao buscar dados do CEP.');
      }
      const data = await response.json();
      const endereco = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
      return endereco;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  return (
    <>
      <Header />
      <div className="containerResPerfilS">
        <div className="SideBar">
          {restaurante ? (
            <SideBar img={imagemRestaurante} nomeRestaurante={restaurante.nome} />
          ) : (
            <SideBar img={indisponivel} nomeRestaurante='Restaurante'/>
          )}
        </div>
        <div className="containerResPerfil">
          <div className="tituloResPerfil">
            <h2>INÍCIO</h2>
          </div>
          <div className="localResPerfil">
            <div className="info-perfil">
               {imagemRestaurante && (
                <img src={imagemRestaurante} alt="Restaurante" />
              )}
              {restaurante && (
                <div className="descriResPerfil">
                  <h2>{restaurante.nome}</h2>
                  <h3>{endereco}</h3>
                  <h3>
                    <FontAwesomeIcon id="clock" icon={faClock} /> Aberto de
                    acordo com o horário de funcionamento
                  </h3>
                </div>
              )}
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
              {restaurante && restaurante.intolerancia && (
                restaurante.intolerancia.split(',').map((item, index) => (
                  <h3 key={index}>
                    <FontAwesomeIcon className="circle" icon={faCircle} />
                    {item.trim()}
                  </h3>
                ))
              )}
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
