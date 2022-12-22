import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { urlFor } from '../lib/client';


const Navbar = () => {
  return (
    <div className="nav__wrap">
      <div className="nav__left__wrap">
        <div className="nav__logo__wrap">
          <Link href="/">
            <p className="logo__text">Dapa Dogz</p>
          </Link>
        </div>
      </div>
      <div className="nav__right__wrap">
          <button type="button" className="nav__cart__wrap">
            <div className="cart__icon">
              <AiOutlineShopping />
            </div>
            <span className="cart__item__qty">1</span>
          </button>
          <div className="nav__btn__wrap">
            <div className="nav__btn__bar"></div>
            <div className="nav__btn__bar"></div>
            <div className="nav__btn__bar"></div>
          </div>
        </div>
    </div>
  )
}

export default Navbar