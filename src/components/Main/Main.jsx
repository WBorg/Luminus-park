import React from 'react';
import mainCss from 'components/Main/main.module.css';

function Main() {
    return ( 
    
            <main>
                <div className={mainCss.banner}></div>
                <div className={mainCss.box}>
                    <section class="destaques"></section>
                    <section class="ingressos"></section>
                    <section class="dicas"></section>
                </div>
                </main> 
                
    
    );
}

export default Main;

