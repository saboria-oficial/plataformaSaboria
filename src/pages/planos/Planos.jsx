import React from "react";
import '../../css/planos.css'
import Header from "../../components/Header";
import Footer from '../../components/Footer'
import CardPlano from '../../components/CardPlano.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import {faCircleXmark } from '@fortawesome/free-solid-svg-icons';
const Planos = () => {
    return (
      <div>
        <Header/>
        <div className="container-planos">
          <CardPlano title="Menu de Entrada" valorTitle="0.00" valo vantagem1="Ver a localização do restaurante
" vantagem2="ver os pratos"
vantagem3="Adicionar a intolerancia" vantagem4="Acesso ao nosso suporte"
vantagem5="Acesso ao delivery do restaurante"
vantagem6="Descontos (voucher e cupons)"
vantagem7="Acesso as nossas parcerias"
check1={<FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>} check2={<FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>}
check3={<FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>} check4={<FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>}
check5={<FontAwesomeIcon icon={faCircleXmark} className="false"></FontAwesomeIcon>}
check6={<FontAwesomeIcon icon={faCircleXmark} className="false"></FontAwesomeIcon>}
check7={<FontAwesomeIcon icon={faCircleXmark} className="false"></FontAwesomeIcon>}
          />


<CardPlano title="Menu Principal" valorTitle="19.99" valo vantagem1="Ver a localização do restaurante
" vantagem2="ver os pratos"
vantagem3="Adicionar a intolerancia" vantagem4="Acesso ao nosso suporte"
vantagem5="Acesso ao delivery do restaurante"
vantagem6="Descontos (voucher e cupons)"
vantagem7="Acesso as nossas parcerias"
check1={<FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>} check2={<FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>}
check3={<FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>} check4={<FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>}
check5={<FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>}
check6={<FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>}
check7={<FontAwesomeIcon icon={faCircleXmark}className="false"></FontAwesomeIcon>}
          />
         



<CardPlano title="Menu do chefe" valorTitle="39.99" valo vantagem1="Ver a localização do restaurante
" vantagem2="ver os pratos"
vantagem3="Adicionar a intolerancia" vantagem4="Acesso ao nosso suporte"
vantagem5="Acesso ao delivery do restaurante"
vantagem6="Descontos (voucher e cupons)"
vantagem7="Acesso as nossas parcerias"
          check1={<FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>} check2={<FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>}
          check3={<FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>} check4={<FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>}
          check5={<FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>}
          check6={<FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>}
          check7={<FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>}
          />
        </div>
        <Footer/>
      </div>
    );
  }
  export default Planos