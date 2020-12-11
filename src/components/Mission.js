import React from 'react';
import { useTranslation } from 'react-i18next';
import Notebookgirl from '../Assets/img/asset.photo.3.png';
import slogan from '../Assets/img/logoslogan.png';

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
                        <img src={slogan} alt="slogan" />
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