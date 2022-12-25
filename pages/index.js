import React from 'react';

import { client } from '../lib/client';
import { Banner, Product, LandingHero } from '../components';

const Home = ({ products, landingData, bannerData}) => (
  <div>
    
    <LandingHero landingHero={landingData.length && landingData[0]} />
    
    <div className='main__container'>
      <div className='products__container'>     
        <div className="products__wrap" id="products">
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

      <Banner banner={bannerData && bannerData[0]} />

      <div className='products__container'>     
        <div className="products__wrap">
          <div className="title__wrap">
            <h2 className="products__title">popular items</h2>
          </div>
          <div className="grid__container">
            {products.slice(-4).map((item) => (
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

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, landingData, bannerData }
  }
}

export default Home;