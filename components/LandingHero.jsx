import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';
import { AiOutlineArrowDown } from 'react-icons/ai';



const LandingHero = ({ landingHero }) => {
  return (
    <div className="landing__wrap">
      <div className="left__wrap">
        <div className="nav__page__wrap">
          <Link href="/about">
            <p className="nav__link__text">about us</p>
          </Link>
          <Link href="/community">
            <p className="nav__link__text">community</p>
          </Link>
          <Link href="/stories">
            <p className="nav__link__text">stories</p>
          </Link>
        </div>
        <div className="landing__text__wrap">
          <h1 className="title__text__upper">DESIGNER INSPIRED<br/>
          <span className="title__secondary">FASHION FOR</span>
          <span className='title__text__lower'><br/>DAPA DOGZ</span>
          </h1>
          <Link href="/products">
            <button className="landing__btn">SHOP NOW</button>
          </Link>
        </div>
        <Link href="#products">
          <div className="landing__center__btn">
            <AiOutlineArrowDown />
          </div>
        </Link>
      </div>
      <div className="right__wrap">
        <img className='landing__img' src={urlFor(landingHero.image)}/>
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