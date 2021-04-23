import React from 'react';

export default function Product(props) {
  const { product,onAdd } = props;
  return (
    <div>
     
      <h3>{product.name}</h3>
       
      <div>
        <button
        onClick = {() => onAdd(product)}>+</button>
      </div>
    </div>
  );
}
