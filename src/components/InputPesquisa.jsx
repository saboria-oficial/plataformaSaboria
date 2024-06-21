import React, { useState } from 'react';
import '../css/header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const InputPesquisa = () => {


  return (
    <div>
      <form className="form-inline">
        <Link to="/Pesquisa" className="link-search">
          <input
            className="form-control"
            type="search"
            placeholder="Busque pratos"
            aria-label="Search"
          
          />
          <button type="button" id="btn-search">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </Link>
      </form>
    </div>
  );
}

export default InputPesquisa;
