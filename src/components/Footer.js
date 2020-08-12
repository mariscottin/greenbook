import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import Brand from '../Assets/img/GreenBookAcademy.Logo.Bottom.gif';
import EnglishFlag from '../Assets/img/usa.flag.png';
import SpainFlag from '../Assets/img/spainflag.png';
import PortugalFlag from '../Assets/img/portugalflag.png';
import i18n from '../i18n';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagramSquare, faFacebookSquare, faYoutubeSquare, faLinkedin, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'

import './Footer.css';

const Footer = () => {
    const changeLanguage = code => {
        i18n.changeLanguage(code);
    }

    const { t } = useTranslation();

    return (
        <div className="foot">
            <div className="footer">
                <div className="footsquare">
                    <Link
                        activeClass="active"
                        to="coverSection"
                        spy={true}
                        smooth={true}
                        duration={700}
                        className="footer-link"
                        offset={-50}
                    >
                        <img src={Brand} alt="Logo" className="brand" />
                    </Link>
                </div>
                <div className="footsquare">
                    <ul>
                        <Link
                            activeClass="active"
                            to="approachSection"
                            spy={true}
                            smooth={true}
                            duration={700}
                            className="footer-link"
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
                            className="footer-link"
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
                            className="footer-link"
                            offset={-50}
                        >
                            {t('header-3')}
                        </Link>

                        <div className="social-icons__container">
                            <a href="https://instagram.com/greenbookacademy?igshid=z1srxblehm2y" target="__blank">
                                <FontAwesomeIcon icon={faInstagramSquare} />
                            </a>
                            <a href="https://m.facebook.com/greenbookacademy/?tsid=0.3278904984407037&source=result" target="__blank">
                                <FontAwesomeIcon icon={faFacebookSquare} />
                            </a>
                            <a href="https://www.linkedin.com/mwlite/company/greenbook-academy" target="__blank">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href="https://wa.me/14072275803" target="__blank">
                                <FontAwesomeIcon icon={faWhatsappSquare} />
                            </a>
                            <a href="https://m.youtube.com/channel/UCxsBxpimmfHHwg9WGxZ7bcA" target="__blank">
                                <FontAwesomeIcon icon={faYoutubeSquare} />
                            </a>
                        </div>


                        <li>
                            <div className="footer-country-flags__container">
                                <div className="eng" onClick={() => changeLanguage('en')}><span><img src={EnglishFlag} alt="English" /></span></div>
                                <div className="eng" onClick={() => changeLanguage('es')}><span><img src={SpainFlag} alt="Español" /></span></div>
                                <div className="eng" onClick={() => changeLanguage('po')}><span><img src={PortugalFlag} alt="Português" /></span></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bottom-footer">
                <div className="bottom-footer__container">
                    <p>The Green Book Academy &copy;</p>
                    <p>{t('foot-1')}<span><a href={`mailto:${t('foot-2')}`}>{t('foot-2')}</a></span></p>
                </div>
            </div>
        </div>
    )
}



export default Footer;