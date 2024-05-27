import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/home.jsx'
import Cadastro from './pages/cadastro/Cadastro.jsx'
import CadastroRes from './pages/cadastroRes/CadastroRestaurantes.jsx'
import Login from './pages/Login/Login.jsx'
import LoginRes from './pages/loginRes/LoginRestaurantes.jsx'
import Alterar from './pages/alterar/Alterar.jsx'
import Redefinir from './pages/redefinir/Redefinir.jsx'
import Check from './pages/check/Check.jsx'
import Planos from './pages/planos/Planos.jsx'
import Blog from './pages/blog/Blog.jsx'
import Faq from "./pages/faq/faq.jsx";
import Parceria from "./pages/parceria/Parceria.jsx";
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/cadastro" element={<Cadastro/>}></Route>
      <Route path="/cadastroRes" element={<CadastroRes/>}></Route>
      <Route path="/alterar" element={<Alterar/>}></Route>
      <Route path="/redefinir" element={<Redefinir/>}></Route>
      <Route path="/loginRes" element={<LoginRes/>}></Route>
      <Route path="/check" element={<Check/>}></Route>
      <Route path="/planos" element={<Planos/>}></Route>
      <Route path="/blog" element={<Blog/>}></Route>
      <Route path="/Faq" element={<Faq/>}></Route>
      <Route path="/parcerias" element={<Parceria/>}></Route>
    </Routes>
    </Router>
  );
}

export default App;
