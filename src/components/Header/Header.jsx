import React from 'react';
import headerCss from '../../components/Header/header.module.css';
import 'Styles/global.css'
import { Link } from 'react-router-dom';
import logo from 'assets/img/Logo.png';




function Header() {
    
    
    
    
    return ( 
        <header className={headerCss.Container}>
       
        <img className={headerCss.logoImg} src={logo} alt="Logo" />
            
            
            <nav className={headerCss.Nav}>
                <ul className={headerCss.redesSociais}>

                    <li><a href=""><i className="fa-brands fa-facebook fa-2x"></i></a></li>
                    <li><a href=""><i className="fa-brands fa-instagram fa-2x"></i></a></li>
                    <li><a href=""><i className="fa-brands fa-whatsapp fa-2x"></i></a></li>
                    
                </ul>
                <ul className={headerCss.menu}>
              
                        <li><Link className={headerCss.link} to="/">Home</Link></li>
                        <li><Link className={headerCss.link} to="/ingressos">Ingressos</Link></li>
                        <li><Link className={headerCss.link} to="/atracoes">Atrações</Link></li>
                        <li><Link className={headerCss.link} to="/contatos">Contato</Link></li>
                        <li><Link className={headerCss.link} to="/quemsomos">Quem somos</Link></li>
                </ul>
            </nav>
        </header>
     );
}

export default Header;