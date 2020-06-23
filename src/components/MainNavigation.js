import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Logo from '../Assets/img/GreenBookAcademy.Logo.gif';
import EnglishFlag from '../Assets/img/usa.flag.png'
import SpainFlag from '../Assets/img/spainflag.png'
import PortugalFlag from '../Assets/img/portugalflag.png'

import Navlinks from './Navlinks';
import BackDrop from './Backdrop';
import SideDrawer from './SideDrawer';

import i18n from '../i18n';

import './MainNavigation.css';

const MainNavigation = () => {

    const changeLanguage = code => {
        i18n.changeLanguage(code);
    }

    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    
    const openDrawerHandler = () => {
        setDrawerIsOpen(true);
    }

    const closeDrawerHandler = () => {
        setDrawerIsOpen(false);
    }
    

    return (
        <React.Fragment>
            {drawerIsOpen && <BackDrop onClick={closeDrawerHandler} />}

            <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
                <nav className="main-navigation__drawer-nav">
                    <Navlinks closeDrawerHandler={closeDrawerHandler}/>
                </nav>
            </SideDrawer>

            <div className='main-header'>
                <div className="main-header__container">
                    <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
                        <span />
                        <span />
                        <span />
                    </button>
                    <div className="main-navigation__title">
                        <Link
                            activeClass="active"
                            to="coverSection"
                            spy={true}
                            smooth={true}
                            duration={700}
                            className="nav-link">
                            <img src={Logo} alt="Logo Rhinotech" />
                        </Link>
                    </div>
                    <nav className="main-navigation__header-nav">
                        <div className="main-navigation__header-links">
                            <Navlinks closeDrawerHandler={closeDrawerHandler}/>
                        </div>
                    </nav>
                    <div className="country-flags__container">
                        <div className="english" onClick={()=> changeLanguage('en')}>EN<span><img src={EnglishFlag} alt="English"/></span></div>
                        <div className="spanish" onClick={()=> changeLanguage('es')}>ES<span><img src={SpainFlag} alt="English"/></span></div>
                        <div className="portuguese" onClick={()=> changeLanguage('po')}>PR<span><img src={PortugalFlag} alt="English"/></span></div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default MainNavigation;
