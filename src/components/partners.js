import React from 'react';
import { useTranslation } from 'react-i18next';
import partner1 from '../Assets/img/logo1.png';
import partner2 from '../Assets/img/logo2.png';
import partner3 from '../Assets/img/logo3.png';
import partner4 from '../Assets/img/logo4.png';

import './partners.css';

const Partners = () => {
    const { t } = useTranslation();
    return (
        <div className="partners__section" id="partnersSection">
            <div className="partners__container">
                <h1>{t("partners-1")}</h1>
                <div className="partners__logos">
                    <img src={partner1} alt="Latinas Cannapreneurs" id="individual__partner-1" />
                    <img src={partner2} alt="Marijuana Policy Project" id="individual__partner-2" />
                    <img src={partner3} alt="MCBA" id="individual__partner-3" />
                    <img src={partner4} alt="The Cannabis Alliance" id="individual__partner-4" />
                </div>
            </div>
        </div>
    )
}

export default Partners;