import React from 'react';
import { useTranslation } from 'react-i18next';

import './Cover.css';

const Cover = () => {
    const { t } = useTranslation();
    return(
        <div className="cover-background" id="coverSection">
            <div className="cover-title__container">
                <h1>{t('main-title')}</h1>
            </div>
            <div className="cover-subtitle__container">
                <h3>{t('sub-title')} <span>{t('brand')}</span></h3>
            </div>
        </div>
    )
}

export default Cover;