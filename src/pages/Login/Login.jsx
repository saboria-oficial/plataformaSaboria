import React, { useState, useEffect } from "react";
import "../../css/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import {

  faGoogle,

} from "@fortawesome/free-brands-svg-icons";
import imagemCadastro from "../../assets/img2/cadastro.svg";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import { Link } from "react-router-dom";
import sha256 from 'js-sha256';
import Swal from 'sweetalert2'
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const Login = () => {

  const [formData, setFormData] = useState({
    email : "",
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

  const handleLoginClick = async () => {
    const { email, senha, chaveSenha } = formData;
    if (email && senha) {
      try {
        const response = await fetch(`https://localhost:7097/api/Usuario/${email}/${chaveSenha}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          console.log(response)
          
          localStorage.setItem('user', email);

          await Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Usuário logado com sucesso!",
            showConfirmButton: false,
            timer: 1500
          });

          window.location.href = '/perfilFav';
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Erro ao entrar",
          });        }
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
      console.error("Por favor, preencha todos os campos obrigatórios.");
    }
  };


  // Atualiza o estado após o login do Google
  const handleGoogleSuccess = async (response) => {
    const profile = JSON.parse(atob(response.credential.split(".")[1]));
    const { email, sub } = profile;

    // Atualiza o estado do formulário
    setFormData({
      ...formData,
      email: email,
      senha: sub,
      chaveSenha: convertPasswordToKey(sub),
      googleLogin : true
    });
  };

  const handleGoogleFailure = (error) => {
    console.error("Erro ao fazer login com Google:", error);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Erro ao fazer login com Google.",
      googleLogin : true
    });
  };

   // Efeito para lidar com o cadastro após atualizar o estado do formulário
   useEffect(() => {
    // Verifica se o login do Google foi realizado
    if (formData.googleLogin) {
      handleLoginClick();
    }
  }, [formData.googleLogin]);

  return (
    <GoogleOAuthProvider clientId="837619593123-ekr0uonni4d30q19d6q24r0cu34lnobi.apps.googleusercontent.com">
      <section>
        <Header />
        <div className="container-login fundo-clientes" >
        <div className="card-cadastro-img">
            <img src={imagemCadastro} />
          </div>
            <div className="forms-container">
                <form action="#" className="sign-in-form">
                  <h2 className="title">Login</h2>
                  <div className="input-field">
                    <FontAwesomeIcon icon={faUser} className="icone-login"/>
                    <input type="text" name="email" placeholder={"Usuário"} required value={formData.email} onChange={handleInputChange}/>
                  </div>
                  <div className="input-field">
                    <FontAwesomeIcon icon={faLock} className="icone-login"/>
                    <input type="password" name="senha" placeholder="Senha" required value={formData.senha} onChange={handleInputChange}/>
                  </div>
                  <Link className="link" to="/redefinir">Esqueceu sua senha?</Link>
                  {/* <Link to="/perfilFav"> */}
                    <button
                      type="button"
                      className="btn btn-dark"
                      id="entrar"
                      onClick={handleLoginClick}>
                      Entrar
                    </button>
                  {/* </Link> */}
                  <p className="social-text">
                    Ou faça login com suas redes sociais
                  </p>
                  <div className="icons-cadastro">

              <div className="icon-cadastro">
                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onError={handleGoogleFailure}
                />
              </div>
                  </div>
                  <div className="cadastro">
                    <p>
                      <Link className="link" to="/cadastro">Criar conta</Link>
                    </p>
                    <p>
                      <Link className="link" to="/loginRes">Login para restaurantes</Link>
                    </p>
                  </div>
                </form>
            </div>
        </div>
        <Footer />
     </section>
    </GoogleOAuthProvider>
  );
};

export default Login;
