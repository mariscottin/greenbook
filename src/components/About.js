import React from 'react';
import { useTranslation } from 'react-i18next';
import ComputerGuy from '../Assets/img/computer.guy.png';


import './About.css';

const About = () => {
    const { t } = useTranslation();
    return (
        <div className="about__section" id="aboutSection">
            <div className="about__container">
                <div className="about__row">
                    <div className="about__col-1">
                        <div className="about__imgs-container">
                            <img src={ComputerGuy} alt="Computer Guy" />
                            <div className="green-square"></div>
                        </div>
                    </div>
                    <div className="about__col-2">
                        <div className="about__col-2__container">
                            <h1>{t('about-1')}</h1>
                            <p className="our-mision">{t('about-2')}</p>
                            <p className="about__main-p">{t('about-3')}</p>
                            <p>{t('about-4')} <span className="about__empower">{t('empower')}</span></p>
                            <p>{t('about-5')} <span className="about__brand">{t('brand')}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;