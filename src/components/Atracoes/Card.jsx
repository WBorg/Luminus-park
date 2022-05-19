import React from 'react';
import card from './card.module.css';

function Card({atracao}) {





  return ( 
            <div className={card.container}>
                
                <img className={card.img} src={atracao.urlImg} alt="Imagem ilustrativa do brinquedo" />
                <div className={card.info}>
                  <h2>{atracao.nome}</h2>
                  <p>Altura mínima: {Number(atracao.minAlt).toFixed(2)}</p>
                  <p>Altura máxima: {Number(atracao.maxAlt).toFixed(2)}</p>
                </div>
            </div>

   );
}

export default Card;