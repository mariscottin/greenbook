import React from 'react';
import { useTranslation } from 'react-i18next';
import GreenGirlLogo from '../Assets/img/asset.photo.1.png';

import './Approach.css';

const Approach = () => {
    const { t } = useTranslation();
    return (
        <div className="approach__section" id="approachSection">
            <div className="approach__container">
                <div className="approach__col-2">
                            <h4>{t('approach-1')}</h4>
                            <h1>{t('approach-2')}</h1>
                            <h2>{t('approach-3')}</h2>
                </div>
            </div>
        </div>
    )
}

export default Approach;