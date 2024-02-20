import React from 'react';
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
import './contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(import.meta.env.VITE_APP_SERVICE_ID, 
      import.meta.env.VITE_APP_TEMPLATE_ID, form.current, {
      publicKey: import.meta.env.VITE_APP_PUBLIC_ID,
    })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section className='contact section' >
      <h2 className='section__title'>Get In<span>Touch</span></h2>

      <div className='contact__container container grid'>
        <div className='contact__data'>
          <h3 className='contact__title'>Don't be Shy !</h3>
          <p className='contact__description'>
            Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>

          <div className='contact__info'>
            <div className='info__item'>
              <FaEnvelopeOpen className='info__icon' />
              <div>
                <span className='info__title'>Mail me</span>
                <h4 className='info__desc'>rohitbhagat9302@gmail.com</h4>
              </div>
            </div>
            <div className='info__item'>
              <FaPhoneSquareAlt className='info__icon' />
              <div>
                <span className='info__title'>Call me</span>
                <h4 className='info__desc'>+91 8082860740</h4>
              </div>
            </div>
          </div>

          <div  className='contact__socials'>
            <a href='https://www.facebook.com/profile.php?id=100014772544072' className='contact__social-link' target='_blank'> <FaFacebookF /></a>
            <a href='https://github.com/rohitbhagat9302' className='contact__social-link' target='_blank'> <FaGithub /></a>
            {/* <a href='' className='contact__social-link'> <FaTwitter /></a>
            <a href='' className='contact__social-link'> <FaInstagram /></a> */}
            <a href='https://www.linkedin.com/in/rohit-bhagat-910371187/' className='contact__social-link' target='_blank'> <FaLinkedin /></a>
          </div>
        </div>

        <form className='contact--form' ref={form} onSubmit={sendEmail}>
          <div className='form__input-group'>
            <div className='form__input-div'>
              <input type='text' placeholder='Your Name' className='form__control'name='user_name' />
            </div>
            <div className='form__input-div'>
              <input type='email' placeholder='Your Email' className='form__control' name='user_email'/>
            </div>
            <div className='form__input-div'>
              <input type='text' placeholder='Your Subject' className='form__control' />
            </div>
          </div>

          <div className='form__input-div'>
            <textarea className='form__control textarea' placeholder='Your Message' name='message'></textarea>
          </div>

          <button className='button' type='submit' >
            Send Message
            <span className='button__icon contact__button-icon'>
              <FiSend />
            </span>
          </button>
        </form>

      </div>


    </section>
  );
}

export default Contact;
