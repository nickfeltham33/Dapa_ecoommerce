import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';


const Banner = ({ banner: { image, buttonText, smallText, largeText } }) => {
  return (

        <div className="banner__wrap">
          <img className="banner__img" src={urlFor(image)} />
          <div className="banner__text__wrap">
            <p className="banner__text small__text">{smallText}</p>
            <p className="banner__text large__text">{largeText}</p>
            <button className="btn banner__btn">{buttonText}</button>
          </div>
        </div>
  )
}

export default Banner