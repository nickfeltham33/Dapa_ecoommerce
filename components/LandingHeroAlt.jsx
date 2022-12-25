import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';



const LandingHero = ({ landingHero }) => {
  return (
    <div className="landing__wrap">
      <div className="landing__inner__wrap">
        <div className="landing__img__wrap">
          <img className="landing__bg__img" src={urlFor(landingHero.image)} alt="fashionable doggo in a flashy hoodie top"/>
        </div>
        <div className="marquee__wrap">
          <div className="marquee"> 
            <span className="scroll__text">DESIGNER</span>
            <span className="scroll__text">INSPIRED</span>
            <span className="scroll__text">FASHION</span>
            <span className="scroll__text">FOR</span>
            <span className="scroll__text">DAPA</span>
            <span className="scroll__text">DOGZ</span>
          </div>
          <div className="marquee marquee2"> 
            <span className="scroll__text">DESIGNER</span>
            <span className="scroll__text">INSPIRED</span>
            <span className="scroll__text">FASHION</span>
            <span className="scroll__text">FOR</span>
            <span className="scroll__text">DAPA</span>
            <span className="scroll__text">DOGZ</span>          
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingHero