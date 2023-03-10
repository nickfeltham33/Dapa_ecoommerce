import React, { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { BsBag } from 'react-icons/bs';
import toast from 'react-hot-toast';

import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';
import getStripe from  '../lib/getStripe';


const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove, setProdSize  } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    if(response.statusCode === 500) return;
    
    const data = await response.json();

    toast.loading('Redirecting...');

    stripe.redirectToCheckout({ sessionId: data.id });
  }

  return (
    <div className="cart__wrapper" ref={cartRef}>
      <div className="cart__container">
        <button
        type="button"
        className="cart__heading"
        onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className="heading">Your Cart</span><br/>
          <span className="cart__num__items">({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty__cart">
            <BsBag size={80}/>
            <h3 className='cart__empty__title'>Your bag is currently empty!</h3>
            <button type="button"
            className="cart__continue__btn"
            onClick={() => setShowCart(false)}
            >CONTINUE SHOPPING</button>
          </div>
        )}
        <div className="product__container">
          {cartItems.length >= 1 && cartItems.map((item, index) => (
            <div className="cart__product__wrap" key={item._id}>
             {console.log(item)}
              <img src={urlFor(item?.image[0])} className="cart__product__img" />
              <div className="cart__side__wrap">
                <div className="cart__product__name">{item.name}</div>
                <div className="cart__product__price">??{item.price}</div>
                <div className="quantity__btn__wrap">
                  <span className="minus" onClick={() => toggleCartItemQuanitity(item._id, 'dec') }><AiOutlineMinus /></span>
                  <span className="num" onClick="">{item.quantity}</span>
                  <span className="plus" onClick={() => toggleCartItemQuanitity(item._id, 'inc') }><AiOutlinePlus /></span>
                </div>
              <button
              type="button"
              className="remove__item"
              onClick={() => onRemove(item)}>
                <TiDeleteOutline />
              </button>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart__bottom">
            <div className="total__wrap">
              <h3 className="subtotal">Subtotal:</h3>
              <h3 className="subtotal">??{totalPrice.toFixed(2)}</h3>
            </div>
            <button className="checkout__btn" onClick={handleCheckout}>Pay With Stripe</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart