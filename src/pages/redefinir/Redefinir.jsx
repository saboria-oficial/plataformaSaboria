import React, { useState } from "react";
import axios from "axios";
import "../../css/redefinir.css";
import senha from "../../assets/img2/senha.svg";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const Redefinir = () => {
  const [formData, setFormData] = useState({
    email: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const enviaEmail = async () => {
    if(formData.email){
      const apiKey = "EM2YJC44WM75ZXE2C5M3SJQF";
      const data = {
        to: formData.email,
        from: "saboriaoficial@gmail.com",
        subject: "Redefinir senha",
        html: "<p>Olá,</p><p>Aqui está o link redefinir sua senha:</p><a href='http://localhost:5173/alterar' target='_blank'>Redefinir</a>"
      };

      try {
        const response = await axios.post("https://api.sendgrid.com/v3/mail/send", data, {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json"
          }
        });
        console.log(response.data);
        await Swal.fire({
          position: "top-end",
          icon: "success",
          title: "E-mail enviado com sucesso!\nAcesse o link.",
          showConfirmButton: false,
          timer: 1500
        });
      } catch (error) {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Erro ao enviar E-mail",
        });       
      }
    }else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Por favor, preencha o email.",
      });
    }
  }

  return (
    <>
      <Header />
      <div className="container-redefinir">
        <div className="card-voltar-img">
          <img src={senha} alt="Senha" />
        </div>
        <div className="redefinir">
          <form action="#" className="email">
            <h2 className="title">Redefinir senha!</h2>
            <p>
              Informe seu E-mail e enviaremos um link para a recuperação da sua
              senha{" "}
            </p>
            <div className="input-field">
              <input type="text" placeholder="Email" name="email" onChange={handleInputChange}/>
            </div>
            {/* <Link className="linkin" to="/alterar"> */}
              <button
                type="button"
                className="btn btn-dark"
                id="enviar"
                onClick={enviaEmail}>
                Enviar
              </button>
            {/* </Link> */}
            <div className="voltar">
              <Link to="/login" className="link">
                Voltar
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
      <script src="https://smtpjs.com/v3/smtp.js"></script>
    </>
  );
};

export default Redefinir;
