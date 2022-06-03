import React from 'react';
import Header from 'components/Header/Header';
import Ingresso from 'components/Ingressos/CompraIngressos';
import Footer from 'components/Footer/Footer';
import 'Styles/global.css'



function Ingressos() {
    
    return ( 
        <>
             <Header/>
            <Ingresso/>
            <Footer/> 
        </>
     );
}

export default Ingressos;