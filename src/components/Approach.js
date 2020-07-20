import React from 'react';
import { useTranslation } from 'react-i18next';
import GreenGirlLogo from '../Assets/img/asset.photo.1.png';

import './Approach.css';

const Approach = () => {
    const { t } = useTranslation();
    return (
        <div className="approach__section" id="approachSection">
            <div className="approach__container">
                <div className="approach__row">
                    <div className="approach__col-1">
                        <div className="approach__img-container">
                            <img src={GreenGirlLogo} alt="Green Girl Logo" />
                        </div>
                    </div>
                    <div className="approach__col-2">
                        <div className="green-line"></div>
                        <h4>{t('approach-1')}</h4>
                        <h1>{t('approach-2')}<span className="about__approach"> {t('approach-3')}</span></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Approach;