import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SideBar from "../../components/SideBar";
import ItemCardapio from "../../components/ItemCardapio";
import "../../css/cardapio.css";

import imgPrato from '../../assets/img2/fotoIndisponivel.jpg';
import logoPizzaria1 from '../../assets/img2/logoPizzaGenerico.jpg';

const Cardapio = () => {
  const [produto, setProduto] = useState(null);
  const [error, setError] = useState(null);
  const [imagemRestaurante, setImagemRestaurante] = useState(null);

  const [formData, setFormData] = useState({
    idProduto: "",
    nome: "",
    descricao: "",
    foto: "", // Inicialize com uma string vazia
    valor: "",
    restricao: "",
  });

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const response = await axios.get(`https://localhost:7097/api/Produto`);
        setProduto(response.data);
        
      } catch (err) {
        setError('Erro ao buscar dados do Produto.');
        console.error(err);
      }
    };

    fetchProduto();

    const fetchRestaurante = async () => {
      const user = JSON.parse(localStorage.getItem('res'));
      if (user) {
        try {
          // Requisição para obter a imagem do restaurante
          const imagemResponse = await axios.get(`https://localhost:7097/api/Restaurante/${user}/imagem`);
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          foto: reader.result, // Armazena a imagem como base64
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCadastroClick = async () => {
    const { idProduto, nome, descricao, foto, valor, restricao } = formData;
    if (idProduto && nome && descricao && valor) {
      try {
        const data = new FormData();
        data.append("idProduto", idProduto);
        data.append("nome", nome);
        data.append("descricao", descricao);
        data.append("valor", valor);
        data.append("restricao", restricao);
        if (foto) {
          // Se a foto for em base64, converte de volta para Blob antes de enviar
          const blob = await fetch(foto).then(res => res.blob());
          data.append("foto", blob);
        }

        const response = await fetch("https://localhost:7097/api/Produto", {
          method: "POST",
          body: data,
        });

        if (response.ok) {
          await Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Produto cadastrado com sucesso!",
            showConfirmButton: false,
            timer: 1500
          });

        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Erro ao cadastrar",
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Erro ao cadastrar",
        });
        console.error("Erro ao enviar a solicitação:", error);
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Por favor, preencha todos os campos obrigatórios.",
      });
    }
  };

  return (
    <div>
      <Header />
      <div className="container-cardapio">
        <SideBar className="asside-cardapio" img={imagemRestaurante} nomeRestaurante="Bom Recheio" />
        <div className="content-cardapio">
          <div className="scroll-table">
            <div className="tabela-cardapio">
              <h2>Cardápio</h2>
              <div className="desc-items-cardapio">
                <span>Intolerâncias</span>
                <span>Nome do prato</span>
                <span>Preço</span>
                <span>Situação do Prato</span>
                <span>Duplicar</span>
                <span>Editar</span>
              </div>

              {produto && produto.map((item, index) => (
                <div className="tabela-cardapio" key={index}>
                  <ItemCardapio
                    intolerancia={item.restricao}
                    nome={item.nome}
                    preco={item.valor}
                    className="tabela-item"
                  />
                </div>
              ))}
              <span className="add-cardapio">+ Item</span>
            </div>
          </div>
          <div className="add-prato">
            <div className="prato-img">
              <label htmlFor="fotoInput">
                <img src={formData.foto || imgPrato} alt="" />
                <input
                  type="file"
                  id="fotoInput"
                  name="foto"
                  accept="image/*"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
              </label>
              <Link id="link-verifique" to="/planoRes">Verifique seu plano</Link>
            </div>
            <div className="prato-desc">
              <input type="text" placeholder="Id" name="idProduto" id="idProduto" value={formData.idProduto} onChange={handleInputChange} />
              <input type="text" placeholder="nome do prato" name="nome" id="nome" value={formData.nome} onChange={handleInputChange} />
              <textarea name="descricao" id="descricao" placeholder="descrição do prato" value={formData.descricao} onChange={handleInputChange}></textarea>
              <input type="number" placeholder="valor" name="valor" id="valor" value={formData.valor} onChange={handleInputChange} />
              <input type="text" placeholder="Restrição" name="restricao" id="restricao" value={formData.restricao} onChange={handleInputChange} />
              <button
                type="button"
                className="btn btn-dark"
                id="cadastrar"
                onClick={handleCadastroClick}>
                Cadastrar
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cardapio;
