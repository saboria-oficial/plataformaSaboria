import React from 'react'
import imgRest from '../assets/img2/FormularioRest.svg'
import '../css/formularioRestaurantes.css'
import { Link } from "react-router-dom";


const FormularioRestaurantes = () => {

  return (
    <div>
      <div className="containerFormularioRest">
        <div className="formsRest">
            <form action='https://formspree.io/f/xeojjbgn' method='POST'>
                <h2>Podemos Ajudar?</h2>

                <input type="text" name='nome Restaurante:' id='nomeRest' placeholder='CNPJ' required/>

                <input type="email" name='email Restaurante:' id='emailRest' placeholder='Email:' required/>
                
                <textarea name="comentario Restaurante:" id="comentarioRest" rows={8} cols={40} placeholder='Como podemos te ajudar?' required></textarea>
              <button type='submit'>Enviar</button>
            </form>
        </div>
        <div className="imgRest">
            <img src={imgRest}/>
        </div>
      </div>
    </div>
  )
}

export default FormularioRestaurantes
