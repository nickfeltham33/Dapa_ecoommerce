import React from 'react'
import Link from 'next/link';
import { urlFor } from '../lib/client';

const Product = ({ product: { image, name, slug, price }}) => {
  return (
    <div className="product__outer__wrap">
      <Link href={`/product/${slug.current}`}>
        <div className="product__card">      
          <div className="img__wrap">
            <img className="product__img" src={urlFor(image && image[0])} />
          </div>
        </div>  
      </Link>
      <div className="detail__wrap">
          <div className="product__name">{name}</div>
          <div className="product__price">£{price}</div>
        </div>
    </div>
  )
}

export default Product
