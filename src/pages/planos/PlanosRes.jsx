import React from 'react'
import '../../../src/css/planoRes.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import CardPlanoRes from '../../components/CardPlanoRes';
import SideBar from '../../components/SideBar'
import logoPizzaria1 from '../../assets/img2/logoPizzaGenerico.jpg';

const PlanosRes = () => {
  return (
    <div>
      <Header/>
      <div className="responsive-pr">
        <SideBar className="asside-cardapio"  img={logoPizzaria1} nomeRestaurante="Bom Recheio"/>
        <div className="container-planoRes">
        
          <h2 id='title-planoRes'>Planos para estabelecimentos</h2>
          <Link to="/planosRes" className='link-back'><FontAwesomeIcon icon={faArrowLeft}/></Link>
          <div className="planoRes-content">
              <CardPlanoRes nome="Menu da Casa" preco='0.00' 
              icon1={<FontAwesomeIcon 
                icon={faCircleCheck}/>} 
                icon2={<FontAwesomeIcon 
                  icon={faCircleCheck}/>}
                  icon3={<FontAwesomeIcon 
                    icon={faCircleCheck}/>}
                    icon4={<FontAwesomeIcon 
                      icon={faCircleXmark} style={{color: 'red'}}/>}
                    icon5={<FontAwesomeIcon 
                      icon={faCircleXmark} style={{color: 'red'}}/>}
        
              vantagem1="Divulgação do Restaurante"
              vantagem2="Informações Gerais"
              vantagem3="Acesso ao nosso suporte"
              vantagem4="Personalização do seu cardápio"
              vantagem5="Adicionar matéria ao nosso blog"
              linkPagamento="/PagamentosCasa"/>
        
        <CardPlanoRes nome="Menu Omakasê" preco='39.99' 
        icon1={<FontAwesomeIcon 
        icon={faCircleCheck}/>} 
        icon2={<FontAwesomeIcon 
          icon={faCircleCheck}/>}
          icon3={<FontAwesomeIcon 
            icon={faCircleCheck}/>}
            icon4={<FontAwesomeIcon 
              icon={faCircleCheck}/>}
              icon5={<FontAwesomeIcon 
                icon={faCircleCheck} />}
        
                vantagem1="Divulgação do Restaurante"
                vantagem2="Informações Gerais"
                vantagem3="Acesso ao nosso suporte"
                vantagem4="Personalização do seu cardápio"
                vantagem5="Adicionar matéria ao nosso blog"
                linkPagamento="/PagamentosOmakase"/>
        
        
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default PlanosRes
