import React from 'react'
import Dev from '../assets/img2/dev2.webp'
import '../css/sidebar.css'
import { Link } from 'react-router-dom';
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

const botao = () => {
    document.getElementById('open_btn').addEventListener('click', function () {
        document.getElementById('sidebar').classList.toggle('open-sidebar');
})
}

const SideBar = () => {
  return (
    <div>
      <nav id="sidebar">
        <div id="sidebar_content">
        <div id="user">
            <p id="user_infos">
              <span className="item-description">
                Fulano de Tal
                </span>
              <span className="item-description">
                Sair da conta
                </span>
            </p>
            <img src={Dev} id="user_avatar" alt="usuário" />
        </div>
        <ul id="side_item">
            <li className="side-item active">
                <a href="#">
                <FontAwesomeIcon className='icon' icon={faHouse} />
                <span className="item-description">
                    Início
                </span>
                </a>
            </li>
            <li className="side-item">
                <Link to="/cardapio">
                <FontAwesomeIcon className='icon' icon={faBook} />
                <span className="item-description">
                    Cardápio
                </span>
                </Link>
            </li>
            <li className="side-item">
                <a href="#">
                <FontAwesomeIcon className='icon' icon={faReceipt} />
                <span className="item-description">
                    Promoções
                </span>
                </a>
            </li>
            <li className="side-item">
                <a href="#">
                <FontAwesomeIcon className='icon' icon={faEye} />
                <span className="item-description">
                    Visualização
                </span>
                </a>
            </li>
            <li className="side-item">
                <a href="#">
                <FontAwesomeIcon className='icon' icon={faComments} />
                <span className="item-description">
                    Avaliação
                </span>
                </a>
            </li>
            <li className="side-item">
                <a href="#">
                <FontAwesomeIcon className='icon' icon={faQuestion} />
                <span className="item-description">
                    FAQ & Fale conosco
                </span>
                </a>
            </li>
            <li className="side-item">
                <a href="#">
                <FontAwesomeIcon className='icon' icon={faMoneyBill1Wave} />
                <span className="item-description">
                    Planos
                </span>
                </a>
            </li>
            <li className="side-item">
                <a href="#">
                <FontAwesomeIcon className='icon' icon={faCircleInfo} />
                <span className="item-description">
                    Informações do estabelecimento
                </span>
                </a>
            </li>
            <li className="side-item">
                <a href="#">
                <FontAwesomeIcon className='icon' icon={faPen} />
                <span className="item-description">
                    Escreva no nosso Blog
                </span>
                </a>
            </li>
        </ul>
        <button onClick={botao} id="open_btn">
            <FontAwesomeIcon id='iconC'  icon={faChevronRight}/>
        </button>
      </div>
      </nav>
    </div>
  )
}

export default SideBar