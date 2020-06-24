import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactLoading from 'react-loading';
import emailjs from 'emailjs-com';

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
                <div className="contact-title__container">
                    <h1>{t('contact-1')}</h1>
                    <h3>{t('contact-2')}</h3>
                </div>
                {!messageSent &&
                <form onSubmit={submitHandler} style={{width: '920px'}}>
                    <input type="hidden" name="email_number" value={Math.random() * 100000 | 0} />
                    <div className="form__container">
                        <div className="contact-inline-form">
                            <div className="form-group">
                                <input type="text" name="user_name" className="form-control inline" placeholder={`${t('contact-3')}`} required/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control inline" id="emailAddress" name="user_email" placeholder={`${t('contact-4')}`} required/>
                            </div>
                        </div>
                        <div className="textarea-inline">
                            <div className="form-group">
                                <textarea className="form-control textarea" id="emailInput" name="message" placeholder={`${t('contact-5')}`} required/>
                            </div>
                            {isLoading &&
                                <div className="contact-loading-spinner__container">
                                    <ReactLoading type="spinningBubbles" color="#268869" height={60} width={60} />
                                </div>
                            }
                            {!isLoading &&
                                <button type="submit" className="btn">{`${t('contact-6')}`}</button>
                            }
                        </div>
                    </div>
                </form>
                }
                {(messageSent && !isLoading) &&
                        <div className="success-message-sent">
                            <h2>Message Sent Successfully!</h2>
                            <h3>Thanks! We will reply as soon as possible!</h3>
                            <div className="send-another-message__container">
                                <p onClick={()=> setMessageSent(false)}>Send another message</p>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

export default Contact;