import React from 'react';
import Header from 'components/Header/Header';
import 'Styles/global.css';
import Card from '../../components/Atracoes/Card';
import axios from 'axios';
import  { useState, useEffect } from 'react';
import Footer from 'components/Footer/Footer';
import api from 'services/Api';






function PagesAtracoes() {

    // const atracao = {
    //     "id": 1,
    //     "nome": "Kami Kaze",
    //     "minAlt": 1.55,
    //     "maxAlt": 2.10,
    //     "urlImg": "https://drive.google.com/file/d/19KyeCXhet6eKcX93rh2YvmQPXve5QDhU/view?usp=sharing"
    // }

    const [atracao, setAtracao] = useState([]);
    useEffect( () => {
    api.get('/atracoes')
      .then(
        (response) => {
            setAtracao(response.data);
            }
        
      );


    }, [] );
    

    return ( 
        <>
            <Header/>
            {atracao.map( (atracao) =>( <Card atracao={atracao} key={atracao.id}/>) )}
            <Footer/>
        </>
     );
}

export default PagesAtracoes;