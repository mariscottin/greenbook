import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Logo from '../Assets/img/GreenBookAcademy.Logo.gif';
import EnglishFlag from '../Assets/img/usa.flag.png'

import Navlinks from './Navlinks';
import BackDrop from './Backdrop';
import SideDrawer from './SideDrawer';

import './MainNavigation.css';

const MainNavigation = () => {
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

                </div>
            </div>
        </React.Fragment>
    );
};

export default MainNavigation;
