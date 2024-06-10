import React, { useState } from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../css/faq.css'
import faq from '../../assets/img2/FAQimg.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";


const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Com quais restrições alimentares vocês trabalham?",
      answer: "Nós trabalhamos com leite, peixes, ovos, castanhas, trigo, amendoim e camarão."
    },
    {
      question: "Como faço para procurar um restaurante?",
      answer: "Na tela inicial possuímos a aba restaurante. Nela você pode procurar por alergia ou prato."
    },
    {
      question: "Vocês possuem serviço delivery?",
      answer: "Nós não realizamos a entrega de pedidos, mas nossos restaurantes possuem serviços de entrega."
    },
    {
      question: "Como eu faço para criar uma conta?",
      answer: "Na tela de login, clique em “Criar conta”. Vamos precisar de um email e de uma senha para o cadastro."
    },
    {
      question: "Vocês abrangem quais regiões?",
      answer: "No momento, a Saboria está atuando somente na região de São Paulo."
    },
    {
      question: "Esqueci minha senha, o que eu faço?",
      answer: "Na tela de login clique em “Esqueceu sua senha?” para enviarmos uma confirmação e gerar uma nova senha."
    },
    {
      question: "Minha dúvida não está aqui!",
      answer: "Envie sua dúvida para nosso email saboriaoficial@gmail.com para que possamos resolver sua dúvida."
    }
  ];

  return (
    <div>
      <Header/>
      <h2 id="titulo-faq">AS RESPOSTAS PARA AS SUAS PERGUNTAS:</h2>
      <div className="container-faq">
        <div className="container-faq-img">
          <img src={faq}  id="faqImg" alt="faq" />
        </div>
        <div className="container-faq-texto">
          
          {faqs.map((faq, index) => (
            <div className={`faq ${activeIndex === index ? 'active' : ''}`} key={index}>
              <button className="accordion" onClick={() => toggleAccordion(index)}>
                {faq.question}
                <i className={`faChevronDown ${activeIndex === index ? 'active' : ''}`}><FontAwesomeIcon icon={faChevronDown}/></i>
              </button>
              <div className="pannel" style={{ display: activeIndex === index ? 'block' : 'none' }}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Faq;


