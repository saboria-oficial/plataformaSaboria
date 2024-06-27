import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SideBar from "../../components/SideBar";
import ItemCardapio from "../../components/ItemCardapio";
import Swal from 'sweetalert2'
//img
import imgPrato from '../../assets/img2/fotoIndisponivel.jpg'
import logoPizzaria1 from '../../assets/img2/logoPizzaGenerico.jpg';
//css
import "../../css/cardapio.css";

const Cardapio = () => {
  const [produto, setProduto] = useState(null);
  const [error, setError] = useState(null);

  let x = 0;
  function scroolFun() {
    document.getElementById("demo").innerHTML = x += 1;
  }

  const [formData, setFormData] = useState({
    idProduto : "",
    nome : "",
    descricao : "",
    imagem : "",
    valor : "",
    restricao : ""
  });

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const response = await axios.get(`https://localhost:7097/api/Produto`);
        console.log(response.data)

        setProduto(response.data);
      } catch (err) {
        setError('Erro ao buscar dados do Produto.');
        console.error(err);
      }
    };

    fetchProduto();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCadastroClick = async () => {
    const { idProduto, nome, descricao, imagem, valor, restricao } = formData;
    if (idProduto && nome && descricao && valor) {
      try {
        const response = await fetch("https://localhost:7097/api/Produto", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            idProduto : idProduto,
            nome : nome,
            descricao : descricao,
            imagem : imagem,
            valor : valor,
            restricao : restricao
          }),
        });
        console.log(response)
        if (response.ok) {
          await Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Produto cadastrado com sucesso!",
            showConfirmButton: false,
            timer: 1500
          });

          location.reload();

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
        <SideBar className="asside-cardapio"  img={logoPizzaria1} nomeRestaurante="Bom Recheio"/>
        <div className="content-cardapio">
          <div className="scroll-table">
            <div className="tabela-cardapio" onScroll={scroolFun}>
              <h2>Cardápio</h2>
              <div className="desc-items-cardapio">
                <span>Intolerâncias</span>
                <span>Nome do prato</span>
                <span>Preço</span>
                <span>Situação do Prato</span>
                <span>Duplicar</span>
                <span>Editar</span>
              </div>

              {produto && (
                produto.map((item, index) => (
                  <div className="tabela-cardapio">
                    <ItemCardapio
                      intolerancia={item.restricao}
                      nome={item.nome}
                      preco={item.valor}
                      className="tabela-item"
                    />
                  </div>
                ))
              )}
              <span className="add-cardapio">+ Item</span>
            </div>
          </div>
          <div className="add-prato">
            <div className="prato-img">
              <img src={imgPrato} alt="" />
              <Link id="link-verifique" to="/planoRes">Verifique seu plano</Link>
            </div>
            <div className="prato-desc">
              <input type="text" placeholder="Id" name="idProduto" id="idProduto" value={formData.idProduto} onChange={handleInputChange}/>
              <input type="text" placeholder="nome do prato" name="nome" id="nome" value={formData.nome} onChange={handleInputChange}/>
              <textarea name="descricao" id="descricao" placeholder="descrição do prato" value={formData.descricao} onChange={handleInputChange}></textarea>
              <input type="number" placeholder="valor" name="valor" id="valor" value={formData.valor} onChange={handleInputChange}/>
              <input type="text" placeholder="Restrição" name="restricao" id="restricao" value={formData.restricao} onChange={handleInputChange}/>
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
