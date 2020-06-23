import React from 'react';
import { useTranslation } from 'react-i18next';
import GreenGirlLogo from '../Assets/img/GreenGirlLogo.png';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

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
                        <h1>{t('approach-2')}</h1>
                        <p>{t('approach-3')}</p>
                        <Link
                            activeClass="active"
                            to="blabla"
                            spy={true}
                            smooth={true}
                            duration={700}
                            className="learn-more"
                        >
                        {t('approach-4')}
                        <FontAwesomeIcon icon={faArrowRight} />
                        </Link>
                        <div className="gray-underline"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Approach;