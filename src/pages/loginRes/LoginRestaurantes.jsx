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
      console.log(formData)
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
          console.log(`CNPJ : ${cnpj}`)
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
          <input type="text" placeholder="cnpj" name="cnpj" required onChange={handleInputChange}/> 
          <input type="password" placeholder="senha" name="senha"  required onChange={handleInputChange}/> 

          {/* <Link to="/PerfilRes"><input type="submit" id="loginRes" value="Entrar"/></Link>  */}
          <button
                    type="button"
                    className="btn btn-dark"
                    id="loginRes"
                    onClick={handleLoginClick}>
                    Entrar
                  </button>
      </form>
    <Link to="/cadastroRes" className='mudarCor'>Criar Conta </Link>



  </div>
 </div>
 <Footer/>
  </div>
  )
}

export default LoginRestaurantes;
