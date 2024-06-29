import React from 'react'
import imgFormulario from '../assets/img2/formularioClientes.svg'
import '../css/formulario.css'
import { Link } from "react-router-dom";


const FormularioClientes = () => {

  return (
    <div>
      <div className="containerFormulario">
        <div className="formsClientes">
            <form action='https://formspree.io/f/xzzpplry' method='POST'>
                <h2>Podemos Ajudar?</h2>

                <input type="text" name='nome Cliente:' id='nomeCliente' placeholder='Nome completo:' required/>

                <input type="email" name='email Cliente:' id='emailCliente' placeholder='Email:' required/>

                <input type="text" name='restrição Cliente:' id='restricaoCliente' placeholder='Qual a sua restrição?' required/>
                
                <textarea name="comentarioCliente" id="comentarioCliente" rows={8} cols={40} placeholder='Como podemos te ajudar?' required></textarea>
              <button type='submit'>Enviar</button>
            </form>
        </div>
        <div className="imgClientes">
            <img src={imgFormulario}/>
        </div>
      </div>
    </div>
  )
}

export default FormularioClientes
