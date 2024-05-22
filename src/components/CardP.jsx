import React from 'react'
import '../css/parcerias.css'

const CardP = (props) => {
    return (
      <div className='card-parcerias'>
                <img src={props.img} alt="" className='parceria-img' />
                <p>{props.text}</p>
            </div>
    );
  }
  export default CardP