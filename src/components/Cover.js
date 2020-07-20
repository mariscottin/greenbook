import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import Carousel from 'react-bootstrap/Carousel';
import Brand from '../Assets/img/logo.main.asset.gif';

import './Cover.css';

const Cover = () => {
  const { t } = useTranslation();
  return (
    <div className="carousel-section">
      <Carousel interval="3800" touch="true" >
        <Carousel.Item className="carousel-cover-one">
          <Carousel.Caption className="carousel-cover-caption carousel-cover-1">
            <h1>{t("Slider1-1")}<span>{t("Slider1-2")}</span></h1>
            <h4>{t("Slider1-3")}<span>{t("Slider1-4")}</span></h4>
            <h4 className="carousel-brand">The <span>{t("brand")}</span></h4>
            <div className="carousel-btn__container">
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
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="carousel-cover-two">
          <Carousel.Caption className="carousel-cover-caption carousel-cover-2">
            <h1 className="empower-diversity">{t("Slider2-1-1")}<br />{t("Slider2-1-2")}</h1>
            <p>{t("Slider2-2")}<span> {t("Slider2-3")}</span> {t("Slider2-4")}</p>
            <div className="carousel-btn__container">
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
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="carousel-cover-three">
          <Carousel.Caption className="carousel-cover-caption carousel-cover-3">
            <img src={Brand} alt="Green Book Academy" />
            <h4>{t("Slider3-1")}<br />{t("Slider3-2")}</h4>
            <div className="carousel-btn__container">
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
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>

  )
}

export default Cover;
