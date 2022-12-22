import React from 'react';

import { client } from '../lib/client';
import { Banner, Products, LandingHero } from '../components';

const Home = ({ products, landingData, bannerData}) => (
  <div>
    <LandingHero landingHero={landingData.length && landingData[0]} />
    <div className='main__container'>
      <Products products={products} />

      <Banner banner={bannerData && bannerData[0]} />

      <Products products={products} />
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