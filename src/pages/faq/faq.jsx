import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ComponentFaq from '../../components/ComponentFaq'
import '../../css/faq.css'
const Faq = () => {
  return (
    <div>
      <Header/>
      <div className="container-faq">
<ComponentFaq title='Com quais restrições alimentares 
vocês trabalham?' coment='Nós trabalhamos com leite, peixes, ovos, castanhas, trigo, amendoim e camarão'/>

<ComponentFaq title='Como faço para procurar um restaurante?' coment='Na tela inicial possuímos a aba restaurante. Nela você pode procurar por alergia ou prato.'/>

<ComponentFaq title='Vocês possuem serviço delivery?' coment='Nós não realizamos a entrega de pedidos, mas nossos restaurantes possuem serviços de entrega.'/>

<ComponentFaq title='Como eu faço para criar uma conta?' coment='Na tela de login, clique em “Criar conta”. Vamos precisar de um email e de uma senha para o cadastro.'/>

<ComponentFaq title='Vocês abrangem quais regiões?' coment='No momento, a Saboria está atuando somente na região de São Paulo'/>

<ComponentFaq title='Esqueci minha senha 
o que eu faço? ' coment=' Na tela de login clique em “Esqueceu sua senha?” para enviarmos uma confirmação e gerar uma nova senha'/>

<ComponentFaq title='Minha dúvida não está aqui!' coment=' Envie sua dúvida para nosso email saboriaoficial@gmail.com para que possamos resolver sua dúvida.'/>
      </div>
      <Footer/>
    </div>
  )
}

export default Faq
