import React from 'react';
import { useTranslation } from 'react-i18next';


import './Banner.css';

const Banner = () => {
    const { t } = useTranslation();
    return (
        <div className="banner__section">
            <div className="banner__container">
                <h1>{t('banner')}</h1>
            </div>
        </div>
    )
}

export default Banner;