import React from 'react'
import '../../../src/css/planoRes.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import CardPlanoRes from '../../components/CardPlanoRes';

const PlanosRes = () => {
  return (
    <div>
      <Header/>
      <div className="container-planoRes">
        <h2 id='title-planoRes'>Planos para estabelecimentos</h2>
        <Link to="/" className='link-back'><FontAwesomeIcon icon={faArrowLeft}/></Link>

        <div className="planoRes-content">
            <CardPlanoRes nome="Menu de Entrada" preco='0.00' icon1={<FontAwesomeIcon icon={faCircleCheck}/>} icon2={<FontAwesomeIcon icon={faCircleCheck}/>}icon3={<FontAwesomeIcon icon={faCircleCheck}/>}icon4={<FontAwesomeIcon icon={faCircleCheck}/>} 
            
            vantagem1="num sei vantagens"
            vantagem2="num sei vantagens"
            vantagem3="num sei vantagens"
            vantagem4="num sei vantagens"/>

<CardPlanoRes nome="Menu Omakasê" preco='39.99' icon1={<FontAwesomeIcon icon={faCircleCheck}/>} icon2={<FontAwesomeIcon icon={faCircleCheck}/>}icon3={<FontAwesomeIcon icon={faCircleCheck}/>}icon4={<FontAwesomeIcon icon={faCircleCheck}/>} 
            
            vantagem1="num sei vantagens"
            vantagem2="num sei vantagens"
            vantagem3="num sei vantagens"
            vantagem4="num sei vantagens"/>
            
            
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default PlanosRes
