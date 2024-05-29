import React from "react";
import { faLinkedin} from '@fortawesome/free-brands-svg-icons';
import '../css/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const Desenvolvedores = (props) => {
  return (
    <div className="card-dev">
      <div className="dev-img">
        <img src={props.img} alt="desenvolvedor da Saboria" />
      </div>
      <div className="dev-content">
        <h2>{props.nome}</h2>
        <p>{props.cargo}</p>
        <div>
            <a href={props.linkedin} target="_blank">
                <FontAwesomeIcon icon={faLinkedin} className="fa-facebook-f "/>
            </a>
            <a href={props.github} target="_blank" className="fa-github">
                <FontAwesomeIcon icon={faGithub}/>
            </a>
        </div>
      </div>
    </div>
  );
};

export default Desenvolvedores;
