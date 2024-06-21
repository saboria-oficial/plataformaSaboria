import React from 'react'
import '../css/planoRes.css'
import { Link } from 'react-router-dom'

const CardPlanoRes = (props) => {
  return (
    <div className='card-plano-res'>
      <div className="info-plano-res">
        <h3>{props.nome}</h3>
        <h2>{props.preco} <span>/mês</span> </h2>
        <p>Total de R${props.preco * 12}/mês cobrados anualmente</p>
      </div>
      <div className="vantagens-plano-res">
        <p>Com esse plano, você pode utilizar várias funções do nosso site como:</p>

        <ul>
            <li><span>{props.icon1}</span> {props.vantagem1}</li>
            <li><span>{props.icon2}</span> {props.vantagem2}</li>
            <li><span>{props.icon3}</span> {props.vantagem3}</li>
            <li><span>{props.icon4}</span> {props.vantagem4}</li>
            <li><span>{props.icon5}</span> {props.vantagem5}</li>
        </ul>
      </div>
      <div className="buttons-plano-res">
        <Link className='link-plano' to={props.linkPagamento}><button className="btn-plano-res assinar">Assinar</button></Link>
        <button className="btn-plano-res gratuito">Experimentar plano grátis</button>
      </div>
    </div>
  )
}

export default CardPlanoRes
