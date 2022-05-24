import React from "react";
import 'Styles/global.css'
import compracss from '../../components/Ingressos/ingressos.module.css';
import {useState}from 'react';


function CompraIngressos(){
    let valoringresso= 120
    let ingressomeia= 60
   

//*********  INGRESSOS DO VALOR INTEIRO   **********

    const [numeroingressos1, setValor] =useState(1);
    const [valortotal, totalValor]=useState(120)

    function maisingressointeira(){
        setValor(numeroingressos1+1);
        totalValor(valoringresso*(numeroingressos1+1));

    }
    function menosingressointteira(){
        setValor(numeroingressos1-1);
        totalValor(valoringresso*(numeroingressos1-1));
    }


//*********  INGRESSOS DA METADE DO VALOR   **********
    const [numeroingressos2, setValor2] =useState(1);
    const [valortotal2, totalValor2]=useState(60)

    function maisingressomeia(){
        setValor2(numeroingressos2+1);
        totalValor2(ingressomeia*(numeroingressos2+1));
    }
    function menosingressomeia(){
        setValor2(numeroingressos2-1);
        totalValor2(ingressomeia*(numeroingressos2-1));
    }


    
    return(
        <div>
            <main className={compracss.maincss}>

                <h1 className={compracss.title}>Compra de Ingressos</h1>
                <section className={compracss.comprasingressos}>
                    <section >
                        
                        <h2> Valor do Ingresso Inteiro </h2>
                        <span>R$ {valoringresso},00</span>
                        <br /> 

                        <h3>numero de ingressos</h3>
                        <button onClick={menosingressointteira}>-</button>
                        {numeroingressos1} 
                        <button onClick={maisingressointeira}>+</button>
                        <h3>Valor Total</h3>
                        R$ {valortotal}
                        
                    </section>

                    <section>
                        <h2> Valor da Meia Entrada</h2>
                        <span>R$ {ingressomeia},00</span>
                        <br />
                        <h3>numero de ingressos</h3>
                        <button onClick={menosingressomeia}>-</button>
                        {numeroingressos2} 
                        <button onClick={maisingressomeia}>+</button>
                        <h3>Valor Total</h3>
                        R$ {valortotal2}
                    </section>
                </section>
                <h1 className={compracss.title}>Total da Compra </h1>
                <h2></h2>

            </main>

        </div>

    );

}

export default CompraIngressos;