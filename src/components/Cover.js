import React from 'react';
import { useTranslation } from 'react-i18next';
import main1 from '../Assets/img/main.1.web.png';
import main2 from '../Assets/img/main.2.web.png';
import main3 from '../Assets/img/main3.web.png';
import { Link } from 'react-scroll';
import Carousel from 'react-bootstrap/Carousel';
import Brand from '../Assets/img/GreenBookAcademy.Logo.Bottom.gif';

import './Cover.css';

const Cover = () => {
    const { t } = useTranslation();
    return (
      <div className="carousel-section">
        <Carousel interval="2200" touch="true" >
          <Carousel.Item className="carousel-cover">
            <img
              className="d-block w-100"
              src={main1}
              alt="First slide"
            />
            <Carousel.Caption className="carousel-cover-caption">
              <h1>{t("Slider1-1")}<span>{t("Slider1-2")}</span></h1>
              <h2>{t("Slider1-3")}<span>{t("Slider1-4")}</span></h2>
              <h3>{t("brand")}</h3>
              <Link
                  activeClass="active"
                  to="contactSection"
                  spy={true}
                  smooth={true}
                  duration={700}
                  offset={-50}
                  className="learn-more"
                  >
                    <button type="submit" className="btn about-btn">{`${t('btnsld')}`}</button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={main2}
              alt="Third slide"
            />

            <Carousel.Caption className="carousel-cover-caption">
                <h1>{t("Slider2-1")}</h1>
                <h2>{t("Slider2-2")}<span>{t("Slider2-3")}</span><span>{t("Slider2-4")}</span></h2>
                <h3>{t("brand")}</h3>
                <Link
                    activeClass="active"
                    to="contactSection"
                    spy={true}
                    smooth={true}
                    duration={700}
                    offset={-50}
                    className="learn-more"
                    >
                      <button type="submit" className="btn about-btn">{`${t('btnsld')}`}</button>
                </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={main3}
              alt="Third slide"
            />

            <Carousel.Caption className="carousel-cover-caption">
                <img src={Brand} />
                <h2>{t("Slider3-1")}</h2>
                <Link
                    activeClass="active"
                    to="contactSection"
                    spy={true}
                    smooth={true}
                    duration={700}
                    offset={-50}
                    className="learn-more"
                    >
                      <button type="submit" className="btn about-btn">{`${t('btnsld')}`}</button>
                </Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
        
    )
}

export default Cover;
