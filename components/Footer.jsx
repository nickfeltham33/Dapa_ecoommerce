import React from 'react';
import { urlFor } from '../lib/client';

const footer = ({footer: {imageLeft, imageRight, largeText, formTitle, formSubtitle, socialTitle, socialIcons }}) => {
  return (
    <div>
      <div className="footer__wrap">
        <div className="scroll__text footer__text">{largeText}</div>
        <div className="footer__grid__wrap">
          
          <div className="footer__left__wrap">
            <img src={urlFor(imageLeft)} alt="" className="footer__left__img" />
          </div>
          
          <div className="footer__center__wrap">
            <form className="signup__form" action="/action_page.php">
              <h2 className="form__title">{formTitle}</h2>
              <p className="form__subtitle">{formSubtitle}</p>
              <div className="form__inner__wrap">
                <input type="text" className="form__input" placeholder="Email" name="email" require="" />
                <button className="signup__btn" type="submit" >SEND</button>
              </div>

              </form> 
              <div className="social__wrap">
                <div className="social__title">{socialTitle}</div>
                  <div className="social__icon__wrap">
                    <div className="social__icon">F</div>
                    <div className="social__icon center__icon">T</div>
                    <div className="social__icon">I</div> 
                  </div>
            </div>
          </div>

          <div className="footer__right__wrap">
            <img src={urlFor(imageRight)} alt="" className="footer__right__img" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default footer