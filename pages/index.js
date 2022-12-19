import React from 'react';

import { client } from '../lib/client';
import { Banner, Products, Footer, LandingHero, Navbar } from '../components';

const Home = ({ products, landingData, bannerData, footerData, logoData }) => (
  <div>
    <Navbar logo={logoData &&logoData[0]}/>

    <LandingHero landingHero={landingData.length && landingData[0]}/>

    <div className="container" id="products">
      <div className="products__wrap">
        <div className="title__wrap">
          <h2 className="products__title">Latest Additions</h2>
        </div>

        <Products products={products}/>
      </div>
        <Banner banner={bannerData && bannerData[0]} />
    </div>

    <Footer footer={footerData && footerData[0]}/>
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const landingQuery = '*[_type == "landing"]';
  const landingData = await client.fetch(landingQuery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const footerQuery = '*[_type == "footer"]';
  const footerData = await client.fetch(footerQuery);

  const logoQuery = '*[_type == "logo"]';
  const logoData = await client.fetch(logoQuery);

  return {
    props: { products, landingData, bannerData, footerData, logoData }
  }
}

export default Home;