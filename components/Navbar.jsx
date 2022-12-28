import React from 'react';
import Link from 'next/link';
import { BsBag } from 'react-icons/bs';
import { urlFor } from '../lib/client';

import { Cart } from './';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

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
        <button type="button" className="nav__cart__wrap" onClick={() => setShowCart(true)}>
          <div className="cart__icon">
            <BsBag />
          </div>
          <span className="cart__item__qty">{totalQuantities}</span>
        </button>
      </div>
      {showCart && <Cart />}
    </div>
  )
}

export default Navbar