import React from 'react';
import { useTranslation } from 'react-i18next';
import SplitterIcon from '../Assets/img/tic.verde.gif';


import './Splitter.css';

const Splitter = () => {
    const { t } = useTranslation();
    return (
        <div className="splitter__section">
            <div className="splitter__container">
                <div className="splitter__row">
                    <div className="splitter__col-1">
                        <div className="splitter__list">
                            <div  className="splitter__item"><img src={SplitterIcon} alt="Splitter Icon"/><p>{t('splitter-1')}</p></div>
                            <div  className="splitter__item"><img src={SplitterIcon} alt="Splitter Icon"/><p>{t('splitter-2')}</p></div>
                            <div  className="splitter__item"><img src={SplitterIcon} alt="Splitter Icon"/><p>{t('splitter-3')}</p></div>
                            <div  className="splitter__item"><img src={SplitterIcon} alt="Splitter Icon"/><p>{t('splitter-4')}</p></div>
                        </div>
                    </div>
                    <div className="splitter__col-2">
                        <div className="splitter__background-img"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Splitter;