import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';



const LandingHero = ({ landingHero }) => {
  return (
    <div className="landing__alt__wrap">
      <div className="landing__img__wrap">
        <img src={urlFor(landingHero.imageAlt)} alt="main hero image of a dog wearing a hoodie" className="landing__hero__img" />
      </div>
      <div className="marquee__wrap__starter underlay">
        <div className="marquee__starter"> 
          <span className="scroll__text">DESIGNER</span>
          <span className="scroll__text">INSPIRED</span>
          <span className="scroll__text">FASHION</span>
          <span className="scroll__text">FOR</span>
          <span className="scroll__text">DAPA</span>
          <span className="scroll__text">DOGZ</span>
        </div>
      </div>    
      <div className="marquee__wrap__starter overlay">
        <div className="marquee__starter"> 
          <span className="scroll__text">DESIGNER</span>
          <span className="scroll__text">INSPIRED</span>
          <span className="scroll__text">FASHION</span>
          <span className="scroll__text">FOR</span>
          <span className="scroll__text">DAPA</span>
          <span className="scroll__text">DOGZ</span>
        </div>
      </div>    
      <div className="marquee__wrap underlay">
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
      <div className="marquee__wrap overlay">
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
  )
}

export default LandingHero