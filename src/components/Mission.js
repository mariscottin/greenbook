import React from 'react';
import { useTranslation } from 'react-i18next';
import Notebookgirl from '../Assets/img/asset.photo.3.png';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import './Mission.css';

const Mission = () => {
    const { t } = useTranslation();
    return (
        <div className="Mission__section" id="MissionSection">
            <div className="Mission__container">
                <div className="Mission__row">
                    <div className="Mission__col-1">
                        <h1>{t('mission-1')}</h1>
                        <h2>{t('mission-2')}</h2>
                        <h3>{t('empower')}</h3>
                        <h4>{t('brand')}</h4>
                    </div>
                    <div className="Mission__col-2">
                    <div className="Mission__img-container">
                            <img src={Notebookgirl} alt="Green Girl Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission;