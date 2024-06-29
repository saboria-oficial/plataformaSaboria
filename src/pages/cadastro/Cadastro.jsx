import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import imagemCadastro from "../../assets/img2/cadastro.svg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../css/cadastro.css";
import sha256 from "js-sha256";
import Swal from "sweetalert2";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    cep: "",
    telefone: "",
    senha: "",
    restricoes: [],
    tipo: "Cliente",
    googleLogin: false,
  });

  // Função para converter senha em chave
  function convertPasswordToKey(password) {
    return sha256(password);
  }

  // Atualiza o estado após o login do Google
  const handleGoogleSuccess = async (response) => {
    const profile = JSON.parse(atob(response.credential.split(".")[1]));
    const { name, email, sub } = profile;

    // Atualiza o estado do formulário
    setFormData({
      ...formData,
      nome: name,
      email: email,
      senha: sub,
      chaveSenha: convertPasswordToKey(sub),
      googleLogin: true,
    });
  };

  const handleGoogleFailure = (error) => {
    console.error("Erro ao fazer login com Google:", error);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Erro ao fazer login com Google.",
    });
  };
  
  // Efeito para lidar com o cadastro após atualizar o estado do formulário
  useEffect(() => {
    // Verifica se o login do Google foi realizado
    if (formData.googleLogin) {
      handleCadastroClick();
    }
  }, [formData.googleLogin]);

  // Função para lidar com a submissão do formulário
  const handleCadastroClick = async () => {
    const { nome, email, cep, telefone, senha, restricoes } = formData;
    if (nome && email && senha) {
      try {
        // Valida se o usuário já existe
        const validate = await validateUser();
        if (validate) {
          // Realiza o cadastro se o usuário não existe
          const response = await axios.post(
            "https://localhost:7097/api/Usuario",
            {
              nome,
              telefone,
              email,
              restricao: restricoes.join(","),
              cep,
              senha: formData.chaveSenha,
              googleLogin: formData.googleLogin,
              tipo: formData.tipo,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (response.status === 200) {
            // Exibe mensagem de sucesso e redireciona para o login
            await Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Usuário cadastrado com sucesso!",
              showConfirmButton: false,
              timer: 1500,
            });
            window.location.href = "/login";
          } else {
            // Exibe mensagem de erro
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Erro ao cadastrar",
            });
          }
        } else {
          // Exibe mensagem de usuário já cadastrado
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Usuário já cadastrado!",
          });
        }
      } catch (error) {
        // Exibe mensagem de erro genérico
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Erro ao cadastrar",
        });
        console.error("Erro ao enviar a solicitação:", error);
      }
    } else {
      // Exibe mensagem para preencher todos os campos obrigatórios
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Por favor, preencha todos os campos obrigatórios.",
      });
    }
  };

  // Função para validar se o usuário já existe
  async function validateUser() {
    const { email } = formData;
    try {
      const response = await axios.get(
        `https://localhost:7097/api/Usuario/${email}`
      );
      if (response.data) {
        return false; // Usuário já existe
      }
      return true; // Usuário não existe
    } catch (error) {
      return true; // Erro ao validar usuário, assume que não existe
    }
  }

  // Função para lidar com a mudança de entrada nos campos do formulário
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "senha") {
      const key = convertPasswordToKey(value);
      setFormData({
        ...formData,
        [name]: value,
        chaveSenha: key,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Função para lidar com a mudança de checkbox das restrições alimentares
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    let restricoesAtualizadas = [...formData.restricoes];
    if (checked) {
      restricoesAtualizadas.push(name);
    } else {
      restricoesAtualizadas = restricoesAtualizadas.filter(
        (item) => item !== name
      );
    }
    setFormData({
      ...formData,
      restricoes: restricoesAtualizadas,
    });
  };

  return (
    <GoogleOAuthProvider clientId="837619593123-ekr0uonni4d30q19d6q24r0cu34lnobi.apps.googleusercontent.com">
      <div>
        <Header />
        <div className="container-cadastro fundo-clientes">
          <div className="card-cadastro">
            <h2 className="title">Criar Conta</h2>
            <div className="icons-cadastro">
              <div className="icon-cadastro">
                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onError={handleGoogleFailure}
                />
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
                    <input
                      type="checkbox"
                      name="Laticinios"
                      id="Laticinios"
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="Laticinios">Laticínios</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="FrutosDoMar"
                      id="FrutosDoMar"
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="FrutosDoMar">Frutos do mar</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="Amendoas"
                      id="Amendoas"
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="Amendoas">Amêndoas</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="Ovo"
                      id="Ovo"
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="Ovo">Ovo</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="Graos"
                      id="Graos"
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="Graos">Grãos</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="Trigo"
                      id="Trigo"
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="Trigo">Trigo</label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      name="Soja"
                      id="Soja"
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="Soja">Soja</label>
                  </li>
                  <li>
                    <input type="checkbox" name="NTem" id="NTem" />
                    <label htmlFor="NTem">Não tenho / outros</label>
                  </li>
                </ul>
              </div>
              <button type="button" className="btn btn-dark" id="cadastrar" onClick={handleCadastroClick}>
                Cadastrar
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </GoogleOAuthProvider>
  );
};

export default Cadastro;
