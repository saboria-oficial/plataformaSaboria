import React from 'react'
import '../css/parcerias.css'

const CardP = (props) => {
    return (
      <div className='card-parcerias'>
                <img src={props.img} alt="" className='parceria-img' />
                <h2>{props.nome}</h2>
                <p>{props.text}</p>
            </div>
    );
  }
  export default CardP


