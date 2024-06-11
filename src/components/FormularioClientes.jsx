import React from 'react'
import imgFormulario from '../assets/img2/formularioClientes.svg'
import '../css/formulario.css'
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const FormularioClientes = () => {


  const{i18n} = useTranslation();

  const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
  };
  const {t} = useTranslation(); {t("")}


  return (
    <div>
      
      <div className="containerFormulario">
        <div className="formsClientes">
            <form action='#'>
                <h2>{t("Podemos Ajudar?")}</h2>

                <input type="text" name='nomeCliente' id='nomeCliente' placeholder={t('Nome completo:')}/>

                <input type="email" name='emailCliente' id='emailCliente' placeholder='Email:'/>

                <input type="text" name='restricaoCliente' id='restricaoCliente' placeholder={t('Qual a sua restrição?')}/>
                
                <textarea name="comentarioCliente" id="comentarioCliente" rows={8} cols={40} placeholder={t('Como podemos te ajudar?')}></textarea>
                <Link className="linkin" to="/Enviado"><button type='submit'>{t("Enviar")}</button></Link>
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
