import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';

import './Navlinks.css';

const NavLinks = props => {
    const { t } = useTranslation();

    return (
        <ul className="nav-links">
            <li className="close-side-drawer">X</li>
            <li>
                <Link
                    activeClass="active"
                    to="servicesSection"
                    spy={true}
                    smooth={true}
                    duration={700}
                    className="nav-link"
                    onClick={props.closeDrawerHandler}
                >
                    {t('header-1')}
                    </Link>
            </li>
            <li>
                <Link
                    activeClass="active"
                    to="stackSection"
                    spy={true}
                    smooth={true}
                    duration={700}
                    className="nav-link"
                    onClick={props.closeDrawerHandler}
                >
                    {t('header-2')}
                    </Link>
            </li>
            <li>
                <Link
                    activeClass="active"
                    to="methodSection"
                    spy={true}
                    smooth={true}
                    duration={700}
                    className="nav-link"
                    onClick={props.closeDrawerHandler}
                >
                    {t('header-3')}
                    </Link>
            </li>

        </ul>
    )
}

export default NavLinks;