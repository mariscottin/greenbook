import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';
import MainNavigation from './components/MainNavigation';
import Cover from './components/Cover';
import Approach from './components/Approach';
import About from './components/About';
import Banner from './components/Banner';
import Mission from './components/Mission';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Noemi from './components/Noemi';
import Partners from './components/Partners';

import { Link } from 'react-scroll';

import WorldImg from './Assets/img/mundo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import Modal from 'react-bootstrap/Modal'
import { useTranslation } from 'react-i18next';
import i18n from './i18n';
import './App.css';


function App() {
  const { t } = useTranslation();

  const [showModal, setShowModal] = useState(false);
  const [show, doShow] = useState({
    bottomBar: false
  });
  const [bottomBarDisplayed, setBottomBarDisplayed] = useState(true);

  const ourRef = useRef(null);

  useLayoutEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;

      if (scrollPos > 1200) {
        doShow(state => ({ ...state, bottomBar: true }));
      } else if (scrollPos <= 1200) {
        doShow(state => ({ ...state, bottomBar: false }))
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const changeLanguageOnSelect = (lang) => {
    changeLanguage(lang);
    handleCloseModal();
  }

  const changeLanguage = code => {
    i18n.changeLanguage(code);
  }

  const closeBottomBar = () => {
    setBottomBarDisplayed(false);
  }

  useEffect(() => {
    handleShowModal();
  }, [])

  return (
    <div className="App">
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="modal-world__container">
            <img src={WorldImg} alt="World" />
          </div>
          <p><b>Want to change language?</b></p>
          <p>¿Quieres cambiar de idioma?</p>
          <p>Você quer mudar de idioma?</p>
          <div className="modal-languages__container">
            <button className="btn modal-language-btn" onClick={() => changeLanguageOnSelect('es')}>Español</button>
            <button className="btn modal-language-btn" onClick={() => changeLanguageOnSelect('po')}>Português</button>
            <p className="modal-languages-no-change" onClick={handleCloseModal} >No thanks</p>
          </div>
        </Modal.Body>
      </Modal>
      <MainNavigation />
      <Cover />
      {bottomBarDisplayed &&
        <div className={`bottom-bar ${show.bottomBar && "bottom-bar__transformed"}`} ref={ourRef}>
          <div className="bottom-bar__container">
            <div className="bottom-bar__buttons">
              <Link
                activeClass="active"
                to="contactSection"
                spy={true}
                smooth={true}
                duration={700}
                offset={-61}
                className="learn-more"
              >
                <div className="bottom-bar__btn bottom-bar__button-1">{t('bottom-banner-btn-1')}</div>
              </Link>
              <Link
                activeClass="active"
                to="contactSection"
                spy={true}
                smooth={true}
                duration={700}
                offset={-61}
                className="learn-more"
              >
                <div className="bottom-bar__btn bottom-bar__button-2">{t('bottom-banner-btn-2')}</div>
              </Link>
            </div>
            <div className="bottom-bar__close" onClick={closeBottomBar}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </div>
        </div>
      }
      <Approach />
      <Banner />
      <About />
      <Mission />
      <Noemi />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
