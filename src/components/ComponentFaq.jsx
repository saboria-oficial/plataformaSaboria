import React from 'react'
import IconFaq from '../assets/img2/perguntas-frequentes.png'
import '../css/faq.css'
const ComponentFaq = (props) => {
  return (
    <div className='card-faq'>
      <div className="icon-faq"><img src={IconFaq}/></div>
      <div className="text-faq">
        <h3>{props.title}</h3>
        <p>{props.coment}</p>
      </div>
    </div>
  )
}

export default ComponentFaq
