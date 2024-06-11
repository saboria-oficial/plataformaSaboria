import React from 'react';
import '../../css/parcerias.css';
import CardP from '../../components/CardP';
import logonutriacess from '../../assets/img2/logonutriacess.svg';
import { Link } from "react-router-dom";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useTranslation } from 'react-i18next';

const Parceria = (props) => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <Header />
      <div className='container-parcerias'>
        <h2 className="title-parceria">{t("NOSSAS PARCERIAS")}</h2>
        <p className='line'></p>
        <div className='content-parceria'>
          <CardP
            img={logonutriacess}
            nome={'NutriAcess'}
            text={t("Fundada no primeiro semestre de 2023 por alunos do Instituto Proa, a NutriAcess é uma plataforma que visa a democratização a consultas nutricionais a preço social, comprometidos em oferecer um serviço acessível e de qualidade para todos os nossos pacientes.")}
          />
          <CardP
            img={logonutriacess}
            nome={'NutriAcess'}
            text={t("Fundada no primeiro semestre de 2023 por alunos do Instituto Proa, a NutriAcess é uma plataforma que visa a democratização a consultas nutricionais a preço social, comprometidos em oferecer um serviço acessível e de qualidade para todos os nossos pacientes.")}
          />
          {/* <CardP
            img={connecthealth}
            nome={'Connect Health'}
            text={t('Somos uma Multiplataforma que visa levar informações e consultas online para pacientes que sofrem de transtornos alimentares ou sofrem de algum problema psicológico, por isso trabalhamos ligados a psicologia e a nutrição... pois para comer bem deve-se estar saudável mentalmente também.')}
          /> */}
          <CardP
            img={logonutriacess}
            nome={'NutriAcess'}
            text={t("Fundada no primeiro semestre de 2023 por alunos do Instituto Proa, a NutriAcess é uma plataforma que visa a democratização a consultas nutricionais a preço social, comprometidos em oferecer um serviço acessível e de qualidade para todos os nossos pacientes.")}
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Parceria;
