import React from 'react'
import ReactDOM from 'react-dom/client'
import Cadastro from '../components/Cadastro'
import Header from '../components/header'
import Footer from '../components/Footer'
import './index.css'

ReactDOM.createRoot(document.getElementById('cadastro')).render(
  <React.StrictMode>
    <Header/>
    <Cadastro/>
    <Footer/>
  </React.StrictMode>,
)
