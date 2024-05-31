import React from 'react';
import '../../src/css/ods.css';

const ODS = (props) => {
    return (
        <div className="ods">
            <div>
                <img src={props.imagemODS} alt="ODS" className='iconImage' />
            </div>
            <div className="descricao" style={{backgroundColor: props.backgroundColor}}>
                <p>{props.descricao}</p>
            </div>
        </div>
    );
}

export default ODS;
