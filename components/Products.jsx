import React from 'react';
import { Product } from '../components';


const Products = ({products}) => {
  return (
    <div className="grid__container">
      {products?.map(
        (product) => <Product key={product._id} product={product} />)}
    </div>
      )
}

export default Products