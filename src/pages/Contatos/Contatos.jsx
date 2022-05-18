import React from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Contato from 'components/Contatos/Contato';
import 'Styles/global.css'



function Contatos() {
    return ( 
        <>
            <Header/>
            <Contato/>
            <Footer/>
        </>
     );
}

export default Contatos;