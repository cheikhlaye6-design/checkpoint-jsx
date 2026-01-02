import React from 'react';
import product from '../product';

export default function Price() {
  return <p className="product-price">Prix: <strong>{product.price}</strong></p>;
} 