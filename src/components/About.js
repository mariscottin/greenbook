import React from 'react';
import { useTranslation } from 'react-i18next';
import ComputerGuy from '../Assets/img/foto.aceite.png';
import { Link } from 'react-scroll';
import suitcase from '../Assets/img/gif.maletin.gif';
import cross from '../Assets/img/gif.medicina.gif';
import list from '../Assets/img/iconopatient.png';


import './About.css';

const About = () => {
    const { t } = useTranslation();
    return (
        <div className="about__section" id="aboutSection">
            <div className="about__container">
                <div className="about__row">
                    <div className="about__col-1">
                        {/*<div className="about-header">
                            <div className="green-linex"></div>
                            <h4>{t('about-00')}</h4>
                        </div>*/}
                        <div className="about__imgs-container">
                            <img src={ComputerGuy} alt="Our School Model" />
                        </div>
                    </div>
                    <div className="about__col-2">
                        <div className="about__col-2__container">
                            <h1>{t('about-0')}</h1>
                            <p className="our-mision">{t('about-2')}</p>
                            <div className="about-items">
                                <img className="img2" src={suitcase} alt="suitcase" />
                                <p className="about__main-p">{t('about-3')}</p>
                            </div>
                            <div className="about-items">
                                <img className="img1" src={cross} alt="cross" />
                                <p className="about__main-p">{t('about-4')}</p>
                            </div>
                            <div className="about-items">
                                <img className="img3" src={list} alt="list" />
                                <p className="about__main-p">{t('about-6')}</p>
                            </div>
                            <div className="about-btn__container">
                                <Link
                                activeClass="active"
                                to="contactSection"
                                spy={true}
                                smooth={true}
                                duration={700}
                                offset={-50}
                                className="learn-more"
                                >
                                    <button type="submit" className="btn about-btn">{`${t('approach-4')}`}</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;