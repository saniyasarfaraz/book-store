// src/components/CartIcon.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartIcon = ({ onClick }) => {
  return (
    <div onClick={onClick} style={{ cursor: 'pointer' }}>
      <FontAwesomeIcon icon={faShoppingCart} />
    </div>
  );
};

export default CartIcon;
