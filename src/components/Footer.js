import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';
import Brand from '../Assets/img/GreenBookAcademy.Logo.Bottom.gif';
import EnglishFlag from '../Assets/img/usa.flag.png';
import SpainFlag from '../Assets/img/spainflag.png';
import PortugalFlag from '../Assets/img/portugalflag.png';
import i18n from '../i18n';


        const Footer = () => {
            const changeLanguage = code => {
                i18n.changeLanguage(code);
            }

            const { t } = useTranslation();
            
            return(
                <div className="foot">   
                    <div className="footer">             
                        <div className="footsquare">
                            <img src={Brand} alt="Logo" className="brand"/>
                        </div>
                        <div className="footsquare">    
                            <ul>
                                <li>{t("header-1").toUpperCase()}</li>
                                <li>{t("header-2").toUpperCase()}</li>
                                <li>{t("header-3").toUpperCase()}</li>
                                <li>
                                    <div className="country-flags__container">    
                                        <div className="eng" onClick={()=> changeLanguage('en')}><span><img src={EnglishFlag} alt="English"/></span></div>
                                        <div className="eng" onClick={()=> changeLanguage('es')}><span><img src={SpainFlag} alt="English"/></span></div>
                                        <div className="eng" onClick={()=> changeLanguage('po')}><span><img src={PortugalFlag} alt="English"/></span></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="right">
                        <p>The Green Book Academy &copy;</p>
                    </div>
                </div> 
            )
        }



export default Footer;