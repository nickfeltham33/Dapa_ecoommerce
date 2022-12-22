import React from 'react';
import { Product } from '../components';


const Products = ({products}) => {
  return (
        <div className="products__container" id="products">
          <div className="products__wrap">
            <div className="title__wrap">
              <h2 className="products__title">Latest Additions</h2>
            </div>
            <div className="grid__container">
              {products?.map(
                (product) => <Product key={product._id} product={product} />)}
            </div>
          </div>
        </div>
      )
}

export default Products