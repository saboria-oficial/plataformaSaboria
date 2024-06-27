import React from 'react';
import '../../src/css/slider.css';
import ImgLogoTipoLifeBand from '../assets/img2/VARIANTE LOGOMARCA LIFEBAND.png';
import ImgLogoTipoNutri from '../assets/img2/logotiponutriacess.webp';
import ImgLogoTipoCali from '../assets/img2/CaliPet (1).png';
import senac from '../assets/img2/senac.png';
import proa from '../assets/img2/proa.webp';

const images = [
  ImgLogoTipoCali,
  ImgLogoTipoLifeBand,
  ImgLogoTipoNutri,
  senac,
  proa,
  ImgLogoTipoCali,
  ImgLogoTipoLifeBand,
  ImgLogoTipoNutri,
  senac,
  proa,
];

const links = [
  'https://linktr.ee/calipet',
  'https://life-band-3a73e.web.app/',
  'http://nutriacess.com.br',
  'https://www.sp.senac.br',
  'https://www.proa.org.br',
  'https://linktr.ee/calipet',
  'https://life-band-3a73e.web.app/',
  'http://nutriacess.com.br',
  'https://www.sp.senac.br',
  'https://www.proa.org.br',
];

const Slider = () => {
  return (
    <div className="carrosselParceria">
      <div className="slideParceria-track">
        {images.map((src, index) => (
          <div className="slideParceria" key={index}>
            <a href={links[index]} target="_blank" rel="noopener noreferrer">
              <img src={src} alt={`Logo ${index}`} />
            </a>
          </div>
        ))}
        {images.map((src, index) => (
          <div className="slideParceria" key={images.length + index}>
            <a href={links[index]} target="_blank" rel="noopener noreferrer">
              <img src={src} alt={`Logo ${index}`} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;