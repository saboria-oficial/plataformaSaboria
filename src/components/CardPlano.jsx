import React from 'react'
import '../css/planos.css'

const CardPlano = (props) => {

  return (

    <div className='card-planos-client'>
      <h2>{props.title}</h2>
      <div className='preco'>
        <h2>{props.valorTitle}</h2>
        <div>
          <p>usuário <br />
          /mês</p>
        </div>
      </div>
      <p>total de R${props.valorTitle * 12}/mês colaborados anualmente</p>
      <div className="planoBtn  experiment">
        <button>Experimentar plano grátis</button>
      </div>
      <p className="line-plano"></p>
      <p>Com esse plano você pode utilizar funções do nosso site como:</p>
      <div className="vantagens-plano">
        <ul>
          <li><span>{props.check1} </span>{props.vantagem1}</li>
          <li><span>{props.check2} </span> {props.vantagem2}</li>
          <li><span>{props.check3} </span> {props.vantagem3}</li>
          <li><span>{props.check4} </span> {props.vantagem4}</li>
          <li><span>{props.check5} </span> {props.vantagem5}</li>
          <li><span>{props.check6} </span> {props.vantagem6}</li>
          <li><span>{props.check7} </span> {props.vantagem7}</li>
        </ul>
      </div>
      <div className="planoBtn assinarBtn">
        <button>Assinar</button>
      </div>
    </div>

  );
}
export default CardPlano