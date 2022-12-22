import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';



const LandingHero = ({ landingHero }) => {
  return (
    <div className="landing__wrap">
      <div className="landing__inner__wrap">
        <div className="landing__img__wrap">
          <img className="landing__bg__img" src={urlFor(landingHero.image)} alt="fashionable doggo in a flashy hoodie top"/>
          <Link href="#products">
            <button className="btn landing__btn">{landingHero.buttonText}
            </button>
          </Link>
        </div>
        <h1 className="scroll__text ">DESIGNER INSPIRED</h1>
        <p className="scroll__text overlay">DESIGNER INSPIRED</p>
      </div>
    </div>
  )
}

export default LandingHero