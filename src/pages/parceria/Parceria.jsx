import React from 'react';
import '../../css/parcerias.css';
import CardP from '../../components/CardP';
import logonutriacess from '../../assets/img2/logonutriacess.svg';
import logoLifeBand from '../../assets/img2/VARIANTE LOGO LIFEBAND.png'
import logoCali from '../../assets/img2/Group 10.png'
import { Link } from "react-router-dom";
import Header from '../../components/Header';
import Footer from '../../components/Footer';


const Parceria = (props) => {


  return (
    <>
      <Header />
      <div className='container-parcerias'>
        <h2 className="title-parceria">{"NOSSAS PARCERIAS"}</h2>
        <p className='line'></p>
        <div className='content-parceria'>
          <CardP
            img={logonutriacess}
            nome={'NutriAcess'}
            text={"Fundada no primeiro semestre de 2023 por alunos do Instituto Proa, a NutriAcess é uma plataforma que visa a democratização a consultas nutricionais a preço social, comprometidos em oferecer um serviço acessível e de qualidade para todos os nossos pacientes."}
          />
          <CardP
            img={logoLifeBand}
            nome={'Life Band'}
            text={"O projeto Life Band surgiu a partir da experiência pessoal de um dos nossos membros com um atendimento médico ineficiente. Desenvolvemos uma pulseira inteligente que agiliza o atendimento hospitalar, especialmente em emergências. A pulseira envia alertas imediatos aos responsáveis e hospitais, enquanto compartilha dados cruciais dos pacientes, como cadastro, doenças e alergias. Nosso objetivo é otimizar a triagem e melhorar a eficiência e segurança do atendimento médico."}
          />
          <CardP
            img={logoCali}
            nome={'CaliPet'}
            text={"A CaliPet é uma empresa voltada para a alimentação de animais domésticos urbanos, visando trazer receitas simples de serem feitas em casa. Fundada em abril de 2024 por alunos do Instituto PROA, seu intuito é ajudar pessoas que não possuem condições de custear rações caras, mas necessárias para seu companheiro."}
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Parceria;
