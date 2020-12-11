import React from 'react';
import { useTranslation } from 'react-i18next';
import noemiimg from '../Assets/img/MIMI-1.png';


import './noemi.css';

const Noemi = () => {
    const { t } = useTranslation();
    return (
        <div className="about__section" id="aboutSection">
            <div className="about__container">
                <div className="about__row">
                    <div className="about__col-1">
                        <div className="about__imgs-container">
                            <img src={noemiimg} alt="noemi perez" />
                        </div>
                    </div>
                    <div className="about__col-2">
                        <div className="about__col-2__container">
                            <h1>{t('noemi-1')}</h1>
                            <p className="our-mision" id="parrafo_mission">{t('noemi-2')}</p>
                            <div className="about-btn__container" id="contenedor_boton_noemi" >
                            <a href="https://calendly.com/noemi-greenbook/15min-1" target="_blank" rel="noopener noreferrer" ><button type="submit" className="btn about-btn" id="boton_noemi" >{`${t('noemi-3')}`}</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Noemi;