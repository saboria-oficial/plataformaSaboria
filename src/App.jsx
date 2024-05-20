import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Carrosel from './components/Carrosel.jsx';
import Imagem1 from './assets/img2/carrossel.webp';
import Imagem2 from './assets/img2/carrosel2.webp';
import Imagem3 from './assets/img2/carrosel3.webp';
import Cadastro from './components/Cadastro.jsx';
import Login from './components/Login.jsx';
import CadastroRestaurantes from './components/CadastroRestaurantes.jsx';
import LoginRestaurantes from './components/LoginRestaurantes.jsx';
function App() {
  

  return (
   <div>
     {/* <Header/>
     <Carrosel img1={Imagem1} img2={Imagem2} img3={Imagem3}/>
     <Footer/> */}
<Header/>
<LoginRestaurantes/>
<Footer/>
   </div>
  )
}

export default App
