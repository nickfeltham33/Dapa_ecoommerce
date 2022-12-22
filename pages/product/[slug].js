import React from 'react';
import { client, urlFor } from '../../lib/client';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { Product } from '../../components';

const ProductDetails = ({ product, products}) => {
  const { image, name, details, sizes, price } = product;
  return (
    <div className='product__wrap'>
      <div className='product__grid'>
        <div className='product__title__wrap'>
          <div className='product__title__lg'>{name}</div>
          <div className='product__title__lg overlay'>{name}</div>
        </div>
        <div className='product__left__wrap'>
          <div className='img__container'>
            <img className='product__img__main' src={urlFor(image && image[0])} />
          </div>
          <div className='product__lower__wrap'>
            <div className='thumbnail__wrap'>

            </div>
          </div>
        </div>
        <div className='product__right__wrap'>
          <div className='product__text__wrap'>
            <div className='product__description__wrap'>
              <h3 className='product__description__title'>DETAILS:</h3>
              <p className='product__description'>{details}</p>
            </div>
            <p className='product__price'>£{price}</p>
            <div className='product__quantity__wrap'>
              <p className='product__quantity'>Quantity</p>
              <span className='minus'><AiOutlineMinus /></span>
              <span className='num'>0</span>
              <span className='plus'><AiOutlinePlus /></span>
            </div>
            <div className='sizes__wrap'>
              {sizes?.slice(0,sizes.length -1).map(
                  (size) => <button className='product__sizes'>
                  {size}
              </button>)}
            </div>
            <div className='button__wrap'>
              <button className='cart__btn add__to__cart'>ADD TO CART</button>
              <button className='cart__btn buy__now'>BUY NOW</button>
            </div>
          </div>
        </div>
      </div>
      <div className='products__width__90'>
        <div className='products__container'>     
          <div className="products__wrap">
            <div className="title__wrap">
              <h2 className="products__title">Latest Additions</h2>
            </div>
            <div className="grid__container">
              {products.slice(0,4).map((item) => (
              <Product key={item._id} 
              product={item} />
              ))}
            </div>
          </div>    
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: { 
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]'
  
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product }
  }
}

export default ProductDetails