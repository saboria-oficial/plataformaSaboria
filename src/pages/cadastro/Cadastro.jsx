import React, {useState} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import imagemCadastro from "../../assets/img2/cadastro.svg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../css/cadastro.css";
import sha256 from 'js-sha256';
import Swal from 'sweetalert2'

const Cadastro = () => {

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    cep: "",
    telefone: "",
    senha: "",
    restricoes: [], // Array para armazenar as restrições selecionadas
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
    let restricoesAtualizadas = [...formData.restricoes];
    if (checked) {
      restricoesAtualizadas.push(name);
    } else {
      restricoesAtualizadas = restricoesAtualizadas.filter((item) => item !== name);
    }
    setFormData({
      ...formData,
      restricoes: restricoesAtualizadas,
    });
  };

  const handleCadastroClick = async () => {
    const { nome, email, cep, telefone, senha, restricoes } = formData;
    if (nome && email && cep && telefone && senha) {
      try {
        const response = await fetch("https://localhost:7097/api/Usuario", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nome: formData.nome,
            telefone : formData.telefone,
            email : formData.email,
            restricao : formData.restricoes.join(','),
            cep : formData.cep,
            senha : formData.chaveSenha,
            tipo : "Cliente",
            googleLogin : false
          }),
        });
        if (response.ok) {
          await Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Usuário cadastrado com sucesso!",
            showConfirmButton: false,
            timer: 1500
          });

          window.location.href = '/login';
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Erro ao cadastrar",
          });
          console.error("Erro ao cadastrar");
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
      });    }
  };
  
  return (
    <div>
      <Header />
      <div className="container-cadastro fundo-clientes">
        <div className="card-cadastro">
          <h2 className="title">Criar Conta</h2>
          <div className="icons-cadastro">
            <div className="icon-cadastro">
              <FontAwesomeIcon icon={faGoogle} className="fa-google" />
            </div>
          </div>
          <div className="linhaOU">
            <p className="line"></p>
            <p>ou</p>
            <p className="line"></p>
          </div>
          <p>Cadastre-se</p>
          <form>
            <input 
              type="text"
              placeholder="Nome completo"
              id="nome"
              name="nome"
              required
              value={formData.nome}
              onChange={handleInputChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="number"
              placeholder="Cep"
              name="cep"
              required
              value={formData.cep}
              onChange={handleInputChange}
            />
            <input
              type="tel"
              placeholder="Telefone"
              name="telefone"
              required
              value={formData.telefone}
              onChange={handleInputChange}
            />
            <input
              type="password"
              placeholder="Senha"
              name="senha"
              required
              value={formData.senha}
              onChange={handleInputChange}
            />
            <div className="alergias">
              <p>Quais restrições alimentares você possui?</p>
              <ul>
                  <li>
                    <input type="checkbox" name="Laticinios" id="Laticinios" onChange={handleCheckboxChange} />
                    <label htmlFor="Laticinios">Laticínios</label>
                  </li>
                  <li>
                    <input type="checkbox" name="FrutosDoMar" id="FrutosDoMar" onChange={handleCheckboxChange}/>
                    <label htmlFor="FrutosDoMar">Frutos do mar</label>
                  </li>
                  <li>
                    <input type="checkbox" name="Amendoas" id="Amendoas" onChange={handleCheckboxChange}/>
                    <label htmlFor="Amendoas">Amêndoas</label>
                  </li>
                  <li>
                    <input type="checkbox" name="Ovo" id="Ovo" onChange={handleCheckboxChange}/>
                    <label htmlFor="Ovo">Ovo</label>
                  </li>
                  <li>
                    <input type="checkbox" name="Graos" id="Graos" onChange={handleCheckboxChange}/>
                    <label htmlFor="Graos">Grãos</label>
                  </li>
                  <li>
                    <input type="checkbox" name="Trigo" id="Trigo" onChange={handleCheckboxChange}/>
                    <label htmlFor="Trigo">Trigo</label>
                  </li>
                  <li>
                    <input type="checkbox" name="Soja" id="Soja" onChange={handleCheckboxChange}/>
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
              onClick={handleCadastroClick}
            >
              Cadastrar
            </button>
          </form>
          <Link to="/Login" className="mudarCor">
            Login
          </Link>
        </div>
        <div className="card-cadastro-img">
          <img src={imagemCadastro} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cadastro;