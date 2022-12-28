import React from 'react';
import { urlFor } from '../lib/client';
import {Home} from '../pages/index';
import { FiTwitter } from 'react-icons/fi';
import { FiFacebook } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import footerimg1 from '../images/footer/footerimg1.webp';
 
const Footer = () => {
  return (
      <div className="footer__wrap">
        <div className="scroll__text footer__text">DESIGNER INSPIRED FASHION</div>
        <div className="footer__grid__wrap">
          
          <div className="footer__left__wrap">
            <img src="https://cdn.shopify.com/s/files/1/1638/5471/products/ScreenShot2022-11-14at13.47.36_6306c954-ee55-4845-927d-01d2745883dd_600x.png?v=1668407145" alt="" className="footer__left__img" />
          </div>
          
          <div className="footer__center__wrap">
            <form className="signup__form" action="/action_page.php">
              <h2 className="form__title">SIGN UP TO OUR NEWSLETTER</h2>
              <p className="form__subtitle">TO GET 10% DISCOUNT ONALL PRODUCTS</p>
              <div className="form__inner__wrap">
                
                <input type="text" className="form__input" placeholder="Email" name="email" require="" />
                <button className="signup__btn" type="submit">SEND</button>
              </div>

              </form> 
              <div className="social__wrap">
                <div className="social__title">FOLLOW US</div>
                  <div className="social__icon__wrap">
                    <div className="social__icon">
                      <FiFacebook />
                    </div>
                    <div className="social__icon center__icon">
                      <FiTwitter />
                    </div>
                    <div className="social__icon">
                      <FiInstagram />
                    </div> 
                  </div>
            </div>
          </div>

          <div className="footer__right__wrap">
            <img src="https://cdn.shopify.com/s/files/1/1638/5471/products/ScreenShot2022-11-14at13.46.39_02f5bd9e-4454-4d75-b994-04ff129f84ef_600x.png?v=1668407227" alt="" className="footer__right__img" />
          </div>
        </div>
      </div>
  )
}

export default Footer