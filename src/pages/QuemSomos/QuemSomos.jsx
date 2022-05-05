import React from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import foto from 'assets/img/quemsomos.jpeg';
import quemSomosCss from './quemsomos.module.css';
import 'Styles/global.css'



function QuemSomos() {
    return ( 
        <>
            <Header/>
            <section className={quemSomosCss.main}>
            <div className={quemSomosCss.text}>
                <h1 className={quemSomosCss.title}>Quem Somos</h1>
                    <p className={quemSomosCss.conteudo}>Somos um dos 5 maiores parques temáticos da américa latina, localizado na cidade de Campinas no estado de SãoPaulo, fundado em 2015 por Samuel  Marciano, a Luminus Park  atualmente ocoupa a 3ª posição no ranking dos parques temáticos mais conhecidos e mais seguros da america latina .
                    Contamos com Diversas Atrações de todas a idades e uma equipe de segurança altamente qualificada e monitoramento das atrações para que nossos visitantes tenham a melhor  segurança dentro de nosso paque.
                    </p>
                <h3 className={quemSomosCss.title}>Missão</h3>
                    <p className={quemSomosCss.conteudo}>Trazer alegrida e diverção para todos, porporcionar aos nossos visitantes a experiente mais incriel e marcante de suas vidas , algo inscrivel e inesquecível.</p>
                <h3 className={quemSomosCss.title}>Visão</h3>
                    <p className={quemSomosCss.conteudo}>Nos tornamos o melhorar e mais e seguro park tematico do mundo e ser exemplo pela nossa diversidade de atrações, qualidade e serugança.</p>
                <h3 className={quemSomosCss.title}>Valores</h3>
                    <p className={quemSomosCss.conteudo}>Valorizamos primeiramente a segurança de nossa equipe e de nossos visitantes, a diversão deve sempre ser acompanhada com a segurança temos a prioridade maxima em relação a isso, investimos sempre naquilo que possa trazer maior segurança, conforto e divertimento para nossos visitantes.   </p>
            </div>
            <div className={quemSomosCss.boxImg}>
                <img src={foto} alt="" />
                
                
            </div>
            </section>
            <Footer/>
        </>
     );
}

export default QuemSomos;