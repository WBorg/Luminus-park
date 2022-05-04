import React from 'react';
import footerCss from 'components/Footer/footer.module.css';

function Footer() {
    return ( 

        <footer>
         <p>LUMINUS PARK S/A <br/>Rodovia dos Bandeiantes Km 567 <br/> Campinas-SP Brasil</p>
         <p>todos os direitos reservados &copy</p>
         <ul>

            <li><a href=""><i class="fa-brands fa-facebook fa-2x" ></i></a></li>
            <li><a href=""><i class="fa-brands fa-instagram fa-2x" ></i></a></li>
            <li><a href=""><i class="fa-brands fa-whatsapp fa-2x" ></i></a></li>
               
        </ul>
        </footer>
       

        

     );
}

export default Footer;