import React from "react";
import 'Styles/global.css'
import compracss from '../Ingressos/ingressos.module.css';
import {useState}from 'react';
import {ShoppingCart, PlusCircle, MinusCircle} from 'phosphor-react';


function CompraIngressos(){
    let valoringresso= 120
    let ingressomeia= 60
   
   

//*********  INGRESSOS DO VALOR INTEIRO   **********

    const [numeroingressos1, setValor] =useState(0);
    const [valortotal, totalValor]=useState(0)

    function maisingressointeira(){
        setValor(numeroingressos1+1);
        totalValor(valoringresso*(numeroingressos1+1));

    }
    function menosingressointteira(){
        setValor(numeroingressos1-1);
        totalValor(valoringresso*(numeroingressos1-1));
    }


//*********  INGRESSOS DA METADE DO VALOR   **********
    const [numeroingressos2, setValor2] =useState(0);
    const [valortotal2, totalValor2]=useState(0)

    function maisingressomeia(){
        setValor2(numeroingressos2+1);
        totalValor2(ingressomeia*(numeroingressos2+1));
    }
    function menosingressomeia(){
        setValor2(numeroingressos2-1);
        totalValor2(ingressomeia*(numeroingressos2-1));
    }
    const totaltotal=valortotal+valortotal2;

    
    return(
        <div>
            <main className={compracss.maincss}>

                <h1 className={compracss.title}>Compra de Ingressos</h1>
                <section className={compracss.comprasingressos}>

                    <section className={compracss.boxingressos}>                       
                        <div className={compracss.compravalorinteiro}>
                            <h2 className={compracss.titleingresos}>Ingresso </h2>
                            <span className={compracss.valoresingressos}>R$ {valoringresso},00</span>
                        </div>
                        
                        <div className={compracss.containeringressos}>
                            <h3>Número de ingressos</h3>
                            <div className={compracss.divbtn}>
                                <button onClick={menosingressointteira}><MinusCircle size={50} color="#f90101" weight="bold" /></button>
                                <label >{numeroingressos1}</label>
                                <button onClick={maisingressointeira}><PlusCircle size={50} color="#12af12" weight="bold" /></button>
                            </div>
                            <h3>Valor Total</h3>
                            <div className={compracss.valortotalingreso} >R$ {valortotal},00</div>
                        </div> 

                    </section>

                    <section className={compracss.boxingressos}>

                        <div className={compracss.compravalorinteiro}>
                            <h2 className={compracss.titleingresos} > Meia Entrada</h2>
                            <span  className={compracss.valoresingressos} >R$ {ingressomeia},00</span>
                        </div>

                        <div className={compracss.containeringressos} >
                            <h3>Número de ingressos</h3>
                            <div className={compracss.divbtn} >
                                <button onClick={menosingressomeia}><MinusCircle size={50} color="#f90101" weight="bold" /></button>
                                <label >{numeroingressos2}</label>
                                <button onClick={maisingressomeia}><PlusCircle size={50} color="#12af12" weight="bold" /></button>
                            </div>
                            <h3>Valor Total</h3>
                            <div className={compracss.valortotalingreso}>R$ {valortotal2},00</div>
                        </div>

                    </section>
                </section>
                
                <div className={compracss.valortotal}>
                    <h2>Valor Total da Compra </h2>
                    <br />
                    <div className={compracss.valorfinalingreso} >R$ {totaltotal},00</div>
                </div>

                <div className={compracss.carrinhobtn}>
                    <button><ShoppingCart size={60} color="#ffff" /></button>
                </div>

            </main>

        </div>

    );

}

export default CompraIngressos;