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

const SideBar = (props) => {
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
            <li className="side-item active">
                <a href="#">
                <FontAwesomeIcon className='icon-side' icon={faHouse} />
                <span className="item-description">
                    Início
                </span>
                </a>
            </li>
            <li className="side-item">
                <Link to="/cardapio">
                <FontAwesomeIcon className='icon-side' icon={faBook} />
                <span className="item-description">
                    Cardápio
                </span>
                </Link>
            </li>
            <li className="side-item">
                <a href="#">
                <FontAwesomeIcon className='icon-side' icon={faEye} />
                <span className="item-description">
                    Visualização
                </span>
                </a>
            </li>
            <li className="side-item">
                <a href="#">
                <FontAwesomeIcon className='icon-side' icon={faQuestion} />
                <span className="item-description">
                    FAQ & Fale conosco
                </span>
                </a>
            </li>
            <li className="side-item">
                <a href="#">
                <FontAwesomeIcon className='icon-side' icon={faMoneyBill1Wave} />
                <span className="item-description">
                    Planos
                </span>
                </a>
            </li>
            <li className="side-item">
                <a href="#">
                <FontAwesomeIcon className='icon-side' icon={faPen} />
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