import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard/ProductCard';

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('fakeProduct.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <h2 className='text-2xl font-extrabold text-center text-gray-900'>
        OUR HAIR RESTORTION PRODUCTS
      </h2>
      <div className='grid xl:grid-cols-2 sm:grid-cols-1'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Shop;
