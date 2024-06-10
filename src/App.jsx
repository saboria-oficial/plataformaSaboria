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
import PerfilFav from './pages/perfil/PerfilFav.jsx'
import Blog from './pages/blog/Blog.jsx'
import Faq from "./pages/faq/faq.jsx";
import Parceria from "./pages/parceria/Parceria.jsx";
import Sobre from "./pages/sobre/Sobre.jsx";
import Restaurantes from "./pages/restaurantes/Restaurantes.jsx";
import Enviado from "../src/components/Enviado.jsx";
import PagRestaurantePremium from "./pages/restaurantes/pagRestaurantePremium.jsx";
import PaginaRestaurante from "./pages/restaurantes/paginaRestaurante.jsx";
import PerfilConfig from "./pages/perfil/PerfilConfig.jsx";
import PerfilRes from "./pages/perfil/PerfilRest.jsx";
import Pesquisa from "./pages/pesquisa/Pesquisa.jsx";
import PlanosRes from "./pages/planos/PlanosRes.jsx";
import Cardapio from "./pages/cardapio/Cardapio.jsx";
import Pagamentos from "./pages/pagamentos/Pagamentos.jsx";
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
      <Route path="/sobre" element={<Sobre/>}></Route>
      <Route path="/Restaurantes" element={<Restaurantes/>}></Route>
      <Route path="/perfilConfig" element={<PerfilConfig/>}></Route>
      <Route path="/perfilFav" element={<PerfilFav/>}></Route>
      <Route path="/Enviado" element={<Enviado/>}></Route>
      <Route path="/PagRestaurantePremium" element={<PagRestaurantePremium/>}></Route>
      <Route path="/PaginaRestaurante" element={<PaginaRestaurante/>}></Route>
      <Route path="/Pesquisa" element={<Pesquisa/>}></Route>
      <Route path="/PerfilRes" element={<PerfilRes/>}></Route>
      <Route path="/PlanoRes" element={<PlanosRes/>}></Route>
      <Route path="/cardapio" element={<Cardapio/>}></Route>
      <Route path="/pagamentos" element={<Pagamentos/>}></Route>
    </Routes>
    </Router>
  );
}

export default App;
