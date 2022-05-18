import React from 'react';
import contatos from '../../components/Contatos/contatos.module.css';

function Contato() {

  
    return ( 
        <>
    <main className={contatos.wrapper}>
     <div className={contatos.dicas}>
        <h1 className={contatos.dica}>Dicas</h1>
        <p className={contatos.textdicas}> Favor prestar atenção nas devidas medidas de segurança pra cada atração, salvo elas sendo, a altura indicada, limitação de idade ou peso
        </p>

        <p className={contatos.textdicas}>Preste atenção também nos alimentos servidos no parque ,a maioria dos alimentos não tem restrições de glúten ,sal ou açúcar, estipulados pela mão do cozinheiro habilitado no local.</p>

        <p className={contatos.textdicas}>Lembre-se de trazer sempre uma troca de roupa com você, o calor é de matar, se você for uma pessoa que suar muito, não permitimos a entrada de pessoas molhadas em algumas de nossas atrações.</p>
        
        <p className={contatos.textdicas}>E la vem chuva!!! lembre-se de trazer capa de chuva pra que você não se molhe pra curtir o mais rapido possivel as atrações que só podem ir secos, se você não trouxe ? Não se preocupe, o parque em todas as suas lojas vendem capa de chuva pra você e sua familia por um precinho camarada.</p>


    </div>
    
    <div className={contatos.containner}>
       <h1>Formulário de Contato</h1>
       <form method='post'>
         <div className={contatos.linhaForm}>
           <label for="name">Nome</label>
           <input type="text" name="name" id="name" required />
         </div>
         
         <div className={contatos.linhaForm}>
           <label for="email">E-mail</label>
           <input type="email" name="email" id="email" required />
         </div>
        
         <div className={contatos.linhaForm}>
           <label for="tel">Telefone</label>
           <input type="telefone" name="tel" id="tel" required />
         </div>
             
         <div className={contatos.linhaForm}>
           <label for="message">Mensagem</label>
           <textarea name="message" id="message" required ></textarea>
         </div>
        
         {/* <input type="hidden" name="_captcha" value="false" /><input
           type="hidden"
           name=""
           value=""
         /> */}
         <button className={contatos.btnForm} type="submit" >Enviar</button>
       </form>
   </div>

</main>  

    </>
        
     );
}

export default Contato;