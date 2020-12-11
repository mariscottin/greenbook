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
        <div  className="partners_container">
            <h1>{t("partners-1")}</h1>
            <div id="partners_display_mobile" className="partners_line">
                <div id="individual_partner_1">
                    <img src={partner1} alt="" />
                </div>
                <div id="individual_partner_2">
                    <img src={partner2} alt="" />
                </div>
                <div id="individual_partner_3">
                    <img src={partner3} alt="" />
                </div>
                <div id="individual_partner_4">
                    <img src={partner4} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Partners;