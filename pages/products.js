import React from 'react';
import { Product, LandingHeroAlt, SearchBar } from '../components';
import { client } from '../lib/client';
import { BsSearch } from 'react-icons/bs';


const Products = ({ products, landingData }) => (
  <div> 
    <LandingHeroAlt landingHero={landingData.length && landingData[0]}/>
    <div className='main__container'>
      <div className='products__container'>     
        <div className="products__wrap" id="products">
          <div className="title__wrap">
            <h2 className="products__title">All Products</h2>
            <div className="search__wrap">
              <input className="search__bar" placeholder="Search..."></input>
              <button className="search__icon" type="submit"><BsSearch /></button>
            </div>
          </div>
          <div className="grid__container">
            {products.map((item) => (
            <Product key={item._id} 
            product={item} />
            ))}
          </div>
        </div>    
      </div>
    </div>
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const landingQuery = '*[_type == "landing"]';
  const landingData = await client.fetch(landingQuery);

  return {
    props: { products, landingData }
  }
}

export default Products;