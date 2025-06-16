import React, { useState, useContext} from 'react';
import { CartContext } from '../contexts/CartContext';

export default function Cart() {
  const { cartItems ,setCartItems, showCart } = useContext(CartContext)

  const handleRemoveFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    )
  }
    const onRemoveFromCart = (productId) => {
        handleRemoveFromCart(productId)
    }

    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <div className="cart" style={{ display: showCart ? 'flex' : 'none' }}>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price.toFixed(2)}
              <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
            </li>
          ))}
          
        </ul>
      )}
      <h3>Total: ${total.toFixed(2)}</h3>
      <button>Finish</button>
    </div>
  );
}