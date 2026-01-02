import React from 'react';
import product from '../product';

export default function Image() {
  return (
    <div className="image-wrapper">
      <img src={product.image} alt={product.name} className="product-image" />
    </div>
  );
} 