import React, {useEffect, useState } from 'react';
import MainNavigation from './components/MainNavigation';
import Cover from './components/Cover';
import Approach from './components/Approach';
import About from './components/About';
import Banner from './components/Banner';
import Mission from  './components/Mission';
import Contact from  './components/Contact';
import Footer from './components/Footer';

import WorldImg from './Assets/img/mundo.png'

import Modal from 'react-bootstrap/Modal'
import i18n from './i18n';
import './App.css';


function App() {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const changeLanguageOnSelect = (lang) => {
    changeLanguage(lang);
    handleCloseModal();
  }

  const changeLanguage = code => {
    i18n.changeLanguage(code);
}

useEffect(()=> {
  handleShowModal();
}, [])

  return (
    <div className="App">
      <Modal  show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="modal-world__container">
            <img src={WorldImg} alt="World" />
          </div>
          <p><b>Want to change language?</b></p>
          <p>¿Quieres cambiar de idioma?</p>
          <p>Você quer mudar de idioma?</p>
          <div className="modal-languages__container">
            <button className="btn modal-language-btn" onClick={()=>changeLanguageOnSelect('es')}>Español</button>
            <button className="btn modal-language-btn" onClick={()=>changeLanguageOnSelect('po')}>Português</button>
            <p className="modal-languages-no-change" onClick={handleCloseModal} >No thanks</p>
          </div>
        </Modal.Body>
      </Modal>
      <MainNavigation />
      <Cover />
      <Approach />
      <Banner />
      <About />
      <Mission />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
