import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-scroll';
import Logo from '../Assets/img/logomenu.gif';
import Logo2 from '../Assets/img/GreenBookAcademy.Logo.png';
import EnglishFlag from '../Assets/img/usa.flag.png'
import SpainFlag from '../Assets/img/spainflag.png'
import PortugalFlag from '../Assets/img/portugalflag.png'
import { useTranslation } from 'react-i18next';

import i18n from '../i18n';

import './MainNavigation.css';


const MainNavigation = () => {
    const [expanded, setExpanded] = useState(false);
    
    const toggleNavbar = () => {
        expanded ? setExpanded(false) : setExpanded(true);
    }

    const changeLanguage = code => {
        i18n.changeLanguage(code);
        setExpanded(false);
    }

    const { t } = useTranslation();
    return (
        <Navbar collapseOnSelect expand="lg" bg={`${expanded ? 'dark' : 'light'}`} variant={`${expanded ? 'dark' : 'light'}`} fixed="top" expanded={expanded}>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={toggleNavbar}/>
            <Navbar.Brand>
                <Link
                    activeClass="active"
                    to="coverSection"
                    spy={true}
                    smooth={true}
                    duration={700}
                    className="navbar-brand-img"
                    onClick={() => setExpanded(false)}
                >
                    <img src={`${expanded ? Logo : Logo2}`} alt="GreenBook Academy Logo" />
                </Link>
            </Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <Link
                        activeClass="active"
                        to="approachSection"
                        spy={true}
                        smooth={true}
                        duration={700}
                        className="nav-link"
                        onClick={() => setExpanded(false)}
                        offset={-50}
                    >
                        {t('header-1')}
                    </Link>
                    <Link
                        activeClass="active"
                        to="aboutSection"
                        spy={true}
                        smooth={true}
                        duration={700}
                        className="nav-link"
                        onClick={() => setExpanded(false)}
                        offset={-50}
                    >
                        {t('header-2')}
                    </Link>
                    <Link
                        activeClass="active"
                        to="contactSection"
                        spy={true}
                        smooth={true}
                        duration={700}
                        className="nav-link last-nav-link"
                        onClick={() => setExpanded(false)}
                        offset={-50}
                    >
                        {t('header-3')}
                    </Link>
                    <div className="mobile-language-options">
                        {i18n.language !== 'en' &&
                        <div className="mobile-language__container" onClick={()=>{changeLanguage('en')}}>
                            <span>EN <img src={EnglishFlag} alt="English"/></span>
                        </div>
                        }
                        {i18n.language !== 'es' &&
                        <div className="mobile-language__container" onClick={()=>{changeLanguage('es')}}>
                            <span>ES <img src={SpainFlag} alt="Español"/></span>
                        </div>
                        }
                        {i18n.language !== 'po' &&
                        <div className="mobile-language__container" onClick={()=>{changeLanguage('po')}}>
                            <span>PR <img src={PortugalFlag} alt="Português"/></span>
                        </div>
                        }
                    </div>
                    <div className="language-options">
                        <div className="language__container" onClick={()=>{changeLanguage('en')}}>
                            <span>{i18n.language === 'en' ? <b>EN</b> : 'EN'}
                                 <img src={EnglishFlag} alt="English"/>
                            </span>
                        </div>
                        <div className="language__container" onClick={()=>{changeLanguage('es')}}>
                            <span>{i18n.language === 'es' ? <b>ES</b> : 'ES'}
                                <img src={SpainFlag} alt="Español"/>
                            </span>
                        </div>
                        <div className="language__container" onClick={()=>{changeLanguage('po')}}>
                            <span>{i18n.language === 'po' ? <b>PR</b> : 'PR'} 
                                <img src={PortugalFlag} alt="Português"/>
                            </span>
                        </div>
                    </div>
                </Nav>
            </Navbar.Collapse>
            <div className="current-language__container">
                {i18n.language === 'en' &&
                    <span style={{color: `${expanded ? 'white' : '#2d2d2d'}`}}>EN <img src={EnglishFlag} alt="English"/></span>
                }
                {i18n.language === 'es' &&
                    <span style={{color: `${expanded ? 'white' : '#2d2d2d'}`}}>ES <img src={SpainFlag} alt="Español"/></span>
                }
                {i18n.language === 'po' &&
                    <span style={{color: `${expanded ? 'white' : '#2d2d2d'}`}}>PR <img src={PortugalFlag} alt="Português"/></span>
                }
            </div>
        </Navbar>
    );
};

export default MainNavigation;
