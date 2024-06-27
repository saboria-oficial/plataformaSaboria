import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import imagemCadastro from "../../assets/img2/CadastroRestaurante.svg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../css/cadastro.css";
import { Link } from "react-router-dom";
import sha256 from "js-sha256";
import Swal from "sweetalert2";

const LoginRestaurantes = () => {
  const [formData, setFormData] = useState({
    cnpj: "",
    senha: "",
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

  const handleLoginClick = async () => {
    const { cnpj, senha, chaveSenha } = formData;
    if (cnpj && senha) {
      try {
        const response = await fetch(
          `https://localhost:7097/api/Restaurante/${cnpj}/${chaveSenha}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          localStorage.setItem("res", cnpj);

          await Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Usuário logado com sucesso!",
            showConfirmButton: false,
            timer: 1500,
          });

          window.location.href = "/PerfilRes";
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Erro ao entrar",
          });
          console.error("Erro ao logar");
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Erro ao entrar",
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
    <div className="card-cadastro-img">
  <img src={imagemCadastro} alt=""/>
</div>
  <div className="card-cadastro">
      <h2 className="title">Login!</h2>
     
      <form>

          <input type="email" placeholder="Email" required/>
          <input type="text" placeholder="Cnpj" required/> 
          <input type="password" placeholder="Senha" required/> 

          <Link to="/PerfilRes"><input type="submit" id="loginRes" value="Entrar"/></Link> 
      </form>
    <Link to="/cadastroRes" className='mudarCor'>Criar Conta </Link>


          <p>Ou inscreva-se pelas redes sociais</p>

          <div className="icons-cadastro">
            <div className="icon-cadastro">
              <a href="">
                <FontAwesomeIcon icon={faGoogle} className="fa-google" />
              </a>
            </div>
      </div>


  </div>
 </div>
 <Footer/>
  </div>
  )
}

export default LoginRestaurantes;
