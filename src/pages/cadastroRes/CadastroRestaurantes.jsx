import React, {useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import imagemCadastro from '../../assets/img2/CadastroRestaurante.svg'
import { Link } from 'react-router-dom';  
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../css/cadastro.css'
import sha256 from 'js-sha256';
import Swal from 'sweetalert2'

const CadastroRestaurantes = () => {

  const [formData, setFormData] = useState({
    nome : "",
    culinaria : "",
    email : "",
    cep : "",
    telefone : "",
    cnpj : "",
    intolerancia : [],
    senha : ""
  });

  function convertPasswordToKey(password) {
    const key = sha256(password);
    console.log(key);
    return key;
  } 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "senha") {
      const key = convertPasswordToKey(value); // Chamando a função para gerar a chave da senha
      setFormData({
        ...formData,
        [name]: value,
        chaveSenha: key, // Armazenando a chave da senha no estado
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    let intoleranciaAtualizadas = [...formData.intolerancia];
    if (checked) {
      intoleranciaAtualizadas.push(name);
    } else {
      intoleranciaAtualizadas = intoleranciaAtualizadas.filter((item) => item !== name);
    }
    setFormData({
      ...formData,
      intolerancia: intoleranciaAtualizadas,
    });
  };

  const handleCadastroClick = async () => {
    const { nome, culinaria, email, cep, telefone, cnpj, senha, intolerancia, chaveSenha } = formData;
    if (nome && culinaria && email && cep && telefone && cnpj && senha) {
      try {
        const response = await fetch("https://localhost:7097/api/Restaurante", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nome : nome,
            cnpj : cnpj,
            intolerancia : intolerancia.join(','),
            senha : chaveSenha,
            telefone : telefone,
            cep : cep,
            culinaria : culinaria,
            email : email
          }),
        });
        console.log(response)
        if (response.ok) {
          await Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Usuário cadastrado com sucesso!",
            showConfirmButton: false,
            timer: 1500
          });

          window.location.href = '/loginRes';
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
        <Header/>
      <div className="container-cadastro fundo-restaurantes">
    <div className="card-cadastro">
        <h2 className="title">Criar Conta</h2>
        <div className="icons-cadastro">
             
        <div className="icon-cadastro">
              <a href="">
                <FontAwesomeIcon
                  icon={faGoogle}
                  className="fa-google"
                />
              </a>
            </div>
          
        </div>
        <div className="linhaOU">
            <p className="line"></p>
            <p>ou</p>
            <p className="line"></p>
          </div>
    <p>Cadastre-se</p>

        <form>
            <input type="text" placeholder="Nome do Estabelecimento" id="nome" name="nome" required value={formData.nome} onChange={handleInputChange} /> 
            <input type="text" placeholder="Qual é a sua culinária" id="culinaria" name="culinaria" required value={formData.culinaria} onChange={handleInputChange}/> 
            <input type="email" placeholder="Email" required id="email" name="email" value={formData.email} onChange={handleInputChange}/>
            <input type="text" placeholder="Cep" required id="cep" name="cep" value={formData.cep} onChange={handleInputChange}/>
            <input type="tel" placeholder="Telefone" required id="telefone" name="telefone" value={formData.telefone} onChange={handleInputChange}/>
            <input type="text" placeholder="CNPJ" required id="cnpj" name="cnpj" value={formData.cnpj} onChange={handleInputChange}/> 
            <input type="password" placeholder="Senha" required id="senha" name="senha" value={formData.senha} onChange={handleInputChange}/> 
            <div className="alergias">
            <p>
                Quais restrições seu restaurante atende?
              </p>
           
              <ul>
                  <li>
                    <input type="checkbox" name="Laticinios" id="Laticinios" onChange={handleCheckboxChange} />
                    <label htmlFor="Laticinios">Laticinios</label>
                  </li>
                  <li>
                    <input type="checkbox" name="FrutosDoMar" id="FrutosDoMar"onChange={handleCheckboxChange} />
                    <label htmlFor="FrutosDoMar">Frutos do mar</label>
                  </li>
                  <li>
                    <input type="checkbox" name="Amendoas" id="Amendoas" onChange={handleCheckboxChange} />
                    <label htmlFor="Amendoas">Amêndoas</label>
                  </li>
                  <li>
                    <input type="checkbox" name="Ovo" id="Ovo" onChange={handleCheckboxChange} />
                    <label htmlFor="Ovo">Ovo</label>
                  </li>
                  <li>
                    <input type="checkbox" name="Graos" id="Graos" onChange={handleCheckboxChange} />
                    <label htmlFor="Graos">Grãos</label>
                  </li>
                  <li>
                    <input type="checkbox" name="Trigo" id="Trigo" onChange={handleCheckboxChange} />
                    <label htmlFor="Trigo">Trigo</label>
                  </li>
                  <li>
                    <input type="checkbox" name="Soja" id="Soja" onChange={handleCheckboxChange} />
                    <label htmlFor="Soja">Soja</label>
                  </li>
                  <li>
                    <input type="checkbox" name="NTem" id="NTem" />
                    <label htmlFor="NTem">Não tenho / outros</label>
                  </li>
              </ul>
            </div>

            <button
              type="button"
              className="btn btn-dark"
              id="cadastrar"
              onClick={handleCadastroClick}>
              Cadastrar
            </button>
        </form>
      <Link to="/loginRes" className="links">Login</Link>
    </div>
<div className="card-cadastro-img">
    <img src={imagemCadastro} alt=""/>
</div>
   </div>
   <Footer/>
    </div>
  )
}

export default CadastroRestaurantes
