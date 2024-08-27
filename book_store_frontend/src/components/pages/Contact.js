// import React from 'react'

// function Contact() {
//   return (
//     <div>
//       Contact Us
//     </div>
//   )
// }

// export default Contact

import React, { useState } from 'react';

const Contact = () => {
  // Initial products list
  const products = [
    { id: 1, name: 'Product A', price: 50 },
    { id: 2, name: 'Product B', price: 30 },
    { id: 3, name: 'Product C', price: 20 },
  ];

  // State to manage the cart
  const [cart, setCart] = useState([]);

  // Function to handle adding a product to the cart
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Function to calculate the total quantity of products in the cart
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}{' '}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      <h2>Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>

      <h3>Total Quantity: {totalQuantity}</h3>
    </div>
  );
};

export default Contact;
