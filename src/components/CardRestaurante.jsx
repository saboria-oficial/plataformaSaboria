import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart} from '@fortawesome/free-regular-svg-icons';
import { faStar} from '@fortawesome/free-solid-svg-icons';
import { faUtensils} from '@fortawesome/free-solid-svg-icons';
import '../css/home.css'
const CardRestaurante = (props) => {
  return (
    <div className='card-restaurante'>
      <div className="img-restaurante"><img src={props.img} alt="logo do restaurante" /></div>
      <div className="restaurant-card-info">
        <p>{props.estrelas}</p>
        <p className='star'> <FontAwesomeIcon icon={faStar}/>
      </p>
        <p><FontAwesomeIcon className='coracao' icon={faHeart}/></p>
        <p className='intolerancia'>{props.intolerancia}</p>
        <p className='talheres'><FontAwesomeIcon icon={faUtensils}/></p>
      </div>
    </div>
  )
}

export default CardRestaurante
