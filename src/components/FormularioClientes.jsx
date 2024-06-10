import React from 'react'
import imgFormulario from '../assets/img2/formularioClientes.svg'
import '../css/formulario.css'
import { Link } from "react-router-dom";
const FormularioClientes = () => {
  return (
    <div>
      
      <div className="containerFormulario">
        <div className="formsClientes">
            <form action='#'>
                <h2>Podemos Ajudar?</h2>

                <input type="text" name='nomeCliente' id='nomeCliente' placeholder='Nome completo:'/>

                <input type="email" name='emailCliente' id='emailCliente' placeholder='Email:'/>

                <input type="text" name='restricaoCliente' id='restricaoCliente' placeholder='Qual a sua restrição?'/>
                
                <textarea name="comentarioCliente" id="comentarioCliente" rows={8} cols={40} placeholder='Como podemos te ajudar?'></textarea>
                <Link className="linkin" to="/Enviado"><button type='submit'>Enviar</button></Link>
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
