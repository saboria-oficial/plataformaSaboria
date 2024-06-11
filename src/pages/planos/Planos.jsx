import React from "react";
import '../../css/planos.css'
import Header from "../../components/Header";
import Footer from '../../components/Footer'
import CardPlano from '../../components/CardPlano.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import {faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const Planos = () => {
  const{i18n} = useTranslation();

  const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
  };
  const {t} = useTranslation();
    return (
      <div>
        <Header/>
        <div className="container-planos">
          <CardPlano title={t("Menu de Entrada")} valorTitle="0.00" valo vantagem1={t("Ver a localização do restaurante")} vantagem2={t("ver os pratos")}
vantagem3={t("Adicionar a intolerancia")} vantagem4={t("Acesso ao nosso suporte")}
vantagem5={t("Acesso ao delivery do restaurante ")}
vantagem6={t("Descontos (voucher e cupons)")}
vantagem7={t("Acesso as nossas parcerias")}
check1={<FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>} check2={<FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>}
check3={<FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>} check4={<FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>}
check5={<FontAwesomeIcon icon={faCircleXmark} className="false"></FontAwesomeIcon>}
check6={<FontAwesomeIcon icon={faCircleXmark} className="false"></FontAwesomeIcon>}
check7={<FontAwesomeIcon icon={faCircleXmark} className="false"></FontAwesomeIcon>}
          />


<CardPlano title={t("Menu Principal")} valorTitle="19.99" valo vantagem1={t("Ver a localização do restaurante")} vantagem2={t("ver os pratos")}
vantagem3={t("Adicionar a intolerancia")} vantagem4={t("Acesso ao nosso suporte")}
vantagem5={t("Acesso ao delivery do restaurante")}
vantagem6={t("Descontos (voucher e cupons)")}
vantagem7={t("Acesso as nossas parcerias")}
check1={<FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>} check2={<FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>}
check3={<FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>} check4={<FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>}
check5={<FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>}
check6={<FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>}
check7={<FontAwesomeIcon icon={faCircleXmark}className="false"></FontAwesomeIcon>}
          />
         



<CardPlano title={t("Menu do chefe")} valorTitle="39.99" valo vantagem1={t("Ver a localização do restaurante")} vantagem2={t("ver os pratos")}
vantagem3={t("Adicionar a intolerancia")} vantagem4={t("Acesso ao nosso suporte")}
vantagem5={t("Acesso ao delivery do restaurante")}
vantagem6={t("Descontos (voucher e cupons)")}
vantagem7={t("Acesso as nossas parcerias")}
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