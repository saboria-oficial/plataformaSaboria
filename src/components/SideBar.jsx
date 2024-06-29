import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Dev from '../assets/img2/dev2.webp';
import '../css/sidebar.css';
// icones
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faHouse,
  faReceipt,
  faLock,
  faEye,
  faComments,
  faQuestion,
  faMoneyBill1Wave,
  faCircleInfo,
  faPen,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
//abrir e fechar sidebar
const botao = () => {
  document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
  });
}

const SideBar = (props) => {
  const location = useLocation();

  return (
    <div>
      <nav id="sidebar">
        <div id="sidebar_content">
          <div id="user">
            <p id="user_infos">
              <span className="item-description">
                {props.nomeRestaurante}
              </span>
              <span className="item-description">
                Sair da conta
              </span>
            </p>
            <img src={props.img} id="user_avatar" alt="usuário" />
          </div>
          <ul id="side_item">
            <li className={`side-item ${location.pathname === '/PerfilRes' ? 'active' : ''}`}>
              <Link to="/PerfilRes">
                <FontAwesomeIcon className='icon-side' icon={faHouse} />
                <span className="item-description">Início</span>
              </Link>
            </li>
            <li className={`side-item ${location.pathname === '/cardapio' ? 'active' : ''}`}>
              <Link to="/cardapio">
                <FontAwesomeIcon className='icon-side' icon={faBook} />
                <span className="item-description">Cardápio</span>
              </Link>
            </li>
            <li className={`side-item ${location.pathname === '/PaginaRestaurante' ? 'active' : ''}`}>
              <Link to="/PaginaRestaurante">
                <FontAwesomeIcon className='icon-side' icon={faEye} />
                <span className="item-description">Visualização</span>
              </Link>
            </li>
            <li className={`side-item ${location.pathname === '/FaqRes' ? 'active' : ''}`}>
              <Link to="/AlterFaq">
                <FontAwesomeIcon className='icon-side' icon={faQuestion} />
                <span className="item-description">FAQ & Fale conosco</span>
              </Link>
            </li>
            <li className={`side-item ${location.pathname === '/PlanoRes' ? 'active' : ''}`}>
              <Link to="/PlanoRes">
                <FontAwesomeIcon className='icon-side' icon={faMoneyBill1Wave} />
                <span className="item-description">Planos</span>
              </Link>
            </li>
            <li className={`side-item ${location.pathname === '/blog' ? 'active' : ''}`}>
              <Link to="/blog">
                <FontAwesomeIcon className='icon-side' icon={faPen} />
                <span className="item-description">Escreva no nosso Blog</span>
              </Link>
            </li>
          </ul>
          <button onClick={botao} id="open_btn">
            <FontAwesomeIcon id='iconC' icon={faChevronRight} />
          </button>
        </div>
      </nav>
    </div>
  )
}

export default SideBar;
