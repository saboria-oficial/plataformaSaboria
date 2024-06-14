import React from 'react'
import imgRest from '../assets/img2/FormularioRest.svg'
import '../css/formularioRestaurantes.css'
import { Link } from "react-router-dom";


const FormularioRestaurantes = () => {

  return (
    <div>
      <div className="containerFormularioRest">
        <div className="formsRest">
            <form action='#'>
                <h2>Podemos Ajudar?</h2>

                <input type="text" name='nomeRest' id='nomeRest' placeholder='CNPJ'/>

                <input type="email" name='emailRest' id='emailRest' placeholder='Email:'/>
                
                <textarea name="comentarioRest" id="comentarioRest" rows={8} cols={40} placeholder='Como podemos te ajudar?'></textarea>
                <Link className="linkin" to="/Enviado"><button type='submit'>Enviar</button></Link>
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
