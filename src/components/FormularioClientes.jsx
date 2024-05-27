import React from 'react'
import imgFormulario from '../assets/img2/formularioClientes.svg'
import '../css/formulario.css'
const FormularioClientes = () => {
  return (
    <div>
      
      <div className="containerFormulario">
        <div className="formsClientes">
            <form action='#'>
                <h2>Podemos Ajudar?</h2>

                <input type="text" name='nomeCliente' id='nomeCliente' placeholder='nome completo:'/>

                <input type="email" name='emailCliente' id='emailCliente' placeholder='email:'/>

                <input type="text" name='restricaoCliente' id='restricaoCliente' placeholder='qual a sua restrição?'/>
                
                <textarea name="comentarioCliente" id="comentarioCliente" rows={8} cols={40} placeholder='Como podemos te ajudar?'></textarea>
                <button typr='submit'>enviar</button>
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
