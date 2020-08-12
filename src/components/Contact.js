import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactLoading from 'react-loading';
import emailjs from 'emailjs-com';
import phone from '../Assets/img/phone.png';

import './Contact.css';

const Contact = (e) => {
    const [messageSent, setMessageSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { t } = useTranslation();
    const submitHandler = (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log(e.target);
        emailjs.sendForm('gmail', 'template_MQB5QStV', e.target, 'user_81bamn3UXujaBnDZYYrni')
            .then((result) => {
                setMessageSent(true)
            }, (error) => {
                console.log(error.text);
                window.alert('Something went wrong sending the message. Please try again!')
            })
            .then(() => {
                setMessageSent(true);
                setIsLoading(false);
            });
    }

    return (
        <div className="contact__section" id="contactSection">
            <div className="contact__container">
                {!messageSent &&
                <React.Fragment>
                    <div className="contact-title__container">
                        <h1>{t('contact-1')}</h1>
                        <h3>{t('contact-2')}</h3>
                        <div className="phone-email__container">
                            <h3><img src={phone} alt="phone"/>  +1 (407) 227 5803</h3>
                            {/* ACA VA LA FOTO DEL ENVELOPE EN VEZ DEL PHONE. HAY QUE HACER EL IMPORT*/}
                            <h3><img src={phone} alt="envelope"/>  info@greenbookacademy.com</h3>
                        </div>
                    </div>
                    <div className="contact-form__container">
                        <form onSubmit={submitHandler} className="form__contact-form">
                            <input type="hidden" name="email_number" value={Math.random() * 100000 | 0} />
                            <div className="form__container">
                                <div className="contact-inline-form">
                                    <div className="form-group responsive-input">
                                        <input type="text" name="user_name" className="form-control inline" placeholder={`${t('contact-3')}`} required/>
                                    </div>
                                    <div className="form-group responsive-input">
                                        <input type="email" className="form-control inline" id="emailAddress" name="user_email" placeholder={`${t('contact-4')}`} required/>
                                    </div>
                                </div>
                                <div className="contact-inline-form">
                                    <div className="form-group responsive-input">
                                        <input type="number" name="user_phone" className="form-control inline" placeholder={`${t('contact-5')}`} required/>
                                    </div>
                                    <div className="form-group responsive-input">
                                        <select className="form-control inline" required name="user_career">
                                        <option value="" disabled selected hidden>{`${t('contact-6')}`}</option>
                                        <option value={`${t('career-option-1')}`}>{`${t('career-option-1')}`}</option>
                                        <option value={`${t('career-option-2')}`}>{`${t('career-option-2')}`}</option>
                                        <option value={`${t('career-option-3')}`}>{`${t('career-option-3')}`}</option>
                                        <option value={`${t('career-option-4')}`}>{`${t('career-option-4')}`}</option>
                                        <option value={`${t('career-option-5')}`}>{`${t('career-option-5')}`}</option>
                                        <option value={`${t('career-option-6')}`}>{`${t('career-option-6')}`}</option>
                                        <option value={`${t('career-option-7')}`}>{`${t('career-option-7')}`}</option>
                                        <option value={`${t('career-option-8')}`}>{`${t('career-option-8')}`}</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="inquiry-type__container">
                                    <h6>{t('contact-inquiry-0')}</h6>
                                    <div className="form-check__container">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="inquiryType" id="Faculty" value="Faculty" />
                                            <label htmlFor="Faculty">{t('contact-inquiry-1')}</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="inquiryType" id="Student" value="Student" />
                                            <label htmlFor="Student">{t('contact-inquiry-2')}</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="inquiryType" id="InvestorsRelations" value="Investors Relations" />
                                            <label htmlFor="InvestorsRelations">{t('contact-inquiry-3')}</label>
                                        </div>

                                    </div>
                                </div>
                                <div className="textarea-inline">
                                    <div className="form-group">
                                        <textarea className="form-control textarea" id="emailInput" name="message" placeholder={`${t('contact-7')}`} required/>
                                    </div>
                                    {isLoading &&
                                        <div className="contact-loading-spinner__container">
                                            <ReactLoading type="spinningBubbles" color="#268869" height={60} width={60} />
                                        </div>
                                    }
                                    {!isLoading &&
                                        <button type="submit" className="btn send-btn">{`${t('contact-8')}`}</button>
                                    }
                                </div>
                            </div>
                        </form>
                    </div>
                </React.Fragment>
                }
                {(messageSent && !isLoading) &&
                        <div className="success-message-sent">
                            <h2>{t('sent-1')}</h2>
                            <h5>{t('sent-2')}</h5>
                            <p>{t('sent-3')}</p>
                        </div>
                }
            </div>
        </div>
    )
}

export default Contact;