import React from 'react';
import { Product } from '../components';


const Products = ({products}) => {
  return (
    <div className="products__width__90">
      <div className="products__container">     
        <div className="products__wrap">
          <div className="title__wrap">
            <h2 className="products__title">SOME OTHER STUFF?</h2>
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
  )
}

export default Products