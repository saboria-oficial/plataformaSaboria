import React, { useRef, useEffect } from 'react';
import '../css/blog.css';

const CardBlog = ({ image, title, texto, isVisible, onShow, onHide }) => {
  const noticiaRef = useRef(null);

  useEffect(() => {
    if (noticiaRef.current) {
      noticiaRef.current.style.display = isVisible ? 'flex' : 'none';
      if (isVisible) {
        noticiaRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [isVisible]);

  const handleShow = () => {
    onShow();
  };

  const handleHide = () => {
    onHide();
  };

  return (
    <div>
      <div className="blog-item" onClick={handleShow}>
        <img src={image} alt={title} />
        <h2>{title}</h2>
      </div>

      <div id="alert-box" ref={noticiaRef}>
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p>{texto}</p>
        <button id="btn-alert-box" onClick={handleHide}>Voltar ao blog</button>
      </div>
    </div>
  );
};

export default CardBlog;
