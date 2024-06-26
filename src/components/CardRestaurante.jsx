import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import '../css/home.css';

const CardRestaurante = (props) => {
  const [favorito, setFavorito]= useState(false);
  const [icone, setIcone]= useState(faHeart);
  const [colorIcone, setcolorIcone] = useState('var(--branco)');
  const favoritado = () =>{
     if(!favorito){
      setFavorito(true);
      setIcone(faHeartCircleCheck)
     setcolorIcone('var(--vermelho)')
     } else{
      setFavorito(false);
      setIcone(faHeart)
     setcolorIcone('var(--branco)')
     }
  }
  return (
    <div className='card-restaurante'>
      <div className="img-restaurante"><img src={props.img} alt="logo do restaurante" /></div>
      <div className="restaurant-card-info">
        <p>{props.estrelas}</p>
        <p className='star'><FontAwesomeIcon icon={faStar} /></p>
        <p onClick={favoritado}><FontAwesomeIcon className='coracao' icon={icone} style={{color: colorIcone}}/></p>
        <p className='talheres'><FontAwesomeIcon icon={faUtensils} /></p>
      </div>
    </div>
  );
};

export default CardRestaurante;