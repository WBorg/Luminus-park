import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import PagesHome from '../pages/Home/home';
  import PagesAtracoes from '../pages/Atracoes/Atracoes';
  import PagesContatos from '../pages/Contatos/Contatos';
  import PagesIngressos from '../pages/Ingressos/Ingressos';
  import PagesQuemSomos from '../pages/QuemSomos/QuemSomos';


  const Root = () =>{

    return(
        <Router>
            <Routes>
                  <Route path="/" element={<PagesHome />} />
                  <Route path="/atracoes" element={<PagesAtracoes />} />
                  <Route path="/contatos" element={<PagesContatos />} />
                  <Route path="/ingressos" element={<PagesIngressos />} />
                  <Route path="/quemsomos" element={<PagesQuemSomos />} />



            </Routes>
            
        </Router>

    );

  }

  export default Root;