import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
const ItemCardapio = (props) => {
  //troca de icone e frase pra mostrar a condição do prato
    const [situacao, setSituacao]= useState("Pausa das Vendas");
    const [icone, setIcone]= useState(<FontAwesomeIcon icon={faPause}/>);
    const situacaoPrato = () =>{
        if(situacao == "Pausa das Vendas"){
        setSituacao("Retomar as Vendas")
        setIcone(<FontAwesomeIcon icon={faPlay}/>)
        } else{
            setSituacao("Pausa das Vendas")
            setIcone(<FontAwesomeIcon icon={faPause}/>)
        }
    }
  return (
    <div className='item-cardapio'>
      <span className='span-cardapio'>{props.intolerancia}</span>
      <span className='span-cardapio'>{props.nome}</span>
      <span className='cardapio-preco'>R${props.preco}</span>
     <p onClick={situacaoPrato}><span>{icone}</span>{situacao}</p>
      <Link className='link-cardapio'>Duplicar</Link>
      <Link className='link-cardapio'>Editar</Link>
    </div>
  )
}

export default ItemCardapio
