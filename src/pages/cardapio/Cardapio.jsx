import React from "react";
import { Link } from "react-router-dom";
//components
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SideBar from "../../components/SideBar";
import ItemCardapio from "../../components/ItemCardapio";
//img
import imgPrato from '../../assets/img2/fotoIndisponivel.jpg'
import logoPizzaria1 from '../../assets/img2/logoPizzaGenerico.jpg';
//css
import "../../css/cardapio.css";

const Cardapio = () => {
  return (
    <div>
      <Header />
      <div className="container-cardapio">
        <SideBar className="asside-cardapio"  img={logoPizzaria1} nomeRestaurante="Bom Recheio"/>
        <div className="content-cardapio">
          <div className="tabela-cardapio scrolar ">
            <h2>Cardápio</h2>
            <div className="desc-items-cardapio">
              <span>Intolerâncias</span>
              <span>Nome do prato</span>
              <span>Preço</span>
              <span>Situação do Prato</span>
              <span>Duplicar</span>
              <span>Editar</span>
            </div>
            <ItemCardapio
              intolerancia="Lactose"
              nome="Pizza de Chocolate"
              preco="54,99"
              className="tabela-item"
            />
            <ItemCardapio
              intolerancia="Lactose"
              nome="Pizza de Chocolate"
              preco="54,99"
              className="tabela-item"
            />
            <ItemCardapio
              intolerancia="Lactose"
              nome="Pizza de Chocolate"
              preco="54,99"
              className="tabela-item"
            />
            <ItemCardapio
              intolerancia="Lactose"
              nome="Pizza de Chocolate"
              preco="54,99"
              className="tabela-item"
            />
            <ItemCardapio
              intolerancia="Lactose"
              nome="Pizza de Chocolate"
              preco="54,99"
              className="tabela-item"
            />
            <ItemCardapio
              intolerancia="Lactose"
              nome="Pizza de Chocolate"
              preco="54,99"
              className="tabela-item"
            />
            <ItemCardapio
              intolerancia="Lactose"
              nome="Pizza de Chocolate"
              preco="54,99"
              className="tabela-item"
            />
            <ItemCardapio
              intolerancia="Lactose"
              nome="Pizza de Chocolate"
              preco="54,99"
              className="tabela-item"
            />
            <ItemCardapio
              intolerancia="Lactose"
              nome="Pizza de Chocolate"
              preco="54,99"
              className="tabela-item"
            />
            <span className="add-cardapio">+ Item</span>
          </div>
          <div className="add-prato">
            <div className="prato-img">
              <img src={imgPrato} alt="" />
              <Link id="link-verifique">Verifique seu plano</Link>
            </div>
            <div className="prato-desc">
              <input type="text" placeholder="nome do prato" name="nomePrato" id="nomePrato"/>
              <textarea name="descricaoPrato" id="descricaoPrato" placeholder="descrição do prato" ></textarea>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Cardapio;
